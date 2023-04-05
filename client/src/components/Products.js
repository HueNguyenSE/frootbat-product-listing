import { Component } from 'react';
import axios from 'axios';

const PRODUCTS_URL = 'http://localhost:3000/products.json';

// // token
// let token = localStorage.getItem('token');
// let headers = {};
// if (token) {
// 	headers.Authorization = `Bearer ${token}`;
// }

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
		// const isLoggedIn = token !== null;
		// if (isLoggedIn) {
		return (
			<div className='products'>
				{instockProducts.map((p) => {
					return (
						<div className='product'>
							<img src={p.image} alt={p.produt_name} />
							<p>{p.product_name}</p>
							<p>{p.price}</p>
						</div>
					);
				})}
			</div>
		);
	}
}
