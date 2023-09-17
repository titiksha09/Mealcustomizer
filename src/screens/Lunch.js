import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Mealcard from "../components/Mealcard";
export default function Lunch() {
  return (
    <div>
        <div><Navbar/></div>
        <div> <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important"}}>

<div className="carousel-inner" id='carousel'  >
    <div className='carousel-caption' style={{zIndex:"10"}}>
        <form className='d-flex'>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success text-white background-success" type="submit">Search</button>
        </form>
    </div>


    <div className="carousel-item active">
        <img src="https://source.unsplash.com/random/9×7/?meal" className="d-block w-100" style={{filter:"brightness{30%}"}} alt="..." />
    </div>
    <div className="carousel-item">
        <img src="https://source.unsplash.com/random/9×7/?lunch" className="d-block w-100" style={{filter:"brightness{30%}"}} alt="..." />
    </div>
    <div className="carousel-item">
        <img src="https://source.unsplash.com/random/9×7/?dinner" className="d-block w-100" style={{filter:"brightness{30%}"}} alt="..." />
    </div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
</button>
</div></div>
            <div className='m-3'><Mealcard/></div>
            <div className='m-3'><Mealcard/></div>
            <div className='m-3'><Mealcard/></div>
            <div className='m-3'><Mealcard/></div>
            <div><Footer /></div>
    </div>
  )
}
