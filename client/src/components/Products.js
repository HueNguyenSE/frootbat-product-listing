import { Component } from 'react';
import axios from 'axios';

const PRODUCTS_URL = 'http://localhost:3000/products.json';

// token
let token = localStorage.getItem('token');
let headers = {};
if (token) {
	headers.Authorization = `Bearer ${token}`;
}

const isLoggedIn = token !== null;

export default class Products extends Component {
	state = {
		products: [],
	};

	componentDidMount() {
		const fetchProducts = () => {
			axios.get(PRODUCTS_URL).then((response) => {
				this.setState({ products: response.data });
				console.log('products', response.data[0]);
			});
		};
		fetchProducts();
	}

	render() {
		const products = this.state.products;
		const isLoggedIn = token !== null;
		if (isLoggedIn) {
			return (
				<div>
					<h1>All Products</h1>
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
					{products.map((p) => {
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
