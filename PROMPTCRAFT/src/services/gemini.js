const GEMINI_BASE = 'https://generativelanguage.googleapis.com/v1beta/models'

const FORMAT_LABELS = {
  paragraph: 'clear, flowing paragraphs without lists',
  bullet: 'organized bullet points and lists for clarity',
  'step-by-step': 'numbered sequential steps that build on each other',
  'chain-of-thought': 'chain-of-thought reasoning — instruct the AI to think step by step before answering',
  'few-shot': 'a few-shot structure with 2-3 examples followed by the actual task',
  structured: 'structured sections with bold headers dividing the response',
}

const LENGTH_LABELS = {
  concise: 'concise and direct, approximately 100 words',
  standard: 'well-developed, approximately 200–300 words',
  detailed: 'thorough, approximately 400–600 words',
  comprehensive: 'exhaustive and complete, 800+ words covering all angles',
}

function buildSystemPrompt() {
  return `You are PromptCraft, an expert prompt engineer who creates high-quality, production-ready prompts for AI language models.

Your expertise includes:
- Role-based prompting and persona assignment
- Clear task decomposition and instruction layering
- Constraint specification and output formatting
- Context calibration for different audiences and complexity levels
- Few-shot, chain-of-thought, and structured prompting techniques

When given a task and requirements, you produce a single, complete, optimized prompt — ready to paste into any AI tool.

CRITICAL RULE: Return ONLY the raw prompt text. No preamble, no "Here's your prompt:", no quotation marks, no meta-commentary. Just the prompt itself.`
}

function buildUserMessage({ taskInput, options }) {
  const extras = []
  if (options.includeContext) extras.push('Assign the AI a relevant expert role or persona at the start')
  if (options.includeExamples) extras.push('Include 2–3 concrete examples to illustrate what good output looks like')
  if (options.includeConstraints) extras.push('Add explicit constraints specifying what to avoid or NOT do')
  if (options.includeOutputFormat) extras.push('End with a clear "Output Format:" section specifying the exact structure expected')

  return `Create an optimized AI prompt for this task:

TASK:
${taskInput}

PROMPT SPECIFICATIONS:
• Tone: ${options.tone}
• Output format: ${FORMAT_LABELS[options.format] || options.format}
• Complexity: ${options.complexity} — calibrate vocabulary, depth, and assumed knowledge accordingly
• Output length: ${LENGTH_LABELS[options.length] || options.length}
• Target audience for the AI's final output: ${options.audience}${options.domain !== 'general' ? `\n• Domain context: ${options.domain}` : ''}
${extras.length > 0 ? `\nADDITIONAL REQUIREMENTS:\n${extras.map(e => `• ${e}`).join('\n')}` : ''}

Now write the complete, optimized prompt. Remember: output ONLY the prompt text itself.`
}

export async function generatePrompt({ taskInput, options, apiKey, model }) {
  const url = `${GEMINI_BASE}/${model}:generateContent?key=${apiKey}`

  const body = {
    system_instruction: {
      parts: [{ text: buildSystemPrompt() }],
    },
    contents: [
      {
        role: 'user',
        parts: [{ text: buildUserMessage({ taskInput, options }) }],
      },
    ],
    generationConfig: {
      temperature: 0.75,
      maxOutputTokens: 2048,
      topP: 0.9,
    },
  }

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    const msg = err?.error?.message || `API error ${res.status}`
    if (res.status === 400) throw new Error('Invalid API key — check Settings')
    if (res.status === 429) throw new Error('Rate limit hit — try again in a moment')
    throw new Error(msg)
  }

  const data = await res.json()
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text

  if (!text) throw new Error('Empty response from Gemini — try a different model')
  return text.trim()
}
