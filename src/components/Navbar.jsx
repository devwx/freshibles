import { Link, useLocation } from "react-router-dom";
import useCartItems from "../hooks/useFetchCartItems";

function Navbar() {
  const { cartItems } = useCartItems();

  const location = useLocation();
  const pathname = location.pathname;

  console.log(pathname);

  const user = JSON.parse(localStorage.getItem("user-data"));

  return (
    <div className="container-fluid fixed-top">
      <div className="container topbar bg-primary d-none d-lg-block">
        <div className="d-flex justify-content-between">
          <div className="top-info ps-2">
            <small className="me-3">
              <i className="fas fa-map-marker-alt me-2 text-secondary"></i>{" "}
              <a href="#" className="text-white">
                University House, 15 Bartholomew Row, B5 5JU
              </a>
            </small>
          </div>
          <div className="top-link pe-2">
            <small className="me-3">
              <i className="fas fa-envelope me-2 text-secondary"></i>
              <a href="#" className="text-white">
                info@Freshibles.co.uk
              </a>
            </small>
          </div>
        </div>
      </div>
      <div className="container px-0">
        <nav className="navbar navbar-light bg-white navbar-expand-xl">
          <a href="/" className="navbar-brand">
            <h1 className="text-primary display-6">Freshibles</h1>
          </a>
          <button
            className="navbar-toggler py-2 px-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars text-primary"></span>
          </button>
          <div
            className="collapse navbar-collapse bg-white"
            id="navbarCollapse"
          >
            <div className="navbar-nav mx-auto">
              <Link
                to="/"
                className={`nav-item nav-link ${
                  pathname === "/" ? "active" : ""
                }`}
              >
                Home
              </Link>
              <Link
                to="/about-us"
                className={`nav-item nav-link ${
                  pathname === "/about-us" ? "active" : ""
                }`}
              >
                About Us
              </Link>
              <Link
                to="/shop"
                className={`nav-item nav-link ${
                  pathname === "/shop" ? "active" : ""
                }`}
              >
                Shop
              </Link>
              <Link
                to="/services"
                className={`nav-item nav-link ${
                  pathname === "/services" ? "active" : ""
                }`}
              >
                Services
              </Link>
              <Link
                to="/contact-us"
                className={`nav-item nav-link ${
                  pathname === "/contact-us" ? "active" : ""
                }`}
              >
                Contact Us
              </Link>
            </div>
            <div className="d-flex m-3 me-0">
              <div style={{ position: "relative" }}>
                <a href="/cart" className="position-relative me-4 my-auto">
                  <i className="fa fa-shopping-cart fa-2x"></i>
                </a>
                <a
                  href="/cart"
                  className="bg-danger text-white px-1 rounded-circle"
                  style={{ position: "absolute", left: "20px", top: "-5px" }}
                >
                  {cartItems?.cartItems?.length || 0}
                </a>
              </div>
              <div>
                {user ? (
                  <button
                    onClick={() => {
                      localStorage.removeItem("auth-token");
                      localStorage.removeItem("user-data");
                      window.location.replace("/");
                    }}
                    className="btn btn-danger my-auto"
                  >
                    Logout
                  </button>
                ) : (
                  <a href="/register" className="my-auto">
                    <i className="fas fa-user fa-2x"></i>
                  </a>
                )}
              </div>
              <div className="ml-5">
                {user && `👋 Welcome, ${user?.user.name}`}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
