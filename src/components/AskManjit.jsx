import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import {
    Bot,
    Send,
    X,
    Minus,
    Sparkles,
    Loader2,
} from "lucide-react";

const suggestions = [
    "What are Manjit's best two projects?",
    "What technologies does Manjit specialize in?",
    "Tell me about the E-Notes project.",
];

const AskManjit = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");

    // ============================================================
    // LOAD SAVED CONVERSATION
    // ============================================================

    const [messages, setMessages] = useState(() => {
        try {
            const savedMessages =
                localStorage.getItem("askManjitMessages");

            return savedMessages
                ? JSON.parse(savedMessages)
                : [];
        } catch (error) {
            console.error(
                "Failed to load Ask Manjit history:",
                error
            );

            return [];
        }
    });

    const [isLoading, setIsLoading] = useState(false);

    // ============================================================
    // AUTO-SCROLL REFERENCE
    // ============================================================

    const messagesEndRef = useRef(null);

    // ============================================================
    // SAVE CONVERSATION TO LOCAL STORAGE
    // ============================================================

    useEffect(() => {
        try {
            localStorage.setItem(
                "askManjitMessages",
                JSON.stringify(messages)
            );
        } catch (error) {
            console.error(
                "Failed to save Ask Manjit history:",
                error
            );
        }
    }, [messages]);

    // ============================================================
    // AUTO-SCROLL TO LATEST MESSAGE
    // ============================================================

    useEffect(() => {
        if (!isOpen) return;

        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
        });
    }, [messages, isLoading, isOpen]);

    // ============================================================
    // SEND MESSAGE
    // ============================================================

    const sendMessage = async (text = message) => {
        const userMessage = text.trim();

        // Prevent empty messages and duplicate requests
        if (!userMessage || isLoading) return;

        setMessage("");

        // Add the new user message to the existing conversation
        const conversationHistory = [
            ...messages,
            {
                role: "user",
                content: userMessage,
            },
        ];

        // Immediately show user's message
        setMessages(conversationHistory);

        setIsLoading(true);

        try {
            const response = await fetch("/api/ai", {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    message: userMessage,
                    history: conversationHistory,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.error || "Something went wrong."
                );
            }

            // Add AI response
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: data.reply,
                },
            ]);
        } catch (error) {
            console.error("Ask Manjit error:", error);

            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content:
                        "Sorry, I couldn't process that right now. Please try again.",
                },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    // ============================================================
    // FORM SUBMIT
    // ============================================================

    const handleSubmit = (e) => {
        e.preventDefault();

        sendMessage();
    };

    // ============================================================
    // CLEAR CONVERSATION
    // ============================================================

    const clearConversation = () => {
        setMessages([]);

        localStorage.removeItem("askManjitMessages");

        setMessage("");
    };

    return (
        <>
            {/* =====================================================
                FLOATING ASK MANJIT BUTTON
            ====================================================== */}

            {!isOpen && (
                <div
                    className="
                        fixed
                        right-4
                        bottom-4
                        sm:right-6
                        sm:bottom-6

                        z-[100]

                        flex
                        flex-col
                        items-end
                        gap-2

                        ask-manjit-float
                    "
                >
                    {/* Floating message */}

                    <div
                        className="
                            px-5
                            py-2.5

                            rounded-full

                            border
                            border-primary/30

                            bg-background

                            backdrop-blur-xl

                            shadow-[0_8px_30px_rgba(32,178,166,0.18)]

                            text-sm
                            font-semibold
                            text-foreground

                            whitespace-nowrap
                        "
                    >
                        Don't scroll. Ask me.
                    </div>

                    {/* Ask Manjit button */}

                    <button
                        onClick={() => setIsOpen(true)}
                        className="
                            group

                            flex
                            items-center
                            gap-3

                            px-5
                            py-3.5

                            rounded-full

                            border
                            border-primary/30

                            bg-background/90
                            backdrop-blur-xl

                            shadow-[0_10px_40px_rgba(32,178,166,0.15)]

                            transition-all
                            duration-500

                            hover:border-primary/60
                            hover:shadow-[0_15px_50px_rgba(32,178,166,0.25)]
                        "
                        aria-label="Open Ask Manjit"
                    >
                        <span
                            className="
                                relative

                                flex
                                items-center
                                justify-center

                                w-8
                                h-8

                                rounded-full

                                bg-primary/10
                                text-primary
                            "
                        >
                            <Sparkles
                                className="
                                    w-4
                                    h-4

                                    transition-transform
                                    duration-500

                                    group-hover:rotate-12
                                "
                            />

                            <span
                                className="
                                    absolute
                                    top-0
                                    right-0

                                    w-2
                                    h-2

                                    rounded-full

                                    bg-primary

                                    ring-2
                                    ring-background
                                "
                            />
                        </span>

                        <span
                            className="
                                text-sm
                                font-medium
                                tracking-wide
                            "
                        >
                            Ask Manjit
                        </span>
                    </button>
                </div>
            )}

            {/* =====================================================
                ASK MANJIT CHAT CARD
            ====================================================== */}

            {isOpen && (
                <div
                    className="
                        fixed
                        right-4
                        bottom-4
                        z-[100]

                        w-[calc(100vw-2rem)]
                        sm:w-[min(43vw,520px)]

                        h-[calc(100vh-2rem)]
                        sm:h-[min(82vh,780px)]

                        sm:min-w-[360px]

                        flex
                        flex-col

                        overflow-hidden

                        rounded-3xl

                        border
                        border-primary/20

                        bg-background/90
                        backdrop-blur-2xl

                        shadow-[0_25px_100px_rgba(0,0,0,0.35)]

                        animate-fade-in
                    "
                >
                    {/* =================================================
                        HEADER
                    ================================================== */}

                    <div
                        className="
                            relative
                            shrink-0

                            px-5
                            sm:px-6

                            py-4
                            sm:py-5

                            border-b
                            border-border

                            flex
                            items-center
                            justify-between
                        "
                    >
                        {/* Top glow */}

                        <div
                            className="
                                absolute
                                top-0
                                left-10
                                right-10

                                h-px

                                bg-gradient-to-r
                                from-transparent
                                via-primary/60
                                to-transparent
                            "
                        />

                        <div className="flex items-center gap-3">
                            <div
                                className="
                                    w-10
                                    h-10
                                    rounded-full

                                    flex
                                    items-center
                                    justify-center

                                    bg-primary/10
                                    border
                                    border-primary/20

                                    text-primary

                                    shrink-0
                                "
                            >
                                <Bot className="w-5 h-5" />
                            </div>

                            <div>
                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-2
                                    "
                                >
                                    <h3
                                        className="
                                            text-base
                                            font-semibold
                                        "
                                    >
                                        Ask Manjit
                                    </h3>

                                    <span
                                        className="
                                            w-1.5
                                            h-1.5
                                            rounded-full
                                            bg-primary
                                        "
                                    />
                                </div>

                                <p
                                    className="
                                        mt-0.5
                                        text-xs
                                        text-muted-foreground
                                    "
                                >
                                    AI portfolio assistant
                                </p>
                            </div>
                        </div>

                        {/* =================================================
                            HEADER CONTROLS
                        ================================================== */}

                        <div
                            className="
                                flex
                                items-center
                                gap-1
                            "
                        >
                            {/* Clear */}

                            <button
                                onClick={clearConversation}
                                disabled={messages.length === 0}
                                className="
                                    px-2.5
                                    h-9
                                    rounded-full

                                    text-[11px]
                                    font-medium
                                    text-muted-foreground

                                    hover:text-red-500
                                    hover:bg-red-500/10

                                    transition-colors

                                    disabled:opacity-30
                                    disabled:pointer-events-none
                                "
                                aria-label="Clear conversation"
                            >
                                Clear
                            </button>

                            {/* Minimize */}

                            <button
                                onClick={() => setIsOpen(false)}
                                className="
                                    w-9
                                    h-9
                                    rounded-full

                                    flex
                                    items-center
                                    justify-center

                                    text-muted-foreground

                                    hover:text-foreground
                                    hover:bg-surface

                                    transition-colors
                                "
                                aria-label="Minimize Ask Manjit"
                            >
                                <Minus className="w-4 h-4" />
                            </button>

                            {/* Close */}

                            <button
                                onClick={() => setIsOpen(false)}
                                className="
                                    w-9
                                    h-9
                                    rounded-full

                                    flex
                                    items-center
                                    justify-center

                                    text-muted-foreground

                                    hover:text-foreground
                                    hover:bg-surface

                                    transition-colors
                                "
                                aria-label="Close Ask Manjit"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* =================================================
                        CHAT AREA
                    ================================================== */}

                    <div
                        className="
                            flex-1
                            overflow-y-auto

                            px-5
                            sm:px-7

                            py-5
                            sm:py-7

                            space-y-5

                            scroll-smooth
                        "
                    >
                        {/* =================================================
                            EMPTY STATE
                        ================================================== */}

                        {messages.length === 0 && (
                            <div
                                className="
                                    min-h-full

                                    flex
                                    flex-col
                                    items-center
                                    justify-center

                                    text-center

                                    px-3
                                    sm:px-4
                                "
                            >
                                <div
                                    className="
                                        w-14
                                        h-14
                                        rounded-2xl

                                        flex
                                        items-center
                                        justify-center

                                        bg-primary/10
                                        border
                                        border-primary/20

                                        text-primary

                                        mb-5
                                    "
                                >
                                    <Sparkles className="w-6 h-6" />
                                </div>

                                <h4
                                    className="
                                        text-xl
                                        font-medium
                                    "
                                >
                                    Curious about Manjit?
                                </h4>

                                <p
                                    className="
                                        mt-2
                                        max-w-sm

                                        text-sm
                                        leading-6
                                        text-muted-foreground
                                    "
                                >
                                    Ask me about his projects,
                                    skills, coding journey,
                                    education, or current career
                                    focus.
                                </p>

                                {/* Suggestions */}

                                <div
                                    className="
                                        mt-7
                                        w-full
                                        max-w-sm

                                        space-y-2
                                    "
                                >
                                    {suggestions.map(
                                        (suggestion) => (
                                            <button
                                                key={suggestion}
                                                onClick={() =>
                                                    sendMessage(
                                                        suggestion
                                                    )
                                                }
                                                disabled={isLoading}
                                                className="
                                                    w-full
                                                    text-left

                                                    px-4
                                                    py-3

                                                    rounded-xl

                                                    border
                                                    border-border

                                                    bg-surface/40

                                                    text-sm
                                                    text-muted-foreground

                                                    transition-all
                                                    duration-300

                                                    hover:border-primary/30
                                                    hover:text-primary
                                                    hover:bg-primary/5

                                                    disabled:opacity-40
                                                "
                                            >
                                                {suggestion}
                                            </button>
                                        )
                                    )}
                                </div>
                            </div>
                        )}

                        {/* =================================================
                            MESSAGES
                        ================================================== */}

                        {messages.map((msg, index) => (
                            <div
                                key={`${msg.role}-${index}`}
                                className={`
                                    flex

                                    ${
                                        msg.role === "user"
                                            ? "justify-end"
                                            : "justify-start"
                                    }
                                `}
                            >
                                <div
                                    className={`
                                        max-w-[88%]

                                        px-4
                                        py-3

                                        rounded-2xl

                                        text-sm
                                        leading-6

                                        ${
                                            msg.role === "user"
                                                ? `
                                                    bg-primary
                                                    text-primary-foreground
                                                    rounded-br-md
                                                `
                                                : `
                                                    bg-surface
                                                    border
                                                    border-border
                                                    rounded-bl-md
                                                `
                                        }
                                    `}
                                >
                                    {msg.role === "assistant" ? (
                                        <ReactMarkdown
                                            components={{
                                                p: ({
                                                    children,
                                                }) => (
                                                    <p className="mb-3 last:mb-0">
                                                        {
                                                            children
                                                        }
                                                    </p>
                                                ),

                                                strong: ({
                                                    children,
                                                }) => (
                                                    <strong className="font-semibold text-foreground">
                                                        {
                                                            children
                                                        }
                                                    </strong>
                                                ),

                                                ol: ({
                                                    children,
                                                }) => (
                                                    <ol className="list-decimal ml-5 mb-3 space-y-2">
                                                        {
                                                            children
                                                        }
                                                    </ol>
                                                ),

                                                ul: ({
                                                    children,
                                                }) => (
                                                    <ul className="list-disc ml-5 mb-3 space-y-2">
                                                        {
                                                            children
                                                        }
                                                    </ul>
                                                ),

                                                li: ({
                                                    children,
                                                }) => (
                                                    <li>
                                                        {
                                                            children
                                                        }
                                                    </li>
                                                ),

                                                h1: ({
                                                    children,
                                                }) => (
                                                    <h1 className="text-lg font-semibold mb-3">
                                                        {
                                                            children
                                                        }
                                                    </h1>
                                                ),

                                                h2: ({
                                                    children,
                                                }) => (
                                                    <h2 className="text-base font-semibold mb-3">
                                                        {
                                                            children
                                                        }
                                                    </h2>
                                                ),

                                                h3: ({
                                                    children,
                                                }) => (
                                                    <h3 className="text-sm font-semibold mb-2">
                                                        {
                                                            children
                                                        }
                                                    </h3>
                                                ),
                                            }}
                                        >
                                            {msg.content}
                                        </ReactMarkdown>
                                    ) : (
                                        msg.content
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* =================================================
                            TYPING / LOADING INDICATOR
                        ================================================== */}

                        {isLoading && (
                            <div className="flex justify-start">
                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-2

                                        px-4
                                        py-3

                                        rounded-2xl
                                        rounded-bl-md

                                        bg-surface
                                        border
                                        border-border
                                    "
                                >
                                    <Loader2
                                        className="
                                            w-4
                                            h-4
                                            text-primary
                                            animate-spin
                                        "
                                    />

                                    <span
                                        className="
                                            text-xs
                                            text-muted-foreground
                                        "
                                    >
                                        Thinking...
                                    </span>
                                </div>
                            </div>
                        )}

                        {/* Invisible element used for auto-scroll */}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* =================================================
                        INPUT
                    ================================================== */}

                    <div
                        className="
                            shrink-0

                            px-4
                            sm:px-5

                            pb-4
                            sm:pb-5

                            pt-3

                            border-t
                            border-border
                        "
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="
                                flex
                                items-center
                                gap-2

                                p-2

                                rounded-2xl

                                bg-surface

                                border
                                border-border

                                focus-within:border-primary/40
                            "
                        >
                            <input
                                type="text"
                                value={message}
                                onChange={(e) =>
                                    setMessage(e.target.value)
                                }
                                placeholder="Ask something about Manjit..."
                                disabled={isLoading}
                                className="
                                    flex-1

                                    min-w-0

                                    bg-transparent

                                    px-3
                                    py-2

                                    text-sm

                                    outline-none

                                    placeholder:text-muted-foreground

                                    disabled:opacity-50
                                "
                            />

                            <button
                                type="submit"
                                disabled={
                                    !message.trim() ||
                                    isLoading
                                }
                                className="
                                    shrink-0

                                    w-10
                                    h-10

                                    rounded-xl

                                    flex
                                    items-center
                                    justify-center

                                    bg-primary
                                    text-primary-foreground

                                    transition-all
                                    duration-300

                                    hover:scale-105

                                    disabled:opacity-40
                                    disabled:hover:scale-100
                                "
                                aria-label="Send message"
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </form>

                        <p
                            className="
                                mt-2
                                text-center

                                text-[10px]
                                text-muted-foreground
                            "
                        >
                            Ask Manjit • AI-powered portfolio
                            assistant
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default AskManjit;