import { Button } from 'primereact/button'
import React from 'react'
import './subTotal.css'
import { useSelector } from 'react-redux'
import { getTotal } from './redux/cardReducer'
import { Link } from 'react-router-dom'
function SubTotal(){
    const card = useSelector(state => state.card)
    return(
        <div className="subtotal">
            <Link to="/">
            <Button className="backbtn" label="Back"/>
            </Link>
            <div className="subtotal_area">
                <p>Subtotal ({card.card.length} items) : ${getTotal(card.card)} </p>
                <Button label="Proceed to Checkout"/>
            </div>
            
        </div>
    )
}
export default SubTotal