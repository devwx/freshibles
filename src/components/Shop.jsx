import FRUIT_IMG1 from "../assets/images/fruite-item-1.jpg";
import FRUIT_IMG2 from "../assets/images/fruite-item-2.jpg";
import FRUIT_IMG3 from "../assets/images/fruite-item-3.jpg";
import FRUIT_IMG5 from "../assets/images/fruite-item-5.jpg";

import FEATURE_IMG1 from "../assets/images/featur-1.jpg";
import FEATURE_IMG2 from "../assets/images/featur-2.jpg";
import FEATURE_IMG3 from "../assets/images/featur-3.jpg";

import BANER from "../assets/images/banner-fruits.jpg";

const productItems = [
  {
    id: 1,
    name: "Grapes",
    category: "Fruits",
    image: FRUIT_IMG5,
    price: 4.99,
  },
  {
    id: 2,
    name: "Raspberries",
    category: "Fruits",
    image: FRUIT_IMG2,
    price: 4.99,
  },
  {
    id: 3,
    name: "Apricots",
    category: "Fruits",
    image: FRUIT_IMG1,
    price: 4.99,
  },
  {
    id: 4,
    name: "Banana",
    category: "Fruits",
    image: FRUIT_IMG3,
    price: 4.99,
  },
  {
    id: 5,
    name: "Oranges",
    category: "Fruits",
    image: FRUIT_IMG1,
    price: 4.99,
  },
  {
    id: 6,
    name: "Oranges",
    category: "Fruits",
    image: FRUIT_IMG1,
    price: 4.99,
  },
  {
    id: 7,
    name: "Oranges",
    category: "Fruits",
    image: FRUIT_IMG1,
    price: 4.99,
  },
  {
    id: 8,
    name: "Oranges",
    category: "Fruits",
    image: FRUIT_IMG1,
    price: 4.99,
  },
  {
    id: 9,
    name: "Oranges",
    category: "Fruits",
    image: FRUIT_IMG1,
    price: 4.99,
  },
];

// SIDEBAR
const featuredItems = [
  {
    id: 1,
    name: "Big Banana",
    image: FEATURE_IMG1,
    rating: 4,
    price: 2.99,
    oldPrice: 4.11,
  },
  {
    id: 2,
    name: "Big Banana",
    image: FEATURE_IMG2,
    rating: 4,
    price: 2.99,
    oldPrice: 4.11,
  },
  {
    id: 3,
    name: "Big Banana",
    image: FEATURE_IMG3,
    rating: 4,
    price: 2.99,
    oldPrice: 4.11,
  },
];

export const Shop = () => {
  const renderStars = rating => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          className={`fa fa-star ${i <= rating ? "text-secondary" : ""}`}
        ></i>
      );
    }
    return stars;
  };

  return (
    <section>
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Shop</h1>
      </div>
      <div className="container-fluid fruite py-5">
        <div className="container py-5">
          <h1 className="mb-4">Featured products</h1>
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="row g-4">
                <div className="col-xl-3">
                  <div className="input-group w-100 mx-auto d-flex">
                    <input
                      type="search"
                      className="form-control p-3"
                      placeholder="keywords"
                      aria-describedby="search-icon-1"
                    />
                    <span id="search-icon-1" className="input-group-text p-3">
                      <i className="fa fa-search"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="row g-4">
                <div className="col-lg-3">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <h4 className="mb-3"></h4>
                      {featuredItems.map(item => (
                        <div
                          key={item.id}
                          className="d-flex align-items-center justify-content-start"
                        >
                          <div
                            className="rounded me-4"
                            style={{ width: "100px", height: "100px" }}
                          >
                            <img
                              src={item.image}
                              className="img-fluid rounded"
                              alt={item.name}
                            />
                          </div>
                          <div>
                            <h6 className="mb-2">{item.name}</h6>
                            <div className="d-flex mb-2">
                              {renderStars(item.rating)}
                            </div>
                            <div className="d-flex mb-2">
                              <h5 className="fw-bold me-2">${item.price}</h5>
                              <h5 className="text-danger text-decoration-line-through">
                                ${item.oldPrice}
                              </h5>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="d-flex justify-content-center my-4">
                        <a
                          href="#"
                          className="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100"
                        >
                          View More
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="position-relative">
                        <img
                          src={BANER}
                          className="img-fluid w-100 rounded"
                          alt="Banner"
                        />
                        <div
                          className="position-absolute"
                          style={{
                            top: "50%",
                            right: "10px",
                            transform: "translateY(-50%)",
                          }}
                        >
                          <h3 className="text-secondary fw-bold">
                            More <br /> Fresh <br /> Fruits
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="row g-4 justify-content-center">
                    {productItems.map(item => (
                      <div key={item.id} className="col-md-6 col-lg-6 col-xl-4">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src={item.image}
                              className="img-fluid w-100 rounded-top"
                              alt={item.name}
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: "10px", left: "10px" }}
                          >
                            {item.category}
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>{item.name}</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                ${item.price} / kg
                              </p>
                              <a
                                href="#"
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="col-12">
                      <div className="pagination d-flex justify-content-center mt-5">
                        <a href="#" className="rounded">
                          &laquo;
                        </a>
                        <a href="#" className="active rounded">
                          1
                        </a>
                        <a href="#" className="rounded">
                          2
                        </a>
                        <a href="#" className="rounded">
                          3
                        </a>
                        <a href="#" className="rounded">
                          4
                        </a>
                        <a href="#" className="rounded">
                          5
                        </a>
                        <a href="#" className="rounded">
                          6
                        </a>
                        <a href="#" className="rounded">
                          &raquo;
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
