export default function MeridianMark({ size = 40, color = 'currentColor', variant = 'default' }) {
  const variants = {
    default: () => (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" stroke={color} strokeWidth="1.5" />
        <line x1="20" y1="4" x2="20" y2="36" stroke={color} strokeWidth="1.5" />
        <line x1="4" y1="20" x2="36" y2="20" stroke={color} strokeWidth="1.5" />
      </svg>
    ),
    minimal: () => (
      <svg width={size} height={size} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="15" r="13" stroke={color} strokeWidth="1.2" />
        <path d="M15 5 A10 10 0 1 0 15 25 A10 10 0 0 0 15 5" fill="none" stroke={color} strokeWidth="1.2" />
      </svg>
    ),
    sealed: () => (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="19" stroke={color} strokeWidth="1.5" />
        <circle cx="20" cy="20" r="14" stroke={color} strokeWidth="1.5" opacity="0.5" />
        <line x1="20" y1="8" x2="20" y2="32" stroke={color} strokeWidth="1.5" opacity="0.5" />
      </svg>
    ),
    latitudes: () => (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" stroke={color} strokeWidth="1" />
        <line x1="2" y1="20" x2="38" y2="20" stroke={color} strokeWidth="1" />
        <line x1="4" y1="12" x2="36" y2="12" stroke={color} strokeWidth="0.8" opacity="0.6" />
        <line x1="4" y1="28" x2="36" y2="28" stroke={color} strokeWidth="0.8" opacity="0.6" />
      </svg>
    ),
  };

  return variants[variant] ? variants[variant]() : variants.default();
}
