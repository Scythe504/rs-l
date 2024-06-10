import { lazy, Suspense } from 'react';
import './App.css'
import { Loader } from './components/loading/loading'
import { ThemeProvider } from './components/theme-provider'

const TopSection = lazy(()=> import('./components/top-level/top-section'))
function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
    <main className='font-satoshi-bold min-h-screen min-w-screen overflow-hidden'>
        <Suspense fallback={<Loader />}>
          <TopSection />
        </Suspense>
      </main>
    </ThemeProvider>
  )
}

export default App
