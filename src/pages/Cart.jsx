import { toast } from "react-toastify";
import useCartItems from "../hooks/useFetchCartItems";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const BASEURL = import.meta.env.VITE_BASE_URL;

const CartPage = () => {
  const { cartItems, totalPrice, loading, fetchCartItems } = useCartItems();

  const [isLoading, setIsLoading] = useState(false);

  const removeFromCart = async itemId => {
    if (!itemId) {
      toast.error("Something went wrong");
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch(`${BASEURL}/api/removefromcart/${itemId}`, {
        method: "DELETE",
        headers: {
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        toast.error("Network response was not ok");
        setIsLoading(false);
      }

      // Fetch the updated cart data
      await fetchCartItems();
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };

  const createOrder = async () => {
    try {
      const token = localStorage.getItem("auth-token");
      const payload = {
        items: cartItems.cartItems.map(item => ({
          product: item.product._id,
          quantity: item.quantity,
          price: item.product.price,
        })),
        totalPrice,
      };

      const response = await fetch(`${BASEURL}/api/orders`, {
        method: "POST",
        headers: {
          "auth-token": token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to create order");
      }

      const order = await response.json();
      console.log("Order created:", order);
      toast.success("Order created");
    } catch (err) {
      console.error("Failed to create order:", err);
    }
  };

  const handleCheckout = async () => {
    try {
      const stripe = await loadStripe(
        `${import.meta.env.VITE_APP_STRIPE_PUBLISHABLE_KEY}`
      );

      const body = { products: cartItems.cartItems };

      // Call backend server
      const response = await fetch(`${BASEURL}/api/checkout-session`, {
        method: "POST",
        headers: {
          "auth-token": localStorage.getItem("auth-token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(
          `Failed to create checkout session: ${response.status}`
        );
      }
      await createOrder();
      const session = await response.json();
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.log(result.error);
      }
    } catch (err) {
      toast.error("Make sure you have item(s) in the cart");
    }
  };

  const handleIncreaseQuantity = async id => {
    setIsLoading(true);
    try {
      const authToken = localStorage.getItem("auth-token");
      const response = await fetch(`${BASEURL}/api/cart/${id}/increase`, {
        method: "PUT",
        headers: {
          "auth-token": authToken,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        fetchCartItems();
        setIsLoading(false);
      } else {
        toast.error("Failed to increase item quantity");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
  };

  const handleDecreaseQuantity = async id => {
    setIsLoading(true);
    try {
      const authToken = localStorage.getItem("auth-token");
      const response = await fetch(`${BASEURL}/api/cart/${id}/decrease`, {
        method: "PUT",
        headers: {
          "auth-token": authToken,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        fetchCartItems();
        setIsLoading(false);
      } else {
        toast.error("Failed to decrease item quantity");
        setIsLoading(false);
      }
    } catch (error) {
      toast.error("Something went wrong");
      setIsLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <div>Loading...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Single Page Header */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Cart</h1>
      </div>

      {/* Cart Page Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Products</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                {cartItems?.cartItems?.length >= 0 ? (
                  cartItems?.cartItems?.map(item => (
                    <tr key={item.id}>
                      <th scope="row">
                        <div className="d-flex align-items-center">
                          <img
                            src={item.image}
                            className="img-fluid me-5 rounded-circle"
                            style={{ width: "80px", height: "80px" }}
                            alt={item.name}
                          />
                        </div>
                      </th>
                      <td>
                        <p className="mb-0 mt-4">{item.name}</p>
                      </td>
                      <td>
                        <p className="mb-0 mt-4">${item.new_price}</p>
                      </td>
                      <td>
                        <div
                          className="input-group quantity mt-4"
                          style={{ width: "100px" }}
                        >
                          <div className="input-group-btn">
                            <button
                              disabled={isLoading}
                              className="btn btn-sm btn-minus rounded-circle bg-light border"
                              onClick={() => handleDecreaseQuantity(item._id)}
                            >
                              <i className="fa fa-minus"></i>
                            </button>
                          </div>
                          <input
                            type="text"
                            className="form-control form-control-sm text-center border-0"
                            value={item.quantity}
                            readOnly
                          />
                          <div className="input-group-btn">
                            <button
                              disabled={isLoading}
                              className="btn btn-sm btn-plus rounded-circle bg-light border"
                              onClick={() => handleIncreaseQuantity(item._id)}
                            >
                              <i className="fa fa-plus"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="mb-0 mt-4">
                          ${parseInt(item.new_price * item.quantity).toFixed(2)}
                        </p>
                      </td>
                      <td>
                        <button
                          className="btn btn-md rounded-circle bg-light border mt-4"
                          onClick={() => {
                            removeFromCart(item._id);
                          }}
                        >
                          <i className="fa fa-times text-danger"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <div>No item(s) in the cart</div>
                )}
              </tbody>
            </table>
          </div>
          {/* <div className="mt-5">
            <input
              type="text"
              className="border-0 border-bottom rounded me-5 py-3 mb-4"
              placeholder="Coupon Code"
            />
            <button
              className="btn border-secondary rounded-pill px-4 py-3 text-primary"
              type="button"
            >
              Apply Coupon
            </button>
          </div> */}
          <div className="row g-4 justify-content-end">
            <div className="col-8"></div>
            <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
              <div className="bg-light rounded">
                <div className="p-4">
                  <h1 className="display-6 mb-4">
                    Cart <span className="fw-normal">Total</span>
                  </h1>
                  <div className="d-flex justify-content-between mb-4">
                    <h5 className="mb-0 me-4">Subtotal:</h5>
                    <p className="mb-0">${cartItems.totalPrice.toFixed(2)}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5 className="mb-0 me-4">Shipping</h5>
                    <div className="">
                      <p className="mb-0">Free</p>
                    </div>
                  </div>
                </div>
                <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                  <h5 className="mb-0 ps-4 me-4">Total</h5>
                  <p className="mb-0 pe-4">
                    ${cartItems.totalPrice.toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={handleCheckout}
                  className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4"
                  type="button"
                >
                  Proceed Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cart Page End */}
    </>
  );
};

export default CartPage;
