import TemplatesPanel from './TemplatesPanel.jsx'
import HistoryPanel from './HistoryPanel.jsx'
import FavoritesPanel from './FavoritesPanel.jsx'

const TABS = [
  { id: 'templates', label: 'Templates' },
  { id: 'history', label: 'History' },
  { id: 'favorites', label: 'Favorites' },
]

export default function Sidebar({ tab, onTabChange, history, favorites, onHistorySelect, onClearHistory, onTemplateSelect, onFavoriteSelect, onClearFavorites }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-tabs">
        {TABS.map(t => (
          <button
            key={t.id}
            className={`sidebar-tab ${tab === t.id ? 'active' : ''}`}
            onClick={() => onTabChange(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="sidebar-body">
        {tab === 'templates' && <TemplatesPanel onSelect={onTemplateSelect} />}
        {tab === 'history' && (
          <HistoryPanel
            history={history}
            onSelect={onHistorySelect}
            onClear={onClearHistory}
          />
        )}
        {tab === 'favorites' && (
          <FavoritesPanel
            favorites={favorites}
            onSelect={onFavoriteSelect}
            onClear={onClearFavorites}
          />
        )}
      </div>
    </aside>
  )
}
