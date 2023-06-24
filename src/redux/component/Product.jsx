import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addProduct } from '../stores/action';


export default function Product({item}) {
    const USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });

      const dispatch = useDispatch();
    
      function formSubmit(event, product) {
        event.preventDefault();
        dispatch(addProduct({
            product: product,
            quantity: parseInt(event.target.quantity.value)
        }))
      }
   
    return (
        <div style={{ display: "flex" }} >
            <Card key={item.id} className='itemDetail'>
                <Card.Img className='iamgeItem' variant="top" src={item.img} />
                <Card.Body className='itemInfo'>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text style={{ fontSize: "14px" }}>
                        {item.desc}
                    </Card.Text>
                </Card.Body>
            </Card>
            <form className='action' onSubmit={(e) => formSubmit(e, item)}>
                <input style={{ textAlign: "center" }} type="number" name="quantity" defaultValue={1}/>
                <button style={{backgroundColor:"#ff6633", border:"none"}}>{USDollar.format(item.price)}</button>
            </form>
        </div>
    )
}

