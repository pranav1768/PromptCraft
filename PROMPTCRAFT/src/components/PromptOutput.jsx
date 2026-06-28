function countWords(text) {
  return text.trim().split(/\s+/).filter(Boolean).length
}

function estimateTokens(text) {
  return Math.round(text.length / 4)
}

export default function PromptOutput({ prompt, meta, isLoading, isFavorite, onToggleFavorite, onToast }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(prompt).then(() => {
      onToast('Copied to clipboard', 'success')
    }).catch(() => onToast('Copy failed', 'error'))
  }

  const handleDownload = (ext) => {
    const blob = new Blob([prompt], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `prompt-${Date.now()}.${ext}`
    a.click()
    URL.revokeObjectURL(url)
    onToast(`Downloaded as .${ext}`, 'success')
  }

  const words = prompt ? countWords(prompt) : 0
  const tokens = prompt ? estimateTokens(prompt) : 0

  return (
    <div className="card output-card">
      <div className="card-header">
        <span className="card-title">Generated prompt</span>
        <div className="output-stats">
          <span className="mono">{words}w</span>
          <span className="stat-sep">·</span>
          <span className="mono">~{tokens} tokens</span>
        </div>
      </div>

      <div className="card-body">
        {isLoading ? (
          <div className="loading-area">
            <div className="loading-dots">
              <div className="dot" />
              <div className="dot" />
              <div className="dot" />
            </div>
            <p className="loading-text">Crafting your prompt...</p>
          </div>
        ) : (
          <pre className="output-text">{prompt}</pre>
        )}
      </div>

      {!isLoading && prompt && (
        <div className="output-footer">
          <div className="output-actions">
            <button className="btn-action" onClick={handleCopy}>
              ⎘ Copy
            </button>
            <button className="btn-action" onClick={() => handleDownload('txt')}>
              ↓ .txt
            </button>
            <button className="btn-action" onClick={() => handleDownload('md')}>
              ↓ .md
            </button>
          </div>

          <button
            className={`btn-favorite ${isFavorite ? 'active' : ''}`}
            onClick={onToggleFavorite}
            title={isFavorite ? 'Remove from favorites' : 'Save to favorites'}
          >
            {isFavorite ? '★ Saved' : '☆ Save'}
          </button>
        </div>
      )}
    </div>
  )
}
