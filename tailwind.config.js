/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'alpha-on-surface': 'var(--alpha-on-surface)',
        'alpha-on-surface-hover': 'var(--alpha-on-surface-hover)',
        'alpha-on-low': 'var(--alpha-on-low)',
        'bg-solid-brand': 'var(--bg-solid-brand)',
        'bg-solid-brand-subtle': 'var(--bg-solid-brand-subtle)',
        'bg-solid-brand-darker': 'var(--bg-solid-brand-darker)',
        'bg-solid-black': 'var(--bg-solid-black)',
        'bg-solid-magenta': 'var(--bg-solid-magenta)',
        'bg-solid-warning': 'var(--bg-solid-warning)',
        'bg-solid-success': 'var(--bg-solid-success)',
        'bg-tint-brand': 'var(--bg-tint-brand)',
        'bg-tint-brand-subtle': 'var(--bg-tint-brand-subtle)',
        'bg-tint-brand-darker': 'var(--bg-tint-brand-darker)',
        'bg-tint-discovery': 'var(--bg-tint-discovery)',
        'bg-tint-warning': 'var(--bg-tint-warning)',
        'bg-tint-error': 'var(--bg-tint-error)',
        'bg-tint-success': 'var(--bg-tint-success)',
        'bg-tint-info': 'var(--bg-tint-info)',
        'bg-tint-magenta': 'var(--bg-tint-magenta)',
        'surface-low': 'var(--surface-low)',
        'surface-high': 'var(--surface-high)',
        'surface-default': 'var(--surface-default)',
        'text-default': 'var(--text-default)',
        'text-brand': 'var(--text-brand)',
        'text-discovery': 'var(--text-discovery)',
        'text-error': 'var(--text-error)',
        'text-warning': 'var(--text-warning)',
        'text-success': 'var(--text-success)',
        'text-subtle': 'var(--text-subtle)',
        'text-subtler': 'var(--text-subtler)',
        'text-subtlest': 'var(--text-subtlest)',
        'text-info': 'var(--text-info)',
        'text-magenta': 'var(--text-magenta)',
        'text-white': 'var(--text-white)',
        'line-brand': 'var(--line-brand)',
        'line-default': 'var(--line-default)',
        'line-discovery': 'var(--line-discovery)',
        'line-subtle': 'var(--line-subtle)',
        'icon-brand': 'var(--icon-brand)',
        'icon-default': 'var(--icon-default)',
        'icon-subtle': 'var(--icon-subtle)',
        'icon-subtler': 'var(--icon-subtler)',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

