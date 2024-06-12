import './App.css'
import { ThemeProvider } from './components/theme-provider';
import PDF_File from './components/terms-conditions/terms-conditions';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import HowToPlay from './components/how-to-play/play';
import Withdraw from './components/withdraw/withdraw';
import Join from './components/join/join';
import Contact from './components/about/about';

function App() {
  
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <main className='font-satoshi-bold flex flex-col min-w-screen overflow-hidden px-8'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/rules' element={<PDF_File />} />
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/how-to-play' element={<HowToPlay/>}/>
            <Route path='/withdraw' element={<Withdraw/>}/>
            <Route path='/wa' element={<Join/>}/>
          </Routes>
        </main>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
