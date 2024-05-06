import HERO_IMG from "../assets/images/hero-img-2.jpg";
import IMG from "../assets/images/best-product-5.jpg";
import { useForm } from "react-hook-form";
import Login from "./Login";
import axios from "axios";
import { toast } from "react-toastify";

const BASEURL = import.meta.env.VITE_BASE_URL;

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignup = async data => {
    try {
      const response = await axios.post(`${BASEURL}/api/signup`, data);
      if (response.data.success) {
        toast.success("Account created successfully");
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      }
    } catch (error) {
      toast.error(error.response.statusText);
    }
  };

  return (
    <section>
      {/* MODAL */}

      <div
        className="modal fade"
        id="searchModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="container py-5">
              <div className="p-5 bg-light rounded">
                <div className="modal-body d-flex align-items-center">
                  <div className="row g-4">
                    <div className="col-12">
                      <div
                        className="text-center mx-auto"
                        style={{ maxWidth: "700px" }}
                      >
                        <a href="/">Home</a>
                      </div>
                      <br />
                      <div
                        className="text-center mx-auto"
                        style={{ maxWidth: "700px" }}
                      >
                        <p className="mb-4">
                          Sign Up to a world of Freshibles!
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <form onSubmit={handleSubmit(handleSignup)}>
                        {errors.name && (
                          <span className="text-danger">
                            Name field is required
                          </span>
                        )}
                        <input
                          type="text"
                          className="w-100 form-control border-0 py-3 mb-4"
                          placeholder="Your Name"
                          {...register("name", { required: true })}
                        />
                        {errors.email && (
                          <span className="text-danger">
                            Email field is required
                          </span>
                        )}
                        <input
                          type="email"
                          className="w-100 form-control border-0 py-3 mb-4"
                          placeholder="Enter Your Email"
                          {...register("email", { required: true })}
                        />
                        {errors.mobileNumber && (
                          <span className="text-danger">
                            Mobile number field is required
                          </span>
                        )}
                        <input
                          type="number"
                          className="w-100 form-control border-0 py-3 mb-4"
                          placeholder="Phone Number"
                          {...register("mobileNumber", { required: true })}
                        />
                        {errors.password && (
                          <span className="text-danger">
                            Password field is required
                          </span>
                        )}
                        <input
                          type="password"
                          className="w-100 form-control border-0 py-3 mb-4"
                          placeholder="Enter Password"
                          {...register("password", { required: true })}
                        />
                        {errors.confirmPassword && (
                          <span className="text-danger">
                            Comfirm password field is required
                          </span>
                        )}
                        <input
                          type="password"
                          className="w-100 form-control border-0 py-3 mb-4"
                          placeholder="Confirm Password"
                          {...register("confirmPassword", { required: true })}
                        />

                        <button
                          className="w-100 btn form-control border-secondary py-3 bg-white text-primary "
                          type="submit"
                        >
                          Register
                        </button>
                      </form>
                    </div>
                    <div className="col-lg-5">
                      <div className="d-flex p-4 rounded mb-4 bg-white">
                        <img
                          src={IMG}
                          className="img-fluid w-100 h-100 rounded"
                          alt="login-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row g-4">
                  <div className="col-lg-12">
                    {" "}
                    Already registerd?
                    <a
                      href="/register"
                      className="position-relative me-4 my-auto"
                    >
                      Login.
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL END */}

      {/* <!-- Single Page Header start --> */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Sign In Here!</h1>
      </div>
      {/* <!-- Single Page Header End --> */}

      {/* FORM FIELDS */}
      <div className="container-fluid contact py-5">
        <div className="container py-5">
          <div className="p-5 bg-light rounded">
            <div className="row g-4">
              <div className="col-12">
                <div
                  className="text-center mx-auto"
                  style={{ maxWidth: "700px" }}
                >
                  <p className="mb-4">
                    Welcome onboard. We promise you a very refreshing journer
                    ahead.
                  </p>
                </div>
              </div>
              <div className="col-lg-7">
                <Login />
              </div>
              <div className="col-lg-5">
                <div className="d-flex p-4 rounded mb-4 bg-white">
                  <img
                    src={HERO_IMG}
                    className="img-fluid w-100 h-100 rounded"
                    alt="Second slide"
                  />
                </div>
              </div>
            </div>
            <div className="container py-5">
              <div className="row g-4">
                <div className="col-lg-4">
                  New User?{" "}
                  <a
                    href="#searchModal"
                    data-bs-toggle="modal"
                    className="position-relative me-4 my-auto"
                  >
                    <i className="fas fa-user fa-2x"></i> Register Here.
                  </a>
                </div>
                <div className="col-lg-8">
                  Forgot Password?{" "}
                  <a href="/recover" className="position-relative me-4 my-auto">
                    <i className="fas fa-envelope fa-2x"></i> Recover.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
