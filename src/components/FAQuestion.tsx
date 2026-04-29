"use client";

import { useState } from "react";

const FAQuestion = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What Service do you Provide?",
            answer:
                "I specialize in full-stack web and mobile development, including frontend (React, Next.js, TypeScript), backend APIs (Node.js/Python), AI automation, and scalable cloud solutions. I help businesses turn ideas into real, production-ready products.",
        },
        {
            question: "Who do you work with?",
            answer:
                "I work with startups, businesses, and individuals looking to build or scale digital products — especially in fintech, SaaS, and enterprise solutions.",
        },
        {
            question: "What is your development process?",
            answer:
                "I follow a structured process: 1. Requirement gathering, 2. Planning and architecture, 3. Design & development, 4. Testing & optimization, 5. Deployment & support.",
        },
        {
            question: "How much do you charge?",
            answer:
                "Pricing depends on scope, complexity, and timeline. I offer flexible pricing: fixed rates for defined projects and hourly/retainer options for ongoing work.",
        },
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <div
            className="max-w-4xl mx-auto flex flex-col md:flex-row items-start justify-center gap-8 px-4 md:px-0"
            id="FAQ"
        >
            {/* Image */}
            <img
                className="max-w-sm w-full rounded-xl h-auto"
                src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=830&h=844&auto=format&fit=crop"
                alt="FAQ illustration"
            />

            {/* Content */}
            <div>
                <p className="text-indigo-600 text-sm font-medium">FAQ's</p>

                <h1 className="text-3xl font-semibold">
                    Looking for answers?
                </h1>

                <p className="text-sm text-slate-500 mt-2 pb-4">
                    Ship beautiful frontends without the overhead — customizable, scalable, and developer-friendly UI components.
                </p>

                {faqs.map((faq, index) => (
                    <div
                        key={faq.question}
                        className="border-b border-slate-200 py-4 cursor-pointer"
                        onClick={() => toggleFAQ(index)}
                    >
                        {/* Question */}
                        <div className="flex items-center justify-between">
                            <h3 className="text-base font-medium">
                                {faq.question}
                            </h3>

                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className={`transition-transform duration-500 ease-in-out ${
                                    openIndex === index ? "rotate-180" : ""
                                }`}
                            >
                                <path
                                    d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                                    stroke="#1D293D"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        {/* Answer */}
                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                openIndex === index
                                    ? "max-h-40 opacity-100 mt-3"
                                    : "max-h-0 opacity-0"
                            }`}
                        >
                            <p className="text-sm text-slate-500">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQuestion;