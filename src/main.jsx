import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ReactGA from "react-ga4";
ReactGA.initialize("G-DQ52YK9VX1");


ReactGA.send({
        hitType: "pageview", 
        page: window.location.pathname, 
    });

ReactGA.event({
      category: 'Form',
      action: 'Submit',
      label: 'Contact Form', 
    });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
