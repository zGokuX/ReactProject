import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import MainRoutes from './MainRoutes'
import { NotificationsProvider } from '@toolpad/core/useNotifications'
import  store  from "./Store/store"
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <HashRouter>
                <NotificationsProvider>
                    <MainRoutes />
                </NotificationsProvider>
            </HashRouter>
        </Provider>
    </StrictMode>
)
