import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Cart from "./Components/Cart";
import ProductList from "./Components/ProductList";
import Footer from "./Components/Footer";
import Data from "./data";

const App = () => {
	const [Products, setProducts] = React.useState([...Data]);
	const [keyWord, setKeyword] = React.useState("");
	const [CartItems, setCartItems] = React.useState([]);
	React.useEffect(() => {
		const results = Data.filter(Product => (Product.tittle).toLowerCase().includes(keyWord.toLowerCase()) || (Product.brand).toLowerCase().includes(keyWord.toLowerCase()));
		setProducts(results);
	}, [keyWord]);

	const addCartItem = id => {
		const item = Products.find(Product => Product.id === id);
		setCartItems(items => [...items, item]);
	}
	return (
		<div className="App">
			<div className="container-lg">
				<Header setKeyword={setKeyword} />
				<main>
					<div className="row g-5">
						<ProductList Products={Products} addCartItem={addCartItem} />
						<Cart CartItems={CartItems} />
					</div>
				</main>
				<Footer />
			</div>
		</div>
	);
};

export default App;
