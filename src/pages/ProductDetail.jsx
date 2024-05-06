import { useParams } from "react-router-dom";
import useFetchProducts from "../hooks/useFetchProduct";
import useAddToCart from "../hooks/useAddToCart";

const ProductDetail = () => {
  const { products } = useFetchProducts();
  const { productId } = useParams();
  const product = products.find(e => e._id === productId);

  console.log(products);

  const { isLoading, addToCart } = useAddToCart();

  const handleAddToCart = itemId => {
    addToCart(itemId);
  };

  return (
    <section>
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Product Details</h1>
      </div>
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6">
              <img
                src={product?.image}
                className="img-fluid"
                alt="Product Image"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="fw-bold">{product?.name}</h2>
              <p className="text-muted">{product?.category}</p>
              <h3 className="my-4">${product?.new_price?.toFixed(2)}</h3>
              <p className="mb-4">{product?.description}</p>

              <div className="d-flex gap-3 mb-4">
                <button
                  disabled={isLoading}
                  className="btn border border-secondary rounded-pill px-3 text-primary"
                  onClick={() => handleAddToCart(product._id)}
                >
                  <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                  {isLoading ? "Loading..." : "Add to cart"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
