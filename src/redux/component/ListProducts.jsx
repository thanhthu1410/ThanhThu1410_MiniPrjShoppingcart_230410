import React, { useState } from 'react'

import { addProduct } from '../stores/action';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';


export default function ListProducts({productStore}) {
    const dispatch = useDispatch()
    const handleAddProduct = (item, index) => {   
        dispatch(addProduct(item))
    }
    return (
        <div className='containerAll'>
            <div className='container-left'>
                <div className='header' >
                    <h4 style={{paddingLeft:"20px", color: "#fff"}}> List Products</h4>
                </div>
                <div className='renderList'>
                    {
                        productStore.map((item, index) => (
                            <Product item={item} key={index} handleAddProduct={handleAddProduct}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
