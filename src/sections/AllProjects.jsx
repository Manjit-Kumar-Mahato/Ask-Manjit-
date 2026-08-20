import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";
import { projects } from "./projectData";

import "./Projects.css";
import "./AllProjects.css";


const AllProjects = () => {

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
        <div className="all-projects-page">

            <Navbar />


            <main>

                {/* ======================================
                    BACK TO HOME
                ====================================== */}

                <div className="all-projects-back">

                    <a href="/" className="back-home-link">

                        <ArrowLeft />

                        <span>
                            Back to Home
                        </span>

                    </a>

                </div>


                {/* ======================================
                    PROJECT HERO
                ====================================== */}

                <section className="all-projects-hero">

                    <div className="all-projects-hero-inner">

                        <h1 className="all-projects-title">

                            Complete

                            <span>
                                projects
                            </span>

                        </h1>


                        <div className="all-projects-meta">

                            <span className="all-projects-line" />

                            <span>
                                HANDPICKED SELECTION
                            </span>

                            <span className="all-projects-line" />

                        </div>

                    </div>

                </section>


                {/* ======================================
                    ALL PROJECTS
                ====================================== */}

                <section className="all-projects-section">

                    <div className="projects-container">

                        <div className="projects-list">

                            {projects.map(
                                (project, index) => {

                                    const isVisible =
                                        visibleProjects.includes(
                                            index
                                        );

                                    const isReversed =
                                        index % 2 !== 0;


                                    return (

                                        <article
                                            key={
                                                project.number
                                            }
                                            ref={(element) => {
                                                projectRefs.current[
                                                    index
                                                ] = element;
                                            }}
                                            data-index={index}
                                            className={`
                                                project-item
                                                ${
                                                    isReversed
                                                        ? "project-item-reverse"
                                                        : ""
                                                }
                                                ${
                                                    isVisible
                                                        ? "project-item-visible"
                                                        : ""
                                                }
                                            `}
                                        >

                                            {/* ==========================
                                                CONTENT
                                            ========================== */}

                                            <div className="project-content">

                                                <div
                                                    className="project-number"
                                                    aria-hidden="true"
                                                >
                                                    {
                                                        project.number
                                                    }
                                                </div>


                                                <div className="project-content-inner">

                                                    <div className="project-category">
                                                        {
                                                            project.category
                                                        }
                                                    </div>


                                                    <h2 className="project-title">
                                                        {
                                                            project.title
                                                        }
                                                    </h2>


                                                    <div className="project-title-line" />


                                                    <p className="project-description">
                                                        {
                                                            project.description
                                                        }
                                                    </p>


                                                    <div className="project-main-portions">
                                                        MAIN PORTIONS
                                                    </div>


                                                    <p className="project-portions">
                                                        {
                                                            project.tags
                                                                .slice(
                                                                    0,
                                                                    3
                                                                )
                                                                .join(
                                                                    " | "
                                                                )
                                                        }
                                                    </p>


                                                    <div className="project-tags">

                                                        {project.tags.map(
                                                            (tag) => (

                                                                <span
                                                                    key={
                                                                        tag
                                                                    }
                                                                    className="project-tag"
                                                                >
                                                                    {
                                                                        tag
                                                                    }
                                                                </span>

                                                            )
                                                        )}

                                                    </div>


                                                    <a
                                                        href={
                                                            project.github
                                                        }
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="project-github"
                                                    >

                                                        <span>
                                                            VIEW ON GITHUB
                                                        </span>

                                                        <ArrowUpRight className="project-github-icon" />

                                                    </a>

                                                </div>

                                            </div>


                                            {/* ==========================
                                                IMAGE
                                            ========================== */}

                                            <div className="project-visual">

                                                <div className="project-image-wrapper">

                                                    <img
                                                        src={
                                                            project.image
                                                        }
                                                        alt={
                                                            project.title
                                                        }
                                                        className="project-image"
                                                        loading={
                                                            index === 0
                                                                ? "eager"
                                                                : "lazy"
                                                        }
                                                    />


                                                    <div className="project-image-overlay" />


                                                    <a
                                                        href={
                                                            project.github
                                                        }
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

                                }
                            )}

                        </div>


                        {/* ======================================
                            BACK TO HOME
                        ====================================== */}

                        <div className="all-projects-bottom">

                            <a
                                href="/"
                                className="all-projects-home-button"
                            >

                                <ArrowLeft />

                                <span>
                                    BACK TO HOME
                                </span>

                            </a>

                        </div>

                    </div>

                </section>

            </main>


            <Footer />

        </div>
    );
};


export default AllProjects;