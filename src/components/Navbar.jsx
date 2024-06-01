
import logo from "../assets/logo.svg";

const Navbar = () => {
  console.log("hi");
  return (
    <div className="flex">
      <div className="leftnav">
        <img src={logo} alt="image" />
        <h1>GeeksFoods</h1>
      </div>
      <div className="middlenav">
        <li>Home</li>
        <li>Quote</li>
        <li>Resturant</li>
        <li>Food</li>
        <li>Contact</li>
      </div>
      <div className="rightnav">
        <button>Get Started</button>
      </div>
    </div>
  );
};
export default Navbar;
