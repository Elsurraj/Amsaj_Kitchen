import React, {useState, useEffect} from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import {Link} from 'react-router-dom'

import Helmet from '../components/Helmet/Helmet';
import Category from '../components/UI/categories/Categories'
import products from '../assests/fake-data/products';
import ProductCard from '../components/UI/product-card/ProductCard'
import TestimonialSlider from '../components/UI/slider/TestimonialSlider';

import Heroimg from "../assests/images/hero002.jpeg";
import whyImg from '../assests/images/whyImg.jpeg'
import networkImg from '../assests/images/networkingImg.webp'

import featureImg01 from "../assests/images/Avatarlogo-1.jpeg";
import featureImg02 from "../assests/images/aavatar02.png";
import featureImg03 from "../assests/images/avatar01.jpg";

import foodcategoryImg01 from '../assests/images/meatlogo.jpeg'
import foodcategoryImg02 from '../assests/images/bread.jpeg'
import foodcategoryImg03 from '../assests/images/pizza.jpeg'
import foodcategoryImg04 from '../assests/images/local.jpeg'


import '../styles/home.css'
import '../styles/hero-section.css'


const featureData = [
    {
        title: '⚡ Quick Delivery',
        imgUrl: featureImg02,
        desc: 'Get your food fast and fresh. Our reliable couriers ensure every order arrives on time, so you never have to wait long to enjoy your meal.'
    },
    {
        title: '🍽️ Super Dine-In',
        imgUrl: featureImg01,
        desc: 'Enjoy the finest dining experience from the comfort of your home. Choose from top chefs and savor every bite with quality service you can trust.'
    },
    {
        title: '🛍️ Easy Pick-Up',
        imgUrl: featureImg03,
        desc: 'Skip the wait! Order ahead, swing by your favorite restaurant, and grab your meal fresh and ready—right on time.'
    },
]

