import { Link } from "react-router-dom";

export default function Profile(){
    return (
        <>
        <title>Profile</title>
        <div className="container-up container-profile">
            <h1>Siamo in profile</h1>
            
            <Link to={'/'}>
            <i className="bi bi-arrow-bar-left danger back"></i>
            </Link>
        </div>
        </>
    )
}