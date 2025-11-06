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
          A dedicated Full-Stack Developer based in Katzrin, Israel 📍
        </p>
        <p className="description">
          As a passionate Full-Stack Developer, I specialize in building modern
          web and mobile applications using TypeScript, React, Next.js, and
          React Native with Expo. My expertise includes creating responsive web
          applications with Next.js and Tailwind CSS, developing cross-platform
          mobile apps with React Native, and integrating backend services like
          Firebase and Supabase. I focus on crafting clean, optimized code and
          delivering seamless user experiences across both web and mobile
          platforms.
        </p>
      </div>
    </a>
  );
};

export default About;
