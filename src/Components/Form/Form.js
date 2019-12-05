import React, { Component } from 'react'
import './Form.css'
import axios from 'axios'
class Form extends Component {
    state = { 
        image_url: 'https://www.sustainabilityunconference.com/wp-content/themes/gonzo/images/no-image-featured-image.png',
        product_name: '',
        price: 0
     }
    changeHandler(e){
        if(e.target.name === 'image_url'){
            this.setState({ image_url: e.target.value })
        }
        if(e.target.name === 'product_name'){
            this.setState({ product_name: e.target.value })
        }
        if(e.target.name === 'price'){
            this.setState({ price: e.target.value })
        }
    }
        handleSubmit=(e)=>{
            e.preventDefault();
           const { image_url, product_name, price } = this.state;
           let newProduct = {
               image_url,
               product_name,
               price
           }
           axios.post('/api/products', newProduct)
           .then( console.log('Product created'))
           .catch(err => console.log(err))
        }
    render() {
        return (
            <div className='Form'>
                <div className="Form-container container">
                    <div className='pic-holder'>
                        <img src={this.state.image_url} alt=""/>
                    </div>
                    <form onSubmit={(e)=>this.handleSubmit(e)}action="">
                        <label>Image URL:</label><br/>
                        <input name='image_url' type="text" placeholder='Enter URL' onChange={(e)=>this.changeHandler(e)}/><br/>
                        <label>Product Name:</label><br/>
                        <input name='product_name' type="text" placeholder='Enter Name' onChange={(e)=>this.changeHandler(e)} required/><br/>
                        <label>Price: </label><br/>
                        <input name='price' type="text" placeholder='Enter Price' onChange={(e)=>this.changeHandler(e)} required/><br/>
                        <div className='Form-btn'>
                            <button>Cancel</button>
                            <button type='submit'>Add to Inventory</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;