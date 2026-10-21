import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import App from './App.jsx'
import Profile from './profile-component/ProfileComponent.jsx'
import About from './AboutPage/About.jsx'
import NotFound from './NotFoundPage/NotFound.jsx'
import UpdateComponent from './UpdatePage/UpdateCompoent.jsx'
import Login from './LoginPage/LoginComponent.jsx'
import Register from './RegisterPage/RegisterComponent.jsx'
import NotificationC from './NotificationPage/NotificationComponent.jsx'

export default function MainRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/Home" replace />} />

            <Route
                path="/Home"
                element={
                    <App
                    />
                }
            />

            <Route
                path="/notification"
                element={<NotificationC />}
            />

            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<UpdateComponent />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}