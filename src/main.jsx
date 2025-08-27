import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, HashRouter, Route, Routes} from "react-router";
import ContactPage from "./Pages/Contact/ContactPage.jsx";

createRoot(document.getElementById('root')).render(
  <HashRouter>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path='/contact' element={<ContactPage />}/>
      </Routes>
  </HashRouter>
  ,
)
