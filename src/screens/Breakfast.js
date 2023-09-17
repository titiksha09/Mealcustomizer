import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Form } from 'react-router-dom'
import Mealcard from "../components/Mealcard";
import '../style.css'

export default function Breakfast() {

  const [foodItems, setFoodItems] = useState([])
  const [search, setSearch] = useState('')
  const loadFoodItems = async () => {
    let response = await fetch("http://localhost:4000/api/foodData", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }

    });
    response = await response.json()
    //console.log(response[0])
    setFoodItems(response[0])

  }

  useEffect(() => {
    loadFoodItems()
  }, [])

  return (
    <div>
      <div><Navbar /></div>
      <div>
        <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel">

          <div className="carousel-inner" id='carousel'  >
            <div className='carousel-caption' style={{ zIndex: "10" }}>
              <div className='d-flex justify-content-center'>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                {/* <button className="btn btn-outline-success text-white background-success" type="submit">Search</button> */}
              </div>
            </div>


            <div className="carousel-item active">
              <img src="https://source.unsplash.com/random/9×7/?meal" className="d-block w-100" style={{ filter: "brightness{30%}" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/9×7/?lunch" className="d-block w-100" style={{ filter: "brightness{30%}" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/9×7/?dinner" className="d-block w-100" style={{ filter: "brightness{30%}" }} alt="..." />
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
        </div>
      </div>


      <div className='container col-12'> 
      
        {
          foodItems !== []
            ? foodItems.filter((item) => (item.name.toLowerCase().includes(search.toLocaleLowerCase()))).map(data => {
              
              return (
                <div key={data._id} style={{ display: "flex", flexDirection: "row",margin:"10px" }}>
                  <Mealcard foodItem = {data}
                    // foodName={data.name} 
                    // quantity={data.quantity}
                    // foodCalorie={data.calorie}
                    // foodProtein={data.protein}
                    // foodFiber={data.fibre}
                    // foodCarbs={data.carbs}
                    // foodFats={data.fats}
                  ></Mealcard>
                </div>
              )
            }) : <div>No such data found</div>
        }

      </div>

      <div><Footer /></div>
    </div>
  )
}
