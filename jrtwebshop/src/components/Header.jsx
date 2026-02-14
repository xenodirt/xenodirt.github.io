import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <img src="images/xenoshop_logo.svg" id="logo" alt="XenoShop logo" />
      <nav>
        <NavLink to="/">home</NavLink>
        <NavLink to="/products">products</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/contact-us">contact us</NavLink>
        <NavLink to="/log-in">log in</NavLink>
        <NavLink to="/user-profile">profile</NavLink>
        <NavLink to="/cart">cart</NavLink>
      </nav>
    </header>
  );
}