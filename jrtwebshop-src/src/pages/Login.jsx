import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  function onSubmit(e) {
    e.preventDefault();
    console.log("Login:", form);
  }

  return (
    <div id="content">
      <h1 id="content-title">log in</h1>

      <div id="content-blocks">
        <form className="contact-card" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="login-email">Email</label>
            <input
              type="text"
              id="login-email"
              name="email"
              placeholder="name@example.com"
              required
              autoComplete="email"
              value={form.email}
              onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            />
          </div>

          <div className="form-group">
            <label htmlFor="login-password">Password</label>
            <input
              type="password"
              id="login-password"
              name="password"
              placeholder="Enter your password"
              required
              autoComplete="current-password"
              value={form.password}
              onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
            />
          </div>

          <button className="form-submit" type="submit">
            Log in
          </button>

          <p>
            No account yet?{" "}
            <Link to="/sign-up" style={{ color: "#00bf63" }}>
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}