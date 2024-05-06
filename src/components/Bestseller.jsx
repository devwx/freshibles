import { useNavigate } from "react-router-dom";
import useAddToCart from "../hooks/useAddToCart";
import useFetchProducts from "../hooks/useFetchProduct";

const Bestseller = () => {
  const { products } = useFetchProducts();
   const navigate = useNavigate();

  const bestItems = products.slice(0, 6);
  const bestItem2 = products
    .filter(item => item.category === "fruit" || item.category === "dairy")
    .slice(2, 6);

     const { isLoading, addToCart } = useAddToCart();

     const handleAddToCart = itemId => {
       addToCart(itemId);
     };

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "700px" }}>
          <h1 className="display-4">Bestseller Products</h1>
          <p>
            Explore our Bestsellers: Tried, tested, and loved by many. Elevate
            your grocery game with our top picks for unbeatable quality and
            flavor
          </p>
        </div>
        <div className="row g-4">
          {bestItems.map(item => (
            <div key={item._id} className="col-lg-6 col-xl-4">
              <div className="p-4 rounded bg-light">
                <div className="row align-items-center">
                  <div
                    onClick={() => navigate(`/product/${item._id}`)}
                    className="col-6"
                  >
                    <img
                      src={item.image}
                      className="img-fluid rounded-circle w-100"
                      alt=""
                    />
                  </div>
                  <div className="col-6">
                    <a href="#" className="h5">
                      {item.name}
                    </a>
                    <div className="d-flex my-3">
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <h4 className="mb-3">{item.new_price}$</h4>
                    <button
                      disabled={isLoading}
                      className="btn border border-secondary rounded-pill px-3 text-primary"
                      onClick={() => handleAddToCart(item._id)}
                    >
                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                      {isLoading ? "Loading..." : "Add to cart"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {bestItem2.map(item => (
            <div key={item._id} className="col-md-6 col-lg-6 col-xl-3">
              <div className="text-center">
                <img
                  onClick={() => navigate(`/product/${item._id}`)}
                  src={item.image}
                  className="img-fluid rounded"
                  alt=""
                />
                <div className="py-4">
                  <a href="#" className="h5">
                    {item.name}
                  </a>
                  <div className="d-flex my-3 justify-content-center">
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <h4 className="mb-3">{item.new_price}$</h4>
                  <button
                    disabled={isLoading}
                    className="btn border border-secondary rounded-pill px-3 text-primary"
                    onClick={() => handleAddToCart(item._id)}
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                    {isLoading ? "Loading..." : "Add to cart"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bestseller;
