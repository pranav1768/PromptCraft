import { useMemo } from 'react'

function scoreInput(text) {
  if (!text.trim()) return { score: 0, label: 'empty', color: '#334155' }

  const words = text.trim().split(/\s+/).length
  const hasVerb = /\b(write|create|analyze|review|build|explain|generate|summarize|design|draft|help|make|improve|fix|translate|compare)\b/i.test(text)
  const hasContext = words > 10
  const hasSpecifics = /\b(for|about|using|with|based on|that|which|when|who|where)\b/i.test(text)
  const isLong = words > 20

  let score = 0
  if (words > 3) score += 20
  if (hasVerb) score += 25
  if (hasContext) score += 20
  if (hasSpecifics) score += 20
  if (isLong) score += 15

  if (score < 30) return { score, label: 'vague', color: '#ef4444' }
  if (score < 55) return { score, label: 'fair', color: '#f59e0b' }
  if (score < 80) return { score, label: 'good', color: '#22c55e' }
  return { score, label: 'excellent', color: '#6366f1' }
}

export default function QualityMeter({ text }) {
  const { score, label, color } = useMemo(() => scoreInput(text), [text])

  return (
    <div className="quality-meter">
      <span className="quality-label">Quality</span>
      <div className="quality-bar">
        <div
          className="quality-fill"
          style={{ width: `${score}%`, background: color }}
        />
      </div>
      <span className="quality-badge" style={{ color }}>{label}</span>
    </div>
  )
}
