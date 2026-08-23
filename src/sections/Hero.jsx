import {
  ArrowDownToLine,
  ArrowUpRight,
} from "lucide-react";

import { useEffect, useState } from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const [role, setRole] = useState("Java Developer");
  const [typingKey, setTypingKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRole((prev) =>
        prev === "Java Developer"
          ? "DSA Enthusiast"
          : "Java Developer"
      );

      setTypingKey((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const rotatingText =
    "ENGINEERING • BUILDING • AI • BACKEND • JAVA • SPRING BOOT • ";

  return (
    <section
      id="home"
      className="hero-section"
    >
      {/* ========================= */}
      {/* BACKGROUND */}
      {/* ========================= */}

      <div className="hero-grid" />

      <div className="hero-blue-glow" />

      <div className="hero-container">

        {/* ========================= */}
        {/* MAIN HERO */}
        {/* ========================= */}

        <div className="hero-main">

          {/* ========================= */}
          {/* LEFT SIDE */}
          {/* ========================= */}

          <div className="hero-left">

            {/* Role */}
            <div className="hero-role">
                <span className="hero-role-dot" />

                <span
                    key={typingKey}
                    className="typing-text"
                >
                    {role}
                </span>
            </div>

            {/* ========================= */}
            {/* NAME */}
            {/* ========================= */}

            <h1 className="hero-title">

              {/* MANJIT */}
              <span className="hero-name-first">
                MANJIT
              </span>

              {/* KUMAR + MAHATO */}
              <span className="hero-name-second">

                <span className="hero-kumar">
                  Kumar
                </span>

                <span className="hero-mahato">
                  MAHATO
                </span>

              </span>

            </h1>

            {/* ========================= */}
            {/* DESCRIPTION */}
            {/* ========================= */}

            <div className="hero-description">

              <p>
                Building{" "}
                <span className="description-dark">
                  scalable backend systems
                </span>
              </p>

              <p>
                with{" "}
                <span>
                  Java, Spring Boot & AI.
                </span>
              </p>

            </div>

            {/* ========================= */}
            {/* BUTTONS */}
            {/* ========================= */}

            <div className="hero-buttons">

              {/* Explore Projects */}
              <a
                href="#projects"
                className="hero-primary-button group"
              >
                <span>
                  EXPLORE PROJECTS
                </span>

                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              {/* Download Resume */}
              <a
                href="/Manjit_Kumar_Mahato_Resume.pdf"
                download
                className="hero-secondary-button group"
              >
                <span>
                  DOWNLOAD RESUME
                </span>

                <ArrowDownToLine
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </a>

            </div>

          </div>

          {/* ========================= */}
          {/* RIGHT SIDE */}
          {/* ========================= */}

          <div className="hero-right">

            {/* Rotating Badge */}
            <div className="rotating-badge">

              {/* Rotating Text */}
              <svg
                viewBox="0 0 400 400"
                className="rotating-text-svg"
                aria-hidden="true"
              >
                <defs>

                  <path
                    id="hero-circle-path"
                    d="
                      M 200,200
                      m -125,0
                      a 125,125 0 1,1 250,0
                      a 125,125 0 1,1 -250,0
                    "
                  />

                </defs>

                <text>
                  <textPath
                    href="#hero-circle-path"
                    startOffset="0%"
                  >
                    {rotatingText}
                  </textPath>
                </text>

              </svg>

              {/* Center Circle */}
              <div className="badge-center">

                <span>
                  &lt;/&gt;
                </span>

              </div>

            </div>

            {/* ========================= */}
            {/* SOCIAL LINKS */}
            {/* ========================= */}

            <div className="hero-socials">

              <a
                href="https://github.com/Manjit-Kumar-Mahato"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social"
                aria-label="GitHub"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/manjit-mahato-a92578338/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} />
              </a>

            </div>

          </div>

        </div>

        {/* ========================= */}
        {/* INFORMATION BAR */}
        {/* ========================= */}

        <div className="hero-info-grid">

          {/* Available */}
          <div className="hero-info">

            <div className="hero-info-heading">
              <span className="info-dot" />
              AVAILABLE FOR
            </div>

            <strong>
              INTERNSHIPS
            </strong>

          </div>

          {/* Specialization */}
          <div className="hero-info">

            <div className="hero-info-heading">
              <span className="info-dot" />
              SPECIALIZATION
            </div>

            <strong>
              JAVA / SPRING / DSA
            </strong>

          </div>

          {/* Location */}
          <div className="hero-info">

            <div className="hero-info-heading">
              <span className="info-dot" />
              BASED IN
            </div>

            <strong>
              KOLKATA, INDIA
            </strong>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;