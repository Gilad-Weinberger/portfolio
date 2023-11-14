import linkedin from "../images/white-linkedin.png";
import github from "../images/white-github.png";

const Footer = () => {
  return (
    <div className="footer">
      <h4 className="rights">Copyright © 2023. All rights are reserved</h4>
      <div className="social">
        <a href="https://www.linkedin.com/in/gilad-weinberger/"><img src={linkedin} target="_blank" alt="" className="linkedin" /></a>
        <a href="https://github.com/Gilad-Weinberger"><img src={github} target="_blank" alt="" className="github" /></a>
      </div>
    </div>
  );
};

export default Footer;
