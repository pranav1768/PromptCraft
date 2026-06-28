export default function HistoryPanel({ history, onSelect, onClear }) {
  if (!history.length) {
    return (
      <div className="empty-state">
        <div className="empty-icon">⏱</div>
        <p>No history yet</p>
        <p className="empty-sub">Generated prompts will appear here</p>
      </div>
    )
  }

  const fmt = (iso) => {
    const d = new Date(iso)
    const now = new Date()
    const diff = now - d
    if (diff < 60000) return 'just now'
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`
    return d.toLocaleDateString()
  }

  return (
    <div className="panel-content">
      <div className="panel-header-row">
        <span className="panel-count">{history.length} entries</span>
        <button className="btn-text-danger" onClick={onClear}>Clear all</button>
      </div>
      {history.map(entry => (
        <button key={entry.id} className="history-card" onClick={() => onSelect(entry)}>
          <div className="history-task">{entry.task}</div>
          <div className="history-meta">
            <span className="mono">{entry.model?.replace('gemini-', 'g') || 'gemini'}</span>
            <span>·</span>
            <span>{fmt(entry.timestamp)}</span>
          </div>
        </button>
      ))}
    </div>
  )
}
