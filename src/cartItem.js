import React, { Component } from 'react';

class CartItem extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         "name":"Mobile",
    //         "price":100000,
    //         "qty":1
    //     }
    // }
    
    // onIncreaseQty = ()=>{
    //     // console.log("Added clicked");
        
    //     this.setState({
    //         qty : this.state.qty+1
    //     })
    // }
    // onDecreaseQty = ()=>{
    //     // console.log("decrease clicked");
    //     if(this.state.qty <= 0){
    //         return;
    //     }
    //     this.setState({
    //         qty : this.state.qty-1
    //     })
    // }
    // onDelete = () =>{
    //     console.log("delete clicked");
    // }
    render() {
        const {price, title, qty} = this.props.product;
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
                        {/* <img className='action-icons' onClick={this.onIncreaseQty} src="https://cdn-icons-png.flaticon.com/512/992/992651.png" />
                        <img className='action-icons' onClick={this.onDecreaseQty} src="https://cdn-icons-png.flaticon.com/512/992/992683.png" />
                        <img className='action-icons' onClick={this.onDelete} src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" /> */}
                    </div>
                </div>
            </div>
        )
    }
}
export default CartItem;