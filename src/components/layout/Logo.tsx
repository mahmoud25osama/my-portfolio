'use client'

interface LogoProps {
  size?: number
  className?: string
  variant?: 'full' | 'minimal'
}

export default function Logo({ size = 40, className = '', variant = 'full' }: LogoProps) {
  if (variant === 'minimal') {
    return <LogoMinimal size={size} className={className} />
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Professional MO Logo */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <defs>
          {/* Main gradient - indigo to cyan */}
          <linearGradient id="moGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#615fff" />
            <stop offset="50%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          {/* Secondary gradient for depth */}
          <linearGradient id="moGradientDark" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>
          {/* Subtle shadow filter */}
          <filter id="moShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#615fff" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Background rounded square */}
        <rect
          x="8"
          y="8"
          width="84"
          height="84"
          rx="20"
          fill="rgba(99, 102, 241, 0.08)"
          stroke="url(#moGradient)"
          strokeWidth="2"
        />

        {/* Letter M - Modern geometric style */}
        <path
          d="M22 72 L22 35 L35 52 L50 35 L50 72"
          stroke="url(#moGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          filter="url(#moShadow)"
        />

        {/* Letter O - Overlapping circle design */}
        <circle
          cx="68"
          cy="54"
          r="18"
          stroke="url(#moGradient)"
          strokeWidth="6"
          fill="none"
          filter="url(#moShadow)"
        />

        {/* Connecting accent line between M and O */}
        <path
          d="M50 54 L58 54"
          stroke="url(#moGradientDark)"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* Subtle accent dot */}
        <circle cx="68" cy="54" r="5" fill="url(#moGradient)" opacity="0.6" />
      </svg>
    </div>
  )
}

// Minimal version for favicon/small usage
export function LogoMinimal({ size = 32, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="minimalMo" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#615fff" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect
        x="8"
        y="8"
        width="84"
        height="84"
        rx="18"
        fill="rgba(99, 102, 241, 0.08)"
        stroke="url(#minimalMo)"
        strokeWidth="2"
      />

      {/* Letter M */}
      <path
        d="M22 72 L22 35 L35 52 L50 35 L50 72"
        stroke="url(#minimalMo)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Letter O */}
      <circle
        cx="68"
        cy="54"
        r="18"
        stroke="url(#minimalMo)"
        strokeWidth="6"
        fill="none"
      />

      {/* Accent dot */}
      <circle cx="68" cy="54" r="5" fill="url(#minimalMo)" opacity="0.6" />
    </svg>
  )
}

// Icon only version (no text, perfect for footer)
export function LogoIcon({ size = 32, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#615fff" />
          <stop offset="50%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <filter id="iconShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#615fff" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Background */}
      <rect
        x="10"
        y="10"
        width="80"
        height="80"
        rx="16"
        fill="rgba(99, 102, 241, 0.1)"
        stroke="url(#iconGradient)"
        strokeWidth="2"
      />

      {/* Letter M */}
      <path
        d="M22 70 L22 35 L35 50 L50 35 L50 70"
        stroke="url(#iconGradient)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter="url(#iconShadow)"
      />

      {/* Letter O */}
      <circle
        cx="68"
        cy="52"
        r="16"
        stroke="url(#iconGradient)"
        strokeWidth="5"
        fill="none"
        filter="url(#iconShadow)"
      />

      {/* Accent dot */}
      <circle cx="68" cy="52" r="4" fill="url(#iconGradient)" opacity="0.6" />
    </svg>
  )
}
