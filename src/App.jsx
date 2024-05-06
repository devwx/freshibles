/* eslint-disable no-unused-vars */
const BASEURL = import.meta.env.VITE_BASE_URL;
import "bootstrap/dist/css/bootstrap.min.css";
import { useCallback, useEffect, useState } from "react";
import $ from "jquery"; // Import jQuery
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { Outlet } from "react-router-dom";
import { Notification } from "./components/Notification";
import useFetchProducts from "./hooks/useFetchProduct";

function App() {
  const { loading } = useFetchProducts();

  const fetchUser = useCallback(async () => {
    const authToken = localStorage.getItem("auth-token");
    try {
      const response = await fetch(`${BASEURL}/api/me`, {
        headers: {
          Accept: "application/json",
          "auth-token": authToken,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("user-data", JSON.stringify(data));
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  useEffect(() => {
    // Spinner
    const spinner = setTimeout(() => {
      $("#spinner").removeClass("show");
    }, 1);

    // Fixed Navbar
    const handleScroll = () => {
      if ($(window).width() < 992) {
        if ($(window).scrollTop() > 55) {
          $(".fixed-top").addClass("shadow");
        } else {
          $(".fixed-top").removeClass("shadow");
        }
      } else {
        if ($(window).scrollTop() > 55) {
          $(".fixed-top").addClass("shadow").css("top", -55);
        } else {
          $(".fixed-top").removeClass("shadow").css("top", 0);
        }
      }
    };
    $(window).scroll(handleScroll);

    // Back to top button
    $(window).scroll(() => {
      if ($(window).scrollTop() > 300) {
        $(".back-to-top").fadeIn("slow");
      } else {
        $(".back-to-top").fadeOut("slow");
      }
    });
    $(".back-to-top").click(() => {
      $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
      return false;
    });

    // Cleanup function
    return () => {
      clearTimeout(spinner);
      $(window).off("scroll", handleScroll);
    };
  }, []); // Run only on mount

  // State for video source
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    // Modal Video
    $(".btn-play").click(function () {
      setVideoSrc($(this).data("src"));
    });

    $("#videoModal").on("shown.bs.modal", function (e) {
      $("#video").attr(
        "src",
        `${videoSrc}?autoplay=1&amp;modestbranding=1&amp;showinfo=0`
      );
    });

    $("#videoModal").on("hide.bs.modal", function (e) {
      $("#video").attr("src", videoSrc);
    });
  }, [videoSrc]); // Run when videoSrc changes

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
    <section>
      <Navbar />
      <Outlet />
      <Footer />
      <BackToTop />
      <Notification />
    </section>
  );
}

export default App;
