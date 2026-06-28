export default function Header({ model, onModelChange, onSettingsOpen, apiKey }) {
  const models = [
    { value: 'gemini-2.0-flash', label: 'Gemini 2.0 Flash' },
    { value: 'gemini-1.5-flash', label: 'Gemini 1.5 Flash' },
    { value: 'gemini-1.5-pro', label: 'Gemini 1.5 Pro' },
    { value: 'gemini-1.0-pro', label: 'Gemini 1.0 Pro' },
  ]

  return (
    <header className="header">
      <div className="logo">
        <div className="logo-mark">✦</div>
        <span>PromptCraft</span>
        <span className="logo-version">v2</span>
      </div>

      <div className="header-actions">
        <div className={`api-status ${apiKey ? 'connected' : 'disconnected'}`}>
          <span className="status-dot" />
          <span>{apiKey ? 'API connected' : 'No API key'}</span>
        </div>

        <select
          className="model-select"
          value={model}
          onChange={e => onModelChange(e.target.value)}
        >
          {models.map(m => (
            <option key={m.value} value={m.value}>{m.label}</option>
          ))}
        </select>

        <button className="btn-icon" onClick={onSettingsOpen} title="Settings">
          ⚙
        </button>
      </div>
    </header>
  )
}
