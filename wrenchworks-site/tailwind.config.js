module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#1C1C1E',
        stone: '#2C2A28',
        sand: '#F5F0EB',
        cream: '#FEFCF9',
        accent: '#E85D2A',
        gold: '#D4A853',
        'warm-blue': '#3B82C4',
        'text-warm': '#6B6560',
        'text-on-dark': '#E8E2DC',
        'border-warm': '#D6CFC7',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}
