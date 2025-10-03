import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import ProductCard from '../components/UI/product-card/ProductCard';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/shopping/cartSlice';
import products from '../assests/fake-data/products'; // ✅ FIXED: import products
import '../styles/foodDetails.css';

const FoodDetails = () => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [reviewMsg, setReviewMsg] = useState('');
  const [tab, setTab] = useState('desc');
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = products.find((product) => product.id === id); // ✅ FIXED
  const [previewImg, setPreviewImg] = useState(product?.image01 || '');
  const { title, price, category, desc, image01 } = product || {};

  const relatedProduct = products.filter( // ✅ FIXED: filter from products
    (item) => item.category === category && item.id !== id
  );

  const addItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(enteredName, enteredEmail, reviewMsg);
  };

  useEffect(() => {
    setPreviewImg(product?.image01 || '');
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) {
    return (
      <Helmet title="Not Found">
        <CommonSection title="Product Not Found" />
        <section className="text-center py-5">
          <h2>Sorry, the food item you're looking for does not exist.</h2>
        </section>
      </Helmet>
    );
  }

  return (
    <Helmet title='Product-Details'>
      <CommonSection title={title} />

      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="product__images">
                <div className="img__item" onClick={() => setPreviewImg(image01)}>
                  <img src={image01} alt="img" className="w-50" />
                </div>
                {product?.image02 && (
                  <div className="img__item" onClick={() => setPreviewImg(product.image02)}>
                    <img src={product.image02} alt="img" className="w-50" />
                  </div>
                )}
                {product?.image03 && (
                  <div className="img__item" onClick={() => setPreviewImg(product.image03)}>
                    <img src={product.image03} alt="img" className="w-50" />
                  </div>
                )}
              </div>
            </Col>

            <Col lg="4" md="4">
              <div className="product__main-img">
                <img src={previewImg} alt="img" className="w-100" />
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="single__product-content">
                <h2 className="product__title mb-3">{title}</h2>
                <p className="product__price">
                  Price<span> N{price}</span>
                </p>
                <p className="category mb-5">
                  Category: <span>{category}</span>
                </p>
                <button onClick={addItem} className="addToCart__btn">
                  Add to Cart
                </button>
              </div>
            </Col>

            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-5 py-3">
                <h6
                  className={`${tab === 'desc' ? 'tab__active' : ''}`}
                  onClick={() => setTab('desc')}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === 'rev' ? 'tab__active' : ''}`}
                  onClick={() => setTab('rev')}
                >
                  Review
                </h6>
              </div>

              {tab === 'desc' ? (
                <div className="tab__content">
                  <p>{desc}</p>
                </div>
              ) : (
                <div className="tab__form mb-3">
                  <div className="review pt-5">
                    <p className="user__name">John Doe</p>
                    <p className="user__email">JohnDoe@gmail.com</p>
                    <p className="feedback__text">Great product</p>
                  </div>

                  <form className="form" onSubmit={submitHandler}>
                    <div className="form__group">
                      <input
                        type="text"
                        placeholder="Name"
                        onChange={(e) => setEnteredName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form__group">
                      <input
                        type="email"
                        placeholder="cj@gmail.com"
                        onChange={(e) => setEnteredEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form__group">
                      <textarea
                        rows={5}
                        type="text"
                        placeholder="review....."
                        onChange={(e) => setReviewMsg(e.target.value)}
                        required
                      />
                    </div>
                    <button type="submit" className="addToCart__btn">
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </Col>

            <Col lg="12" className="mb-5 mt-4">
              <h2 className="related__product-title">You might also like...</h2>
            </Col>

            {relatedProduct.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
