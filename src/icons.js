/**
 * Inline SVG icon set. Stroke-based, 24x24 grid, inherits currentColor.
 * Inlined rather than loaded as a sprite/font so there is no extra request
 * and no flash of unstyled icons.
 */

const paths = {
  browser: '<rect x="2.5" y="4" width="19" height="16" rx="2"/><path d="M2.5 9h19M6 6.5h.01M8.75 6.5h.01M11.5 6.5h.01"/>',
  mobile: '<rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M10.5 18.5h3"/>',
  code: '<path d="m8.5 8-4.5 4 4.5 4M15.5 8l4.5 4-4.5 4M13.5 4.5l-3 15"/>',
  cart: '<path d="M2.5 3.5h2.2l2.3 11.2a1.6 1.6 0 0 0 1.6 1.3h8.3a1.6 1.6 0 0 0 1.6-1.25l1.5-6.75H6"/><circle cx="9.5" cy="20" r="1.4"/><circle cx="17.5" cy="20" r="1.4"/>',
  users: '<path d="M15.5 20v-1.8a3.6 3.6 0 0 0-3.6-3.6H6.1A3.6 3.6 0 0 0 2.5 18.2V20"/><circle cx="9" cy="7.5" r="3.6"/><path d="M21.5 20v-1.8a3.6 3.6 0 0 0-2.7-3.48M16 4.1a3.6 3.6 0 0 1 0 6.9"/>',
  layers: '<path d="m12 2.5 9.5 5-9.5 5-9.5-5 9.5-5Z"/><path d="m2.5 16.5 9.5 5 9.5-5M2.5 12l9.5 5 9.5-5"/>',
  cloud: '<path d="M17.5 19.5a4.5 4.5 0 0 0 .6-8.96 6.5 6.5 0 0 0-12.62 1.7A3.9 3.9 0 0 0 6.4 19.5Z"/>',
  azure: '<path d="M9.3 3.5h6.1L21.5 20.5H14l-6.4-1.1 5-6h-4L9.3 3.5Z"/><path d="M8 6.6 2.5 18.9h4.4"/>',
  aws: '<path d="M4 10.5c0-1.1.9-2 2-2s2 .7 2 1.8v3.9M8 12.4c-2.9.2-4.3.9-4.3 2.2 0 .9.7 1.5 1.8 1.5 1.2 0 2.5-.8 2.5-2.2M11.5 8.7l1.7 7 1.7-5.4 1.7 5.4 1.7-7"/><path d="M2.5 19.4c5.9 3 12.5 2.9 18.4-.3M19.4 17.6c.9-.3 2.1-.4 2.1.1 0 .6-.7 1.6-1.2 2.1"/>',
  search: '<circle cx="10.8" cy="10.8" r="7.3"/><path d="m21.5 21.5-5.5-5.5"/>',
  plug: '<path d="M9.5 2.5v6M14.5 2.5v6M6.5 8.5h11v3.4a5.5 5.5 0 0 1-11 0V8.5ZM12 17.4v4.1"/>',
  spark: '<path d="M12 2.5 13.9 9l6.6 2-6.6 2-1.9 6.5L10.1 13l-6.6-2 6.6-2L12 2.5Z"/><path d="M19 3v3M20.5 4.5h-3"/>',
  database: '<ellipse cx="12" cy="5.5" rx="8" ry="3"/><path d="M4 5.5v13c0 1.66 3.58 3 8 3s8-1.34 8-3v-13M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"/>',
  shield: '<path d="M12 2.5 4 5.7v6c0 4.6 3.2 8.7 8 9.8 4.8-1.1 8-5.2 8-9.8v-6L12 2.5Z"/><path d="m9 12 2.2 2.2L15.5 10"/>',
  gauge: '<path d="M12 15.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="m15.5 10-2.1 2.1"/><path d="M4.2 18.5a9.5 9.5 0 1 1 15.6 0"/>',
  workflow: '<rect x="2.5" y="3" width="7" height="6" rx="1.5"/><rect x="14.5" y="15" width="7" height="6" rx="1.5"/><path d="M6 9v5.5A3.5 3.5 0 0 0 9.5 18h5"/><path d="M14.5 3.5h7"/>',
  refresh: '<path d="M20.5 5.5v5h-5"/><path d="M3.5 18.5v-5h5"/><path d="M19.4 10.5A7.6 7.6 0 0 0 6 7.9L3.5 10.5M4.6 13.5a7.6 7.6 0 0 0 13.4 2.6l2.5-2.6"/>',
  check: '<path d="m4.5 12.5 5 5 10-11"/>',
  arrow: '<path d="M4.5 12h15M13.5 6l6 6-6 6"/>',
  chart: '<path d="M3.5 3.5v17h17"/><path d="m7.5 15.5 3.5-4 3 2.5 5-6.5"/>',
  lock: '<rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7.2a4 4 0 0 1 8 0v3.3"/>',
  server: '<rect x="2.5" y="3.5" width="19" height="7" rx="2"/><rect x="2.5" y="13.5" width="19" height="7" rx="2"/><path d="M6.5 7h.01M6.5 17h.01"/>',
  compass: '<circle cx="12" cy="12" r="9.5"/><path d="m15.6 8.4-2 5.2-5.2 2 2-5.2 5.2-2Z"/>',
  puzzle: '<path d="M9.5 3.5h5v2.2a1.8 1.8 0 1 0 3.6 0V3.5h2.4v5h-2.2a1.8 1.8 0 1 0 0 3.6h2.2v8.4h-8.4v-2.2a1.8 1.8 0 1 0-3.6 0v2.2H3.5v-8.4h2.2a1.8 1.8 0 1 0 0-3.6H3.5v-5h6Z"/>',
  headset: '<path d="M4 14v-2a8 8 0 1 1 16 0v2"/><path d="M20 14.5v2A3.5 3.5 0 0 1 16.5 20H13"/><rect x="1.8" y="12.5" width="4.4" height="6" rx="2"/><rect x="17.8" y="12.5" width="4.4" height="6" rx="2"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4"/>',
  mail: '<rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="m3 6 9 6.5L21 6"/>',
  phone: '<path d="M21.5 17v2.8a1.9 1.9 0 0 1-2.1 1.9 18.7 18.7 0 0 1-8.2-2.9 18.4 18.4 0 0 1-5.7-5.7A18.7 18.7 0 0 1 2.6 4.8 1.9 1.9 0 0 1 4.5 2.7h2.8a1.9 1.9 0 0 1 1.9 1.6c.12.92.35 1.81.68 2.67a1.9 1.9 0 0 1-.43 2L8.3 10.1a15 15 0 0 0 5.6 5.6l1.14-1.14a1.9 1.9 0 0 1 2-.43c.86.33 1.75.56 2.67.68a1.9 1.9 0 0 1 1.6 1.94Z"/>',
  clock: '<circle cx="12" cy="12" r="9.2"/><path d="M12 6.8V12l3.4 2"/>',
  building: '<path d="M3.5 21.5V5.2a1.7 1.7 0 0 1 1.7-1.7h7.1a1.7 1.7 0 0 1 1.7 1.7v16.3M13.9 9.5h4.9a1.7 1.7 0 0 1 1.7 1.7v10.3M2 21.5h20M7 8h3.5M7 12h3.5M7 16h3.5M17 13.5h.01M17 17h.01"/>',
  book: '<path d="M4.5 3.5h11a2 2 0 0 1 2 2v15h-13a2 2 0 0 1 0-4h13"/>',
  briefcase: '<rect x="2.5" y="7" width="19" height="13.5" rx="2"/><path d="M8.5 7V5.2a1.7 1.7 0 0 1 1.7-1.7h3.6a1.7 1.7 0 0 1 1.7 1.7V7M2.5 12.5h19"/>',
  heart: '<path d="M20.3 5.6a5 5 0 0 0-7.1 0L12 6.8l-1.2-1.2a5 5 0 0 0-7.1 7.1l1.2 1.2L12 21l7.1-7.1 1.2-1.2a5 5 0 0 0 0-7.1Z"/>',
cog: '<circle cx="12" cy="12" r="3.1"/><path d="M19.6 14.8a1.6 1.6 0 0 0 .32 1.77l.06.06a1.95 1.95 0 1 1-2.76 2.76l-.06-.06a1.6 1.6 0 0 0-1.77-.32 1.6 1.6 0 0 0-.97 1.47v.17a1.95 1.95 0 0 1-3.9 0v-.09a1.6 1.6 0 0 0-1.05-1.47 1.6 1.6 0 0 0-1.77.32l-.06.06a1.95 1.95 0 1 1-2.76-2.76l.06-.06a1.6 1.6 0 0 0 .32-1.77 1.6 1.6 0 0 0-1.47-.97h-.17a1.95 1.95 0 0 1 0-3.9h.09a1.6 1.6 0 0 0 1.47-1.05 1.6 1.6 0 0 0-.32-1.77l-.06-.06a1.95 1.95 0 1 1 2.76-2.76l.06.06a1.6 1.6 0 0 0 1.77.32h.08a1.6 1.6 0 0 0 .97-1.47v-.17a1.95 1.95 0 1 1 3.9 0v.09a1.6 1.6 0 0 0 .97 1.47 1.6 1.6 0 0 0 1.77-.32l.06-.06a1.95 1.95 0 1 1 2.76 2.76l-.06.06a1.6 1.6 0 0 0-.32 1.77v.08a1.6 1.6 0 0 0 1.47.97h.17a1.95 1.95 0 0 1 0 3.9h-.09a1.6 1.6 0 0 0-1.47.97Z"/>',
  graduation: '<path d="M12 3 1.5 8.2 12 13.5l10.5-5.3L12 3Z"/><path d="M6 10.5v5.2c0 1.9 2.7 3.3 6 3.3s6-1.4 6-3.3v-5.2M21 9v6"/>',
  rocket: '<path d="M8.5 15.5c-2 1.7-2.5 5.5-2.5 5.5s3.8-.5 5.5-2.5c1-1.1 1-2.9-.1-3.9a2.7 2.7 0 0 0-2.9 0Z"/><path d="M13 13.5 9.5 10a13.5 13.5 0 0 1 2.9-5.4A9.6 9.6 0 0 1 20.5 3a9.6 9.6 0 0 1-1.6 8.1A13.5 13.5 0 0 1 13 13.5Z"/><path d="M9.6 10H6.1a.7.7 0 0 1-.5-1.2l2.1-2.2a1.4 1.4 0 0 1 1-.4h2.4M13.5 13.8v3.5a.7.7 0 0 0 1.2.5l2.2-2.1a1.4 1.4 0 0 0 .4-1v-2.4"/>',
  file: '<path d="M13.5 2.5H7a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5.5-5.5Z"/><path d="M13.5 2.5V8H19M8.5 13.5h7M8.5 17h4.5"/>',
};

/**
 * @param {keyof typeof paths} name
 * @param {{class?: string, size?: number}} [opts]
 */
export function icon(name, opts = {}) {
  const d = paths[name];
  if (!d) throw new Error(`Unknown icon: ${name}`);
  const size = opts.size ?? 24;
  return `<svg class="icon${opts.class ? ` ${opts.class}` : ""}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${d}</svg>`;
}

export const iconNames = Object.keys(paths);
