import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import {AuthProvider} from "./component/context/Auth"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider>
      <AuthProvider>
    <App />
    </AuthProvider>
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
)
