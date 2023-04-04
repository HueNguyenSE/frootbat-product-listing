import { Component } from 'react';
import axios from 'axios';

const PRODUCTS_URL = 'http://localhost:3000/products.json';

// token
let token = localStorage.getItem('token');
let headers = {};
if (token) {
	headers.Authorization = `Bearer ${token}`;
}

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
		const isLoggedIn = token !== null;
		if (isLoggedIn) {
			return (
				<div>
					<h1>All Products (Only for Adminstrator)</h1>
					<table>
						<thead>
							<tr>
								<th>Id </th>
								<th>Product name</th>
								<th>Description</th>
								<th>Image</th>
								<th>Price</th>
								<th>Availability</th>
								<th>Product category</th>
								<th>Brand</th>
								<th>Gtin</th>
								<th>Actions</th>
							</tr>
						</thead>

						<tbody>
							{products.map((p) => {
								return (
									<tr>
										<td> {p.id}</td>
										<td>{p.product_name}</td>
										<td>{p.description}</td>
										<td>
											<img src={p.image} alt={p.produt_name} />
										</td>
										<td>{p.price}</td>
										<td>{p.availability}</td>
										<td>{p.product_category}</td>
										<td>{p.brand}</td>
										<td>{p.gtin}</td>
										<td>
											<p><a href='#'>Edit</a></p>
											<p><a href='#'>Delete</a></p>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			);
		} else {
			return (
				<div>
					{instockProducts.map((p) => {
						return (
							<div>
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
}
