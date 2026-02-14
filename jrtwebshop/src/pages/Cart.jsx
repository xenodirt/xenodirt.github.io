import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <div id="content">
      <h1 id="content-title">cart</h1>

      <div id="cart-cards">
        <Link to="/" className="content-card-link">
          <div className="content-card cart-card">
            <img src="images/shirt_1.jpg" alt="Gildan Budget Unisex T-shirt" />
            <h2>Gildan® Budget Unisex T-shirt</h2>
            <p>1x | P450</p>
          </div>
        </Link>
      </div>

      <div className="profile-actions">
        <Link className="profile-btn" to="/sign-up">
          Checkout
        </Link>
      </div>
    </div>
  );
}