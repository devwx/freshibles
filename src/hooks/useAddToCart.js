import { useState, useCallback } from "react";
import { toast } from "react-toastify";
import useCartItems from "./useFetchCartItems";

const BASEURL = import.meta.env.VITE_BASE_URL;

const useAddToCart = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { fetchCartItems } = useCartItems();

  const addToCart = useCallback(async itemId => {
    setIsLoading(true);

    try {
      if (!localStorage.getItem("auth-token")) {
        setIsLoading(false);
        throw new Error("You are not logged in");
      }

      const response = await fetch(`${BASEURL}/api/cart`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId }),
      });

      if (!response.ok) {
        setIsLoading(false);
        toast.error("Failed to add item to cart");
      } else {
        await response.json();
        fetchCartItems();
        toast.success("Added to cart");
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  }, []);

  return { isLoading, addToCart };
};

export default useAddToCart;
