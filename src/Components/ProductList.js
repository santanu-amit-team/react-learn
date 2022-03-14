const ProductLists = ({ Products }) => {
	return (
		<div className="col-md-7 col-lg-8">
			<h4 className="mb-3">All Product</h4>
			<div className="row row-cols-1 row-cols-md-2 mb-3 text-center">
				{Products.map((Product) => (
					<SingleProduct Product={Product} key={Product.id} />
				))}
			</div>
		</div>
	);
};

const SingleProduct = ({ Product }) => {
	return (
		<div className="col">
			<div className="card mb-4 rounded-3 shadow-sm">
				<div className="card-header py-3">
					<h2 className="my-0 fw-normal product-name">{Product.tittle}</h2>
					<h4 className="my-0 fw-normal">{Product.brand}</h4>
				</div>
				<div className="card-body">
					<img src={Product.image} alt="" className="w-100 mb-2" />
					<h1 className="card-title pricing-card-title">${Product.price}</h1>
					<p className="product-desc"> {Product.description}</p>
					<button type="button" className="w-100 btn btn-lg btn-primary">
						Add To Cart
					</button>
				</div>
			</div>
		</div>
	);
};
export default ProductLists;
