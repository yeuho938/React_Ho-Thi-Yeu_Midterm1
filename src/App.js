import React, { Component } from 'react';
import './App.css';
import Data from './Data';
import FromAdd from './FromAdd';

class App extends Component {
  constructor(){
    super();
    this.state ={
      menu: "product"
    }
    this.onProduct = this.onProduct.bind(this);
    this.onAddProduct = this.onAddProduct.bind(this);
   
    }
  onProduct(){
    this.setState({
      menu: "product"
    })
  }
  onAddProduct(){
    this.setState({
      menu: "add-product"
    })
  }
  render(){
    return (
      <div className="container"> 
         <div className="row">           
          <button className="btn btn-danger" onClick={this.onProduct}>Product</button> 
          <button className="btn btn-danger" onClick={this.onAddProduct}>Add Product</button>
        
        </div>
        <div className="row">
          {this.state.menu ==="product"? <Data />:null}
          {this.state.menu ==="add-product"? <FromAdd />:null}
        </div>       
    </div>
    
    );
  }
  
}

export default App;
