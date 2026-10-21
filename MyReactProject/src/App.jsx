
import './App.css'
import UpBar from './upbar-component'
import { Link } from 'react-router-dom'
import { useNotifications } from '@toolpad/core/useNotifications'
import { useEffect, useRef } from 'react'
import { useSelector} from 'react-redux'
export default function Home() {
    const notificationNumber =useSelector((state) => state.notification.number)
    const notifications = useNotifications()
    const user = useSelector((state) => state.user)
    const lastNotified = useRef(null)

    useEffect(() => {
        console.log(user)
        if (notificationNumber < 1) return
        if (lastNotified.current === notificationNumber) return

        lastNotified.current = notificationNumber

        notifications.show(
            `Hai ${notificationNumber} ${notificationNumber > 1 ? " notifiche" : "notifica "} da leggere`,
            { autoHideDuration: 3000 }
        )
    }, [notificationNumber, notifications])

    return (
        <>
            <title>Home</title>
            <main>
                <UpBar
                />

                <div className="container-desc">
                    <h2>Benvenuto nella home della mia pagina!</h2>
                    <span>
                        Qui sei nella home principale, fatti un giro per
                        scoprire al meglio la mia pagina.
                    </span>
                    <Link to="/about">
                        Clicca qui per sapere qualcosa sulla mia pagina
                    </Link>
                </div>
            </main>
        </>
    )
}
