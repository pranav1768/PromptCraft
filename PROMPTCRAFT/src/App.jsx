import { useState } from 'react'
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import PromptForm from './components/PromptForm.jsx'
import PromptOutput from './components/PromptOutput.jsx'
import SettingsModal from './components/SettingsModal.jsx'
import Toast from './components/Toast.jsx'
import { useHistory } from './hooks/useHistory.js'
import { useFavorites } from './hooks/useFavorites.js'
import { useToast } from './hooks/useToast.js'
import { generatePrompt } from './services/gemini.js'

const DEFAULT_OPTIONS = {
  tone: 'professional',
  format: 'paragraph',
  complexity: 'intermediate',
  length: 'standard',
  audience: 'general',
  domain: 'general',
  includeContext: true,
  includeExamples: false,
  includeConstraints: false,
  includeOutputFormat: false,
}

export default function App() {
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('pc_apikey') || '')
  const [model, setModel] = useState('gemini-2.0-flash')
  const [taskInput, setTaskInput] = useState('')
  const [options, setOptions] = useState(DEFAULT_OPTIONS)
  const [generatedPrompt, setGeneratedPrompt] = useState('')
  const [promptMeta, setPromptMeta] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [sidebarTab, setSidebarTab] = useState('templates')
  const [showSettings, setShowSettings] = useState(false)

  const { history, addToHistory, clearHistory } = useHistory()
  const { favorites, toggleFavorite, isFavorite, clearFavorites } = useFavorites()
  const { toasts, addToast, removeToast } = useToast()

  const handleApiKeyChange = (key) => {
    setApiKey(key)
    localStorage.setItem('pc_apikey', key)
  }

  const handleGenerate = async () => {
    if (!taskInput.trim()) {
      addToast('Describe your task first', 'error')
      return
    }
    if (!apiKey) {
      setShowSettings(true)
      addToast('Add your Gemini API key in Settings', 'warning')
      return
    }

    setIsLoading(true)
    setError('')
    setGeneratedPrompt('')

    try {
      const result = await generatePrompt({ taskInput, options, apiKey, model })
      setGeneratedPrompt(result)

      const entry = {
        id: Date.now(),
        task: taskInput,
        prompt: result,
        options: { ...options },
        model,
        timestamp: new Date().toISOString(),
      }
      addToHistory(entry)
      setPromptMeta(entry)
      setSidebarTab('history')
      addToast('Prompt generated!', 'success')
    } catch (err) {
      setError(err.message)
      addToast(err.message, 'error')
    } finally {
      setIsLoading(false)
    }
  }

  const handleTemplateSelect = (template) => {
    setTaskInput(template.task)
    setOptions({ ...DEFAULT_OPTIONS, ...template.options })
    addToast(`Template: ${template.name}`, 'info')
  }

  const handleHistorySelect = (entry) => {
    setTaskInput(entry.task)
    setOptions({ ...DEFAULT_OPTIONS, ...entry.options })
    setGeneratedPrompt(entry.prompt)
    setPromptMeta(entry)
  }

  const handleFavoriteSelect = (entry) => {
    setTaskInput(entry.task)
    setOptions({ ...DEFAULT_OPTIONS, ...entry.options })
    setGeneratedPrompt(entry.prompt)
    setPromptMeta(entry)
    setSidebarTab('favorites')
  }

  const handleToggleFavorite = () => {
    if (!promptMeta) return
    toggleFavorite(promptMeta)
    addToast(
      isFavorite(promptMeta.id) ? 'Removed from favorites' : 'Saved to favorites',
      'success'
    )
  }

  return (
    <div className="app">
      <Header
        model={model}
        onModelChange={setModel}
        onSettingsOpen={() => setShowSettings(true)}
        apiKey={apiKey}
      />

      <div className="app-body">
        <Sidebar
          tab={sidebarTab}
          onTabChange={setSidebarTab}
          history={history}
          favorites={favorites}
          onHistorySelect={handleHistorySelect}
          onClearHistory={clearHistory}
          onTemplateSelect={handleTemplateSelect}
          onFavoriteSelect={handleFavoriteSelect}
          onClearFavorites={clearFavorites}
        />

        <main className="main">
          <PromptForm
            taskInput={taskInput}
            onTaskChange={setTaskInput}
            options={options}
            onOptionsChange={(key, val) => setOptions(prev => ({ ...prev, [key]: val }))}
            onGenerate={handleGenerate}
            isLoading={isLoading}
          />

          {(generatedPrompt || isLoading) && (
            <PromptOutput
              prompt={generatedPrompt}
              meta={promptMeta}
              isLoading={isLoading}
              isFavorite={promptMeta ? isFavorite(promptMeta.id) : false}
              onToggleFavorite={handleToggleFavorite}
              onToast={addToast}
            />
          )}

          {error && !isLoading && (
            <div className="error-banner">
              <span>⚠</span>
              <p>{error}</p>
            </div>
          )}
        </main>
      </div>

      {showSettings && (
        <SettingsModal
          apiKey={apiKey}
          onApiKeyChange={handleApiKeyChange}
          onClose={() => setShowSettings(false)}
        />
      )}

      <Toast toasts={toasts} onRemove={removeToast} />
    </div>
  )
}
