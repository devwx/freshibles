function Navbar() {
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
              <a href="/" className="nav-item nav-link active">
                Home
              </a>
              <a href="/about-us" className="nav-item nav-link">
                About Us
              </a>
              <a href="/shop" className="nav-item nav-link">
                Shop
              </a>
              <a href="/services" className="nav-item nav-link">
                Services
              </a>
              <a href="/contact-us" className="nav-item nav-link">
                Contact Us
              </a>
            </div>
            <div className="d-flex m-3 me-0">
              <a href="cart" className="position-relative me-4 my-auto">
                <i className="fa fa-shopping-cart fa-2x"></i>
              </a>
              <a href="/register" className="my-auto">
                <i className="fas fa-user fa-2x"></i>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
