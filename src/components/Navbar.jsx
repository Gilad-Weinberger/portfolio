const Navbar = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="navbar">
      <a
        href="#home"
        className="title"
        onClick={(e) => handleSmoothScroll(e, "home")}
      >
        Gilad.dev
      </a>
      <div className="right">
        <a href="#home" onClick={(e) => handleSmoothScroll(e, "home")}>
          Home
        </a>
        <a href="#about" onClick={(e) => handleSmoothScroll(e, "about")}>
          About
        </a>
        <a href="#projects" onClick={(e) => handleSmoothScroll(e, "projects")}>
          Projects
        </a>
        <a href="#contact" onClick={(e) => handleSmoothScroll(e, "contact")}>
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
