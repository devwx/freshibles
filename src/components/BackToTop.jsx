import { useEffect, useState } from "react";

const BackToTop = () => {
 const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
   const toggleVisibility = () => {
     if (window.pageYOffset > 300) {
       setIsVisible(true);
     } else {
       setIsVisible(false);
     }
   };

   window.addEventListener("scroll", toggleVisibility);

   return () => {
     window.removeEventListener("scroll", toggleVisibility);
   };
 }, []);

 const scrollToTop = () => {
   window.scrollTo({
     top: 0,
     behavior: "smooth",
   });
 };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="btn btn-primary border-3 border-primary rounded-circle back-to-top"
        >
          <i className="fa fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
};

export default BackToTop;
