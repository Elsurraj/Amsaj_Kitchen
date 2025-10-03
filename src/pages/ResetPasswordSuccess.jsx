import React from 'react'
import  Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import {Link} from 'react-router-dom'

const Login = () => {

    const submitHandler = e =>{
        e.preventDefault()
    };


    return (
        <Helmet title='Reset Password'>
         <CommonSection title='Reset Password' />
         <section>
          <Container>
           <Row>
            <Col lg='6' md='6' sm='12' className='m-auto text-center'>
             <form className='form mb-5' onSubmit={submitHandler}>
             <div className='reset__password-title'>
              <h5>Your Password Has been Successfully Updated </h5>
             </div>
             
              <button className='addToCart__btn'>
               <Link to='/login'>
               Login
               </Link>
              </button>
             </form>
            </Col>
           </Row>
          </Container>
         </section>
        </Helmet>
    )
}

export default Login
