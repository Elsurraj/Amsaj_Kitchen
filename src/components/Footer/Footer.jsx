import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

import Logo from '../../assests/images/logo.jpg';
import '../../styles/footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
        <Container >
          <Row>
            <Col lg='3' md="4" sm="6">
              <div className='logo footer__logo text-star'>
              {  <img src={Logo} alt='logo' /> }   
                <h5>'</h5>
                <p>Delicious food, delivered straight to your door.</p>
            </div>
            </Col>

            <Col lg='3' md="4" sm="6" className='center'>
            <h5 className="footer__tittle">Delevery Time</h5>
            <ListGroup className='delivery__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>
                <ListGroupItem className='delivery__time-item border-0 ps-0'>
                  <span>Friday - Saturday </span>
                  <p>Off Day</p>
                </ListGroupItem>
            </ListGroup>
            </Col>

            <Col lg='3' md="4" sm="6" className='center'>
            <h5 className="footer__tittle">Contact</h5>
            <ListGroup className='delivery__time-list'>
            <ListGroupItem className='delivery__time-item border-0 ps-0'>
            <span>Location:  Street 138, Plateau State</span>
          </ListGroupItem>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Phone: +2347061329623</span>
              </ListGroupItem>
                <ListGroupItem className='delivery__time-item border-0 ps-0'>
                  <span>Email: elsurraj@gmail.com</span>
                </ListGroupItem>
            </ListGroup>
            </Col>

            <Col lg='3' md="4" sm="6" className='center'>
            <h5 className="footer__tittle ">NewsLetter</h5>
             <p> Subscribe our Newsletter </p>
             <div className='newsletter'>
              <input type='email' placeholder='Enter your email'/>
              <span><i className="ri-send-plane-line"></i></span>
             </div>
            </Col>
          </Row>

      <Row className='mt-5'>
         <Col lg='6' md="6">
          <p className='copyright-text'>  &copy; {new Date().getFullYear()} Design & Developed by Suraj - All rights reserved.</p>
         </Col>

      <Col lg='6' md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end ">
              <p className='m-0'>Follow us</p>
              <span><Link to="https://www.facebook.com/surraj.ahmeed.abubakharHardo">
                  <i className="ri-facebook-line"></i>
              </Link></span>

              <span><Link to="https://www.github.com/elsurraj">
                  <i className="ri-github-line"></i>
              </Link></span>

              <span><Link to="https://wa.me/2347061329623">
                  <i className="ri-whatsapp-line"></i>
              </Link></span>

              <span><Link to="">
                  <i className="ri-linkedin-line"></i>
              </Link></span>
            </div>
       </Col>
      </Row>
        </Container>
        </footer>
    )
}

export default Footer
