import React, {useRef} from 'react'
import  Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import {Link} from 'react-router-dom'

const Login = () => {

    const ResetPasswordRef = useRef()
    const ConfrimResetPasswordRef = useRef()

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
              <h4 className='fw-600 mb-5'>Reset Your Password</h4>
             </div>
              <div className='form__group'>
               <input type='password' placeholder='New Password' required ref={ResetPasswordRef} />
              </div>
              <div className='form__group'>
               <input type='password' placeholder='Confirm Password' required ref={ConfrimResetPasswordRef} />
              </div>
              <button className='addToCart__btn'>
               <Link to='/resetpasswordsuccessfull'>
                Update Password
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
