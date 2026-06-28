import { useState, useEffect } from 'react'

const KEY = 'pc_favorites'

export function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(favorites))
  }, [favorites])

  const isFavorite = (id) => favorites.some(f => f.id === id)

  const toggleFavorite = (entry) => {
    setFavorites(prev =>
      isFavorite(entry.id)
        ? prev.filter(f => f.id !== entry.id)
        : [entry, ...prev]
    )
  }

  const clearFavorites = () => setFavorites([])

  return { favorites, toggleFavorite, isFavorite, clearFavorites }
}
