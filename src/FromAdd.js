import React, { Component } from 'react';
import './components/Addproduct.css';
class FromAdd extends Component {   
      onAddProduct(event){
          let id = 0;
          event.preventDefault();
          let name = event.target["name"].value;
          let price = event.target["price"].value;
          let oldprice = event.target["oldprice"].value;
          let code = event.target["code"].value;
          let Name_category = event.target["Name_category"].value;
          let image = event.target["image"].files.item(0).name;          
  
          let products = JSON.parse(localStorage.getItem("list_products"));
          if(!products){
              products = [];
              id = 0;
          }else
          {
             id = products[products.length -1].id+1;
          }
          let product = {
              id : id,
              name: name,
              price: price,
              oldprice: oldprice,
              image: image,
              code: code,
              Name_category: Name_category,             
          }     
          products.push(product);
          localStorage.setItem("list_products", JSON.stringify(products));
          console.log(products);
      }
      render(){
          return(
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" id="form">
                <form className="Addpduct" onSubmit={this.onAddProduct}>
                    <legend><h1>Add product</h1> </legend>
                    <div className="form-group">
                        <label >Name</label>
                        <input type="text" className="form-control" name ="name" placeholder="Input name" />
                    </div>
                    <div className="form-group">
                        <label >Code</label>
                        <input type="text" className="form-control" name ="code" placeholder="Input code" />
                    </div>
                    <div className="form-group">
                        <label >Name_category</label>
                        <input type="text" className="form-control" name ="Name_category" placeholder="Input Name category" />
                    </div>
                    <div className="form-group">
                        <label >Price</label>
                        <input type="text" className="form-control" name ="price" placeholder="Input Price" />
                    </div>
                    <div className="form-group">
                        <label >OldPrice</label>
                        <input type="text" className="form-control" name ="oldprice" placeholder="Input Old Price" />
                    </div>
                    <div className="form-group">
                        <label >Image</label>
                        <input type="file" className="form-control" name ="image" placeholder=" Choose Image" />
                    </div>                
                    <button type="submit" className="btn btn-danger">Submit</button>
                </form>
                
            </div>   
          );
      }
}

export default FromAdd;