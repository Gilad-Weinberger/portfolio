import React, { useEffect } from "react";
import clothy from "../images/clothy.png";
import $ from "jquery";

const Projects = () => {
  useEffect(() => {
    $(".image-container").hover(
      function () {
        const fullHeight = $(this).find("img").height();
        const initialHeight = $(this).height();
        const translateY = fullHeight - initialHeight;
        $(this)
          .find("img")
          .css({
            transform: `translateY(-${translateY}px)`,
            transition: "transform 1.5s ease", // Slower transition
          });
      },
      function () {
        $(this).find("img").css("transform", "translateY(0)");
      }
    );
  }, []);

  const projects = [
    {
      website_image: groovy_movie,
      website_link: "https://clothy.onrender.com/",
      github_link: "https://github.com/Gilad-Weinberger/clothy.git",
      name: "Groovy Movie 🍿",
      description:
        "Experience the magic of cinema with our immersive online platform. Discover, watch, and engage with a vast collection of movies, actors, and series. Your cinematic journey awaits!",
      languages: ["Django", "SCSS"],
    },
    {
      website_image: study_buddy,
      website_link: "https://clothy.onrender.com/",
      github_link: "https://github.com/Gilad-Weinberger/Study-Buddy.git",
      name: "Study Buddy 💻",
      description:
        "A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.",
      languages: ["Django", "SCSS"],
    },
    {
      website_image: clothy,
      website_link: "https://clothy.onrender.com/",
      github_link: "https://github.com/Gilad-Weinberger/clothy.git",
      name: "Clothy 👖",
      description:
        "A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.",
      languages: ["Django", "SCSS"],
    },
  ];

  return (
    <a id="projects" className="projects">
      <p className="title">PORTFOLIO</p>
      <p className="semi-title">
        Each project is a unique piece of development 🧩
      </p>
      {projects.map((project, index) => {
        let languages = project.languages;
        if (index % 2 === 0) {
          return (
            <div className="project" key={index}>
              <div className="image-container">
                <img src={project.website_image} alt="" />
              </div>
              <div className="info">
                <h3 className="title">{project.name}</h3>
                <p className="description">{project.description}</p>
                <div className="languages">
                  {languages.map((lang, langIndex) => (
                    <p className="lang" key={langIndex}>
                      {lang}
                    </p>
                  ))}
                </div>
                <div className="links">
                  <a href={project.github_link} target="_blank" className="code">
                    <i className="fa-brands fa-github"></i> Code
                  </a>
                  <a href={project.website_link} target="_blank" className="live-demo">
                    <i className="fa-solid fa-arrow-up-right-from-square link-icon"></i>{" "}
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="project" key={index}>
              <div className="info">
                <h3 className="title">{project.name}</h3>
                <p className="description">{project.description}</p>
                <div className="languages">
                  {languages.map((lang, langIndex) => (
                    <p className="lang" key={langIndex}>
                      {lang}
                    </p>
                  ))}
                </div>
                <div className="links">
                  <a href={project.github_link} target="_blank" className="code">
                    <i className="fa-brands fa-github"></i> Code
                  </a>
                  <a href={project.website_link} target="_blank" className="live-demo">
                    <i className="fa-solid fa-arrow-up-right-from-square link-icon"></i>{" "}
                    Live Demo
                  </a>
                </div>
              </div>
              <div className="image-container">
                <img src={project.website_image} alt="" />
              </div>
            </div>
          );
        }
      })}
    </a>
  );
};

export default Projects;
