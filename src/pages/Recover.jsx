import { useForm } from "react-hook-form";
import HERO_IMG from "../assets/images/hero-img-2.jpg";
import { useState } from "react";
import { toast } from "react-toastify";

const BASEURL = import.meta.env.VITE_BASE_URL;

const Recover = () => {
  const [isLoading, setisLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlePasswordReset = async data => {
    setisLoading(true);
    try {
      const action = await fetch(`${BASEURL}/api/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const response = await action.json();

      if (action.ok) {
        toast.success(response.message + " Check your Mail");
        setisLoading(false);

        setTimeout(() => {
          window.location.replace("/register");
        }, 5000);
      } else {
        toast.error(response.message);
        setisLoading(false);
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
      setisLoading(false);
    }
  };

  return (
    <>
      {/* Single Page Header */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Password Recovery</h1>
      </div>

      {/* Sign Up Start */}
      <div className="container-fluid contact py-5">
        <div className="container py-5">
          <div className="p-5 bg-light rounded">
            <div className="row g-4">
              <div className="col-12">
                <div
                  className="text-center mx-auto"
                  style={{ maxWidth: "700px" }}
                >
                  <p className="mb-4">Forgot your Login. We got You.</p>
                </div>
              </div>
              <div className="col-lg-7">
                <form onSubmit={handleSubmit(handlePasswordReset)}>
                  {errors.email && (
                    <span className="text-danger">Email field is required</span>
                  )}
                  <input
                    type="email"
                    className="w-100 form-control border-0 py-3 mb-4"
                    placeholder="Enter Your Email"
                    {...register("email", { required: true })}
                  />
                  <button
                    disabled={isLoading}
                    className="w-100 btn form-control border-secondary py-3 bg-white text-primary"
                    type="submit"
                  >
                    Recover
                  </button>
                </form>
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
                <div className="col-lg-12">
                  <a
                    href="/register"
                    className="position-relative me-4 my-auto"
                  >
                    <i className="fas fa-user fa-2x"></i> Login Here.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sign Up End */}
    </>
  );
};

export default Recover;
