import './App.css'
import { ThemeProvider } from './components/theme-provider';
import { PDF_File } from './components/terms-conditions/terms-conditions';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <main className='font-satoshi-bold flex flex-col min-w-screen overflow-hidden px-8'>
          <Routes>
            <Route path='/' element={<Home />}/>
              <Route path='/rules' element={<PDF_File />} />
          </Routes>
        </main>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
