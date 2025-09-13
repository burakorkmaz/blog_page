import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/navbar";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-playfair",
});

export const metadata = {
    title: "Burak Korkmaz",
    description: "Burak Korkmaz's Personal Blog",
    icons: {
        icon: [
            { url: "/icon.ico" },
            { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
        ],
        apple: "/apple-touch-icon.png",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
        <body className="font-serif bg-background text-textPrimary min-h-screen flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main className="flex-1 max-w-5xl mx-auto w-full p-6">{children}</main>

        {/* Footer */}
        <footer className="border-t border-border bg-background text-textSecondary text-sm text-center py-4">
            © {new Date().getFullYear()} Burak Korkmaz. All rights reserved.
        </footer>
        </body>
        </html>
    );
}
