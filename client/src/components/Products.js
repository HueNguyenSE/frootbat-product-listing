import { Component } from 'react';
import axios from 'axios';

const PRODUCTS_URL = 'http://localhost:3000/products.json';

export default class Products extends Component {
	state = {
		products: [],
	};

	componentDidMount() {
		const fetchProducts = () => {
			axios.get(PRODUCTS_URL).then((response) => {
				this.setState({ products: response.data });
				// console.log('products', response.data);
			});
		};
		fetchProducts();
	}

	render() {
		const products = this.state.products;
		// console.log(`products ${products.length}`);
		// only products in stock
		const instockProducts = products.filter((p) => p.availability);
		// console.log(`in stock products: ${instockProducts.length}`);
		return (
			<div className='products-container'>
				<h2>Products</h2>
				{instockProducts.map((p) => {
					return (
						<div className='responsive'>
							<div className='gallery'>
								<img
									src={p.image}
									alt={p.produt_name}
									width={'200'}
									height={'400'}
								/>
								<div className='desc'>
									<p>{p.product_name.slice(0, 50)}</p>
									<p>{p.price}</p>
								</div>
							</div>
						</div>
					);
				})}
				<div className='clearfix'></div>
			</div>
		);
	}
}
