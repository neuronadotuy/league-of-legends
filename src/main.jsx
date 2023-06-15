import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChampionsProvider } from './context/ChampionsProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChampionsProvider>
      <App />
    </ChampionsProvider>
  </React.StrictMode>,
)
