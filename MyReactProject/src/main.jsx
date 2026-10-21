import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import MainRoutes from './MainRoutes'
import { NotificationsProvider } from '@toolpad/core/useNotifications';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <HashRouter>
            <NotificationsProvider>
                <MainRoutes />
                </NotificationsProvider>
            
        </HashRouter>
    </StrictMode>
)