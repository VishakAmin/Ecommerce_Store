import React, { useState, useEffect } from 'react'
import "../styles.css"
import { API } from '../backend'
import Base from './Base'
import Card from './Card'
import { loadCart } from './helper/CartHelper'
import PaymentBraintree from './PaymentBraintree'


const Cart = () => {
    const [products, setProducts] = useState([]);
    const [reload, setReload] = useState(false)


    useEffect(() => {
        setProducts(loadCart())

    }, [reload]);

    const loadAllProducts = (products) => {
        return (
            <div>
                <h2>
                    This Section is to load Products</h2>
                {products.map((product, index) => (
                    <Card
                        key={index}
                        product={product}
                        removeFromCart={true}
                        addtoCart={false}
                        setReload={setReload}
                        reload={reload}
                    />
                ))}
            </div>
        )
    };

    const loadCheckout = () => {
        return (
            <div>
                <h2>
                    This Section is to load Checkout</h2>
            </div>
        )
    }

    return (
        <Base title="Cart Page" description="Ready To Checkout">
            <div className="row text-center">
                <div className="col-6">
                    {products.length>0 ? loadAllProducts(products): (<h3>No products in Cart</h3>)}
                </div>
                <div className="col-6">
                    <PaymentBraintree products ={products} setReload={setReload}/>
                </div>
            </div>
        </Base>
    )
}
export default Cart;