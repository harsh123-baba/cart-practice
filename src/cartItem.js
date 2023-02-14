import React, { Component } from 'react';

const CartItem = (props) =>{
    const {price, title, qty} = props.product;
    return (
        <div className='cart-item'>
            <div className='l eft-block'>
                <img  />
            </div>
            <div className='right-block'>
                <div >{title}</div>
                <div >RS {price}</div>
                <div >Qty : {qty}</div>
                <div className='cart-item-actions'>
                    <img className='action-icons' onClick={()=>{this.props.onIncreaseQty(this.props.product)}} src="https://cdn-icons-png.flaticon.com/512/992/992651.png" />
                    <img className='action-icons' onClick={()=>{this.props.onDecreaseQty(this.props.product)}} src="https://cdn-icons-png.flaticon.com/512/992/992683.png" />
                    <img className='action-icons' onClick={()=>{this.props.onDelete(this.props.product)}} src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" />
                </div>
            </div>
        </div>
    )
}
export default CartItem;