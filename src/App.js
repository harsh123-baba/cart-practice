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
          "qty": 1,
          "id": 1
        },
        {
          "title": "Watch",
          "price": 100,
          "qty": 1,
          "id": 2
        },
        {
          "title": "Pendrive",
          "price": 300,
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
  render() {
    const {products} = this.state
    return (
      <div className="App">

        <NavBar />
        <h1>Cart</h1>
        <Cart 
        products={products}
        onIncreaseQty = {this.handleIncreseQuantity}
        onDecreaseQty = {this.handleDecreseQuantity}
        onDelete = {this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
