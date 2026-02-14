import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div id="content">
      <h1 id="content-title">products</h1>

      <div id="content-cards">
        <Link to="/" className="content-card-link">
          <div className="content-card">
            <img src="images/shirt_1.jpg" alt="Gildan Budget Unisex T-shirt" />
            <h2>Gildan® Budget Unisex T-shirt</h2>
            <p>
              Spotlight your cause effortlessly thanks to this custom Gildan® tee.
              A budget-friendly, durable &amp; unisex favorite for everyday wear.
            </p>
          </div>
        </Link>

        <Link to="/" className="content-card-link">
          <div className="content-card">
            <img src="images/shirt_2.jpg" alt="Gildan Softstyle Unisex T-shirt" />
            <h2>Gildan® Softstyle® Unisex T-shirt</h2>
            <p>
              Make your message stand out with the Gildan® Softstyle® T-shirt.
              Its unisex fit makes it a great pick for team uniforms.
            </p>
          </div>
        </Link>

        <Link to="/" className="content-card-link">
          <div className="content-card">
            <img
              src="images/shirt_3.jpg"
              alt="Bella + Canvas Ultra-Soft Jersey Unisex T-shirt"
            />
            <h2>Bella + Canvas® Ultra-Soft Jersey Unisex T-shirt</h2>
            <p>
              Get wrapped in comfort and style with the Bella + Canvas® unisex
              T-shirts – ideal for uniforms and gifting.
            </p>
          </div>
        </Link>

        <Link to="/" className="content-card-link">
          <div className="content-card">
            <img src="images/shirt_4.jpg" alt="Allmade Organic Cotton Unisex T-shirt" />
            <h2>Allmade® Organic Cotton Unisex T-shirt</h2>
            <p>
              Enjoy a blend of softness and durability with custom premium T-shirts.
              Made from organic ringspun cotton and complete with a unisex fit.
            </p>
          </div>
        </Link>

        <Link to="/" className="content-card-link">
          <div className="content-card">
            <img src="images/shirt_5.jpg" alt="Gildan Unisex Ultra Cotton T-shirt" />
            <h2>Gildan® Unisex Ultra Cotton T-shirt</h2>
            <p>
              Get wrapped in comfort and style with the Bella + Canvas® unisex
              T-shirts – ideal for uniforms and gifting.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}