const ProductLists = ({ Products, addCartItem }) => {
	return (
		<div className="col-md-7 col-lg-8">
			<h4 className="mb-3">All Product</h4>
			<div className="row row-cols-3 mb-3 text-center">
				{Products.map((Product) => (
					<SingleProduct Product={Product} addCartItem={addCartItem} key={Product.id} />
				))}
			</div>
		</div>
	);
};

const SingleProduct = ({ Product, addCartItem }) => {
	return (
		<div className="col">
			<div className="card mb-4 rounded-3 shadow-sm">
				<div className="card-header py-3">
					<h3 className="my-0 fw-normal product-name">{Product.tittle}</h3>
					<h5 className="my-0 fw-normal">{Product.brand}</h5>
				</div>
				<div className="card-body">
					<img src={Product.image} alt="" className="w-75 mb-2" />
					<h1 className="card-title pricing-card-title">${Product.price}</h1>
					<p className="product-desc"> {Product.description}</p>
					<button type="button" className="w-100 btn btn-lg btn-primary" onClick={() => addCartItem(Product.id)}>
						Add To Cart
					</button>
				</div>
			</div>
		</div>
	);
};
export default ProductLists;
