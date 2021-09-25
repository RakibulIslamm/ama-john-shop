import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import { Rating } from 'semantic-ui-react';
import RatingExampleStar from '../Ratings/Ratings';


const Product = (props) => {
    // console.log(props)
    const { name, category, img, price, star, starCount, stock, features, seller } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;



    const cartItems = props.cart.find(product => product.key.includes(props.product.key));
    // console.log(cartItems)


    return (
        <div className="single-product">
            <div className="product-details">
                <div className="product-img">
                    <img src={img} alt="" />
                </div>
                <div className="product-feature">
                    <h2>{name}</h2>
                    <p><b>Category: {category}</b></p>
                    <p>By: {seller}</p>
                    <div className="item-description">
                        <div>
                            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>${price}</p>
                            <Rating icon='star' defaultRating={star} maxRating={5} disabled />
                            <p>Total Ratings: {starCount}</p>
                            <p>only {stock} left in stock - order soon</p>
                            {/* <button onClick={() => props.handleCart(props.product)} className="cart-button">{cartIcon} Add to cart</button> */}
                            {
                                !cartItems ? <button onClick={() => props.handleCart(props.product)} className="cart-button">{cartIcon} Add to cart</button> : <button className="cart-button" disabled>{cartIcon} Already Added</button>
                            }
                        </div>
                        <div>
                            <h4>Feature</h4>
                            {
                                features.map(feature => <li key={feature.description}>{feature.description} {feature.value}</li>)
                            }
                            <RatingExampleStar></RatingExampleStar>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;