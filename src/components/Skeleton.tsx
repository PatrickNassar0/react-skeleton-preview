import React from 'react';

type SkeletonProps = {
  width?: number | string
  height?: number | string
  backgroundColor?: string
  borderRadius?: string
  pulse?: boolean
  animationDuration?: string
  variant?: 'rectangular' | 'circular' | 'text'
  margin?: string
  padding?: string
  opacity?: number
  loading?: boolean
  children?: React.ReactNode
  customClassName?: string
}

export function Skeleton({
  width = '100%',
  height = '100%',
  backgroundColor = '#E0E0E0',
  borderRadius = '4px',
  pulse = false,
  animationDuration = '1.5s',
  variant = 'rectangular',
  margin,
  padding,
  opacity = 1,
  loading = true,
  children,
  customClassName,
  ...rest
}: SkeletonProps) {
  // Memoize styles for performance
  const skeletonStyle: React.CSSProperties = React.useMemo(() => ({
    width,
    height,
    backgroundColor,
    borderRadius: variant === 'circular' ? '50%' : borderRadius,
    animation: pulse ? `pulse ${animationDuration} infinite` : undefined,
    margin,
    padding,
    opacity,
    display: loading ? 'block' : 'none',
  }), [
    width,
    height,
    backgroundColor,
    borderRadius,
    pulse,
    animationDuration,
    margin,
    padding,
    opacity,
    loading,
  ])

  if (!loading) {
    return <>{children}</>
  }

  return (
    <div
      style={skeletonStyle}
      className={`${pulse ? 'pulse-animation' : ''} ${customClassName || ''}`}
      aria-busy="true"
      aria-label="Loading content"
      {...rest}
    />
  )
}

// pulse animation
const styles = `
@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

.pulse-animation {
  animation: pulse 1.5s infinite;
}
`

// Inject styles into the document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.type = 'text/css'
  styleSheet.innerText = styles
  document.head.appendChild(styleSheet)
}
