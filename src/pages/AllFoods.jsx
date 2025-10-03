import React, { useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import products from '../assests/fake-data/products';
import ProductCard from '../components/UI/product-card/ProductCard';
import ReactPaginate from 'react-paginate';

import '../styles/allFoods.css';
import '../styles/pagination.css';

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pageNumber, setPageNumber] = useState(0);

  const productPerPage = 12;
  const visitedPage = pageNumber * productPerPage;

  // Filter products by search
  const filteredProducts = products.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic on filtered results
  const displayPage = filteredProducts.slice(
    visitedPage,
    visitedPage + productPerPage
  );
  const pageCount = Math.ceil(filteredProducts.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Helmet title='All-Foods'>
      <CommonSection title='All Foods' />

      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='6' xs='12'>
              <div className='search__widget d-flex align-items-center justify-content-between'>
                <input
                  type='text'
                  placeholder='Searching for .....'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i className='ri-search-line'></i>
                </span>
              </div>
            </Col>

            <Col lg='6' md='6' sm='6' xs='12' className='mb-5'>
              <div className='sorting__widget text-end'>
                <select className='w-50'>
                  <option>Default</option>
                  <option value='ascending'>Alphabetically A-Z</option>
                  <option value='descending'>Alphabetically Z-A</option>
                  <option value='higher-price'>High Price</option>
                  <option value='lower-price'>Lower Price</option>
                </select>
              </div>
            </Col>

            {displayPage.map((item) => (
              <Col
                lg='3'
                md='4'
                sm='6'
                xs='6'
                key={item.id}
                className='mb-4'
              >
                <ProductCard item={item} />
              </Col>
            ))}

            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel='Prev'
                nextLabel='Next'
                containerClassName='paginationBttns'
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;
