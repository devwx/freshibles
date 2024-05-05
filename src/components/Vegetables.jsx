import VEGETABLE_IMG1 from "../assets/images/vegetable-item-1.jpg";
import VEGETABLE_IMG3 from "../assets/images/vegetable-item-3.png";
import VEGETABLE_IMG4 from "../assets/images/vegetable-item-4.jpg";
import VEGETABLE_IMG5 from "../assets/images/vegetable-item-5.jpg";
import VEGETABLE_IMG6 from "../assets/images/vegetable-item-6.jpg";

const vegetableData = [
  {
    imgSrc: VEGETABLE_IMG1,
    name: "Parsely",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    price: "$4.99 / kg",
  },
  {
    imgSrc: VEGETABLE_IMG3,
    name: "Banana",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    price: "$7.99 / kg",
  },
  // Add more vegetable items as needed
];

const Vegetables = () => {
  return (
    <div className="container-fluid vesitable py-5">
      <div className="container py-5">
        <h1 className="mb-0">Fresh Organic Vegetables</h1>
        <div className="owl-carousel vegetable-carousel justify-content-center">
          {vegetableData.map((vegetable, index) => (
            <div
              key={index}
              className="border border-primary rounded position-relative vesitable-item"
            >
              <div className="vesitable-img">
                <img
                  src={vegetable.imgSrc}
                  className="img-fluid w-100 rounded-top"
                  alt=""
                />
              </div>
              <div
                className="text-white bg-primary px-3 py-1 rounded position-absolute"
                style={{ position: "absolute", top: "10px", right: "10px" }}
              >
                Vegetable
              </div>
              <div className="p-4 rounded-bottom">
                <h4>{vegetable.name}</h4>
                <p>{vegetable.description}</p>
                <div className="d-flex justify-content-between flex-lg-wrap">
                  <p className="text-dark fs-5 fw-bold mb-0">
                    {vegetable.price}
                  </p>
                  <a
                    href="#"
                    className="btn border border-secondary rounded-pill px-3 text-primary"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary"></i> Add
                    to cart
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vegetables;
