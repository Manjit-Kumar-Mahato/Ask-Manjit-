const timeline = [
    {
        period: "2026 — Present",
        role: "Backend Engineering & System Design",
        description:
            "Focused on building secure and scalable backend applications with Java and Spring Boot. Working with REST APIs, Spring Security, JWT authentication, Spring Data JPA, Hibernate, MySQL, PostgreSQL, API design, and system design fundamentals.",
        technologies: [
            "Java",
            "Spring Boot",
            "Spring Security",
            "JWT",
            "REST APIs",
            "Spring Data JPA",
            "Hibernate",
            "MySQL",
        ],
        current: true,
    },

    {
        period: "2024 — Present",
        role: "Competitive Programming",
        description:
            "Continuously strengthening Data Structures and Algorithms through competitive programming and regular problem solving. Currently rated 1900+ on LeetCode, 1500+ on Codeforces, and 1500+ on CodeChef.",
        technologies: [
            "Java",
            "DSA",
            "Algorithms",
            "LeetCode",
            "Codeforces",
            "CodeChef",
        ],
        current: true,
    },

    {
        period: "2025 — 2026",
        role: "Spring Boot Application Development",
        description:
            "Built multiple complete applications using Spring Boot, Thymeleaf, Spring Security, Hibernate, and MySQL. Worked on authentication, authorization, CRUD operations, pagination, database relationships, and responsive application interfaces.",
        technologies: [
            "Spring Boot",
            "Spring Security",
            "Thymeleaf",
            "Hibernate",
            "MySQL",
            "Bootstrap",
        ],
        current: false,
    },

    {
        period: "2024 — 2025",
        role: "Java Backend Foundations",
        description:
            "Built a strong foundation in Java backend development through OOP, JDBC, Servlets, JSP, Hibernate, Maven, MySQL, and Apache Tomcat. Developed projects including a Hospital Management System and Online Expense Tracker.",
        technologies: [
            "Java",
            "OOP",
            "JDBC",
            "Servlets",
            "JSP",
            "Hibernate",
            "MySQL",
            "Maven",
        ],
        current: false,
    },

    {
        period: "2024",
        role: "Programming Foundations",
        description:
            "Started my programming journey as an Information Technology student at Jadavpur University. Explored Java, C, web fundamentals, Git, and GitHub while building the foundation for backend development and competitive programming.",
        technologies: [
            "Java",
            "C",
            "Git",
            "GitHub",
            "HTML",
            "CSS",
        ],
        current: false,
    },
];


