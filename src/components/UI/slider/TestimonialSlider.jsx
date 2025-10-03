import React from 'react'
import Slider from 'react-slick'

import avatar01 from '../../../assests/images/self.JPG'
import avatar02 from '../../../assests/images/fd1.jpg'
import avatar03 from '../../../assests/images/umar.jpg'
import avatar04 from '../../../assests/images/1.jpeg'
import avatar05 from '../../../assests/images/7.jpeg'

import '../../../styles/slider.css'

const TestimonialSlider = () => {

    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slideToScroll: 1
    }

    return (
       <Slider {...settings}>
         <div> 
          <p className='review__text'>
          “Ordering was so easy, and my food arrived hot and fresh. 
          Amsaj Kitchen has become my go-to whenever I’m hungry!”
            </p>
            <div  className='slider__contents d-flex align-items-center gap-3'>
            <img src={avatar01} alt='avata1' className='rounded' />
            <h6>John Doe</h6>
            </div>
          </div> 
          <div> 
           <p className='review__text'>
             “I love how fast the delivery is. No delays, no stress—just great food on time.”
            </p>
            <div className='slider__contents d-flex align-items-center gap-3'>
            <img src={avatar02} alt='avata3' className='rounded' />
            <h6>Balkeesu A.S</h6>
            </div>
         </div> 
          <div> 
           <p className='review__text'>
          “The customer support is excellent. I had a small issue once,
           and it was solved immediately. Very reliable service.”
            </p>
            <div className='slider__contents d-flex align-items-center gap-3'>
            <img src={avatar03} alt='avata2' className='rounded' />
            <h6>Comr Umar</h6>
            </div>
         </div> 
          <div> 
           <p className='review__text'>
          “Plenty of meal choices and everything tastes amazing. 
          It feels like restaurant dining, but right in my home.”
            </p>
            <div className='slider__contents d-flex align-items-center gap-3'>
            <img src={avatar04} alt='avata2' className='rounded' />
            <h6>Umaima I.</h6>
            </div>
         </div> 
          <div> 
           <p className='review__text'>
         “I like the pickup option a lot. I order on the app, grab it on my way, and save so much time.”
            </p>
            <div className='slider__contents d-flex align-items-center gap-3'>
            <img src={avatar05} alt='avata2' className='rounded' />
            <h6>Mallan Shatima</h6>
            </div>
         </div> 
       </Slider>
    )
}

export default TestimonialSlider


  
