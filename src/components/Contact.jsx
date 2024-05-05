import Footer from "./Footer";
import Navbar from "./Navbar";

export const Contact = () => {
  return (
    <section>
      <Navbar />
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Contact</h1>
      </div>
      {/* FORM */}

      <div className="container-fluid contact py-5">
        <div className="container py-5">
          <div className="p-5 bg-light rounded">
            <div className="row g-4">
              <div className="col-12">
                <div
                  className="text-center mx-auto"
                  style={{ maxWidth: "700px" }}
                >
                  <h1 className="text-primary">Get in touch</h1>
                  <p className="mb-4">
                    We love to get your feedback and collaborate to offer
                    exceptional service. It is our pleasure to receive your
                    text, call or email.
                  </p>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="h-100 rounded">
                  <iframe
                    className="rounded w-100"
                    style={{ height: "400px" }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.7674159703915!2d-1.8873551233210755!3d52.48334677205157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bde9e0af29d7%3A0x3e45b5a28db1e4a0!2sBirmingham%20City%20University!5e0!3m2!1sen!2suk!4v1709310194298!5m2!1sen!2suk"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-7">
                <form action="" className="">
                  <input
                    type="text"
                    className="w-100 form-control border-0 py-3 mb-4"
                    placeholder="Your Name"
                  />
                  <input
                    type="email"
                    className="w-100 form-control border-0 py-3 mb-4"
                    placeholder="Enter Your Email"
                  />
                  <textarea
                    className="w-100 form-control border-0 mb-4"
                    rows="5"
                    cols="10"
                    placeholder="Your Message"
                  ></textarea>
                  <button
                    className="w-100 btn form-control border-secondary py-3 bg-white text-primary "
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
              <div className="col-lg-5">
                <div className="d-flex p-4 rounded mb-4 bg-white">
                  <i className="fas fa-map-marker-alt fa-2x text-primary me-4"></i>
                  <div>
                    <h4>Address</h4>
                    <p className="mb-2">
                      University House, 15 Bartholomew Row, B5 5JU
                    </p>
                  </div>
                </div>
                <div className="d-flex p-4 rounded mb-4 bg-white">
                  <i className="fas fa-envelope fa-2x text-primary me-4"></i>
                  <div>
                    <h4>Mail Us</h4>
                    <p className="mb-2">info@freshibles.co.uk</p>
                  </div>
                </div>
                <div className="d-flex p-4 rounded bg-white">
                  <i className="fa fa-phone-alt fa-2x text-primary me-4"></i>
                  <div>
                    <h4>Telephone</h4>
                    <p className="mb-2">(+012) 3456 7890</p>
                  </div>
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