export const DeveloperJourney = () => {
    return (
        <section
            id="journey"
            className="
                relative
                overflow-hidden
                py-28
                md:py-32
            "
        >

            {/* =====================================================
                BACKGROUND GLOW
            ====================================================== */}

            <div
                className="
                    absolute
                    left-1/4
                    top-1/3
                    w-96
                    h-96
                    rounded-full
                    bg-primary/5
                    blur-3xl
                    pointer-events-none
                "
            />

            <div
                className="
                    absolute
                    right-0
                    bottom-0
                    w-80
                    h-80
                    rounded-full
                    bg-primary/[0.035]
                    blur-3xl
                    pointer-events-none
                "
            />


            {/* =====================================================
                MAIN CONTAINER
            ====================================================== */}

            <div
                className="
                    container
                    mx-auto
                    px-6
                    relative
                    z-10
                "
            >


                {/* =================================================
                    HEADER
                ================================================== */}

                <div className="mb-20">

                    <h2
                        className="
                            text-5xl
                            sm:text-6xl
                            md:text-7xl
                            lg:text-[7rem]
                            font-normal
                            tracking-[-0.07em]
                            leading-[0.8]
                        "
                    >
                        Journey

                        <span
                            className="
                                block
                                ml-8
                                md:ml-16
                                mt-4
                                font-serif
                                italic
                                font-normal
                                text-primary
                                tracking-[-0.065em]
                            "
                        >
                            Milestone.
                        </span>
                    </h2>


                    {/* Small line + label */}

                    <div
                        className="
                            mt-12
                            flex
                            items-center
                            gap-5
                        "
                    >

                        <div
                            className="
                                w-24
                                h-px
                                bg-primary
                            "
                        />

                        <span
                            className="
                                text-[10px]
                                md:text-xs
                                uppercase
                                tracking-[0.45em]
                                text-muted-foreground
                                font-medium
                            "
                        >
                            Professional Path that made an Impact
                        </span>

                    </div>

                </div>


                {/* =================================================
                        TIMELINE
                ================================================== */}

                <div className="relative">

                    {/* Timeline line */}
                    <div
                        className="
                            absolute
                            left-0
                            md:left-1/2
                            top-0
                            bottom-0
                            w-[2px]
                            bg-gradient-to-b
                            from-primary/70
                            via-primary/30
                            to-transparent
                            md:-translate-x-1/2
                            shadow-[0_0_22px_rgba(32,178,166,0.45)]
                        "
                    />

                    <div className="space-y-12 md:space-y-16">

                        {timeline.map((exp, idx) => (

                            <div
                                key={idx}
                                className="relative grid md:grid-cols-2 gap-8"
                            >

                                {/* Timeline Dot */}
                                <div
                                    className="
                                        absolute
                                        left-0
                                        md:left-1/2
                                        top-7
                                        w-4
                                        h-4
                                        rounded-full
                                        bg-primary
                                        -translate-x-1/2
                                        ring-4
                                        ring-background
                                        z-20
                                        shadow-[0_0_15px_rgba(32,178,166,0.55)]
                                    "
                                >
                                    {exp.current && (
                                        <span
                                            className="
                                                absolute
                                                inset-0
                                                rounded-full
                                                bg-primary
                                                animate-ping
                                                opacity-50
                                            "
                                        />
                                    )}
                                </div>


                                {/* =================================================
                                    CARD

                                    First card = RIGHT
                                    Second card = LEFT
                                    Third card = RIGHT
                                    Fourth card = LEFT
                                ================================================== */}

                                <div
                                    className={`
                                        pl-8
                                        md:pl-0

                                        ${
                                            idx % 2 === 0
                                                ? "md:col-start-2 md:pl-16"
                                                : "md:col-start-1 md:pr-16 md:text-right"
                                        }
                                    `}
                                >

                                    <div
                                        className="
                                            group
                                            relative
                                            overflow-hidden

                                            glass
                                            rounded-2xl
                                            border
                                            border-primary/20

                                            p-6
                                            md:p-7

                                            transition-all
                                            duration-500
                                            ease-out

                                            hover:-translate-y-2
                                            hover:scale-[1.015]
                                            hover:border-primary/50

                                            hover:shadow-[0_20px_60px_rgba(32,178,166,0.14)]
                                        "
                                    >

                                        {/* Hover glow */}
                                        <div
                                            className="
                                                pointer-events-none
                                                absolute
                                                -top-24
                                                -right-24
                                                w-56
                                                h-56
                                                rounded-full
                                                bg-primary/[0.06]
                                                blur-3xl
                                                opacity-0
                                                group-hover:opacity-100
                                                transition-opacity
                                                duration-500
                                            "
                                        />


                                        {/* Top accent */}
                                        <div
                                            className={`
                                                absolute
                                                top-0
                                                ${
                                                    idx % 2 === 0
                                                        ? "left-0"
                                                        : "right-0"
                                                }
                                                h-[2px]
                                                w-0
                                                bg-primary
                                                group-hover:w-full
                                                transition-all
                                                duration-700
                                            `}
                                        />


                                        {/* Period */}
                                        <span
                                            className="
                                                relative
                                                z-10
                                                text-sm
                                                text-primary
                                                font-medium
                                            "
                                        >
                                            {exp.period}
                                        </span>


                                        {/* Role */}
                                        <h3
                                            className="
                                                relative
                                                z-10
                                                mt-2
                                                text-xl
                                                md:text-2xl
                                                font-semibold
                                                transition-transform
                                                duration-500
                                                group-hover:translate-x-1
                                            "
                                        >
                                            {exp.role}
                                        </h3>


                                        {/* Description */}
                                        <p
                                            className="
                                                relative
                                                z-10
                                                mt-4
                                                text-sm
                                                leading-7
                                                text-muted-foreground
                                            "
                                        >
                                            {exp.description}
                                        </p>


                                        {/* Technologies */}
                                        <div
                                            className={`
                                                relative
                                                z-10
                                                flex
                                                flex-wrap
                                                gap-2
                                                mt-5

                                                ${
                                                    idx % 2 !== 0
                                                        ? "md:justify-end"
                                                        : ""
                                                }
                                            `}
                                        >
                                            {exp.technologies.map(
                                                (tech, techIdx) => (
                                                    <span
                                                        key={techIdx}
                                                        className="
                                                            px-3
                                                            py-1.5
                                                            rounded-full

                                                            bg-surface
                                                            text-xs
                                                            text-muted-foreground

                                                            border
                                                            border-transparent

                                                            transition-all
                                                            duration-300

                                                            group-hover:border-primary/20
                                                            group-hover:text-primary
                                                        "
                                                    >
                                                        {tech}
                                                    </span>
                                                )
                                            )}
                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
};