import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Header(){
    const card = useSelector(state => state.card)
    return(
        <div className="header">
            <div className="header_end">
                <Link to="/checkout" style={{textDecoration:"none", color:"white"}}>
                <span>Card <strong>{card.card.length}</strong></span>
                </Link>
            </div>
        </div>
    )
}
export default Header