import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const footerLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#profiles", label: "Coding Profiles" },
    { href: "#journey", label: "Journey" },
    { href: "#contact", label: "Contact" },
];

const socialLinks = [
    {
        icon: FaGithub,
        href: "https://github.com/Manjit-Kumar-Mahato",
        label: "GitHub",
    },
    {
        icon: FaLinkedin,
        href: "https://www.linkedin.com/in/manjit-mahato-a92578338/",
        label: "LinkedIn",
    },
];

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const handleNavigation = (href) => {
        const element = document.querySelector(href);

        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    return (
        <footer className="relative overflow-hidden border-t border-border">

            {/* =====================================================
                BACKGROUND DETAILS
            ====================================================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    overflow-hidden
                "
            >

                {/* Large MKM watermark */}

                <div
                    className="
                        absolute
                        left-1/2
                        bottom-[-60px]
                        -translate-x-1/2

                        w-full

                        text-center

                        font-sans
                        font-medium  
                        

                        text-[12rem]
                        sm:text-[15rem]
                        md:text-[19rem]
                        lg:text-[23rem]
                        xl:text-[27rem]

                        leading-none
                        tracking-[-0.06em]

                        text-primary/[0.10]

                        whitespace-nowrap
                        select-none
                        pointer-events-none
                    "
                >
                    MANJIT
                </div>


                {/* Soft background glow */}

                <div
                    className="
                        absolute
                        left-1/2
                        top-1/2

                        -translate-x-1/2
                        -translate-y-1/2

                        w-[500px]
                        h-[300px]

                        rounded-full

                        bg-primary/[0.035]

                        blur-3xl
                    "
                />

            </div>


            {/* =====================================================
                MAIN FOOTER
            ====================================================== */}

            <div
                className="
                    container
                    mx-auto
                    px-6

                    relative
                    z-10

                    pt-24
                    md:pt-32
                    pb-10
                "
            >

                {/* =================================================
                    CTA AREA
                ================================================== */}

                <div
                    className="
                        flex
                        flex-col
                        lg:flex-row

                        lg:items-end
                        lg:justify-between

                        gap-12
                    "
                >

                    {/* Heading */}

                    <div>

                        <div
                            className="
                                flex
                                items-baseline
                                flex-wrap
                            "
                        >

                            <h2
                                className="
                                    text-6xl
                                    sm:text-7xl
                                    md:text-8xl
                                    lg:text-[7rem]

                                    font-bold

                                    tracking-[-0.07em]
                                    leading-[0.85]
                                "
                            >
                                Let's Build
                            </h2>

                            <span
                                className="
                                    ml-3
                                    md:ml-5

                                    text-6xl
                                    sm:text-7xl
                                    md:text-8xl
                                    lg:text-[7rem]

                                    font-serif
                                    italic
                                    font-normal

                                    text-primary

                                    tracking-[-0.06em]

                                    leading-[0.85]
                                "
                            >
                                Something.
                            </span>

                        </div>


                        {/* Small divider */}

                        <div
                            className="
                                mt-10

                                w-24
                                h-px

                                bg-primary
                            "
                        />


                        <p
                            className="
                                mt-7

                                max-w-xl

                                text-base
                                md:text-lg

                                text-muted-foreground

                                leading-relaxed
                            "
                        >
                            Have an idea, opportunity, or just want to
                            connect? I'd love to hear from you.
                        </p>

                    </div>


                    {/* Contact CTA */}

                    <div>

                        <button
                            onClick={() =>
                                handleNavigation("#contact")
                            }

                            className="
                                group

                                inline-flex
                                items-center
                                gap-4

                                px-7
                                py-4

                                rounded-full

                                border
                                border-primary

                                text-primary

                                font-medium

                                transition-all
                                duration-500

                                hover:bg-primary
                                hover:text-primary-foreground

                                hover:shadow-[0_0_35px_rgba(32,178,166,0.25)]

                                hover:-translate-y-1
                            "
                        >

                            <span>
                                Get in touch
                            </span>

                            <span
                                className="
                                    flex
                                    items-center
                                    justify-center

                                    w-8
                                    h-8

                                    rounded-full

                                    bg-primary/10

                                    group-hover:bg-white/10

                                    transition-all
                                    duration-500

                                    group-hover:rotate-45
                                "
                            >
                                <ArrowUpRight
                                    size={17}
                                />
                            </span>

                        </button>

                    </div>

                </div>


                {/* =================================================
                    DIVIDER
                ================================================== */}

                <div
                    className="
                        mt-20
                        pt-7

                        border-t
                        border-border
                    "
                >

                    <div
                        className="
                            flex
                            flex-col
                            lg:flex-row

                            lg:items-center
                            lg:justify-between

                            gap-7
                        "
                    >

                        {/* =================================================
                            LOGO
                        ================================================== */}

                        <div
                            className="
                                flex
                                items-center
                                gap-3
                            "
                        >

                            <button
                                onClick={() =>
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth",
                                    })
                                }

                                className="
                                    text-2xl
                                    font-bold

                                    tracking-[-0.04em]

                                    transition-all
                                    duration-300

                                    hover:text-primary
                                "
                            >
                                MKM<span className="text-primary">.</span>
                            </button>


                            <span
                                className="
                                    hidden
                                    sm:block

                                    w-px
                                    h-5

                                    bg-border
                                "
                            />


                            <span
                                className="
                                    text-sm
                                    text-muted-foreground
                                "
                            >
                                Java Backend Developer
                            </span>

                        </div>


                        {/* =================================================
                            NAVIGATION
                        ================================================== */}

                        <nav
                            className="
                                flex
                                flex-wrap
                                items-center

                                gap-x-6
                                gap-y-3
                            "
                        >

                            {footerLinks.map((link) => (

                                <button
                                    key={link.href}

                                    onClick={() =>
                                        handleNavigation(link.href)
                                    }

                                    className="
                                        relative

                                        text-sm
                                        text-muted-foreground

                                        transition-colors
                                        duration-300

                                        hover:text-primary

                                        after:absolute
                                        after:left-0
                                        after:-bottom-1

                                        after:h-px
                                        after:w-0

                                        after:bg-primary

                                        after:transition-all
                                        after:duration-300

                                        hover:after:w-full
                                    "
                                >
                                    {link.label}
                                </button>

                            ))}

                        </nav>


                        {/* =================================================
                            SOCIAL LINKS
                        ================================================== */}

                        <div
                            className="
                                flex
                                items-center
                                gap-3
                            "
                        >

                            {socialLinks.map((social) => {

                                const Icon = social.icon;

                                return (

                                    <a
                                        key={social.label}

                                        href={social.href}

                                        target="_blank"
                                        rel="noopener noreferrer"

                                        aria-label={social.label}

                                        className="
                                            group

                                            w-11
                                            h-11

                                            rounded-full

                                            border
                                            border-border

                                            flex
                                            items-center
                                            justify-center

                                            transition-all
                                            duration-500

                                            hover:border-primary
                                            hover:bg-primary

                                            hover:-translate-y-1

                                            hover:shadow-[0_8px_25px_rgba(32,178,166,0.18)]
                                        "
                                    >

                                        <Icon
                                            size={18}

                                            className="
                                                transition-all
                                                duration-300

                                                group-hover:text-primary-foreground
                                            "
                                        />

                                    </a>

                                );
                            })}

                        </div>

                    </div>

                </div>


                {/* =================================================
                    COPYRIGHT
                ================================================== */}

                <div
                    className="
                        mt-8

                        flex
                        flex-col
                        sm:flex-row

                        sm:items-center
                        sm:justify-between

                        gap-3
                    "
                >

                    <p
                        className="
                            text-xs
                            text-muted-foreground
                        "
                    >
                        © {currentYear} Manjit Kumar Mahato.
                        All rights reserved.
                    </p>


                    <p
                        className="
                            text-xs
                            text-muted-foreground
                        "
                    >
                        Built with React & Tailwind CSS
                        <span className="text-primary mx-1">♥</span>
                    </p>

                </div>

            </div>

        </footer>
    );
};