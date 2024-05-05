const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
      <div className="container py-5">
        <div
          className="pb-4 mb-4"
          style={{ borderBottom: "1px solid rgba(226, 175, 24, 0.5)" }}
        >
          <div className="row g-4">
            <div className="col-lg-3">
              <a href="index.html">
                <h1 className="text-primary mb-0">Freshibles</h1>
                <p className="text-secondary mb-0">Fresh products</p>
              </a>
            </div>
            <div className="col-lg-6">
              <div className="position-relative mx-auto">
                <input
                  className="form-control border-0 w-100 py-3 px-4 rounded-pill"
                  type="number"
                  placeholder="Your Email"
                />
                <button
                  type="submit"
                  className="btn btn-primary border-0 border-secondary py-3 px-4 position-absolute rounded-pill text-white"
                  style={{ top: 0, right: 0 }}
                >
                  Subscribe Now
                </button>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="d-flex justify-content-end pt-3">
                <a
                  className="btn  btn-outline-secondary me-2 btn-md-square rounded-circle"
                  href=""
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="btn btn-outline-secondary me-2 btn-md-square rounded-circle"
                  href=""
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-outline-secondary me-2 btn-md-square rounded-circle"
                  href=""
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  className="btn btn-outline-secondary btn-md-square rounded-circle"
                  href=""
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <div className="footer-item">
              <h4 className="text-light mb-3">Why People Like us!</h4>
              <p className="mb-4">
                We go the extra mile to ensure that all our products go through
                industry standard and we have a proven track record.
              </p>
              <a
                href="about.html"
                className="btn border-secondary py-2 px-4 rounded-pill text-primary"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="d-flex flex-column text-start footer-item">
              <h4 className="text-light mb-3">Shop Info</h4>
              <a className="btn-link" href="index.html">
                Home
              </a>
              <a className="btn-link" href="about.html">
                About Us
              </a>
              <a className="btn-link" href="shop.html">
                Shop
              </a>
              <a className="btn-link" href="services.html">
                Services
              </a>
              <a className="btn-link" href="contact.html">
                Contact Us
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="d-flex flex-column text-start footer-item">
              <h4 className="text-light mb-3">Account</h4>
              <a className="btn-link" href="register.html">
                My Account
              </a>
              <a className="btn-link" href="shop.html">
                Shop details
              </a>
              <a className="btn-link" href="cart.html">
                Shopping Cart
              </a>
              <a className="btn-link" href="">
                Wishlist
              </a>
              <a className="btn-link" href="">
                Order History
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-item">
              <h4 className="text-light mb-3">Contact</h4>
              <p>Address: University House, 15 Bartholomew Row, B5 5JU</p>
              <p>Email: info@freshibles.co.uk</p>
              <p>Phone: +0123 4567 8910</p>
              <p>Payment Accepted</p>
              <img src="img/payment.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
