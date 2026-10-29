import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import AddNote from './pages/AddNote.jsx'
import UpdateNote from './pages/UpdateNote.jsx'
const router = createBrowserRouter([
  {
    path: '/', element: <App/>,
    children:[
      {
      path: '/', element: <Home/>
      },
      {
        path: '/add', element: <AddNote/>
      },
      {
        path: '/update/:_id', element: <UpdateNote/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </StrictMode>,
)
