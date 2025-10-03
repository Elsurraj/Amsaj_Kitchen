import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/shopping/cartSlice';

import '../../../styles/productcard.css';

const ProductCard = (props) => {
    const { id, title, image01, price } = props.item;
    const dispatch = useDispatch();

    const addToCart = () => {
      dispatch(cartActions.addItem({
        id,
        title,
        image01,
        price, 
      }));
    };

    return (
        <div className='product__item'>
            <div className='product__img'>
                <img src={image01} alt='product-img' className='' />
            </div> 

            <div className='product__content'>
                {/* Corrected template literal here */}
                <h5><Link to={`/foods/${id}`} >{title}</Link></h5> 
                <div className='d-flex align-items-center justify-content-between'>
                    <span className='product__price'>N{price}</span>
                    <button className='addToCart__btn' onClick={addToCart}>Add to cart</button>
                </div> 
            </div>         
        </div>
    );
};

export default ProductCard;