import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ScrollToTop from "../components/ui/ScrollToTop/ScrollToTop";

const inter = Inter({
    subsets: ["latin", "cyrillic"],
    display: "swap",
    variable: "--font-inter",
});

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
    title: "WebStudio - Создаем современные сайты",
    description:
        "Веб-студия полного цикла. Разработка, дизайн и продвижение сайтов.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="ru"
            className={`${inter.variable} ${plusJakartaSans.variable}`}
        >
            <body>
                <ScrollToTop />
                {children}
            </body>
        </html>
    );
}
