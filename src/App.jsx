import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "./style/app.css";
// Componnents
import Header from './components/Header';
import About from './components/About';
import Service from './components/Service';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <About />
    <Service />
  </StrictMode>,
)
