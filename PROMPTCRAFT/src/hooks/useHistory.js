import { useState, useEffect } from 'react'

const KEY = 'pc_history'
const MAX = 30

export function useHistory() {
  const [history, setHistory] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(history))
  }, [history])

  const addToHistory = (entry) => {
    setHistory(prev => [entry, ...prev].slice(0, MAX))
  }

  const removeFromHistory = (id) => {
    setHistory(prev => prev.filter(e => e.id !== id))
  }

  const clearHistory = () => setHistory([])

  return { history, addToHistory, removeFromHistory, clearHistory }
}
