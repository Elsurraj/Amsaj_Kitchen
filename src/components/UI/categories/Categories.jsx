import React from 'react'

import { Container, Row, Col } from 'reactstrap'

import categoryImg01 from "../../../assests/images/category-01.jpeg";
import categoryImg02 from "../../../assests/images/category-02.jpg";
import categoryImg03 from "../../../assests/images/category-03.jpg";
import categoryImg04 from "../../../assests/images/category-04.jpeg";

const categoryData = [
    {
        display: 'FastFood',
        imgUrl: categoryImg01
    },
    {
        display: 'Pizza',
        imgUrl: categoryImg02
    },
    {
        display: 'Local Food ',
        imgUrl: categoryImg03
    },
    {
        display: 'RowMeat',
        imgUrl: categoryImg04
    },
]

const Categories = () => {
    return (
       <Container>
        <Row>
          {
              categoryData.map((items,index) =>
                <Col lg='3' md='4' sm='6' xs='6' key={index} className='mb-4'>
                    <div className='category__item d-flex align-items-center gap-3'>
                      <div className='category__img' >
                        <img src={items.imgUrl} alt='category__item' />
                      </div>
                        <h6>{ items.display }</h6>
                    </div>
                </Col>
              )
          }
        </Row>
       </Container>
    )
}

export default Categories
