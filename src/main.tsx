import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'

import { router } from 'routes/Routes'
import store from 'reduxModules/store'
import {theme} from "theme";

import 'assets/fonts/Gotham/Gotham-Medium.ttf'
import 'assets/fonts/Gotham/Gotham-Book.ttf'
import './index.css'
import './global.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
