import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Index from './pages/Index';
import Mentions from './pages/Mentions';
import Utilisation from './pages/Utilisation';
import Confidentialite from './pages/Confidentialite';
import Header from './components/Header';
import Footer from './components/Footer';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Router>
          <Header />
                      <Routes>

<Route path="/" element={<Index />} />
<Route path="/Mentions" element={<Mentions />} />
<Route path="/Confidentialite" element={<Confidentialite />} />
<Route path="/Utilisation" element={<Utilisation />} />
    
    </Routes>
    <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
