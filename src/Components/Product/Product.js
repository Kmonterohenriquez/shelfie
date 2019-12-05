import React, { Component } from 'react';
import './Product.css';
import {Link} from 'react-router-dom'

class Product extends Component {
	state = {
		editToggle: false
	};
	
	render() {
		return (
			<div className='Products grid-container'>
				{this.props.products.map(product =>
					
						<div className='Single-product' key={product.id}>
							<div className='image-holder'>
								<img src={product.image_url} alt='' />
							</div>
							<div className='content' onSubmit={this.handleSubmit}>
								<h1>{product.product_name}</h1>
								<p>{product.price}</p>
								<div className='container-btn'>
								<Link to={`/editProduct/${product.id}`}><button >Edit</button></Link>
									<button onClick={() => this.props.deleteProduct(product.id)}>
										Delete
									</button>
								</div>
							</div>
						</div>
						
				)}
			</div>
		);
	}
}

export default Product;
