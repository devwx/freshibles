import FEATURE_IMG1 from "../assets/images/featur-1.jpg";
import FEATURE_IMG2 from "../assets/images/featur-2.jpg";
import FEATURE_IMG3 from "../assets/images/featur-3.jpg";
import Footer from "./Footer";
import Navbar from "./Navbar";

export const Services = () => {
  return (
    <section>
      <Navbar />
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Services</h1>
      </div>
      {/* // Feature Section Start */}
      <div className="container-fluid service py-5">
        <div className="container py-5">
          <div className="row g-4 justify-content-center">
            {/* First Feature */}
            <div className="col-md-6 col-lg-4">
              <a href="#">
                <div className="service-item bg-secondary rounded border border-secondary">
                  <img
                    src={FEATURE_IMG1}
                    className="img-fluid rounded-top w-100"
                    alt=""
                  />
                  <div className="px-4 rounded-bottom">
                    <div className="service-content bg-primary text-center p-4 rounded">
                      <h5 className="text-white">Fresh Apples</h5>
                      <h3 className="mb-0">20% OFF</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            {/* Second Feature */}
            <div className="col-md-6 col-lg-4">
              <a href="#">
                <div className="service-item bg-dark rounded border border-dark">
                  <img
                    src={FEATURE_IMG2}
                    className="img-fluid rounded-top w-100"
                    alt=""
                  />
                  <div className="px-4 rounded-bottom">
                    <div className="service-content bg-light text-center p-4 rounded">
                      <h5 className="text-primary">Tasty Fruits</h5>
                      <h3 className="mb-0">Free delivery</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            {/* Third Feature */}
            <div className="col-md-6 col-lg-4">
              <a href="#">
                <div className="service-item bg-primary rounded border border-primary">
                  <img
                    src={FEATURE_IMG3}
                    className="img-fluid rounded-top w-100"
                    alt=""
                  />
                  <div className="px-4 rounded-bottom">
                    <div className="service-content bg-secondary text-center p-4 rounded">
                      <h5 className="text-white">Exotic Vegitable</h5>
                      <h3 className="mb-0">Discount 30$</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Feature End */}
      <div className="container-fluid featurs py-5">
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="featurs-item text-center rounded bg-light p-4">
                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                  <i className="fas fa-truck fa-3x text-white"></i>
                </div>
                <div className="featurs-content text-center">
                  <h5>Free Shipping</h5>
                  <p className="mb-0">Free on order over $300</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="featurs-item text-center rounded bg-light p-4">
                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                  <i className="fas fa-user-shield fa-3x text-white"></i>
                </div>
                <div className="featurs-content text-center">
                  <h5>Security Payment</h5>
                  <p className="mb-0">100% security payment</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="featurs-item text-center rounded bg-light p-4">
                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                  <i className="fas fa-exchange-alt fa-3x text-white"></i>
                </div>
                <div className="featurs-content text-center">
                  <h5>30 Day Return</h5>
                  <p className="mb-0">30 day money guarantee</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="featurs-item text-center rounded bg-light p-4">
                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                  <i className="fa fa-phone-alt fa-3x text-white"></i>
                </div>
                <div className="featurs-content text-center">
                  <h5>24/7 Support</h5>
                  <p className="mb-0">Support every time fast</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="featurs-item text-center rounded bg-light p-4">
                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                  <i className="fas fa-car-side fa-3x text-white"></i>
                </div>
                <div className="featurs-content text-center">
                  <h5>Transportation</h5>
                  <p className="mb-0">International & local Shipping</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="featurs-item text-center rounded bg-light p-4">
                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                  <i className="fas fa-archive fa-3x text-white"></i>
                </div>
                <div className="featurs-content text-center">
                  <h5>Product Storage</h5>
                  <p className="mb-0">Proven storage methods</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="featurs-item text-center rounded bg-light p-4">
                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                  <i className="fas fa-user-tie fa-3x text-white"></i>
                </div>
                <div className="featurs-content text-center">
                  <h5>Farmers Concultancy</h5>
                  <p className="mb-0">
                    Available for collaborations and advice
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="featurs-item text-center rounded bg-light p-4">
                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                  <i className="fa fa-tree fa-3x text-white"></i>
                </div>
                <div className="featurs-content text-center">
                  <h5>Garden</h5>
                  <p className="mb-0">Support with growing local delicacies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};
