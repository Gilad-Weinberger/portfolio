import linkedin from "../images/white-linkedin.png";
import github from "../images/white-github.png";

const Footer = () => {
  return (
    <div className="footer">
      <h4 className="rights">Copyright © 2023. All rights are reserved</h4>
      <div className="social">
        <a href=""><img src={github} alt="" className="github" /></a>
        <a href=""><img src={linkedin} alt="" className="linkedin" /></a>
      </div>
    </div>
  );
};

export default Footer;
