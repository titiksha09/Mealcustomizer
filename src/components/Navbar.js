import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { Badge } from "react-bootstrap";
import Modal from "../Modal";
 import Requirement from "../screens/Requirement";
 import { useCart } from '../components/ContextReducer';
export default function Navbar() {
     const [cartView,setCartView] = useState(false)
     let data = useCart();
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token')

        navigate("/login")
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success" >
                <div className="container-fluid" >
                    <Link className="navbar-brand fs-1 fst-italic" to="#">Meal Customizer System</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown" >
                        <ul className="navbar-nav me-auto mb-2" >
                            <li className="nav-item">
                                <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mb-0 active fs-5" to="/profile">Profile</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle active fs-5" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Customize Your Meal
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="/breakfast">Breakfast</Link></li>
                                    <li><Link className="dropdown-item" to="/lunch">Lunch</Link></li>
                                    <li><Link className="dropdown-item" to="/eveningsnack">Evening Snack</Link></li>
                                    <li><Link className="dropdown-item" to="/dinner">Dinner</Link></li>
                                </ul>
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link active fs-5" to="/connectwithexpert">Connect with Expert</Link>
                            </li>
                        </ul>
                        {(!localStorage.getItem("authToken")) ?
                            <form className="d-flex">
                                <Link className="btn bg-white text-success mx-1 " to="/login">Login</Link>
                                <Link className="btn bg-white text-success mx-1" to="/createuser">Signup</Link>
                            </form> :
                            <div>

                                <div className="btn bg-white text-success mx-2 "  onClick={() => {setCartView(true)}}>
                                Requirement {" "}
                                     <Badge pill bg="danger" >{data.length}</Badge> 
                                </div>

                                {cartView ? <Modal onClose={() => setCartView(false)}><Requirement/></Modal> : ""} 

                                <button onClick={handleLogout} className="btn bg-white text-success" >Logout</button></div>}
                    </div>
                </div>
            </nav>
        </div>
    );
}