const Home = () => {

  const [category, setCategory] = useState('ALL')
  const [allProducts, setAllProducts] = useState(products)

  const [hotPizza, setHotPizza] = useState([])

  useEffect(() =>{
    const filteredPizza = products.filter( item => item.category === 'Pizza')
    const slicePizza = filteredPizza.slice(0,4)
    
    setHotPizza(slicePizza)

  }, [])

  useEffect(() =>{
    if(category ==='ALL'){
      setAllProducts(products)
    }

    if(category === 'BURGER'){
      const filteredProducts = products.filter(items => items.category ==='Burger')

      setAllProducts(filteredProducts)
    }

    if(category === 'BREAD'){
      const filteredProducts = products.filter(items => items.category ==='Bread')

      setAllProducts(filteredProducts)
    }

    if(category === 'PIZZA'){
      const filteredProducts = products.filter(items => items.category ==='Pizza')

      setAllProducts(filteredProducts)
    }

    if(category === 'LOCAL'){
      const filteredProducts = products.filter(items => items.category ==='Local')

      setAllProducts(filteredProducts)
    }

   

  },[category])





    return (
        <Helmet title="Home">
        <section>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className='hero__content'>
                      <h5 className='mb-3'>Easy way to make order</h5>
                      <h1 className='mb-4 hero__title' > 
                      <span>HUNGRY? </span>
                      Just relax <br /> we
                      <span> ’ve got you.</span>
                      </h1>
                      <p>Browse your favorite food, 
                      place an order in seconds, and <br/> enjoy hassle-free 
                      delivery right to your doorstep.
                      </p>

                     <div className='hero__btns d-flex align-items-center gap-5 mt-4 '>
                     <button className='order__btn d-flex align-items-center justify-content-between'>
                        Order Now <i className='ri-arrow-right-s-line'></i>
                     </button>

                     <button className="all__foods-btn">
                        <Link to='/foods'>See all foods</Link>
                     </button>
                     </div>

                        <div className='hero__service d-flex align-items-center gap-5 mt-5'>
                        <p className='d-flex align-items-center gap-2'><span className='shipping__icon'>
                        <i className='ri-car-line'></i></span>{' '} No shipping fee</p>

                        <p className='d-flex align-items-center gap-2'><span className='shipping__icon'>
                        <i className='ri-shield-check-line'></i></span>{' '}  100% secure chekedout</p>

                    </div>
                    </div>
                </Col>

                <Col lg='6' md='6'>
                    <div className='hero__img'>
                    <img src={Heroimg} alt='hero-img' className='w-40' />
                    </div>
                </Col>
            </Row>  
            </Container>

     {/* --------- Category__item-Section -------- ) */}
          <section className='pt-5'>
            <Category />
          </section>
          
          <section>
          <Container>
            <Row>
             <Col lg='12' className='text-center'>
                <h5 className='feature__subtitle mb-4'>What we serve</h5>
                <h2 className='feature__title'>Just sit back at home</h2>
                <h2 className='feature__title'>
                we will <span>Take care of the rest <br/>
               
                </span>
                </h2>
                <p className='mb-1 mt-4'>
               Explore a wide variety of meals, snacks, and drinks from trusted restaurants and caterers. 
               Place your order, relax, and let us handle the cooking and delivery.
                </p>                                                                   
             </Col>
                {
                    featureData.map((item,index) =>
                        <Col lg='4' md='6' sm='6' key={index} className='mt-5'>
                        <div className='feature__item text-center px-5 py-3'> 
                        <img src={item.imgUrl}
                             alt='service-icon' 
                             className='w-25 bm-3' />
                        <h5 className='fw-bold'>{item.title}</h5>
                        <p 
                        style={{
                          textAlign: "justify",
                          marginTop:'20px'
                          }}
                        >
                         {item.desc}
                          </p>
                        </div>
                        </Col>
                    )
                }

            </Row>
          </Container>
          </section>

          <section>
          <Container>
            <Row>
              <Col lg='12'>
                <h2  className='text-center font-weight'>Popular Product</h2>
              </Col>

              <Col lg='12'>
                <div className='food__category text-center d-flex align-items-center justify-content-center gap-5'>
                 <button 
                  onClick={() => setCategory('ALL')}
                  className={`all__btn ${category === 'ALL' ? 'foodBtnActive' : ''} `}
                  >All</button>
                  <button  
                  onClick={() => setCategory('LOCAL')}
                  className={`d-flex align-items-center gap-2 ${category === 'LOCAL' ? 'foodBtnActive' : '' } `}  > 
                    <img src={foodcategoryImg04} alt='p3'
                     /> Local</button>
                 <button  
                  onClick={() => setCategory('BURGER')}
                  className={`d-flex align-items-center gap-2 ${category === 'BURGER' ? 'foodBtnActive' : ''} `}  >
                  <img src={foodcategoryImg01} alt='p1' /> Burger </button>
                 <button 
                  onClick={() => setCategory('BREAD')}
                  className={`d-flex align-items-center gap-2 ${category === 'BREAD' ? 'foodBtnActive' : '' } `}  > 
                   <img src={foodcategoryImg02} alt='02' 
                   /> Bread </button>
                 <button  
                  onClick={() => setCategory('PIZZA')}
                  className={`d-flex align-items-center gap-2 ${category === 'PIZZA' ? 'foodBtnActive' : '' } `}  > 
                    <img src={foodcategoryImg03} alt='p3'
                     /> Pizza</button>
                   
                </div>
              </Col>

              {
                  allProducts.map(item =>(
                      <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mt-5'>
                       <ProductCard item={item} />
                      </Col>
                  ))
              }
            </Row>
          </Container>
          </section>

        </section>

        <section className='why__choose-us'>
        <Container>
         <Row>
           <Col lg='6' md='6' className='why__Amsaj-kitchen-Img'>
            <img src={whyImg} alt='whyImg' className='' />
           </Col>

           <Col lg='6' md='6'>
            <div className='why__AmsajKitchen'>
             <h2 className='why__AmsajKitchen-title mb-4'>
             Why <span>Amsaj Kitchen?</span>
             </h2>
             <p className='Amsaj__Kitchen-desc' >
              We make food ordering simple, reliable, and enjoyable. Here’s why customers love us:
             </p>
              <ListGroup className='mt-4 list__Group'>
               <ListGroupItem className='ps-0 border-0'>
                <p className='choose__us-title d-flex align-items-center gap-2'> <i className='ri-checkbox-circle-line'></i>
                 Fresh and Tasty Foods </p>
                 <p className='choose__us-desc'>
                Our meals are carefully prepared with quality ingredients 
                to keep every bite fresh, healthy, and delicious.</p>
               </ListGroupItem>

               <ListGroupItem className='ps-0 border-0'>
                 <p className='choose__us-title d-flex align-items-center gap-2'><i className='ri-checkbox-circle-line'></i>
                 Quality Support</p>
                 <p className='choose__us-desc'>
                  Our team is always here to help—whether it’s tracking your order,
                   handling issues, or answering your questions.
                 </p>
               </ListGroupItem>

               <ListGroupItem className='ps-0 border-0'>
               <p className='choose__us-title d-flex align-items-center gap-2'><i className='ri-checkbox-circle-line'></i>
               Order from any Location</p>
                <p className='choose__us-desc'>
                  Wherever you are, Amsaj Kitchen brings your favorite meals to your doorstep—fast,
                   easy, and stress-free.
                </p>
               </ListGroupItem>
              </ListGroup>
            </div>
           </Col>
         </Row>
        </Container>
        </section>

        <section className='pt-0'>
         <Container>
          <Row>
           <Col lg='12' className='text-center mb-5'>
           <h2>Hot Pizza</h2>
           </Col>
           {
             hotPizza.map((item) =>(
               <Col lg='3' md='4' key={item.id} >
                 <ProductCard item={item} />
               </Col>
             ))
           }
          </Row>
         </Container>
        </section>

        <section>
         <Container>
          <Row>
           <Col lg='6' md='6'>
           <div className='testimonial '>
            <h5 className='testimonial__subtitle mb-4'>Testimonial</h5>
            <h2 className='testimonial__title mb-4'>
            What our <span> Customers</span> are saying
            </h2>
            <p className='testimonial__desc'>
           Here’s what happy customers think about Amsaj Kitchen:
            </p>
          <TestimonialSlider/>
           </div>
           </Col>

           <Col lg='6' md='6' className='networkImg'>
           <img src={networkImg} alt='img' className='w-100' /> 
           </Col>
          </Row>
         </Container>
        </section>

        </Helmet>
    )
}

export default Home;