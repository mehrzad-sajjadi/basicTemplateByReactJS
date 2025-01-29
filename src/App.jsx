import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header';
import About from './components/About';
import "./style/app.css";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <About />
  </StrictMode>,
)
