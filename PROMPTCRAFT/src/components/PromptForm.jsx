import QualityMeter from './QualityMeter.jsx'
import { TONES, FORMATS, COMPLEXITIES, LENGTHS, AUDIENCES, DOMAINS } from '../data/options.js'

const TOGGLES = [
  { key: 'includeContext', label: 'Role / Context' },
  { key: 'includeExamples', label: 'Examples' },
  { key: 'includeConstraints', label: 'Constraints' },
  { key: 'includeOutputFormat', label: 'Output Format' },
]

function Select({ label, value, onChange, options }) {
  return (
    <div className="opt-group">
      <div className="opt-label">{label}</div>
      <select className="opt-select" value={value} onChange={e => onChange(e.target.value)}>
        {options.map(o => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  )
}

export default function PromptForm({ taskInput, onTaskChange, options, onOptionsChange, onGenerate, isLoading }) {
  const charCount = taskInput.length

  return (
    <div className="form-stack">
      {/* Task input */}
      <div className="card">
        <div className="card-header">
          <span className="card-title">Describe your task</span>
          <QualityMeter text={taskInput} />
        </div>
        <div className="card-body p0">
          <textarea
            className="task-textarea"
            placeholder="e.g. Write a technical blog post explaining how React Server Components work, aimed at experienced frontend developers who are new to the concept..."
            value={taskInput}
            onChange={e => onTaskChange(e.target.value)}
            rows={5}
            maxLength={2000}
          />
          <div className="textarea-footer">
            <span className="char-count mono">{charCount} / 2000</span>
          </div>
        </div>
      </div>

      {/* Options */}
      <div className="card">
        <div className="card-header">
          <span className="card-title">Customize</span>
        </div>
        <div className="card-body">
          <div className="opts-grid">
            <Select label="Tone" value={options.tone} onChange={v => onOptionsChange('tone', v)} options={TONES} />
            <Select label="Format" value={options.format} onChange={v => onOptionsChange('format', v)} options={FORMATS} />
            <Select label="Complexity" value={options.complexity} onChange={v => onOptionsChange('complexity', v)} options={COMPLEXITIES} />
            <Select label="Length" value={options.length} onChange={v => onOptionsChange('length', v)} options={LENGTHS} />
            <Select label="Audience" value={options.audience} onChange={v => onOptionsChange('audience', v)} options={AUDIENCES} />
            <Select label="Domain" value={options.domain} onChange={v => onOptionsChange('domain', v)} options={DOMAINS} />
          </div>

          <div className="toggles-section">
            <div className="opt-label" style={{ marginBottom: 8 }}>Include in prompt</div>
            <div className="toggles-row">
              {TOGGLES.map(({ key, label }) => (
                <button
                  key={key}
                  className={`toggle-chip ${options[key] ? 'active' : ''}`}
                  onClick={() => onOptionsChange(key, !options[key])}
                >
                  <span className="toggle-dot" />
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="generate-row">
            <button
              className="btn-generate"
              onClick={onGenerate}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="spin-ring" />
                  Generating...
                </>
              ) : (
                <>✦ Generate Prompt</>
              )}
            </button>

            {taskInput && (
              <button
                className="btn-ghost"
                onClick={() => onTaskChange('')}
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
