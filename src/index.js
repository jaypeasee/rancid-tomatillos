import './index.scss'
import App from './App/App'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

const router = <BrowserRouter basename='/rancid-tomatillos'><App /></BrowserRouter>

ReactDOM.render(router,
  document.getElementById('root'));