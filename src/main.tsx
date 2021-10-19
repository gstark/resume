import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './tailwind.css'
import './index.css'
import { App } from './App'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/:area?">
        <App />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
