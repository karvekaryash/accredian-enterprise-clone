"use client";

import {useEffect, useState} from "react";
import {FaArrowUp} from "react-icons/fa";
import "./index.css";

export default function ScrollTop() {

  const [show, setShow] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 400) {

        setShow(true);

      } else {

        setShow(false);

      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const scrollTop = () => {

    window.scrollTo({

      top:0,

      behavior:"smooth"

    });

  };

  return(

    show && (

      <button

        className="scroll-btn"

        onClick={scrollTop}

      >

        <FaArrowUp/>

      </button>

    )

  );

}