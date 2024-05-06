import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const BASEURL = import.meta.env.VITE_BASE_URL;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async data => {
    try {
      const response = await axios.post(`${BASEURL}/api/login`, data);
      if (response.data.success) {
        toast.success("Logged In");
        console.log(response.data);
        localStorage.setItem("auth-token", response.data.token);
        setTimeout(() => {
          window.location.replace("/");
        }, 5000);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.errors);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      {errors.email && (
        <span className="text-danger">Email field is required</span>
      )}
      <input
        type="email"
        className="w-100 form-control border-0 py-3 mb-4"
        placeholder="Enter Your Email"
        {...register("email", { required: true })}
      />
      {errors.password && (
        <span className="text-danger">Password field is required</span>
      )}
      <input
        type="password"
        className="w-100 form-control border-0 py-3 mb-4"
        placeholder="Enter Password"
        {...register("password", { required: true })}
      />
      <button
        className="w-100 btn form-control border-secondary py-3 bg-white text-primary"
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
