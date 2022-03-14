import "./App.css";
import Header from "./Components/Header";
import Cart from "./Components/Cart";
import ProductList from "./Components/ProductList";
import Footer from "./Components/Footer";
import Data from "./data";

const App = () => {
	return (
		<div className="App">
			<div className="container">
				<Header />
				<main>
					<div className="row g-5">
						<ProductList Products={Data} />
						<Cart />
					</div>
				</main>
				<Footer />
			</div>
		</div>
	);
};

export default App;
