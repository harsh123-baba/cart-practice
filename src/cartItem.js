import React, { Component } from 'react';

const CartItem = (props) =>{
    const {price, title, qty, img} = props.product;
    return (
        <div className='cart-item'>
            <div className='l eft-block'>
                <img style={styles.image}  src ={img}/>
            </div>
            <div className='right-block'>
                <div >{title}</div>
                <div >RS {price}</div>
                <div >Qty : {qty}</div>
                <div className='cart-item-actions'>
                    <img className='action-icons' onClick={()=>{props.onIncreaseQty(props.product)}} src="https://cdn-icons-png.flaticon.com/512/992/992651.png" />
                    <img className='action-icons' onClick={()=>{props.onDecreaseQty(props.product)}} src="https://cdn-icons-png.flaticon.com/512/992/992683.png" />
                    <img className='action-icons' onClick={()=>{props.onDelete(props.product)}} src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" />
                </div>
            </div>
        </div>
    )
}
const styles = {
    "image":{
        height:"80px",
        width:"80px"
    }
}
export default CartItem;