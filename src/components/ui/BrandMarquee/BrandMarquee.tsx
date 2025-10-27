"use client";

import Image from "next/image";
import styles from "./BrandMarquee.module.css";
import { useEffect, useState } from "react";

interface Brand {
    id: number;
    name: string;
    logo: string;
    alt: string;
}

const brandsData: Brand[] = [
    { id: 1, name: "Uber", logo: "/images/brands/uber.png", alt: "Uber Logo" },
    {
        id: 2,
        name: "Oracle",
        logo: "/images/brands/oracle.png",
        alt: "Oracle Logo",
    },
    {
        id: 3,
        name: "GoFundMe",
        logo: "/images/brands/gofundme.png",
        alt: "GoFundMe Logo",
    },
    {
        id: 4,
        name: "Nutanix",
        logo: "/images/brands/nutanix.png",
        alt: "Nutanix Logo",
    },
    {
        id: 5,
        name: "Upside",
        logo: "/images/brands/upside.png",
        alt: "Upside Logo",
    },
    {
        id: 6,
        name: "Intel",
        logo: "/images/brands/intel.png",
        alt: "Intel Logo",
    },
    {
        id: 7,
        name: "New Balance",
        logo: "/images/brands/new-balance.png",
        alt: "New Balance Logo",
    },
    // Дублируем для бесшовной анимации
    { id: 8, name: "Uber", logo: "/images/brands/uber.png", alt: "Uber Logo" },
    {
        id: 9,
        name: "Oracle",
        logo: "/images/brands/oracle.png",
        alt: "Oracle Logo",
    },
    {
        id: 10,
        name: "GoFundMe",
        logo: "/images/brands/gofundme.png",
        alt: "GoFundMe Logo",
    },
    {
        id: 11,
        name: "Nutanix",
        logo: "/images/brands/nutanix.png",
        alt: "Nutanix Logo",
    },
    {
        id: 12,
        name: "Upside",
        logo: "/images/brands/upside.png",
        alt: "Upside Logo",
    },
    {
        id: 13,
        name: "Intel",
        logo: "/images/brands/intel.png",
        alt: "Intel Logo",
    },
    {
        id: 14,
        name: "New Balance",
        logo: "/images/brands/new-balance.png",
        alt: "New Balance Logo",
    },
];

export default function BrandMarquee() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null; // Или скелетон, если нужно
    }

    return (
        <div className={styles.marqueeContainer}>
            <div className={styles.marquee}>
                {brandsData.map((brand) => (
                    <div key={brand.id} className={styles.brandItem}>
                        <Image
                            src={brand.logo}
                            alt={brand.alt}
                            width={120}
                            height={60}
                            className={styles.brandLogo}
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
