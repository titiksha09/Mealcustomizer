import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
    
    return (
        <>
            <div className="hero" style={{ width: "100%", height: "100%", position: "relative" }}>
                <img alt="HeroImg" src='https://cdn.pixabay.com/photo/2018/07/20/14/02/grapes-3550733_960_720.jpg' style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div className='hero-text' style={{ position: "absolute", top: "55%", left: "30%", transform: "translate(-50%,-50%)" }}>
                    <h1 className='hero-text-h1' style={{ fontSize: "3rem", fontWeight: "800", background: "#fff", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Customize Your Meal</h1>
                    <p className='hero-text-p' style={{ fontSize: "1.3rem", color: "#fff", paddingLeft: "0", paddingRight: "0", paddingTop: "0.5rem", paddingBottom: "0.2rem" }}>Choose food items according to your choice to complete <br/> your daily micro-nutrient requirements.</p>
                    <div className="dropdown">
                        <button className="dropdown-toggle" to="/" id="dropdownMenuButton" role="button" data-bs-toggle="dropdown" aria-expanded="false" 
                        style={{ textDecoration: "none", background: "#0000ff", padding: "1rem 2rem", borderRadius: "60px", fontSize: "1.5rem", fontWeight: "bold", letterSpacing: "2px", color: "#222" }}>
                            Customize Your Meal
                        </button>

                        <ul className="dropdown-menu" style={{background:"transparent"}} aria-labelledby="navbarDropdownMenuLink">
                            <li style={{ textDecoration: "none", background: "#0000ff", padding: "1rem 2rem", borderRadius: "60px", fontSize: "1.5rem", fontWeight: "bold", letterSpacing: "2px", color: "#222" }}><Link className="dropdown-item" to="/breakfast">Breakfast</Link></li>
                            <li style={{ textDecoration: "none", background: "#0000ff", padding: "1rem 2rem", borderRadius: "60px", fontSize: "1.5rem", fontWeight: "bold", letterSpacing: "2px", color: "#222" }}><Link className="dropdown-item" to="/lunch">Lunch</Link></li>
                            <li style={{ textDecoration: "none", background: "#0000ff", padding: "1rem 2rem", borderRadius: "60px", fontSize: "1.5rem", fontWeight: "bold", letterSpacing: "2px", color: "#222" }}><Link className="dropdown-item" to="/eveningsnack">Evening Snack</Link></li>
                            <li style={{ textDecoration: "none", background: "#0000ff", padding: "1rem 2rem", borderRadius: "60px", fontSize: "1.5rem", fontWeight: "bold", letterSpacing: "2px", color: "#222" }}><Link className="dropdown-item" to="/dinner">Dinner</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='hero-text2' style={{ position: "absolute", top: "44%", right: "10%" }}>
                    <h1 className='hero-text-h2' style={{ fontSize: "3rem", fontWeight: "800", background: "#fff", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Dietitian</h1>
                    <p className='hero-text-p2' style={{ fontSize: "1.3rem", color: "#fff", paddingLeft: "0", paddingRight: "0", paddingTop: "0.5rem", paddingBottom: "0.2rem" }}> If you are facing any problem or need any support.<br/>Connect with our experts.</p>
                    <Link className="btn btn-primary" style={{ textDecoration: "none", background: "#0000ff", padding: "1rem 2rem", borderRadius: "60px", fontSize: "1.5rem", fontWeight: "bold", letterSpacing: "2px", color: "#222" }} to="/connectwithexpert" role="button">Click Here</Link>
                </div>
            </div>
        </>

    )
}
