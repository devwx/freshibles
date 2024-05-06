import useAddToCart from "../hooks/useAddToCart";
import useFetchProducts from "../hooks/useFetchProduct";

const Product = () => {
  const { products } = useFetchProducts();

  const dairyProducts = products.filter(item => item.category === "dairy");
  const VegetableProducts = products.filter(
    item => item.category === "vegetable"
  );
  const fruitProducts = products.filter(item => item.category === "fruit");
  const breadProducts = products.filter(item => item.category === "bread");
  const meatProducts = products.filter(item => item.category === "meat");

  const { isLoading, addToCart } = useAddToCart();

  const handleAddToCart = itemId => {
    addToCart(itemId);
  };

  return (
    <div className="container-fluid fruite py-5">
      <div className="container py-5">
        <div className="tab-class text-center">
          <div className="row g-4">
            <div className="col-lg-4 text-start">
              <h1>Our Organic Products</h1>
            </div>
            <div className="col-lg-8 text-end">
              <ul className="nav nav-pills d-inline-flex text-center mb-5">
                <li className="nav-item">
                  <a
                    className="d-flex m-2 py-2 bg-light rounded-pill active"
                    data-bs-toggle="pill"
                    href="#tab-1"
                  >
                    <span className="text-dark" style={{ width: "130px" }}>
                      Dairy Products
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="d-flex py-2 m-2 bg-light rounded-pill"
                    data-bs-toggle="pill"
                    href="#tab-2"
                  >
                    <span className="text-dark" style={{ width: "130px" }}>
                      Vegetables
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="d-flex m-2 py-2 bg-light rounded-pill"
                    data-bs-toggle="pill"
                    href="#tab-3"
                  >
                    <span className="text-dark" style={{ width: "130px" }}>
                      Fruits
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="d-flex m-2 py-2 bg-light rounded-pill"
                    data-bs-toggle="pill"
                    href="#tab-4"
                  >
                    <span className="text-dark" style={{ width: "130px" }}>
                      Bread
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="d-flex m-2 py-2 bg-light rounded-pill"
                    data-bs-toggle="pill"
                    href="#tab-5"
                  >
                    <span className="text-dark" style={{ width: "130px" }}>
                      Meat
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                <div className="col-lg-12">
                  <div className="row g-4">
                    {dairyProducts.map(item => (
                      <div
                        key={item._id}
                        className="col-md-6 col-lg-4 col-xl-3"
                      >
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                            style={{height: "300px"}}
                              src={item.image}
                              className="img-fluid w-100 rounded-top"
                              alt=""
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Dairy
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                ${item.new_price} / ltr
                              </p>
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
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-2" className="tab-pane fade show p-0">
              <div className="row g-4">
                <div className="col-lg-12">
                  <div className="row g-4">
                    {VegetableProducts.map(item => (
                      <div
                        key={item._id}
                        className="col-md-6 col-lg-4 col-xl-3"
                      >
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                            style={{height: "300px"}}
                              src={item.image}
                              className="img-fluid w-100 rounded-top"
                              alt=""
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Vegetables
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                ${item.new_price} / ltr
                              </p>
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
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-3" className="tab-pane fade show p-0">
              <div className="row g-4">
                <div className="col-lg-12">
                  <div className="row g-4">
                    {fruitProducts.map(item => (
                      <div
                        key={item._id}
                        className="col-md-6 col-lg-4 col-xl-3"
                      >
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                            style={{height: "300px"}}
                              src={item.image}
                              className="img-fluid w-100 rounded-top"
                              alt=""
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Fruits
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                ${item.new_price} / ltr
                              </p>
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
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-4" className="tab-pane fade show p-0">
              <div className="row g-4">
                <div className="col-lg-12">
                  <div className="row g-4">
                    {breadProducts.map(item => (
                      <div
                        key={item._id}
                        className="col-md-6 col-lg-4 col-xl-3"
                      >
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                            style={{height: "300px"}}
                              src={item.image}
                              className="img-fluid w-100 rounded-top"
                              alt=""
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Bread
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                ${item.new_price} / ltr
                              </p>
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
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-5" className="tab-pane fade show p-0">
              <div className="row g-4">
                <div className="col-lg-12">
                  <div className="row g-4">
                    {meatProducts.map(item => (
                      <div
                        key={item._id}
                        className="col-md-6 col-lg-4 col-xl-3"
                      >
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                            style={{height: "300px"}}
                              src={item.image}
                              className="img-fluid w-100 rounded-top"
                              alt=""
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Meat
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                ${item.new_price} / ltr
                              </p>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
