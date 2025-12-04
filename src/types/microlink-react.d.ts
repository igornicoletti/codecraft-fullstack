declare module '@microlink/react' {
  import * as React from 'react'

  export interface MicrolinkProps extends React.HTMLAttributes<HTMLDivElement> {
    url: string
    size?: 'small' | 'normal' | 'large'
    media?: 'auto' | 'image' | 'video' | 'iframe' | 'screenshot'
    screenshot?: boolean
    colorScheme?: 'auto' | 'dark' | 'light'
    className?: string
    style?: React.CSSProperties
  }

  const Microlink: React.FC<MicrolinkProps>

  export default Microlink
}
