import React, {useRef} from 'react'
import  Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import {Link} from 'react-router-dom'

const Login = () => {

    const ResetEmailRef = useRef()

    const submitHandler = e =>{
        e.preventDefault()
    };
    const AlertBtn = () =>{
        alert('Check Your email for the Verification Link')
    }


    return (
        <Helmet title='Reset Password'>
         <CommonSection title='Reset Password' />
         <section>
          <Container>
           <Row>
            <Col lg='6' md='6' sm='12' className='m-auto text-center'>
             <form className='form mb-5' onSubmit={submitHandler}>
             <div className='reset__password-title'>
              <h5>Enter your email address and we'll send you a link to reset your password </h5>
             </div>
              <div className='form__group'>
               <input type='email' placeholder='Email' required ref={ResetEmailRef} />
              </div>
              <button className='addToCart__btn'>
               <Link to='/resetpassword' onClick={AlertBtn }>
                Reset Password
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
