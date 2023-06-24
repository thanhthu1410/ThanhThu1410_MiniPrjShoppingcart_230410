import Table from 'react-bootstrap/Table';
import { useDispatch } from 'react-redux';
import { deleteProduct, updateProduct } from '../stores/action';

function Cart({ cartStore }) {

  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const dispatch = useDispatch()
  const handleDelete = (id) => {
    dispatch(deleteProduct(id))
  }

  const handleUpdate = (id,newQuantity) => {
    dispatch(updateProduct({
      id : id ,
      newQuantity:newQuantity
    }))
  }

  return (
   <div className='cart-container'>
     <Table striped bordered hover size="sm" className='Cart'>
      <thead>
        <tr >
          <th colSpan={6} style={{ backgroundColor: "rgb(242, 222, 222)", color: "rgb(188, 31, 38)", textAlign: "left" }}> <h4 style={{ paddingLeft: "20px" }}>Your Cart</h4></th>
        </tr>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          cartStore.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{USDollar.format(item.price)}</td>
              <td><input className='inputQuantity' type="number" defaultValue={item.quantity} style={{ width: "50px" }} /></td>
              <td>{USDollar.format(item.quantity * item.price)}</td>
              <td className='actionButton'>
                <button className='delButton' onClick={() => handleDelete(item.id)}>Delete</button>
                <button onClick={() =>    
                  { let newQuantity = document.querySelector(".inputQuantity").value;
                  if(newQuantity) {
                    handleUpdate(item.id,newQuantity)
                  }
                   }} className='updateButton'>Update</button>
              </td>
            </tr>
          ))
        }
        <tr>
          <td colSpan={6} style={{ textAlign: "left" }}>There are 1 items in your shopping cart - SubTotal : 1</td>
        </tr>
      </tbody>
    </Table>
   </div>
  );
}

export default Cart;