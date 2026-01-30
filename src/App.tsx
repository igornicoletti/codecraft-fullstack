import { ThemeProvider } from '@/contexts/ThemeProvider'
import { Home } from '@/pages/Home'

export const App = () => (
  <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
    <Home />
  </ThemeProvider>
)
