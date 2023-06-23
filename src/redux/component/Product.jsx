import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';


export default function Product({ item, handleAddProduct}) {
    const [quantity, setQuantity] = useState(1)
    const USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });
   
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
            <div className='action'>
                <input style={{ textAlign: "center" }} type="number" onChange={(e) => setQuantity(e.target.value)} value={quantity} />
                <button style={{backgroundColor:"#ff6633", border:"none"}} onClick={() => {
                    handleAddProduct({ ...item, quantity: quantity });
                }}>{USDollar.format(item.price)}</button>
            </div>
        </div>
    )
}
