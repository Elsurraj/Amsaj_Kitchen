import React, {useRef} from 'react'
import  Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
//import {Link} from 'react-router-dom'

const Contact = () => {

    const loginNameRef = useRef()
    const loginPasswordRef = useRef()

    const submitHandler = e =>{
        e.preventDefault()
    };

   
    return (
         <Helmet title='Contact'>
                <CommonSection title='Get in Touch' />
                <section>
                 <Container>
                  <Row>
                   <Col lg='6' md='6' sm='12' className='m-auto text-center'>               
                    <div className='w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center'>              
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.270669807179!2d8.898859574076662!3d9.911400374554942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10537364b76874f3%3A0x9825ba962f90efae!2sNababa%20Car%20Wash!5e0!3m2!1sen!2sng!4v1749797554266!5m2!1sen!2sng'
                        width="500"
                        height="500"
                        style={{ border: 0 }} 
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                    </div>
                   </Col>
                   <Col lg='6' md='6' sm='12' className='m-auto text-center'>
                        <form className='form mb-5' onSubmit={submitHandler}>
                          <h1 className='mb-4 hero__title' > <span>Feedback </span>      </h1>
                                      <div className='form__group'>
                                       <input type='name' placeholder='Fullname' required ref={loginNameRef} />
                                      </div>
                                      <div className='form__group'>
                                       <input type='email' placeholder='Email' required ref={loginNameRef} />
                                      </div>
                                      <div className='form__group'>
                                       <textarea name="" placeholder="Mesage......" cols="20" rows="6" />
                                      </div>
                                      <button className='addToCart__btn'>Submit</button>                                      
                                     </form>                                     
                   </Col>
                  </Row>
                 </Container>
                </section>
               </Helmet>
    )
}

export default Contact
