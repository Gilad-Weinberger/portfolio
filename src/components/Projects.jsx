import { useEffect } from "react";
import lockinVideo from "../images/lockin-video.mp4"; // Video for LockIn project
// import charitit from "../images/Study_Buddy.png"; // Placeholder - replace with CharitIt screenshot
// import calos from "../images/clothy.png"; // Placeholder - replaced with text placeholder
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
      website_link: "https://lockintasks.com", // Update with actual URL if available
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
      website_image: null,
      website_link: "#", // Mobile app - no web link
      github_link: "https://github.com/Gilad-Weinberger/Calos.git", // Update with actual repo if available
      name: "Calos 💪",
      description:
        "A full-featured fitness tracking mobile application for workout enthusiasts. Track exercises, log sets and reps, create custom workout plans, monitor progress over time, and share achievements. Includes AI-powered workout analysis and social features for motivation.",
      languages: ["TypeScript", "Expo", "React Native", "Supabase"],
      isPlaceholder: true, // Flag to show text placeholder instead of image
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
                ) : project.isPlaceholder ? (
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      minHeight: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      border: "3px solid #5568d3",
                      borderRadius: "12px",
                      padding: "40px",
                      boxSizing: "border-box",
                      boxShadow: "0 8px 32px rgba(102, 126, 234, 0.3)",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "-50%",
                        right: "-50%",
                        width: "200%",
                        height: "200%",
                        background:
                          "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
                        pointerEvents: "none",
                      }}
                    />
                    <div
                      style={{
                        fontSize: "3rem",
                        marginBottom: "20px",
                      }}
                    >
                      🚀
                    </div>
                    <p
                      style={{
                        fontSize: "1.8rem",
                        color: "#ffffff",
                        textAlign: "center",
                        margin: 0,
                        fontWeight: "700",
                        textShadow: "0 2px 10px rgba(0,0,0,0.2)",
                        lineHeight: "1.4",
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      The mobile app&apos;s website is coming soon...
                    </p>
                    <p
                      style={{
                        fontSize: "1rem",
                        color: "rgba(255,255,255,0.9)",
                        textAlign: "center",
                        marginTop: "15px",
                        fontWeight: "400",
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      Stay tuned for something amazing! ✨
                    </p>
                  </div>
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
                ) : project.isPlaceholder ? (
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      minHeight: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      border: "3px solid #5568d3",
                      borderRadius: "12px",
                      padding: "40px",
                      boxSizing: "border-box",
                      boxShadow: "0 8px 32px rgba(102, 126, 234, 0.3)",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "-50%",
                        right: "-50%",
                        width: "200%",
                        height: "200%",
                        background:
                          "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
                        pointerEvents: "none",
                      }}
                    />
                    <div
                      style={{
                        fontSize: "3rem",
                        marginBottom: "20px",
                      }}
                    >
                      🚀
                    </div>
                    <p
                      style={{
                        fontSize: "1.8rem",
                        color: "#ffffff",
                        textAlign: "center",
                        margin: 0,
                        fontWeight: "700",
                        textShadow: "0 2px 10px rgba(0,0,0,0.2)",
                        lineHeight: "1.4",
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      The mobile app&apos;s website is coming soon...
                    </p>
                    <p
                      style={{
                        fontSize: "1rem",
                        color: "rgba(255,255,255,0.9)",
                        textAlign: "center",
                        marginTop: "15px",
                        fontWeight: "400",
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      Stay tuned for something amazing! ✨
                    </p>
                  </div>
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
