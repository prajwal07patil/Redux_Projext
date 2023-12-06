import React from 'react'
import './checkout.css'
import { Button } from 'primereact/button';
import { useSelector } from 'react-redux'
import SubTotal from './subTotal';
import { useDispatch } from 'react-redux';
import {removefromcard} from './redux/cardAction'
function Checkout(){
    const dispatch = useDispatch()
    const card = useSelector(state => state.card)
    return(
        <div className="checkout">
            <div className="checkout_items">
                <h2>Your Shooping Card</h2>
            {card.card.map(item =>{
                return(
                    <div className="checkout_product">
                    <img src={item.image} alt="image1"></img>
                    <div className="product_info">
                        <h4>{item.title}</h4>
                        <p>{item.price}</p>
                        <Button onClick={() => dispatch(removefromcard(item.id))} label="Remove from Crad" />
                    </div>
                    </div>
                )
            })}
            </div>
            <div className="subtotal">
            <SubTotal/>
            </div>
        </div>
    )
}
export default Checkout
