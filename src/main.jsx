import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { Provider } from 'react-redux'
import { persistor, store } from './Redux/Store'
import { PersistGate } from "redux-persist/integration/react"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </PersistGate>
    </Provider>
    
   
  </StrictMode>,
)
