import { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "./constant"

export const addProduct = (payload) => ({
    type: ADD_PRODUCT,
    payload: payload
})

export const deleteProduct = (id) => ({
        type : DELETE_PRODUCT,
        id : id  
})

export  const updateProduct = (payload) => ({
    type : UPDATE_PRODUCT,
    payload : payload 
})
