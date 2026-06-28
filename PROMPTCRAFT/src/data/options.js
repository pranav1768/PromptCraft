export const TEMPLATES = [
  {
    id: 'code-review',
    name: 'Code Review',
    description: 'Review code for bugs and best practices',
    emoji: '🔍',
    tag: 'dev',
    task: 'Review my code for bugs, security vulnerabilities, and suggest concrete improvements following best practices',
    options: { tone: 'technical', format: 'bullet', complexity: 'advanced', length: 'detailed', audience: 'developer', includeConstraints: true, includeOutputFormat: true },
  },
  {
    id: 'blog-post',
    name: 'Blog Post Writer',
    description: 'Write engaging, SEO-ready articles',
    emoji: '✍️',
    tag: 'writing',
    task: 'Write an engaging, SEO-optimized blog post that educates and builds trust with readers',
    options: { tone: 'casual', format: 'structured', complexity: 'intermediate', length: 'detailed', audience: 'general', includeExamples: true, includeContext: true },
  },
  {
    id: 'data-analysis',
    name: 'Data Analyst',
    description: 'Extract insights and patterns from data',
    emoji: '📊',
    tag: 'analytics',
    task: 'Analyze this dataset, identify key patterns, anomalies, and provide actionable business recommendations',
    options: { tone: 'professional', format: 'structured', complexity: 'advanced', length: 'detailed', audience: 'business', includeOutputFormat: true, includeConstraints: true },
  },
  {
    id: 'email-draft',
    name: 'Email Drafter',
    description: 'Professional emails for any situation',
    emoji: '📧',
    tag: 'comms',
    task: 'Draft a clear, professional email that communicates my message effectively and drives the desired response',
    options: { tone: 'professional', format: 'paragraph', complexity: 'basic', length: 'concise', audience: 'business', includeContext: true },
  },
  {
    id: 'learning-plan',
    name: 'Learning Roadmap',
    description: 'Structured plans for mastering new skills',
    emoji: '🎓',
    tag: 'education',
    task: 'Create a comprehensive, week-by-week learning plan for mastering a new skill or technology from beginner to proficient',
    options: { tone: 'friendly', format: 'step-by-step', complexity: 'intermediate', length: 'comprehensive', audience: 'student', includeExamples: true, includeContext: true },
  },
  {
    id: 'marketing-copy',
    name: 'Marketing Copy',
    description: 'Persuasive copy that converts',
    emoji: '📢',
    tag: 'marketing',
    task: 'Write compelling marketing copy that highlights key benefits, addresses pain points, and compels the reader to take action',
    options: { tone: 'persuasive', format: 'structured', complexity: 'intermediate', length: 'standard', audience: 'business', includeExamples: true },
  },
  {
    id: 'api-docs',
    name: 'API Documentation',
    description: 'Clear docs that developers actually read',
    emoji: '📝',
    tag: 'dev',
    task: 'Write clear, comprehensive API documentation with examples that help developers integrate quickly and avoid common mistakes',
    options: { tone: 'technical', format: 'structured', complexity: 'advanced', length: 'comprehensive', audience: 'developer', includeExamples: true, includeOutputFormat: true },
  },
  {
    id: 'brainstorm',
    name: 'Brainstorm Session',
    description: 'Generate creative, divergent ideas',
    emoji: '💡',
    tag: 'creative',
    task: 'Brainstorm diverse, creative, and unconventional ideas, pushing beyond obvious solutions and exploring multiple angles',
    options: { tone: 'creative', format: 'bullet', complexity: 'intermediate', length: 'standard', audience: 'general', includeContext: true },
  },
]

export const TONES = [
  { value: 'professional', label: 'Professional' },
  { value: 'casual', label: 'Casual' },
  { value: 'technical', label: 'Technical' },
  { value: 'creative', label: 'Creative' },
  { value: 'academic', label: 'Academic' },
  { value: 'persuasive', label: 'Persuasive' },
  { value: 'friendly', label: 'Friendly' },
]

export const FORMATS = [
  { value: 'paragraph', label: 'Paragraph' },
  { value: 'bullet', label: 'Bullet Points' },
  { value: 'step-by-step', label: 'Step-by-Step' },
  { value: 'chain-of-thought', label: 'Chain of Thought' },
  { value: 'few-shot', label: 'Few-Shot' },
  { value: 'structured', label: 'Structured Sections' },
]

export const COMPLEXITIES = [
  { value: 'basic', label: 'Basic' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
  { value: 'expert', label: 'Expert' },
]

export const LENGTHS = [
  { value: 'concise', label: 'Concise' },
  { value: 'standard', label: 'Standard' },
  { value: 'detailed', label: 'Detailed' },
  { value: 'comprehensive', label: 'Comprehensive' },
]

export const AUDIENCES = [
  { value: 'general', label: 'General' },
  { value: 'developer', label: 'Developer' },
  { value: 'designer', label: 'Designer' },
  { value: 'business', label: 'Business' },
  { value: 'researcher', label: 'Researcher' },
  { value: 'student', label: 'Student' },
]

export const DOMAINS = [
  { value: 'general', label: 'General' },
  { value: 'technology', label: 'Technology' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'education', label: 'Education' },
  { value: 'creative', label: 'Creative Arts' },
  { value: 'science', label: 'Science' },
  { value: 'business', label: 'Business' },
  { value: 'legal', label: 'Legal' },
]
