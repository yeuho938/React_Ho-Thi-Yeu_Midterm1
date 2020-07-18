import React, { Component } from 'react';
import './Data.css';
class Data extends Component {
    constructor(){
        super();
        this.state={
            products: JSON.parse(localStorage.getItem("list_products")),
        }
        if(!this.state.products){
            this.state.products = [];
        }
        this.onItemClick = this.onItemClick.bind(this);
      }
  
      onItemClick(){
          return(event)=>{
            alert(" Thank you your order");
          }
      }

    render() {
            return (
                <div className='product'>
                    <h2>Thời trang nam/nữ</h2>
                    {this.state.products.map(item =>                
                        <div className="ProductItem">
                            <div id ='content'>
                                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" id='cont1'>
                                <center>
                                <div className="thumbnail">
                                    <img src= {'image/'+ item.image} />
                                    <div className="caption">
                                    <h3>{item.name}</h3>
                                        <span id='price'> 
                                            <h4 id="pri">{item.price}<sup>đ</sup></h4>
                                            <h4 id="old"><s>{item.oldprice}</s></h4>      
                                        </span>
                                        <div>
                                        <button onClick={this.onItemClick()} className="btn btn-warning"> Đặt mua </button> 
                                    </div>
                                    </div>
                                    </div>
                                    </center>
                                </div>
                            </div>  
                        </div>                     
                    )}
            </div>
              ); 
    }
}

export default Data;