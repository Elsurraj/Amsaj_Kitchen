import React from 'react'
import { ListGroupItem } from 'reactstrap'
import {useDispatch } from 'react-redux'
import { cartActions } from '../../../store/shopping/cartSlice'

//import  productImg from '../../../assests/images/cheeseb02.jpeg'
import '../../../styles/cartitem.css'  

const CartItem = ( {item} ) => {

  const {id, price, title, image01, quantity, totalPrice} = item
  const dispatch = useDispatch()

  const incrementItem = () => {
    dispatch(
      cartActions.addItem({
      id,
      title,
      price,
      image01
    })
    );
  };

  const decreaseItem = () =>{
    dispatch(cartActions.removeItem(id))
  }

  const deleteItem = () =>{
    dispatch(
      cartActions.deleteItem(id)
    )
  }

    return (
      
      <div>
      <ListGroupItem className='border-0 cart__item' key={id}>
        <div className='cart__item-info d-flex gap-2' >
             <img src= {image01} alt='product' />
             <div className='cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between'>
               <div>
                 <h6 className='cart__product-tittle'> {title} </h6>  
                 <p className='cart__product-price d-flex align-items-center gap-5'>
                     {quantity}x <span> {totalPrice} </span>
                 </p>
                 <div className='increase__decrease-btn d-flex align-items-center justify-content-between'>
                    <span className='inrease__btn' onClick={incrementItem}>
                   <i className='ri-add-line'></i>
                    </span>
                    <span className='quantity'>{quantity}</span>
                    <span className='decrease__btn' onClick={decreaseItem}>                        
                         <i className='ri-subtract-line'></i>
                    </span>
                 </div>
               </div>
               <span className='delete__btn' onClick={deleteItem}> 
                  <i className='ri-close-line'></i>
               </span>
             </div>
        </div>
    </ListGroupItem>
   </div>
    )
}

export default CartItem
