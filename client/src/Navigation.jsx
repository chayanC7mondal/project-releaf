import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/explore">Explore</NavLink>
      <NavLink to="/scanner">Scanner</NavLink>
      <NavLink to="/chatbot">Chatbot</NavLink>
      <NavLink to="/stations">Stations</NavLink>
      <NavLink to="/marketplace">Marketplace</NavLink>
      <NavLink to="/tips">Tips</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
}
