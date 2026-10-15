import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Profile from './profile-component/ProfileComponent.jsx'
import 'bootstrap-icons/font/bootstrap-icons.css';
import About from './AboutPage/About.jsx'
import NotFound from './NotFoundPage/NotFound.jsx'
import UpdateComponent from './UpdatePage/UpdateCompoent.jsx'

const router = createBrowserRouter([
  { path: '/Home', element: <App /> },
  { path: '/profile', element: <Profile />},
  { path: '/about', element: <About />},
  {path: '/news', element: <UpdateComponent/>},
  { path: '*', element: <NotFound />}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
