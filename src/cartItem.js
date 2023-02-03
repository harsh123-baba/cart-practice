import React, { Component } from 'react';

class CartItem extends Component {
    constructor(){
        super();
        this.state = {
            "name":"Mobile",
            "price":100000,
            "qty":1
        }
    }
    render() {
        
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img  />
                </div>
                <div className='right-block'>
                    <div >{this.state.name}</div>
                    <div >RS 1199</div>
                    <div >Qty : 1</div>
                    <div className='cart-item-actions'>
                        {/* <img className='action-icons' onClick={() => onIncreaseQty(product)} src="https://cdn-icons-png.flaticon.com/512/992/992651.png" />
                        <img className='action-icons' onClick={() => onDecreaseQty(product)} src="https://cdn-icons-png.flaticon.com/512/992/992683.png" />
                        <img className='action-icons' onClick={() => onDelete(product.id)} src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" /> */}
                    </div>
                </div>
            </div>
        )
    }
}
export default CartItem;