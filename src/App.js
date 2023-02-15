import React from 'react';
import Cart from "./cart"
import NavBar from './navbar'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          "title": "Mobile",
          "price": 100000,
          "img":"https://cdn-icons-png.flaticon.com/512/254/254638.png",
          "qty": 1,
          "id": 1
        },
        {
          "title": "Watch",
          "price": 100,
          "img":"https://cdn-icons-png.flaticon.com/512/3109/3109881.png",
          "qty": 1,
          "id": 2
        },
        {
          "title": "Pendrive",
          "price": 300,
          "img":"https://cdn-icons-png.flaticon.com/512/917/917249.png",
          "qty": 1,
          "id": 3
        }
      ]
    }
  }
  handleIncreseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({ products });
  }

  handleDecreseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty > 1) {
      products[index].qty -= 1;
      this.setState({ products });
    }
    else {
      this.handleDelete(product);
      return;
    }

  }

  handleDelete = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (index != -1) {

      products.splice(index, 1);
    }

    // console.log(products);
    this.setState({ products });
  }
  getCount = (products)=>{
    // const {products} = this.state;
    let count =0;
    products.map((product)=>{
      count += product.qty;
    })
    return count;
  }
  getTotalPrice = (products) =>{
    let price = 0;
    products.map((product)=>{
      console.log(product)
      price  += product.qty * product.price;

    })
    console.log(price);
    return price;
  }
  render() {
    const {products} = this.state
    return (
      <div className="App">

        <NavBar 
          products = {this.state.products}
          count = {this.getCount}
        />
        <h1>Cart</h1>
        <Cart 
        products={products}
        onIncreaseQty = {this.handleIncreseQuantity}
        onDecreaseQty = {this.handleDecreseQuantity}
        onDelete = {this.handleDelete}
        />
        <div style={{padding:20, fontSize:30}}>Total Price : {this.getTotalPrice(products)}</div>
      </div>
    );
  }
}

export default App;
