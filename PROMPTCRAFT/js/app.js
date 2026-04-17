// PromptCraft Main Application

const { useState } = React;
const e = React.createElement;

function App() {
    const [taskDescription, setTaskDescription] = useState('');
    const [outputFormat, setOutputFormat] = useState('paragraph');
    const [tone, setTone] = useState('professional');
    const [complexity, setComplexity] = useState('moderate');
    const [includeExamples, setIncludeExamples] = useState(false);
    const [constraints, setConstraints] = useState('');
    const [generatedPrompt, setGeneratedPrompt] = useState('');
    const [showAnalysis, setShowAnalysis] = useState(false);
    const [copied, setCopied] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const [aiAnalysis, setAiAnalysis] = useState(null);

    const generatePrompt = async () => {
        if (!taskDescription.trim()) {
            alert('Please describe your task');
            return;
        }

        setIsGenerating(true);
        setGeneratedPrompt('');
        setAiAnalysis(null);
        setShowAnalysis(false);

        await new Promise(resolve => setTimeout(resolve, 1000));

        try {
            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/${CONFIG.GEMINI_MODEL}:generateContent?key=${CONFIG.GEMINI_API_KEY}`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        contents: [{
                            parts: [{
                                text: `You are an expert AI prompt engineer. Analyze this task and create an optimized prompt.

TASK: ${taskDescription}

PREFERENCES:
- Tone: ${tone}
- Format: ${outputFormat}
- Complexity: ${complexity}
- Include Examples: ${includeExamples ? 'Yes' : 'No'}
${constraints ? `- Constraints: ${constraints}` : ''}

Respond with a JSON object:
{
  "analysis": {
    "coreObjective": "main goal",
    "targetAudience": "who this is for",
    "keyRequirements": ["req1", "req2", "req3"],
    "suggestedApproach": "best approach"
  },
  "optimizedPrompt": "The complete, ready-to-use prompt with clear role definition, structured sections, specific ${outputFormat} format instructions, ${tone} tone, and ${complexity} complexity level",
  "keyFeatures": ["feature1", "feature2", "feature3"],
  "customizationTips": ["tip1", "tip2", "tip3"]
}

Make the prompt professional, clear, and perfectly optimized. Respond ONLY with JSON, no markdown.`
                            }]
                        }]
                    })
                }
            );

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error?.message || `HTTP ${response.status}`);
            }

            const data = await response.json();
            const textContent = data.candidates[0].content.parts[0].text;
            const cleanJson = textContent.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
            const result = JSON.parse(cleanJson);

            setGeneratedPrompt(result.optimizedPrompt);
            setAiAnalysis(result);

        } catch (error) {
            console.error('Error:', error);
            alert('Failed to generate prompt: ' + error.message);
        } finally {
            setIsGenerating(false);
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedPrompt);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return e('div', null,
        e('header', { className: 'header' },
            e('div', { className: 'container' },
                e('div', { className: 'header-content' },
                    e('div', { className: 'logo' },
                        e('div', { className: 'logo-icon' }, 'PC'),
                        e('div', { className: 'logo-text' }, 'PromptCraft')
                    ),
                    e('div', { className: 'status-badge' },
                        e('div', { className: 'status-dot' }),
                        'Gemini Active'
                    )
                )
            )
        ),

        e('main', { className: 'main' },
            e('div', { className: 'container' },
                e('div', { className: 'card' },
                    e('h2', { className: 'section-title' }, 'Configuration'),
                    
                    e('div', { className: 'form-group' },
                        e('label', { className: 'label' },
                            'Task Description ',
                            e('span', { className: 'required' }, '*')
                        ),
                        e('textarea', {
                            placeholder: 'Describe what you need the AI to do...',
                            value: taskDescription,
                            onChange: (ev) => setTaskDescription(ev.target.value)
                        })
                    ),

                    e('div', { className: 'grid-2' },
                        e('div', { className: 'form-group' },
                            e('label', { className: 'label' }, 'Tone'),
                            e('select', {
                                value: tone,
                                onChange: (ev) => setTone(ev.target.value)
                            },
                                e('option', { value: 'professional' }, 'Professional'),
                                e('option', { value: 'creative' }, 'Creative'),
                                e('option', { value: 'technical' }, 'Technical'),
                                e('option', { value: 'casual' }, 'Casual'),
                                e('option', { value: 'analytical' }, 'Analytical')
                            )
                        ),
                        e('div', { className: 'form-group' },
                            e('label', { className: 'label' }, 'Output Format'),
                            e('select', {
                                value: outputFormat,
                                onChange: (ev) => setOutputFormat(ev.target.value)
                            },
                                e('option', { value: 'paragraph' }, 'Paragraph'),
                                e('option', { value: 'bullets' }, 'Bullet Points'),
                                e('option', { value: 'numbered' }, 'Numbered List'),
                                e('option', { value: 'code' }, 'Code'),
                                e('option', { value: 'table' }, 'Table'),
                                e('option', { value: 'json' }, 'JSON'),
                                e('option', { value: 'markdown' }, 'Markdown')
                            )
                        )
                    ),

                    e('div', { className: 'form-group' },
                        e('label', { className: 'label' }, 'Complexity'),
                        e('div', { className: 'grid-3' },
                            ['simple', 'moderate', 'detailed'].map(level => {
                                const icons = { simple: '○', moderate: '◐', detailed: '●' };
                                const labels = { simple: 'Simple', moderate: 'Moderate', detailed: 'Detailed' };
                                return e('div', {
                                    key: level,
                                    className: `complexity-option ${complexity === level ? 'active' : ''}`,
                                    onClick: () => setComplexity(level)
                                },
                                    e('div', { className: 'complexity-icon' }, icons[level]),
                                    e('div', { className: 'complexity-label' }, labels[level])
                                );
                            })
                        )
                    ),

                    e('div', { className: 'form-group' },
                        e('label', { className: 'checkbox-wrapper' },
                            e('input', {
                                type: 'checkbox',
                                className: 'checkbox',
                                checked: includeExamples,
                                onChange: (ev) => setIncludeExamples(ev.target.checked)
                            }),
                            e('div', { className: 'checkbox-content' },
                                e('div', { className: 'checkbox-title' }, 'Include Examples'),
                                e('div', { className: 'checkbox-desc' }, 'Add practical examples to guide the AI')
                            )
                        )
                    ),

                    e('div', { className: 'form-group' },
                        e('label', { className: 'label' }, 'Additional Constraints'),
                        e('textarea', {
                            placeholder: 'Optional: Add specific requirements, word count limits, style guidelines...',
                            value: constraints,
                            onChange: (ev) => setConstraints(ev.target.value),
                            rows: 3
                        })
                    ),

                    e('button', {
                        className: 'btn',
                        onClick: generatePrompt,
                        disabled: !taskDescription.trim() || isGenerating
                    },
                        e('span', { className: `btn-icon ${isGenerating ? 'spinning' : ''}` }, 
                            isGenerating ? '◌' : '✦'
                        ),
                        isGenerating ? 'Cooking...' : 'Generate Prompt'
                    )
                ),

                isGenerating && e('div', { className: 'loading' },
                    e('div', { className: 'spinner' }),
                    e('div', { className: 'loading-text' },
                        e('div', { className: 'loading-title' }, 'Cooking your prompt'),
                        e('div', { className: 'loading-desc' }, 'Analyzing your request and crafting the perfect prompt...')
                    )
                ),

                generatedPrompt && e('div', { className: 'result' },
                    e('div', { className: 'result-header' },
                        e('h3', { className: 'result-title' },
                            e('span', { className: 'result-icon' }, '✓'),
                            'Generated Prompt'
                        ),
                        e('button', {
                            className: `btn-copy ${copied ? 'copied' : ''}`,
                            onClick: copyToClipboard
                        },
                            e('span', null, copied ? '✓' : '□'),
                            copied ? 'Copied' : 'Copy'
                        )
                    ),
                    e('div', { className: 'result-content' },
                        e('div', { className: 'output' }, generatedPrompt)
                    ),
                    aiAnalysis && e('div', null,
                        e('div', {
                            className: 'analysis-toggle',
                            onClick: () => setShowAnalysis(!showAnalysis)
                        },
                            e('span', null, 'View Analysis'),
                            e('span', null, showAnalysis ? '−' : '+')
                        ),
                        showAnalysis && e('div', { className: 'analysis-content' },
                            e('div', { className: 'analysis-grid' },
                                e('div', { className: 'analysis-section' },
                                    e('div', { className: 'analysis-section-title' }, 'Overview'),
                                    e('div', { className: 'analysis-item' },
                                        e('div', { className: 'analysis-label' }, 'Objective'),
                                        e('div', { className: 'analysis-value' }, aiAnalysis.analysis.coreObjective)
                                    ),
                                    e('div', { className: 'analysis-item' },
                                        e('div', { className: 'analysis-label' }, 'Audience'),
                                        e('div', { className: 'analysis-value' }, aiAnalysis.analysis.targetAudience)
                                    ),
                                    e('div', { className: 'analysis-item' },
                                        e('div', { className: 'analysis-label' }, 'Approach'),
                                        e('div', { className: 'analysis-value' }, aiAnalysis.analysis.suggestedApproach)
                                    )
                                ),
                                e('div', { className: 'analysis-section' },
                                    e('div', { className: 'analysis-section-title' }, 'Requirements'),
                                    e('ul', { className: 'analysis-list' },
                                        aiAnalysis.analysis.keyRequirements.map((req, idx) =>
                                            e('li', { key: idx }, req)
                                        )
                                    )
                                ),
                                aiAnalysis.keyFeatures && e('div', { className: 'analysis-section' },
                                    e('div', { className: 'analysis-section-title' }, 'Features'),
                                    e('ul', { className: 'analysis-list' },
                                        aiAnalysis.keyFeatures.map((feature, idx) =>
                                            e('li', { key: idx }, feature)
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            )
        ),

        e('footer', { className: 'footer' },
            e('div', { className: 'container' },
                'Powered by ',
                e('a', { href: 'https://gemini.google.com', target: '_blank', className: 'footer-link' }, 'Google Gemini'),
                ' • Build Your Prompt'
            )
        )
    );
}

// Render App
if (typeof React === 'undefined' || typeof ReactDOM === 'undefined') {
    document.getElementById('root').innerHTML = '<div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; text-align: center;"><div><div style="font-size: 32px; margin-bottom: 16px; color: #404040;">✕</div><div style="font-size: 14px; color: #737373;">Failed to load</div></div></div>';
} else {
    ReactDOM.render(e(App), document.getElementById('root'));
}
