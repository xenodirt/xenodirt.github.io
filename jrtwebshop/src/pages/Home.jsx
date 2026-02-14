export default function Home() {
  return (
    <div id="content">
      <h1 id="content-title">featured products</h1>

      <div id="content-cards">
        <a href="/" className="content-card-link">
          <div className="content-card">
            <img src="images/shirt_1.jpg" alt="Gildan Budget Unisex T-shirt" />
            <h2>Gildan® Budget Unisex T-shirt</h2>
            <p>
              Spotlight your cause effortlessly thanks to this custom Gildan® tee.
              A budget-friendly, durable unisex favorite for everyday wear.
            </p>
          </div>
        </a>

        <a href="/" className="content-card-link">
          <div className="content-card">
            <img src="images/shirt_2.jpg" alt="Gildan Softstyle Unisex T-shirt" />
            <h2>Gildan® Softstyle® Unisex T-shirt</h2>
            <p>
              Make your message stand out with the Gildan® Softstyle® T-shirt.
              Its unisex fit makes it a great pick for team uniforms.
            </p>
          </div>
        </a>

        <a href="/" className="content-card-link">
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
        </a>
      </div>
    </div>
  );
}