import profile from "../images/profile.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import django from "../images/django.png";
import react from "../images/react.png";
import sass from "../images/sass.png";
import python from "../images/python.png";

const Me = () => {
  const languages = [python, django, html, css, sass, javascript, react];

  return (
    <div className="me-lang">
      <div className="me">
        <div className="left">
          <h1 className="title">Full-Stack React Developer 👋</h1>
          <p className="description">
            Hi, I'm Gilad Weinberger. A passionate Full-Stack Web Developer
            based in Katzrin, Israel. 📍
          </p>
          <div className="images">
            <a href="https://www.linkedin.com/in/gilad-weinberger/" target="blank"><img src={linkedin} alt="" /></a>
            <a href="https://github.com/Gilad-Weinberger" target="blank"><img src={github} alt="" /></a>
          </div>
        </div>
        <div className="image-box">
        </div>
      </div>
      <div className="languages">
        <p>Tech Stack <span>|</span></p>
        {languages.map((lang) => (
          <div className="lang-box" key={languages.indexOf(lang)+1}>
            <img src={lang} alt=""/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Me;
