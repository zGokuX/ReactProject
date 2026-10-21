import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { resetNotifications } from "../Store/notificationSlice";


export default function NotificationC() {
    const user_content_clientSide = useSelector(
        (state) => state.user.selectedUserLogged?.content_notify ?? []
    )
    const notificationN = useSelector((state) => state.notification.number)
    const dispatch = useDispatch()

    function resetNotifiy() {
        dispatch(resetNotifications());
    }
    return (
        <>
            <title>{notificationN <= 0 ? "Non hai nessuna notifica" : "hai " + notificationN + " notifica da leggere"}</title>
            <div className="container-up">
                <h1>{notificationN <= 0 ? "Non hai nessuna notifica" : "Hai " + notificationN + " notifica da leggere"}</h1>
                <Link to={'/Home'} onClick={() => resetNotifiy()}>
                    <i className="bi bi-arrow-bar-left danger back"></i>
                </Link>
            </div>
            <div className="container-desc">
                {user_content_clientSide.map((update, index) => (
                    <p key={index}>{update}</p>
                ))}
            </div>

        </>
    )
}