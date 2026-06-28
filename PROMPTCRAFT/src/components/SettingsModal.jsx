export default function SettingsModal({ apiKey, onApiKeyChange, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">
            <span className="modal-icon">⚙</span>
            Settings
          </div>
          <button className="btn-icon" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">
          <label className="field-label">Gemini API Key</label>
          <input
            type="password"
            className="field-input"
            placeholder="AIzaSy..."
            value={apiKey}
            onChange={e => onApiKeyChange(e.target.value)}
            autoFocus
          />
          <p className="field-hint">
            Get a free key at{' '}
            <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer">
              aistudio.google.com
            </a>
            . Stored locally in your browser only.
          </p>

          <div className="settings-info">
            <div className="info-row">
              <span>Storage</span>
              <span className="mono success-text">localStorage only</span>
            </div>
            <div className="info-row">
              <span>Requests sent to</span>
              <span className="mono">Google Gemini API</span>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-generate" onClick={onClose}>
            Save & Close
          </button>
        </div>
      </div>
    </div>
  )
}
