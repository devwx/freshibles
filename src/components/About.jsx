/* eslint-disable react/no-unescaped-entities */
import Footer from "./Footer";
import Navbar from "./Navbar";

export const About = () => {
  return (
    <section>
      <Navbar />
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">About Us</h1>
      </div>
      {/* FACT */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="bg-light p-5 rounded">
            <div className="row g-4 justify-content-center">
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="counter bg-white rounded p-5">
                  <i className="fa fa-users text-secondary"></i>
                  <h4>satisfied customers</h4>
                  <h1>89630</h1>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="counter bg-white rounded p-5">
                  <i className="fa fa-users text-secondary"></i>
                  <h4>quality of service</h4>
                  <h1>99%</h1>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="counter bg-white rounded p-5">
                  <i className="fa fa-users text-secondary"></i>
                  <h4>quality certificates</h4>
                  <h1>33</h1>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="counter bg-white rounded p-5">
                  <i className="fa fa-users text-secondary"></i>
                  <h4>Available Products</h4>
                  <h1>789</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FACT END */}
      {/* <!-- Banner Section Start--> */}
      <div className="container-fluid banner bg-secondary my-5">
        <div className="container py-5">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="py-4">
                <h1 className="display-3 text-white">Fresh Fruits & Veggies</h1>
                <p className="fw-normal display-3 text-dark mb-4">
                  Who are we?
                </p>
                <p className="mb-4 text-dark">
                  At Freshibles, we're passionate about bringing you the finest
                  selection of fresh fruits and vegetables, sourced directly
                  from local farms and growers. With a commitment to quality,
                  variety, and customer satisfaction, we strive to be your go-to
                  destination for all your produce needs.
                </p>
                <a
                  href="/shop"
                  className="banner-btn btn border-2 border-white rounded-pill text-dark py-3 px-5"
                >
                  SHOP NOW
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                <img
                  src="img/baner-1.png"
                  className="img-fluid w-100 rounded"
                  alt=""
                />
                <div
                  className="d-flex align-items-center justify-content-center bg-white rounded-circle position-absolute"
                  style={{
                    width: "140px",
                    height: "140px",
                    top: "0",
                    left: "0",
                  }}
                >
                  <h1 style={{ fontSize: "100px" }}>1</h1>
                  <div className="d-flex flex-column">
                    <span className="h2 mb-0">50$</span>
                    <span className="h4 text-muted mb-0">kg</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Banner Section End --> */}
      {/* <!-- Tastimonial Start --> */}
      {/* <div className="container-fluid testimonial py-5">
        <div className="container py-5">
          <div className="testimonial-header text-center">
            <h4 className="text-primary">Testimonials</h4>
            <h1 className="display-5 mb-5 text-dark">Our Client Saying!</h1>
          </div>
          <div className="testimonial-carousel">
            <div className="testimonial-item img-border-radius bg-light rounded p-4">
              <div className="position-relative">
                <i
                  className="fa fa-quote-right fa-2x text-secondary position-absolute"
                  style={{ bottom: "30px", right: 0 }}
                ></i>
                <div className="mb-4 pb-4 border-bottom border-secondary">
                  <p className="mb-0">
                    Lorem Ipsum is simply dummy text of the printing Ipsum has
                    been the industry's standard dummy text ever since the
                    1500s,
                  </p>
                </div>
                <div className="d-flex align-items-center flex-nowrap">
                  <div className="bg-secondary rounded">
                    <img
                      src="img/testimonial-1.jpg"
                      className="img-fluid rounded"
                      style={{ width: "100px", height: "100px" }}
                      alt=""
                    />
                  </div>
                  <div className="ms-4 d-block">
                    <h4 className="text-dark">Client Name</h4>
                    <p className="m-0 pb-3">Profession</p>
                    <div className="d-flex pe-5">
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item img-border-radius bg-light rounded p-4">
              <div className="position-relative">
                <i
                  className="fa fa-quote-right fa-2x text-secondary position-absolute"
                  style={{ bottom: "30px", right: 0 }}
                ></i>
                <div className="mb-4 pb-4 border-bottom border-secondary">
                  <p className="mb-0">
                    Lorem Ipsum is simply dummy text of the printing Ipsum has
                    been the industry's standard dummy text ever since the
                    1500s,
                  </p>
                </div>
                <div className="d-flex align-items-center flex-nowrap">
                  <div className="bg-secondary rounded">
                    <img
                      src="img/testimonial-1.jpg"
                      className="img-fluid rounded"
                      style={{ width: "100px", height: "100px" }}
                      alt=""
                    />
                  </div>
                  <div className="ms-4 d-block">
                    <h4 className="text-dark">Client Name</h4>
                    <p className="m-0 pb-3">Profession</p>
                    <div className="d-flex pe-5">
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item img-border-radius bg-light rounded p-4">
              <div className="position-relative">
                <i
                  className="fa fa-quote-right fa-2x text-secondary position-absolute"
                  style={{ bottom: "30px", right: 0 }}
                ></i>
                <div className="mb-4 pb-4 border-bottom border-secondary">
                  <p className="mb-0">
                    Lorem Ipsum is simply dummy text of the printing Ipsum has
                    been the industry's standard dummy text ever since the
                    1500s,
                  </p>
                </div>
                <div className="d-flex align-items-center flex-nowrap">
                  <div className="bg-secondary rounded">
                    <img
                      src="img/testimonial-1.jpg"
                      className="img-fluid rounded"
                      style={{ width: "100px", height: "100px" }}
                      alt=""
                    />
                  </div>
                  <div className="ms-4 d-block">
                    <h4 className="text-dark">Client Name</h4>
                    <p className="m-0 pb-3">Profession</p>
                    <div className="d-flex pe-5">
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- Tastimonial End --> */}
      <Footer />
    </section>
  );
};
