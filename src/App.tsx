import { lazy, Suspense } from 'react';
import './App.css'
import { Loader } from './components/loading/loading'
import { ThemeProvider } from './components/theme-provider'

const TopSection = lazy(() => import('./components/top-level/top-section'))
const SecondSection = lazy(() => import('./components/second/second'))
const ThirdSection = lazy(() => import('./components/third/third-section'))
const FourthSection = lazy(()=> import('./components/fourth/fourth'))
const Footer = lazy(()=> import('./components/footer/footer'))
function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <div className='font-satoshi-bold flex flex-col min-w-screen overflow-hidden px-8'>
        <Suspense fallback={<Loader/>}>
          <TopSection />
          <SecondSection />
          <ThirdSection />
          <FourthSection/>
          <Footer/>
        </Suspense>
      </div>
    </ThemeProvider>
  )
}

export default App
