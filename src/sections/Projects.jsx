import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "./projectData";
import "./Projects.css";

export const Projects = () => {

    const projectRefs = useRef([]);

    const [visibleProjects, setVisibleProjects] = useState([]);

    useEffect(() => {

        const observer = new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    const index = Number(
                        entry.target.dataset.index
                    );

                    if (entry.isIntersecting) {

                        setVisibleProjects((prev) => {

                            if (prev.includes(index)) {
                                return prev;
                            }

                            return [...prev, index];
                        });

                    } else {

                        setVisibleProjects((prev) =>
                            prev.filter(
                                (item) => item !== index
                            )
                        );

                    }

                });

            },
            {
                threshold: 0.2,
            }
        );

        projectRefs.current.forEach((project) => {

            if (project) {
                observer.observe(project);
            }

        });

        return () => observer.disconnect();

    }, []);

    return (

        <section
            id="projects"
            className="projects-section"
        >

            {/* ======================================
                BACKGROUND GLOWS
            ====================================== */}

            <div className="projects-glow projects-glow-one" />

            <div className="projects-glow projects-glow-two" />


            <div className="projects-container">


                {/* ======================================
                    PROJECT GALLERY HEADER
                ====================================== */}

                <div className="projects-heading">

                    <h2 className="projects-main-title">
                        Project
                        <span>gallery</span>
                    </h2>


                    <div className="projects-heading-meta">

                        <span className="projects-heading-line" />

                        <span>
                            HANDPICKED SELECTION
                        </span>

                        <span className="projects-heading-line" />

                    </div>

                </div>


                {/* ======================================
                    PROJECT LIST
                ====================================== */}

                <div className="projects-list">

                    {projects.slice(0, 4).map((project, index) => {

                        const isVisible =
                            visibleProjects.includes(index);

                        const isReversed =
                            index % 2 !== 0;

                        return (

                            <article
                                key={project.number}
                                ref={(element) => {
                                    projectRefs.current[index] =
                                        element;
                                }}
                                data-index={index}
                                className={`
                                    project-item
                                    ${isReversed
                                        ? "project-item-reverse"
                                        : ""
                                    }
                                    ${isVisible
                                        ? "project-item-visible"
                                        : ""
                                    }
                                `}
                            >


                                {/* =================================
                                    PROJECT CONTENT
                                ================================= */}

                                <div className="project-content">

                                    {/* NUMBER BEHIND CONTENT */}

                                    <div
                                        className="project-number"
                                        aria-hidden="true"
                                    >
                                        {project.number}
                                    </div>


                                    <div className="project-content-inner">

                                        <div className="project-category">
                                            {project.category}
                                        </div>


                                        <h3 className="project-title">
                                            {project.title}
                                        </h3>


                                        <div className="project-title-line" />


                                        <p className="project-description">
                                            {project.description}
                                        </p>


                                        <div className="project-main-portions">
                                            MAIN PORTIONS
                                        </div>


                                        <p className="project-portions">
                                            {project.tags
                                                .slice(0, 3)
                                                .join(" | ")}
                                        </p>


                                        {/* TECHNOLOGY TAGS */}

                                        <div className="project-tags">

                                            {project.tags.map(
                                                (tag) => (

                                                    <span
                                                        key={tag}
                                                        className="project-tag"
                                                    >
                                                        {tag}
                                                    </span>

                                                )
                                            )}

                                        </div>


                                        {/* GITHUB */}

                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-github"
                                        >

                                            <span>
                                                VIEW ON GITHUB
                                            </span>

                                            <ArrowUpRight
                                                className="project-github-icon"
                                            />

                                        </a>

                                    </div>

                                </div>


                                {/* =================================
                                    PROJECT IMAGE
                                ================================= */}

                                <div className="project-visual">

                                    <div className="project-image-wrapper">

                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="project-image"
                                            loading={
                                                index === 0
                                                    ? "eager"
                                                    : "lazy"
                                            }
                                        />


                                        <div className="project-image-overlay" />


                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-image-link"
                                            aria-label={`View ${project.title} on GitHub`}
                                        >

                                            <ArrowUpRight />

                                        </a>

                                    </div>

                                </div>

                            </article>

                        );

                    })}

                </div>


                {/* ======================================
                    VIEW ALL PROJECTS
                ====================================== */}

                <div className="projects-footer">

                    <a
                        href="/projects"
                        className="projects-all-button"
                    >

                        VIEW ALL PROJECTS

                        <ArrowUpRight />

                    </a>

                </div>

            </div>

        </section>
    );
};