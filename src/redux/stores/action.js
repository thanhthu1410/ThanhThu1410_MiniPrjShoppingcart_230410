import { ADD_PRODUCT, DELETE_PRODUCT } from "./constant"

export const addProduct = (newProduct) => ({
  
    type: ADD_PRODUCT,
    newProduct: newProduct

})

export const deleteProduct = (id) => ({
        type : DELETE_PRODUCT,
        id : id  
})

