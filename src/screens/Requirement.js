import React from 'react'
import { useCart, useDispatchCart } from '../components/ContextReducer';
import Delete from '@material-ui/icons/Delete'
export default function Requirement() {
  let data = useCart();
  let dispatch = useDispatchCart();
  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center fs-3'>No Food item is added yet</div>
      </div>
    )
  }
  //   // const handleRemove = (index)=>{
  //   //   console.log(index)
  //   //   dispatch({type:"REMOVE",index:index})
  //   // }

  //   const handleCheckOut = async () => {
  //     let userEmail = localStorage.getItem("userEmail");
  //     // console.log(data,localStorage.getItem("userEmail"),new Date())
  //     let response = await fetch("http://localhost:5000/api/auth/orderData", {
  //       // credentials: 'include',
  //       // Origin:"http://localhost:3000/login",
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         order_data: data,
  //         email: userEmail,
  //         order_date: new Date().toDateString()
  //       })
  //     });
  //     console.log("JSON RESPONSE:::::", response.status)
  //     if (response.status === 200) {
  //       dispatch({ type: "DROP" })
  //     }
  //   }

  let totalCalorie = data.reduce((total, food) => total + food.qty*food.calorie, 0)
  totalCalorie = totalCalorie.toFixed(2);
  let totalProtein = data.reduce((total, food) => total + food.qty*food.protein, 0)
  totalProtein = totalProtein.toFixed(2);
  let totalCarbs = data.reduce((total, food) => total + food.qty*food.carbs, 0)
  totalCarbs = totalCarbs.toFixed(2);
  let totalFats = data.reduce((total, food) => total + food.qty*food.fats, 0)
  totalFats = totalFats.toFixed(2);
  let totalFiber = data.reduce((total, food) => total + food.qty*food.fiber, 0)
  totalFiber = totalFiber.toFixed(2);
  return (
    <div>
      <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
        <table className='table table-hover '>
          <thead className=' text-success fs-4'>
            <tr>
              <th scope='col' >#</th>
              <th scope='col' >Name</th>
              <th scope='col' >Quantity</th>
              <th scope='col' >Calorie</th>
              <th scope='col' >Protein</th>
              <th scope='col' >Carbs</th>
              <th scope='col' >Fats</th>
              <th scope='col' >Fiber</th>
              <th scope='col' >Qty</th>
              <th scope='col' ></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr>
                <th scope='row' >{index + 1}</th>
                <td >{food.name}</td>
                <td>{food.quantity}</td>
                <td>{(food.qty * food.calorie).toFixed(2)}</td>
                <td>{(food.qty * food.protein).toFixed(2)}</td>
                <td>{(food.qty * food.carbs).toFixed(2)}</td>
                <td>{(food.qty * food.fats).toFixed(2)}</td>
                <td>{(food.qty * food.fiber).toFixed(2)}</td>
                <td>{food.qty}</td>
                <td ><button type="button" className="btn p-0"> <Delete onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /> </button> </td></tr>
            ))}
          </tbody>
        </table>
        < div className='float-container' style={{padding: "20px",marginTop:"40px"}}>
          <div  className='float-child' style={{ width: "50%",float: "left",padding: "20px",border: "2px solid red"}}>
            <p5>Total Calorie: {totalCalorie}cal/2500cal</p5>
            <br/>
            <p5>Total Protein: {totalProtein}g/130g</p5>
            </div>
          <div className='float-child' style={{ width: "50%",float: "left",padding: "20px",border: "2px solid red"}}>
            
          <p5>Total Carbs: {totalCarbs}g/150g</p5>
          <br/>
          <p5>Total Fats: {totalFats}g/80g</p5>
          <br/>
          <p5>Total Fiber: {totalFiber}g/38g</p5>
          </div>
        </div>
        {/* <div>
           <button className='btn bg-success mt-5 ' onClick={handleCheckOut} > Check Out </button>
         </div> */}
      </div>



    </div>
  )
}
