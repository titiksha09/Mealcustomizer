import React, { useReducer, useContext, createContext } from 'react';

 const CartStateContext = createContext();
 const CartDispatchContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
             return [...state, { id: action.id, name: action.name, qty: action.qty, protein: action.protein, 
                calorie: action.calorie, fats:action.fats, carbs:action.carbs,fiber:action.fiber,quantity:action.quantity }]
        case "REMOVE":
            let newArr = [...state]
            newArr.splice(action.index, 1)
            return newArr;
//         case "DROP":
//             let empArray = []
//             return empArray
        // case "UPDATE":
        //     let arr = [...state]
        //     arr.find((food, index) => {
        //         if (food.id === action.id) {
        //             console.log(food.qty, parseInt(action.qty), action.calorie + food.calorie)
        //             arr[index] = { ...food, qty: parseInt(action.qty) + food.qty, calorie: action.calorie + food.calorie }
        //         }
        //         return arr
        //     })
        //     return arr
        default:
             console.log("Error in Reducer");
   }
 };

  export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, []);

     return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
};

 export const useCart = () => useContext(CartStateContext);
 export const useDispatchCart = () => useContext(CartDispatchContext);