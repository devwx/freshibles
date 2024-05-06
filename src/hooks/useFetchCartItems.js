import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCartItems } from "../features/cartItemSlice";

const BASEURL = import.meta.env.VITE_BASE_URL;

const useCartItems = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const fetchCartItems = useCallback(async () => {
    try {
      setLoading(true);
      const authToken = localStorage.getItem("auth-token");
      if (!authToken) {
        console.log("Authentication token not found");
      }

      const response = await fetch(`${BASEURL}/api/cart`, {
        headers: {
          Accept: "application/json",
          "auth-token": authToken,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      // setCartItems(data.items);
      // setTotalPrice(data.totalPrice);
      setError(null);
      dispatch(
        setCartItems({
          cartItems: data.items,
          totalPrice: data.totalPrice,
        })
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  return { cartItems, loading, error, fetchCartItems };
};

export default useCartItems;
