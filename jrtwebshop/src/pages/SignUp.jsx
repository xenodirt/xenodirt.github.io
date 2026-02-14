import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
    "mobile-number": "",
    "home-address": "",
  });

  function onSubmit(e) {
    e.preventDefault();
    console.log("Sign up:", form);
  }

  return (
    <div id="content">
      <h1 id="content-title">sign up</h1>

      <div id="content-blocks">
        <form className="contact-card" onSubmit={onSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fname">First name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Juan"
                required
                autoComplete="given-name"
                value={form.firstname}
                onChange={(e) => setForm((p) => ({ ...p, firstname: e.target.value }))}
              />
            </div>

            <div className="form-group">
              <label htmlFor="lname">Last name</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Dela Cruz"
                required
                autoComplete="family-name"
                value={form.lastname}
                onChange={(e) => setForm((p) => ({ ...p, lastname: e.target.value }))}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="name@example.com"
              required
              autoComplete="email"
              value={form.email}
              onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Create a password"
                required
                minLength={8}
                autoComplete="new-password"
                value={form.password}
                onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirm">Confirm password</label>
              <input
                type="password"
                id="confirm"
                name="confirmpassword"
                placeholder="Re-type password"
                required
                minLength={8}
                autoComplete="new-password"
                value={form.confirmpassword}
                onChange={(e) =>
                  setForm((p) => ({ ...p, confirmpassword: e.target.value }))
                }
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="mobile-number">Mobile Number</label>
            <input
              type="text"
              id="mobile-number"
              name="mobile-number"
              placeholder="09XXXXXXXXX"
              required
              autoComplete="mobile-number"
              value={form["mobile-number"]}
              onChange={(e) => setForm((p) => ({ ...p, "mobile-number": e.target.value }))}
            />
          </div>

          <div className="form-group">
            <label htmlFor="home-address">Home Address</label>
            <input
              type="text"
              id="home-address"
              name="home-address"
              placeholder="67 Cherry St."
              required
              autoComplete="home-address"
              value={form["home-address"]}
              onChange={(e) => setForm((p) => ({ ...p, "home-address": e.target.value }))}
            />
          </div>

          <button className="form-submit" type="submit">
            Create account
          </button>

          <p>
            Have an account already?{" "}
            <Link to="/log-in" style={{ color: "#00bf63" }}>
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}