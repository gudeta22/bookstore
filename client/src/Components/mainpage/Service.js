import React, { useEffect, useRef } from "react";
import Archi from "../../assets/images/city.png";
import permit from "../../assets/images/affirmed.png";
import modeling from "../../assets/images/3d-modeling.png";
import "../../index.css";

function Service() {
  const elementsRef = useRef([]); // Store references to all elements we want to animate

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slideUp"); // Add the animation class
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is in view
    );

    const currentElements = elementsRef.current;

    currentElements.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      currentElements.forEach((el) => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

  const addToRef = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el); // Add the element to the reference array
    }
  };

  const services = [
    {
      id: 1,
      src: Archi,
      title: "ARCHITECTURAL DESIGN",
      description: `As an experienced provider of design Services, our designers translate architectural ideas into forms.`,
    },
    {
      id: 2,
      src: permit,
      title: "BUILDING PERMIT PREPARATION",
      description: `Our company provides building permit drawing services for a variety of projects, including new construction, renovations, and additions.`,
    },
    {
      id: 3,
      src: modeling,
      title: "3D MODELING AND RENDERING",
      description: `We have the best team that can enable you to convert your 2D sketches/plans to Architectural 3D modeling with high precision.`,
    },
  ];

  return (
    <div className="lg:bg-cover sm:bg-cover bg-cover md:bg-cover">
      <style>{`
        @keyframes slideUp {
          from {
            transform: translateY(50px); /* Start from a lower position */
            opacity: 0; /* Start as transparent */
          }
          to {
            transform: translateY(0); /* Move to normal position */
            opacity: 1; /* End as fully opaque */
          }
        }

        .slideUp {
          animation: slideUp 1s ease-out forwards; /* Add slideUp animation */
        }

        /* Ensure elements start off with the initial transform */
        .transform-start {
          transform: translateY(50px);
          opacity: 0;
        }
      `}</style>

      <div className="p-4 service bg-white pt-28 h-[500px] md:text-center md:h-[35rem] text-gray-800">
        <div
          className="md:m-auto md:flex flex-col justify-center md:w-[620px] transform-start"
          ref={addToRef} // Apply ref to this section
        >
          <div className="flex items-center md:justify-center transform-start" ref={addToRef}>
            <div className="w-16 mb-5 h-[2px] -mt-4 mr-2 rounded-md bg-red-500 -left-16"></div>
            <span className="text-lg mb-9 md:text-xlg font-bold uppercase md:text-center inline-block relative tracking-wider">
              Our services
            </span>
          </div>
          <h1 className="text-xl md:text-4xl uppercase font-bold fontstyle transform-start" ref={addToRef}>
            WE PROVIDE BEST DESIGN SOLUTION FOR YOU
          </h1>
        </div>
      </div>

      <div className="container lg:flex lg:justify-center m-auto rounded-lg p-10 md:-mt-44 -mt-72 md:grid w-full lg:gap-3 md:gap-2 sm:grid sm:grid-cols-2 lg:grid-col-3 sm:m-auto sm:gap-4 sm:-mt-44">
        {services.map((service, id) => (
          <div
            key={id}
            className="bg-[#f8f8f8] shadow-md md:flex sm:justify-center my-2 lg:h-[28rem] lg:w-[20.7rem] rounded-lg transform-start"
            ref={addToRef} // Apply ref to this card container
          >
            <div className="mx-0 lg:w-[30rem] md:w-[18rem] sm:w-[16rem] p-[20px] flex justify-center items-center flex-col pt-5 gap-6 my-7">
              <img src={service.src} alt="" className="w-[20%]" />
              <h3 className="font-semibold my-10 fontstyle transform-start" ref={addToRef}>
                {service.title}
              </h3>
              <p className="text-[#717081] text-center poppins font-light transform-start" ref={addToRef}>
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
