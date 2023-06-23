// // import { useSelector } from "react-redux";
// import { DELETE_PRODUCT } from "./constant";

// const initState = JSON.parse(localStorage.getItem("listProducts"))||[];
// // const initState = useSelector(state => state.cartReducer)
// const CartReducer = (state = initState, action) => {
//     switch ( action.type){
//         case DELETE_PRODUCT :
//             console.log("11111",state);
//                 const filterProduct = state.filter((item) => item.id != action.id)
//                 console.log(filterProduct)
//                 localStorage.setItem('listProducts', JSON.stringify(filterProduct) )
//                 return filterProduct;
                
//         default:
//              return state
//     }

// }
// export default CartReducer;

