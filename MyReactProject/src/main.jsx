import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Profile from './profile-component/ProfileComponent.jsx'
import About from './AboutPage/About.jsx'
import NotFound from './NotFoundPage/NotFound.jsx'
import UpdateComponent from './UpdatePage/UpdateCompoent.jsx'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Login from './LoginPage/LoginComponent.jsx'
import Register from './RegisterPage/RegisterComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" replace />} />
        <Route path="/Home" element={<App />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<UpdateComponent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </StrictMode>
)