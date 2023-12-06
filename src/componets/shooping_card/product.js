import React from 'react'
import { Button } from 'primereact/button';
import './product.css'
import { useDispatch } from 'react-redux';
import { addtocard } from './redux/cardAction';

function Product({id,title,price,image}){
    const dispatch = useDispatch()
    return(
        <div className="product">
            <h4>{title}</h4>
            <p>{price}</p>
            <img src={image} alt=""></img>
            <Button onClick={() => dispatch(addtocard(id,title,price,image))} label="Add to Card" />
        </div>
    )
}
export default Product