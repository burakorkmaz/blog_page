"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false); // close menu after clicking a link
    };

    return (
        <nav className="border-b border-border bg-background">
            <div className="w-full flex justify-between items-center px-6 md:px-12 py-4">
                {/* Left side */}
                <Link
                    href="/"
                    className="text-2xl font-extrabold tracking-wide text-textPrimary"
                >
                    BURAK
                </Link>

                {/* Desktop menu */}
                <div className="hidden md:flex space-x-6 font-bold">
                    <Link href="/" className="hover:text-accent uppercase">
                        Blogs
                    </Link>
                    <Link href="/about" className="hover:text-accent uppercase">
                        About
                    </Link>
                    <Link href="/gallery" className="hover:text-accent uppercase">
                        Gallery
                    </Link>
                </div>

                {/* Mobile menu button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-textPrimary"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile dropdown with animation */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="px-6 py-4 space-y-4 font-bold border-t border-border bg-background">
                    <Link
                        href="/"
                        className="block hover:text-accent uppercase"
                        onClick={handleLinkClick}
                    >
                        Blogs
                    </Link>
                    <Link
                        href="/about"
                        className="block hover:text-accent uppercase"
                        onClick={handleLinkClick}
                    >
                        About
                    </Link>
                    <Link
                        href="/gallery"
                        className="block hover:text-accent uppercase"
                        onClick={handleLinkClick}
                    >
                        Gallery
                    </Link>
                </div>
            </div>
        </nav>
    );
}
