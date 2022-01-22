import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar({ click }) {
	return (
		<nav className="navbar">
			{/*logo*/}
			<div>
				<Link to="/" className="navbar_logo">
					<span>Mern Shopping</span>
				</Link>
			</div>

			{/*links*/}
			<ul className="navbar_links">
				<li>
					<Link to="/cart" className="cart_link">
						<i className="fas fa-shopping-cart"></i>
						<span>
							Cart
							<span className="cartlogo_badge">0</span>
						</span>
					</Link>
				</li>
				<li>
					<span className="shopBtn">Login</span>
				</li>
			</ul>

			{/*Hamburger menu*/}
			<div className="hamburger_menu" onClick={click}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</nav>
	);
}

export default Navbar;
