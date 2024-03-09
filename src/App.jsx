import React from 'react'
import AppLayout from './components/AppLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TradingViewWidget from './components/Body/LeftBody/CoinGraph/TradingViewWidget'
import Error from './components/Error/Error'
import Body from './components/Body/Body'

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/coin",
          element: <TradingViewWidget />,
        }
      ],
      errorElement: <Error />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App