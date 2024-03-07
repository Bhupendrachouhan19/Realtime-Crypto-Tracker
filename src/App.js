import React from 'react'
import AppLayout from './components/AppLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CoinGraph from './components/Body/LeftBody/CoinGraph/CoinGraph'
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
          path: "/coins/coin",
          element: <CoinGraph />,
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