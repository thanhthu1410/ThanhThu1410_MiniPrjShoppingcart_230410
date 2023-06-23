import { ADD_PRODUCT, DELETE_PRODUCT } from "./constant"

const listProducts = [
    {
        id: 0,
        img: "../image/donut1.jpg",
        name: "A Baker’s Wife",
        desc: "Calling A Baker’s Wife a donut shop could be a bit of a misnomer.",
        price: 10,
        quantity: 1

    },
    {
        id: 1,
        img: "../image/donut2.jpg",
        name: "Allie’s Donuts",
        desc: "While the gorgeous shock-of-pink Mexican Hibiscus donut is among the best-known flavors at Dough ",
        price: 12,
        quantity: 1
    },
    {
        id: 2,
        img: "../image/donut3.jpg",
        name: "Ring's Donut",
        desc: "Ring doughnuts are formed by one of two methods  ",
        price: 14,
        quantity: 1
    },
    {
        id: 3,
        img: "../image/donut4.jpg",
        name: "Fan-Fan Donut",
        desc: "In a quirk of (pandemic) fate, acclaimed pastry chef and cookbook author Fany Gerson launched her newest spot Fan-Fan ",
        price: 15,
        quantity: 1
    }
]

const initState = {
    products: listProducts,
    cart: []
}

const addToCartReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            localStorage.setItem("Cart", JSON.stringify([...state.cart, action.newProduct]))
            return {
                ...state,
                cart: [...state.cart, action.newProduct]
            }
        case DELETE_PRODUCT:
            localStorage.setItem("Cart", JSON.stringify(state.cart.filter((product) => product.id !== action.id)))
            return {
                ...state,
                cart: state.cart.filter((product) => product.id !== action.id)
            }

        default:
            return {
                ...state,
                cart: JSON.parse(localStorage.getItem("Cart")) || []
            }
    }
}
export default addToCartReducer;