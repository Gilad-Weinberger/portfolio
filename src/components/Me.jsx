import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import typescript from "../images/typescript.png";
import nextjs from "../images/nextjs.png";
import react from "../images/react.png";
import expo from "../images/expo.png";
import python from "../images/python.png";
import javascript from "../images/javascript.png";
import django from "../images/django.png";

const Me = () => {
  const languages = [
    typescript,
    javascript,
    nextjs,
    react,
    expo,
    python,
    django,
  ];

  return (
    <div id="home" className="me-lang">
      <div className="me">
        <div className="left">
          <h1 className="title">Full-Stack React Developer 👋</h1>
          <p className="description">
            Hi, I&apos;m Gilad Weinberger. A passionate Full-Stack Web Developer
            based in Katzrin, Israel. 📍
          </p>
          <div className="images">
            <a
              href="https://www.linkedin.com/in/gilad-weinberger/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="" />
            </a>
            <a
              href="https://github.com/Gilad-Weinberger"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="" />
            </a>
          </div>
        </div>
        <div className="image-box"></div>
      </div>
      <div className="languages">
        <p>
          Tech Stack <span>|</span>
        </p>
        <div className="lang-row">
          {languages.map((lang) => (
            <div className="lang-box" key={languages.indexOf(lang) + 1}>
              <img src={lang} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Me;
