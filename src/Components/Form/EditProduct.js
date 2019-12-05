import React, { Component } from 'react';
import './Form.css'
import Header from '../Header/Header'
import axios from 'axios'

class EditProduct extends Component {
    constructor(props){
        super(props)
            this.state = { 
                products: {
                    id: 0,
                    product_name: '',
                    image_url: '',
                    price: 0
                }
            }
    }
     componentDidMount(){
         axios.get(`/api/products/${this.props.match.params.id}`)
         .then(res =>{
            console.log('single product info', res.data[0])
            this.setState({ products: res.data[0]})
         })
     }
    render() {
        // const{image_url, product_name, price } = this.state;
        // console.log(price)
        console.log(this.state.products)
        return (
        <div>
            <Header />
            <div className='Form'>
                <div className="Form-container container">
                    <div className='pic-holder'>
                        <img src={this.state.products.image_url} alt=""/>
                    </div>
                    <form onSubmit={(e)=>this.handleSubmit(e)}action="">
                        <label>Image URL:</label><br/>
                        <input name='image_url' type="text" placeholder={this.state.products.image_url} onChange={(e)=>this.changeHandler(e)}/><br/>
                        <label>Product Name:</label><br/>
                        <input name='product_name' type="text" placeholder={this.state.products.product_name} onChange={(e)=>this.changeHandler(e)} required/><br/>
                        <label>Price: </label><br/>
                        <input name='price' type="text" placeholder={this.state.products.price} onChange={(e)=>this.changeHandler(e)} required/><br/>
                        <div className='Form-btn'>
                            {/* <p>{this.state.products.product_name}</p> */}
                            <button>Cancel</button>
                            <button type='submit'>Edit</button>
                        </div>
                    </form>
                </div>
            </div>
    </div>
        );
    }
}

export default EditProduct;