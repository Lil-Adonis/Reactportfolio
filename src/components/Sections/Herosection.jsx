import React from "react";
import { Link as ScrollLink } from "react-scroll";

const herosectionData = {
  name: "Ibraheem",
  aboutMe:
    "I'm a passionate front-end web developer who excels at creating pixel-perfect web interfaces. I’m available for a remote job.",
};

function Herosection() {
  return (
    <section
      className="hero background parallax shadow-dark d-flex align-items-center"
      style={{ backgroundImage: "url(/images/hero.jpg.)"  }}
    >
      <div className="cta mx-auto mt-2">
        <h1 className="mt-0 mb-4 cd-words-wrapper">
          I’m {herosectionData.name}
          <span className="dot"></span>
        </h1>
        <p className="mb-4">{herosectionData.aboutMe}</p>
        <ScrollLink
          activeClass="active"
          to="section-portfolios"
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
          className="btn btn-default btn-lg mr-3"
        >
          <i className="icon-grid"></i>View Portfolio
        </ScrollLink>
        <div
          className="spacer d-md-none d-lg-none d-sm-none"
          data-height="10"
        ></div>
        <a href="mailto:adenugaib24@gmail.com">
        <button
          activeClass="active"
          to=""
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
          className="btn btn-border-light btn-lg"
        >
          <i className="icon-envelope"></i>Hire me
        </button>

        </a>
        
      </div>
      <div className="overlay"></div>
    </section>
  );
}

export default Herosection;
