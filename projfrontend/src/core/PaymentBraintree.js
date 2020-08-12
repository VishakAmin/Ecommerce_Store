import React,{useState, useEffect} from 'react'
import { loadCart, cartEmpty } from './helper/CartHelper';
import { Link } from 'react-router-dom';
import { getmeToken, processPayment } from './helper/paymenthelper';
import {createOrder} from "./helper/orderhelper"
import DropIn from 'braintree-web-drop-in-react';
import { isAuthenticated } from '../auth/helper';
    

const PaymentBraintree = ({products, setReload = f  => f , reload = undefined}) =>  {
    const [info, setInfo] = useState({
        loading: false,
        success: false,
        clientToken: null,
        instance: {},
        error : ""
    })

    const userId = isAuthenticated() && isAuthenticated().user._id
    const token = isAuthenticated() && isAuthenticated().token
 
    
    const getToken = (userId, token) => {
        getmeToken(userId, token).then(info => {
            if (info.error){
                setInfo({...info, error: info.error})
            }else{
                const clientToken = info.clientToken
                setInfo({
                    clientToken
                })
            }
        })
    }
    useEffect(() => {
        getToken(userId, token); 
        
    }, [])


     const onPurchase = () => {
         setInfo({loading: true})
         let nonce;
         let getNonce =  info.instance
         .requestPaymentMethod()
         .then(data => {
             nonce =data.nonce
             const paymentData = {
                 paymentMethodNonce : nonce,
                 amount : getAmount()

             };
             processPayment(userId, token, paymentData)
             .then(response => {
                 setInfo({...info, success: response.success, loading: false}) 
                //TODO
                console.log("Payment Success");
                
                    const orderData ={
                        products: products,
                        transaction_id: response.transaction.id,
                        amount: response.transaction.amount,
                       
                        
                        
                    }
                    createOrder(userId, token, orderData);
                    cartEmpty(() => {
                        console.log("Dide we");
                })
                setReload(!reload)
                })
             .catch((error) => {
                console.log("Payment Failure",error);

                    setInfo({
                     loading: false,
                     success : false
                 })
             })
         })
     }   

    const getAmount = () => {
        let amount = 0;
        products.map(p => {
            amount = amount+p.price
        })
        return amount;
    }
    const showbtDropIn = () => (
        <div>
            {info.clientToken !== null && products.length > 0 ? (
                <div>
                    <DropIn
                    options={{ authorization: info.clientToken }}
                    onInstance={(instance) => (info.instance = instance)}
                    />
                    <button className="btn btn-success btn-block" onClick={onPurchase}>Buy</button>
                    </div>

                ): ( <h3>Please Login or add something to cart</h3>)}
        </div>

    )

    return (
        <div>
            <h3> Your Bill is ${getAmount()}</h3>
            {showbtDropIn()}
        </div>  
    )
}

export default PaymentBraintree;