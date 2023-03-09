import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { Routes } from './routes'
import GlobalStyle from './GlobalStyle'
import theme from './themes/theme'
import { AuthProvider } from './hooks/auth'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')).render(

    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <ToastContainer autoClose={3000} position="top-left" />
        <Routes />
      </AuthProvider>
    </ThemeProvider>

)
