import React from 'react';
import CartItem from './cartItem';
class Cart extends React.Component{
    constructor(){
        super();
        this.state = {
            products : [
                {
                    "title":"Mobile",
                    "price":100000,
                    "qty":1,
                    "id":1
                },
                {
                    "title":"Watch",
                    "price":100,
                    "qty":1,
                    "id":2
                },
                {
                    "title":"Pendrive",
                    "price":300,
                    "qty":1,
                    "id":3
                }
            ]
        }
    }
    render(){
        const {products} = this.state;
        return(
            <div className='cart'>
                {
                    products.map((product)=>{
                        return <CartItem product={product} key = {product.id} />
                    })
                }
            </div>
        )
    }
}
export default Cart;