import React, {useState} from 'react'
import  Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import {useSelector} from 'react-redux'

import '../styles/checkout.css'

const Checkout = () => {

    const [enterName, setEnterName] = useState('')
    const [enterEmail, setEnterEmail] = useState('')
    const [enterNumber, setEnterNumber] = useState('')
    const [enterCountry, setEnterCountry] = useState('')
    const [enterCity, setEnterCity] = useState('')
    const [entercode, setEntercode] = useState('')

    const shippingInfo = []
    const cartTotalAmount = useSelector(state => state.cart.totalAmount)
    const shippingCost = 800
    const totalAmount = cartTotalAmount + Number(shippingCost)

    const submitHandler = e =>{
        e.preventDefault()
        const userShippingAddress ={
            name: enterName,
            email: enterEmail,
            phone: enterNumber,
            country: enterCountry,
            city: enterCity,
            postalCode: entercode
        };

        shippingInfo.push(userShippingAddress)
        console.log(shippingInfo)
    };
    
    return (
       <Helmet title='Checkout' >
        <CommonSection title='Checkout' />
        <section >
         <Container>  
          <Row>
           <Col lg='8' md='6' className='checkout'>
            <h3 className='mb-4 fw-600'>Shipping Address</h3>
             <form className='checkout__form' onSubmit={submitHandler}>
              <div className='form__group'>
               <input type='text' placeholder='Name' required
                onChange={ e=> setEnterName(e.target.value) } />
                </div>
              <div className='form__group'>
               <input type='email' placeholder='Email' required
               onChange={e=> setEnterEmail(e.target.value)} />
              </div>
              <div className='form__group'>
               <input type='number' placeholder='Phone Number' required
                onChange={e=> setEnterNumber(e.target.value)} />
              </div>
              <div className='form__group'>
               <input type='text' placeholder='Country' required
               onChange={e=> setEnterCountry(e.target.value)} />
              </div>
              <div className='form__group city'>
               <input type='text' placeholder='City' required
               onChange={e=> setEnterCity(e.target.value)} />
              </div>
              <div className='form__group'>
               <input type='number' placeholder='Postal Code' required
               onChange={e=> setEntercode(e.target.value)} />
              </div>
              <button className='addToCart__btn'>Payment</button>
             </form>
            </Col>

           <Col lg='4' md='6'>
            <div className='checkout__bill'>
             <h6 className='d-flex align-items-center justify-content-between mb-3'>
                Subtotal: <span>N{cartTotalAmount}</span>
             </h6>
             <h6 className='d-flex align-items-center justify-content-between mb-3'>
                 Shipping: <span>N{shippingCost}</span>
             </h6>
             <div className='checkout__total'>
               <h5 className='d-flex align-items-center justify-content-between'>
               Total: <span>N{totalAmount}</span>
               </h5>
             </div>
            </div>
           </Col>
          </Row>
         </Container>
        </section>
       </Helmet>
    )
}

export default Checkout
