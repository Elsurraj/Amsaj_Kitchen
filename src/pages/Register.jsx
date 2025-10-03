import React, {useRef} from 'react'
import  Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import {Link} from 'react-router-dom'

const Register = () => {

    const signupNameRef = useRef()
    const signupEmailRef = useRef()
    const signupPasswordRef = useRef()

    const submitHandler = e =>{
        e.preventDefault()
    };


    return (
        <Helmet title='Signup'>
         <CommonSection title='Signup' />
         <section>
          <Container>
           <Row>
            <Col lg='6' md='6' sm='12' className='m-auto text-center'>
             <form className='form mb-5' onSubmit={submitHandler}>
             <div className='form__group'>
               <input type='text' placeholder='FullName' required ref={signupNameRef} />
              </div> 
             <div className='form__group'>
               <input type='email' placeholder='Email' required ref={signupEmailRef} />
              </div>
              <div className='form__group'>
               <input type='password' placeholder='Password' required ref={signupPasswordRef} />
              </div>
              <button className='addToCart__btn'>Sign Up</button>
             </form>
             <div className='Register__link-btn'>
              Already have an account? 
              <Link to='/login'>
               Login
             </Link>
             </div>
            </Col>
           </Row>
          </Container>
         </section>
        </Helmet>
    )
}

export default Register
