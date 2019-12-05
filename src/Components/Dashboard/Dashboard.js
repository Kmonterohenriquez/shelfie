import React, { Component } from 'react'
import Product from '../Product/Product'
import Header from '../Header/Header'
import axios from 'axios'
class Dashboard extends Component {
    
    constructor(props){
        super(props)
        this.state ={
            products: []
        };
        this.deleteProduct = this.deleteProduct.bind(this)
    }
	componentDidMount() {
        this.getProducts();
   
    }
    
    componentDidUpdate(){
        this.getProducts(); 
    }
    
	getProducts() {
        axios.get('/api/products')
        .then(res=>{ 
            // console.log('result', res.data)
            this.setState({ products: res.data })
        })
        .catch(err => console.log(err))
    }
    deleteProduct =(id)=> {
        // console.log('deleteProduct function ran', id)
        axios.delete(`/api/products/${id}`)
            .then(res => this.setState({products: res.data}))
            .catch(err => console.log(err))
    }

    // updateProduct(){
        
    // }


    
    render() {

        return (
            <div className='Dashboard'>
                <Header/>
                <div className='container'>
                        <h1>Dashboard</h1>
                    <Product 
                        products={this.state.products} 
                        deleteProduct={this.deleteProduct}
                    />
                    {/* <API/> */}
                </div>
            </div>
        );
    }
}

export default Dashboard;
