import { useEffect, useRef, useState } from "react";
import "./About.css";

const technologyGroups = [
    {
        title: "LANGUAGES",
        technologies: [
            {
                name: "Java",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
            },
            {
                name: "C++",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
            },
            {
                name: "C",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
            },
            {
                name: "SQL",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
            },
        ],
    },

    {
        title: "BACKEND",
        technologies: [
            {
                name: "Spring Boot",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
            },
            {
                name: "Spring Security",
                logo: "https://cdn.simpleicons.org/springsecurity/6DB33F",
            },
            {
                name: "Hibernate",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg",
            },
            {
                name: "REST API",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
            },
            {
                name: "JWT",
                logo: "https://cdn.simpleicons.org/jsonwebtokens/000000",
            },
            {
                name: "Swagger",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg",
            },
            {
                name: "Servlets",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tomcat/tomcat-original.svg",
            },
            {
                name: "JSP",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
            },
        ],
    },

    {
        title: "TESTING",
        technologies: [
            {
                name: "JUnit",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original.svg",
            },
            {
                name: "Mockito",
                logo: "https://raw.githubusercontent.com/mockito/mockito/main/config/javadoc/resources/org/mockito/logo.png",
            },
        ],
    },

    {
        title: "FRONTEND",
        technologies: [
            {
                name: "React",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            },
            {
                name: "HTML",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
            },
            {
                name: "CSS",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
            },
            {
                name: "Bootstrap",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
            },
            {
                name: "Tailwind CSS",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
            },
            {
                name: "Thymeleaf",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/thymeleaf/thymeleaf-original.svg",
            },
        ],
    },

    {
        title: "DATABASES",
        technologies: [
            {
                name: "MySQL",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
            },
            {
                name: "PostgreSQL",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
            },
        ],
    },

    {
        title: "TOOLS & CLOUD",
        technologies: [
            {
                name: "Git",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
            },
            {
                name: "GitHub",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
            },
            {
                name: "Maven",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg",
            },
            {
                name: "Apache Tomcat",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tomcat/tomcat-original.svg",
            },
            {
                name: "STS",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg",
            },
            {
                name: "IntelliJ IDEA",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg",
            },
            {
                name: "VS Code",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
            },
            {
                name: "AWS",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
            },
        ],
    },
];

export const About = () => {

    const groupRefs = useRef([]);
    const [visibleGroups, setVisibleGroups] = useState([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = Number(entry.target.dataset.index);

                    setVisibleGroups((prev) => {
                        if (entry.isIntersecting) {
                            // Add group when it enters
                            if (!prev.includes(index)) {
                                return [...prev, index];
                            }
                            return prev;
                        }

                        // Remove group when it leaves
                        return prev.filter((item) => item !== index);
                    });
                });
            },
            {
                threshold: 0.25,
            }
        );

        groupRefs.current.forEach((group) => {
            if (group) {
                observer.observe(group);
            }
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="about-section">

            {/* Large background ABOUT */}
            <div className="about-background-text" aria-hidden="true">
                ABOUT
            </div>

            <div className="about-container">

                {/* ============================= */}
                {/* INTRO */}
                {/* ============================= */}

                <div className="about-intro">

                    <h3 className="about-main-heading">
                        Hi, I'm{" "}
                        <span className="about-highlight">
                            Manjit
                        </span>
                        ,
                    </h3>

                    <h4 className="about-main-statement">
                        I'm a{" "}
                        <span>Java Developer</span>{" "}
                        specializing in{" "}
                        <span>Spring Boot</span>

                        <span className="about-final-part">
                            and <strong>Scalable Backend Applications.</strong>
                        </span>
                    </h4>

                </div>


                {/* ============================= */}
                {/* DESCRIPTION */}
                {/* ============================= */}

                <div className="about-description-wrapper">

                    <p className="about-description">
                        I enjoy solving{" "}
                        <span>
                            Data Structure and Algorithmic problems
                        </span>{" "}
                        and building real-world projects that deliver
                        meaningful user experiences.
                    </p>

                </div>


                {/* ============================= */}
                {/* TECH STACK */}
                {/* ============================= */}

                <div className="about-tech-section">

                    <h4 className="about-tech-heading">
                        TECH STACK
                    </h4>

                    <div className="about-tech-groups">

                        {technologyGroups.map((group, groupIndex) => (
                            <div
                                ref={(element) => {
                                    groupRefs.current[groupIndex] = element;
                                }}
                                data-index={groupIndex}
                                className={`about-tech-group ${
                                    visibleGroups.includes(groupIndex)
                                        ? "about-tech-group-visible"
                                        : ""
                                }`}
                                key={group.title}
                            >

                                <h5 className="about-tech-group-title">
                                    {group.title}
                                </h5>

                                <div className="about-tech-grid">

                                    {group.technologies.map((technology, index) => (
                                        <div
                                            className="about-tech-item"
                                            key={technology.name}
                                        >

                                            <img
                                                src={technology.logo}
                                                alt={technology.name}
                                                className="about-tech-logo"
                                                loading="lazy"
                                            />

                                            <span className="about-tech-tooltip">
                                                {technology.name}
                                            </span>

                                        </div>
                                    ))}

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
};