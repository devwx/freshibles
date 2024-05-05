/* eslint-disable no-unused-vars */
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import $ from "jquery"; // Import jQuery
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Product from "./components/Product";
import Vegetables from "./components/Vegetables";
import Bestseller from "./components/Bestseller";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
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

  return (
    <section>
      <Navbar />
      <Hero />
      <Features />
      <Product />
      <Bestseller />
      <Footer />
      <BackToTop />
    </section>
  );
}

export default App;
