import {
    Mail,
    Phone,
    MapPin,
    Send,
    CheckCircle,
    AlertCircle,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";


const contactInfo = [
    {
        icon: MapPin,
        label: "Located at",
        value: "Kolkata, India",
        href: "https://maps.google.com/?q=Kolkata,India",
        external: true,
    },
    {
        icon: Mail,
        label: "Email me",
        value: "manjitmahato099@gmail.com",
        href: "mailto:manjitmahato099@gmail.com",
        external: false,
    },
    {
        icon: Phone,
        label: "Call me",
        value: "+91 75480 40032",
        href: "tel:+917548040032",
        external: false,
    },
    {
        icon: FaGithub,
        label: "GitHub",
        value: "Manjit-Kumar-Mahato",
        href: "https://github.com/Manjit-Kumar-Mahato",
        external: true,
    },
    {
        icon: FaLinkedin,
        label: "LinkedIn",
        value: "Manjit Mahato",
        href: "https://www.linkedin.com/in/manjit-mahato-a92578338/",
        external: true,
    },
];


export const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isLoading, setIsLoading] = useState(false);

    const [submitStatus, setSubmitStatus] = useState({
        type: null,
        message: "",
    });


    const handleSubmit = async (e) => {

        e.preventDefault();

        setIsLoading(true);

        setSubmitStatus({
            type: null,
            message: "",
        });

        try {

            const serviceId =
                import.meta.env.VITE_EMAILJS_SERVICE_ID;

            const templateId =
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

            const publicKey =
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


            if (!serviceId || !templateId || !publicKey) {
                throw new Error(
                    "EmailJS configuration is missing. Please check your environment variables."
                );
            }


            await emailjs.send(
                serviceId,
                templateId,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    time: new Date().toLocaleString(),
                },
                publicKey
            );


            setSubmitStatus({
                type: "success",
                message:
                    "Message sent successfully! I'll get back to you soon.",
            });


            setFormData({
                name: "",
                email: "",
                message: "",
            });

        } catch (err) {

            console.error("EmailJS error:", err);

            setSubmitStatus({
                type: "error",
                message:
                    err.text ||
                    "Failed to send message. Please try again later.",
            });

        } finally {

            setIsLoading(false);

        }
    };


    return (
        <section
            id="contact"
            className="
                relative
                overflow-hidden
                py-28
                md:py-32
            "
        >

            {/* =====================================================
                BACKGROUND
            ====================================================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    overflow-hidden
                "
            >

                <div
                    className="
                        absolute
                        left-[15%]
                        top-[20%]
                        w-96
                        h-96
                        rounded-full
                        bg-primary/[0.045]
                        blur-3xl
                    "
                />

                <div
                    className="
                        absolute
                        right-[15%]
                        bottom-[10%]
                        w-80
                        h-80
                        rounded-full
                        bg-primary/[0.035]
                        blur-3xl
                    "
                />

            </div>


            {/* =====================================================
                CENTERED CONTAINER
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

                <div
                    className="
                        max-w-6xl
                        mx-auto

                        grid
                        lg:grid-cols-[1.05fr_0.95fr]

                        gap-12
                        lg:gap-16

                        items-center
                    "
                >


                    {/* =================================================
                        LEFT SIDE
                    ================================================== */}

                    <div
                        className="
                            w-full
                            animate-fade-in
                        "
                    >

                        {/* =================================================
                            HEADING
                        ================================================== */}

                        <h2
                            className="
                                flex
                                items-baseline
                                whitespace-nowrap

                                text-5xl
                                sm:text-6xl
                                md:text-7xl
                                lg:text-[5.5rem]
                                xl:text-[6.3rem]

                                font-normal

                                tracking-[-0.07em]
                                leading-none
                            "
                        >

                            <span>
                                Get In
                            </span>

                            <span
                                className="
                                    ml-5
                                    md:ml-7

                                    font-serif
                                    italic
                                    font-normal

                                    text-primary

                                    tracking-[-0.065em]
                                "
                            >
                                Touch
                            </span>

                        </h2>


                        {/* Divider */}

                        <div
                            className="
                                mt-12
                                mb-10

                                w-24
                                h-px

                                bg-primary
                            "
                        />


                        {/* =================================================
                            CONTACT INFORMATION
                        ================================================== */}

                        <div
                            className="
                                grid
                                sm:grid-cols-2

                                gap-x-8
                                gap-y-7

                                max-w-xl
                            "
                        >

                            {contactInfo.map((item, index) => {

                                const Icon = item.icon;

                                return (

                                    <a
                                        key={item.label}
                                        href={item.href}

                                        target={
                                            item.external
                                                ? "_blank"
                                                : undefined
                                        }

                                        rel={
                                            item.external
                                                ? "noopener noreferrer"
                                                : undefined
                                        }

                                        className="
                                            group

                                            flex
                                            items-start
                                            gap-4

                                            transition-all
                                            duration-500

                                            hover:-translate-y-1
                                        "

                                        style={{
                                            animationDelay:
                                                `${index * 100}ms`,
                                        }}
                                    >

                                        {/* Icon */}

                                        <div
                                            className="
                                                w-12
                                                h-12

                                                shrink-0

                                                rounded-full

                                                border
                                                border-primary/20

                                                bg-primary/[0.04]

                                                flex
                                                items-center
                                                justify-center

                                                transition-all
                                                duration-500

                                                group-hover:
                                                border-primary/50

                                                group-hover:
                                                bg-primary/10

                                                group-hover:
                                                scale-110
                                            "
                                        >

                                            <Icon
                                                className="
                                                    w-5
                                                    h-5
                                                    text-primary

                                                    transition-transform
                                                    duration-500

                                                    group-hover:
                                                    scale-110
                                                "
                                            />

                                        </div>


                                        {/* Text */}

                                        <div className="min-w-0">

                                            <p
                                                className="
                                                    text-sm
                                                    text-muted-foreground
                                                    mb-1
                                                "
                                            >
                                                {item.label}
                                            </p>

                                            <p
                                                className="
                                                    font-medium

                                                    break-words

                                                    transition-colors
                                                    duration-300

                                                    group-hover:
                                                    text-primary
                                                "
                                            >
                                                {item.value}
                                            </p>

                                        </div>

                                    </a>

                                );
                            })}

                        </div>

                    </div>


                    {/* =================================================
                        RIGHT SIDE — MESSAGE FORM
                    ================================================== */}

                    <div
                        className="
                            w-full

                            max-w-xl
                            lg:max-w-[560px]

                            lg:justify-self-center

                            relative

                            rounded-3xl

                            border
                            border-primary/20

                            bg-background/70

                            backdrop-blur-xl

                            p-7
                            md:p-8

                            shadow-[0_20px_80px_rgba(32,178,166,0.06)]

                            animate-fade-in
                        "
                    >

                        {/* Top glow */}

                        <div
                            className="
                                absolute
                                top-0
                                left-12
                                right-12

                                h-px

                                bg-gradient-to-r
                                from-transparent
                                via-primary/50
                                to-transparent
                            "
                        />


                        {/* =================================================
                            FORM HEADER
                        ================================================== */}

                        <div className="mb-7">

                            <p
                                className="
                                    text-xs
                                    uppercase
                                    tracking-[0.35em]

                                    text-primary

                                    font-medium

                                    mb-3
                                "
                            >
                                Send a Message
                            </p>

                            <h3
                                className="
                                    text-2xl
                                    md:text-3xl
                                    font-semibold
                                "
                            >
                                Let's talk.
                            </h3>

                        </div>


                        <form
                            className="space-y-5"
                            onSubmit={handleSubmit}
                        >


                            {/* =================================================
                                NAME
                            ================================================== */}

                            <div>

                                <label
                                    htmlFor="name"
                                    className="
                                        block
                                        text-sm
                                        font-medium
                                        mb-2
                                    "
                                >
                                    Name
                                    <span className="text-primary">
                                        {" "}*
                                    </span>
                                </label>

                                <input
                                    id="name"
                                    type="text"
                                    required
                                    placeholder="Your name..."
                                    value={formData.name}

                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            name: e.target.value,
                                        })
                                    }

                                    className="
                                        w-full

                                        px-4
                                        py-3.5

                                        bg-surface

                                        rounded-xl

                                        border
                                        border-border

                                        outline-none

                                        transition-all
                                        duration-300

                                        focus:border-primary
                                        focus:ring-1
                                        focus:ring-primary

                                        hover:border-primary/30
                                    "
                                />

                            </div>


                            {/* =================================================
                                EMAIL
                            ================================================== */}

                            <div>

                                <label
                                    htmlFor="email"
                                    className="
                                        block
                                        text-sm
                                        font-medium
                                        mb-2
                                    "
                                >
                                    Email
                                    <span className="text-primary">
                                        {" "}*
                                    </span>
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    required
                                    placeholder="your@email.com"
                                    value={formData.email}

                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            email: e.target.value,
                                        })
                                    }

                                    className="
                                        w-full

                                        px-4
                                        py-3.5

                                        bg-surface

                                        rounded-xl

                                        border
                                        border-border

                                        outline-none

                                        transition-all
                                        duration-300

                                        focus:border-primary
                                        focus:ring-1
                                        focus:ring-primary

                                        hover:border-primary/30
                                    "
                                />

                            </div>


                            {/* =================================================
                                MESSAGE
                            ================================================== */}

                            <div>

                                <label
                                    htmlFor="message"
                                    className="
                                        block
                                        text-sm
                                        font-medium
                                        mb-2
                                    "
                                >
                                    Message
                                    <span className="text-primary">
                                        {" "}*
                                    </span>
                                </label>

                                <textarea
                                    id="message"
                                    rows={5}
                                    required
                                    placeholder="Your message..."
                                    value={formData.message}

                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            message: e.target.value,
                                        })
                                    }

                                    className="
                                        w-full

                                        px-4
                                        py-3.5

                                        bg-surface

                                        rounded-xl

                                        border
                                        border-border

                                        outline-none

                                        transition-all
                                        duration-300

                                        focus:border-primary
                                        focus:ring-1
                                        focus:ring-primary

                                        hover:border-primary/30

                                        resize-none
                                    "
                                />

                            </div>


                            {/* =================================================
                                SEND BUTTON
                            ================================================== */}

                            <Button
                                className="
                                    w-full
                                    group
                                "
                                type="submit"
                                size="lg"
                                disabled={isLoading}
                            >

                                {isLoading ? (

                                    "Sending..."

                                ) : (

                                    <>
                                        Send Message

                                        <Send
                                            className="
                                                w-5
                                                h-5

                                                transition-transform
                                                duration-300

                                                group-hover:
                                                translate-x-1

                                                group-hover:
                                                -translate-y-1
                                            "
                                        />
                                    </>

                                )}

                            </Button>


                            {/* =================================================
                                STATUS
                            ================================================== */}

                            {submitStatus.type && (

                                <div
                                    className={`
                                        flex
                                        items-center
                                        gap-3

                                        p-4
                                        rounded-xl

                                        ${
                                            submitStatus.type === "success"
                                                ? `
                                                    bg-green-500/10
                                                    border
                                                    border-green-500/20
                                                    text-green-500
                                                `
                                                : `
                                                    bg-red-500/10
                                                    border
                                                    border-red-500/20
                                                    text-red-500
                                                `
                                        }
                                    `}
                                >

                                    {submitStatus.type === "success" ? (

                                        <CheckCircle
                                            className="
                                                w-5
                                                h-5
                                                shrink-0
                                            "
                                        />

                                    ) : (

                                        <AlertCircle
                                            className="
                                                w-5
                                                h-5
                                                shrink-0
                                            "
                                        />

                                    )}

                                    <p className="text-sm">
                                        {submitStatus.message}
                                    </p>

                                </div>

                            )}

                        </form>

                    </div>

                </div>

            </div>

        </section>
    );
};