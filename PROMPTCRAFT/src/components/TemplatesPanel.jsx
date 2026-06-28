import { TEMPLATES } from '../data/options.js'

const TAG_COLORS = {
  dev: '#6366f1',
  writing: '#10b981',
  analytics: '#f59e0b',
  comms: '#3b82f6',
  education: '#8b5cf6',
  marketing: '#f97316',
  creative: '#ec4899',
}

export default function TemplatesPanel({ onSelect }) {
  return (
    <div className="panel-content">
      <p className="panel-hint">Click a template to pre-fill the form</p>
      {TEMPLATES.map(t => (
        <button key={t.id} className="template-card" onClick={() => onSelect(t)}>
          <div className="template-top">
            <span className="template-emoji">{t.emoji}</span>
            <span
              className="template-tag"
              style={{ color: TAG_COLORS[t.tag] || '#6366f1', background: `${TAG_COLORS[t.tag] || '#6366f1'}18` }}
            >
              {t.tag}
            </span>
          </div>
          <div className="template-name">{t.name}</div>
          <div className="template-desc">{t.description}</div>
        </button>
      ))}
    </div>
  )
}
