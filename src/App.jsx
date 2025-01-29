import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "./style/app.css";

// Componnents
import Header from './components/Header';
import About from './components/About';
import Service from './components/Service';
import Blog from './components/Blog';
import Footer from './components/Footer';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <About />
    <Service />
    <Blog />
    <Footer />

  </StrictMode>,
)


export default App ;