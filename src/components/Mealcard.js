import React, { useState } from 'react'
import { useDispatchCart,useCart } from './ContextReducer'

export default function Mealcard(props) {

    
    let dispatch = useDispatchCart();
    let data = useCart();
    // let navigate = useNavigate()
     const [qty, setQty] = useState(1);
    // const [size, setSize] = useState("")
    // const priceRef = useRef();
    // // const [btnEnable, setBtnEnable] = useState(false);
    // // let totval = 0
    // // let price = Object.values(options).map((value) => {
    // //   return parseInt(value, 10);
    // // });
    
    // const handleClick = () => {
    //   if (!localStorage.getItem("token")) {
    //     navigate("/login")
    //   }
    // }
    // const handleQty = (e) => {
    //   setQty(e.target.value);
    // }
    // const handleOptions = (e) => {
    //   setSize(e.target.value);
    // }
     const handleAddToCart = async () => {
    //   let food = []
    //   for (const item of data) {
    //     if (item.id === props.foodItem._id) {
    //       food = item;
  
    //       break;
    //     }
    //    }
    //   console.log(food)
    //   console.log(new Date())
    //   if (food !== [] && food.qty !== qty) {
    //       await dispatch({ type: "UPDATE", id: props.foodItem._id, name: props.foodItem.name, 
    //       quantity: props.foodItem.quantity, protein:props.foodItem.protein, 
    //       calorie:props.foodItem.calorie, fiber:props.foodItem.fibre, fats:props.foodItem.fats, 
    //       carbs:props.foodItem.carbs, qty: qty,finalCalorie : finalCalorie })
    //       return
        // if (food.size !== size) {
        //   await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size,img: props.ImgSrc })
        //   console.log("Size different so simply ADD one more to the list")
        //   return
        // }
     // }
  
        await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, 
        quantity: props.foodItem.quantity, protein:props.foodItem.protein, 
        calorie:props.foodItem.calorie, fiber:props.foodItem.fibre, fats:props.foodItem.fats, 
        carbs:props.foodItem.carbs, qty: qty,finalCalorie : finalCalorie })
       // await console.log(data)
  
    //  setBtnEnable(true)
  
      }
  
    // useEffect(() => {
    //   setSize(priceRef.current.value)
    // }, [])
  
    // // useEffect(()=>{
    // // checkBtn();
    // //   },[data])
  
     let finalCalorie = qty * props.foodItem.calorie;   //This is where Calorie changing
     finalCalorie = finalCalorie.toFixed(2);
    // // totval += finalPrice;
    // // console.log(totval)

  return (

    <div className="card mt-3" style={{ padding:"10 px"}}>
                <div className="card-body">
                    <h5 className="card-title" style={{fontSize:"1.2rem"}}>{props.foodItem.name}-{props.foodItem.quantity}</h5>
                    <div className='container w-100 inline-block'>
                    <p className="card-t" style={{display:"inline-block",textAlign:"left",verticalAlign:"top",lineHeight:"28px",fontSize:"1.5rem",paddingRight:"20px"}}>Calorie - {props.foodItem.calorie}cal</p>
                        <select className='m-2 h-100  bg-success rounded' style={{display:"inline-block",verticalAlign:"top",lineHeight:"28px",paddingLeft:"20px"}}  onChange={(e) => setQty(e.target.value)}>  
                        //Javascript
                            {Array.from(Array(10), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className='micronutrients1'>
                    <p className="card-nut" style={{display:"inline-block",verticalAlign:"top",lineHeight:"28px",fontSize:"1rem",paddingRight:"20px"}}>Proteins - {props.foodItem.protein}g </p>
                    <p className="card-micro" style={{display:"inline-block",verticalAlign:"top",lineHeight:"28px",fontSize:"1rem",paddingRight:"20px"}}>Fats - { props.foodItem.fats}g</p>
                    </div>
                    <div className='micronutrients2' >
                    <p className="card-nut" style={{display:"inline-block",verticalAlign:"top",lineHeight:"28px",fontSize:"1rem",paddingRight:"20px"}}>Carbs - {props.foodItem.carbs}g</p>
                    <p className="card-micro" style={{display:"inline-block",verticalAlign:"top",lineHeight:"28px",fontSize:"1rem",paddingRight:"20px"}}>Fiber - {props.foodItem.fibre}g</p>
                    </div>
                    <hr></hr>
                    <div>
                    <button className={`btn btn-success justify-center ms-2 `}  onClick={handleAddToCart} >Add to Meal</button>
                    <div className='d-inline h-100 fs-5' style={{marginLeft:"20px"}}> Final Calorie - {finalCalorie}</div>
                    </div>
          
                </div>
                
            </div>

  )
}
