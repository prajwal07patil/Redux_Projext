import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Imagecart from './images/cart_img1.png';
function Header(){
    const card = useSelector(state => state.card)
    return(
        <div className="header">
            <div className="header_end">
                <div>Home</div>
                <div>                
                <Link to="/checkout" style={{textDecoration:"none", color:"white"}}>
                <div  className="header_cart"><img className="cart_img" src={Imagecart} alt="logo"/> <strong>{card.card.length}</strong></div>
                </Link>
                </div>
            </div>
        </div>
    )
}
export default Header