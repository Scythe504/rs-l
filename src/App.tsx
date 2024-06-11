import './App.css'
import { ThemeProvider } from './components/theme-provider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import About from './components/about/about';
import HowToPlay from './components/how-to-play/play';
import Withdraw from './components/withdraw/withdraw';
import Join from './components/join/join';
import { lazy, Suspense } from 'react';
import { Loader } from './components/loading/loading';
const PDF_File = lazy(() => import('@/components/terms-conditions/terms-conditions'))
function App() {

  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <main className='font-satoshi-bold flex flex-col min-w-screen overflow-hidden px-8'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/rules' element={<PDF_File />} />
            <Route path='/contact' element={<About />} />
            <Route path='/how-to-play' element={<HowToPlay />} />
            <Route path='/withdraw' element={<Withdraw />} />
            <Suspense fallback={<Loader/>}>
              <Route path='/wa' element={<Join />} />
            </Suspense>
          </Routes>
        </main>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
