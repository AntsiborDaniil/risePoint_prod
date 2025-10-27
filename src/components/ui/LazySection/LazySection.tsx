"use client";

import { useEffect, useRef, useState } from "react";

interface LazySectionProps {
    children: React.ReactNode;
    className?: string;
    threshold?: number;
    rootMargin?: string;
}

export default function LazySection({
    children,
    className = "",
    threshold = 0.1,
    rootMargin = "50px",
}: LazySectionProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasLoaded) {
                    setIsVisible(true);
                    setHasLoaded(true);
                    // Отключаем observer после первой загрузки
                    observer.disconnect();
                }
            },
            {
                threshold,
                rootMargin,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [threshold, rootMargin, hasLoaded]);

    return (
        <section
            ref={sectionRef}
            className={className}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
        >
            {isVisible ? (
                children
            ) : (
                <div
                    style={{
                        height: "200px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#999",
                        fontSize: "16px",
                    }}
                >
                    Загрузка...
                </div>
            )}
        </section>
    );
}
