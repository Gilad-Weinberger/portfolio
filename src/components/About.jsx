import aboutImg from "../images/about.png";
import manCoding from "../images/man-coding.png";

const About = () => {
  return (
    <a id="about" className="about">
      <img src={aboutImg} alt="" className="about-image" />
      {/* <div className="box">
        <p className="frontend-text">Front-End Web Developr</p>
        <img src={manCoding} alt="" className="man-coding" />
      </div> */}
      <div className="text">
        <p className="title">ABOUT ME</p>
        <p className="semi-title">
          A dedicated Full-Stack Web Developer based in Katzrin, Israel 📍
        </p>
        <p className="description">
        As a aspiring Junior Full-Stack Web Developer, I've cultivated a diverse skill set that includes HTML, CSS, Python, Django, React, SCSS, and JavaScript. My passion revolves around designing and maintaining responsive websites, ensuring a seamless user experience. My expertise extends to crafting vibrant, interactive interfaces through the art of writing clean and optimized code.
        </p>
      </div>
    </a>
  );
};

export default About;
