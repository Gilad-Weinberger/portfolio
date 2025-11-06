import { useEffect } from "react";
import lockinVideo from "../images/lockin-video.mp4"; // Video for LockIn project
// import charitit from "../images/Study_Buddy.png"; // Placeholder - replace with CharitIt screenshot
import calos from "../images/clothy.png"; // Placeholder - replace with Calos screenshot
import typescript from "../images/typescript.png";
import nextjs from "../images/nextjs.png";
import react from "../images/react.png";
import expo from "../images/expo.png";
import tailwind from "../images/tailwind.png";
import javascript from "../images/javascript.png";
import $ from "jquery";
import firebase from "../images/firebase.png";
import supabase from "../images/supabase.jpg";

const Projects = () => {
  useEffect(() => {
    $(".image-container").hover(
      function () {
        // Only apply rolling effect to images, not videos
        const img = $(this).find("img");
        if (img.length > 0) {
          const fullHeight = img.height();
          const initialHeight = $(this).height();
          const translateY = fullHeight - initialHeight;
          img.css({
            transform: `translateY(-${translateY}px)`,
            transition: "transform 1.5s ease",
          });
        }
      },
      function () {
        const img = $(this).find("img");
        if (img.length > 0) {
          img.css("transform", "translateY(0)");
        }
      }
    );
  }, []);

  // Map technology names to their icon images
  const techIcons = {
    "Next.js": nextjs,
    TypeScript: typescript,
    "Tailwind CSS": tailwind,
    "React Native": react,
    Expo: expo,
    JavaScript: javascript,
    React: react,
    Firebase: firebase,
    Supabase: supabase,
  };

  const projects = [
    {
      website_image: lockinVideo,
      website_link: "https://lockin.app", // Update with actual URL if available
      github_link: "https://github.com/Gilad-Weinberger/lockin.git", // Update with actual repo if available
      name: "LockIn 🚀",
      description:
        "A powerful AI-powered productivity application that transforms task management with intelligent scheduling. Features include priority matrix visualization, seamless Google Calendar integration, and automatic time-blocking to maximize focus and efficiency.",
      languages: ["TypeScript", "Next.js", "Firebase"],
      isVideo: true, // Flag to indicate this is a video
    },
    // {
    //   website_image: charitit,
    //   website_link: "#", // Mobile app - no web link
    //   github_link: "https://github.com/Gilad-Weinberger/CharitIt.git", // Update with actual repo if available
    //   name: "CharitIt 💝",
    //   description:
    //     "A comprehensive mobile donation platform that simplifies charitable giving. Users can manage recurring donations, select from multiple institutions, track donation history, and support causes they care about. Features multi-language support with RTL capabilities and offline functionality.",
    //   languages: ["React Native", "Expo", "TypeScript", "Supabase"],
    // },
    {
      website_image: calos,
      website_link: "#", // Mobile app - no web link
      github_link: "https://github.com/Gilad-Weinberger/Calos.git", // Update with actual repo if available
      name: "Calos 💪",
      description:
        "A full-featured fitness tracking mobile application for workout enthusiasts. Track exercises, log sets and reps, create custom workout plans, monitor progress over time, and share achievements. Includes AI-powered workout analysis and social features for motivation.",
      languages: ["TypeScript", "Expo", "React Native", "Supabase"],
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
                {project.isVideo ? (
                  <video
                    src={project.website_image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <img src={project.website_image} alt="" />
                )}
              </div>
              <div className="info">
                <h3 className="title">{project.name}</h3>
                <p className="description">{project.description}</p>
                <div className="languages">
                  {languages.map((lang, langIndex) => {
                    const icon = techIcons[lang];
                    return icon ? (
                      <div className="lang-icon" key={langIndex}>
                        <img src={icon} alt={lang} title={lang} />
                      </div>
                    ) : (
                      <p className="lang" key={langIndex}>
                        {lang}
                      </p>
                    );
                  })}
                </div>
                <div className="links">
                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noreferrer"
                    className="code"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                  {project.website_link !== "#" && (
                    <a
                      href={project.website_link}
                      target="_blank"
                      rel="noreferrer"
                      className="live-demo"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square link-icon"></i>
                    </a>
                  )}
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
                  {languages.map((lang, langIndex) => {
                    const icon = techIcons[lang];
                    return icon ? (
                      <div className="lang-icon" key={langIndex}>
                        <img src={icon} alt={lang} title={lang} />
                      </div>
                    ) : (
                      <p className="lang" key={langIndex}>
                        {lang}
                      </p>
                    );
                  })}
                </div>
                <div className="links">
                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noreferrer"
                    className="code"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                  {project.website_link !== "#" && (
                    <a
                      href={project.website_link}
                      target="_blank"
                      rel="noreferrer"
                      className="live-demo"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square link-icon"></i>
                    </a>
                  )}
                </div>
              </div>
              <div className="image-container">
                {project.isVideo ? (
                  <video
                    src={project.website_image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <img src={project.website_image} alt="" />
                )}
              </div>
            </div>
          );
        }
      })}
    </a>
  );
};

export default Projects;
