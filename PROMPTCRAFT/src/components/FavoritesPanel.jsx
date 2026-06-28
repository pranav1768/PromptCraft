export default function FavoritesPanel({ favorites, onSelect, onClear }) {
  if (!favorites.length) {
    return (
      <div className="empty-state">
        <div className="empty-icon">★</div>
        <p>No favorites yet</p>
        <p className="empty-sub">Star generated prompts to save them here</p>
      </div>
    )
  }

  return (
    <div className="panel-content">
      <div className="panel-header-row">
        <span className="panel-count">{favorites.length} saved</span>
        <button className="btn-text-danger" onClick={onClear}>Clear all</button>
      </div>
      {favorites.map(entry => (
        <button key={entry.id} className="history-card fav-card" onClick={() => onSelect(entry)}>
          <div className="fav-star">★</div>
          <div className="history-task">{entry.task}</div>
          <div className="history-meta">
            <span>{new Date(entry.timestamp).toLocaleDateString()}</span>
          </div>
        </button>
      ))}
    </div>
  )
}
