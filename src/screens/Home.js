import React from "react";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Mealcard from "../components/Mealcard";
import Hero from "../components/Hero";

export default function Home() {
    return (
        <div>
            <div> <Navbar /> </div>
            <div><Hero/></div>
            <div><Footer /></div>
        </div>

    )
}
