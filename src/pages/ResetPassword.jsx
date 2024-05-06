import { useState } from "react";

import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const BASEURL = import.meta.env.VITE_BASE_URL;

const ResetPassword = () => {
  const { token } = useParams();
  const [isLoading, setisLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleClick = async data => {
    setisLoading(true);

    if (data.password !== data.confirmPassword) {
      toast.error("Password do not match");
      return;
    }

    try {
      const action = await fetch(`${BASEURL}/api/reset-password/${token}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const response = await action.json();

      if (action.ok) {
        toast.success(response.message);
        localStorage.removeItem("auth-token");
        setisLoading(false);
        setTimeout(() => {
          window.location.replace("/register");
        }, 5000);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
      setisLoading(false);
    }
  };

  return (
    <section>
      {/* MODAL END */}

      {/* <!-- Single Page Header start --> */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Reset password</h1>
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
                <form onSubmit={handleSubmit(handleClick)}>
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
                      Password field is required
                    </span>
                  )}
                  <input
                    type="password"
                    className="w-100 form-control border-0 py-3 mb-4"
                    placeholder="Confirm password"
                    {...register("confirmPassword", { required: true })}
                  />

                  <button
                    disabled={isLoading}
                    className="w-100 btn form-control border-secondary py-3 bg-white text-primary"
                    type="submit"
                  >
                    Reset
                  </button>
                </form>
              </div>
              {/* <div className="col-lg-5">
                <div className="d-flex p-4 rounded mb-4 bg-white">
                  <img
                    src={HERO_IMG}
                    className="img-fluid w-100 h-100 rounded"
                    alt="Second slide"
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
