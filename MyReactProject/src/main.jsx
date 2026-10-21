import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import MainRoutes from './MainRoutes'


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <HashRouter>
            <MainRoutes />
        </HashRouter>
    </StrictMode>
)