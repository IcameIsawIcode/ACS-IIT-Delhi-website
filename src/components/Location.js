import React, { useRef, useEffect, useState } from "react";

function Location() {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="location"
      className={`creative-location-section${inView ? " in-view" : ""}`}
    >
      {/* Wavy animated SVG */}
      <div className="wave-background">
        <svg width="100%" height="100" viewBox="0 0 1300 100" preserveAspectRatio="none">
          <path d="M0,80 Q325,0 650,80 T1300,80 V100 H0Z" fill="#00589C" opacity="0.13">
            <animate
              attributeName="d"
              dur="3s"
              repeatCount="indefinite"
              values="M0,80 Q325,0 650,80 T1300,80 V100 H0Z; 
                      M0,70 Q325,40 650,70 T1300,70 V100 H0Z; 
                      M0,80 Q325,0 650,80 T1300,80 V100 H0Z"
            />
          </path>
        </svg>
      </div>
      {/* floating pin marker */}
      <div className="location-image-pin-wrapper">
        <img
          src="https://home.iitd.ac.in/images/for-faculty/camp8.jpg"
          alt="IIT Delhi Campus"
          className="creative-location-image"
        />
        <div className="pin-marker"></div>
      </div>
      {/* animated fake particles */}
      <div className="location-particles">
        <span className="particle particle1"></span>
        <span className="particle particle2"></span>
        <span className="particle particle3"></span>
      </div>
      <h2 className="location-title-creative">Indian Institute of Technology Delhi (IIT Delhi)</h2>
      <p className="location-text-creative">Main Auditorium, Hauz Khas, New Delhi — 110016, India</p>
      <a href="#" className="visit-btn-creative">Take a Campus Tour</a>
    </section>
  );
}

export default Location;
