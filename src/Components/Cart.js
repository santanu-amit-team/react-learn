const CartItem = ({ CartProduct }) => {
	return (
		<li className="list-group-item d-flex justify-content-between lh-sm">
			<div>
				<h6 className="my-0">{CartProduct.tittle}</h6>
				<small className="text-muted">{CartProduct.description}</small>
			</div>
			<span className="text-muted">${CartProduct.price}</span>
		</li>
	);
}
const Cart = ({ CartItems }) => {
	const total = CartItems.reduce((sum, cur) => {
		let price = parseFloat(sum) + parseFloat(cur.price);
		return price.toFixed(2);
	}, 0);

	return (
		<div className="col-md-5 col-lg-4 order-md-last">
			<div className=" position-sticky top-0 pt-4 ">
				<h4 className="d-flex justify-content-between align-items-center mb-3">
					<span className="text-primary">Your cart</span>
					<span className="badge bg-primary rounded-pill">{CartItems.length}</span>
				</h4>
				<ul className="list-group mb-3">
					{CartItems.map((CartProduct, key) => (
						<CartItem CartProduct={CartProduct} key={key} />
					))}
					<li className="list-group-item d-flex justify-content-between">
						<span>Total (USD)</span>
						<strong>${total}</strong>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Cart;
