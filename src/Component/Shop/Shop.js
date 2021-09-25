import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [searchResult, setSearchResult] = useState([])
    // console.log(products);


    // cart functionality
    const handleCart = (product) => {
        const newCart = [...cart];
        // console.log(newCart);
        const existing = cart.find(c => c.key === product.key);
        if (existing) {
            product.quantity += 1;
        }
        else {
            product.quantity = 1;
            newCart.push(product);
        }
        setCart(newCart);
        addToDb(product.key);
    }


    // For Display Products
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setSearchResult(data);
            })
    }, [])

    // load storage products
    useEffect(() => {
        const savedCart = getStoredCart();
        const storeCart = [];
        if (products.length) {
            for (const key in savedCart) {
                const addedProduct = products.find(product => key === product.key);
                if (addedProduct) {
                    const quantity = savedCart[key]
                    // console.log(key, quantity);
                    addedProduct.quantity = quantity;
                    storeCart.push(addedProduct);
                }
            }
            setCart(storeCart);
        }
    }, [products])

    // Search Funtionality
    const handleSearch = (event) => {
        const searchText = event.target.value;
        const matchedProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setSearchResult(matchedProduct);
    }


    return (
        <>
            <div className="inpute-field">
                <input onChange={handleSearch} type="text" placeholder="Search Product" />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        searchResult.map(product => <Product key={product.key} product={product} handleCart={handleCart} cart={cart}></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;