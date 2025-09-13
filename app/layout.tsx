import "./globals.css";
import Link from "next/link";

export const metadata = {
    title: "Burak Korkmaz",
    description: "Personal blog built with Next.js and MongoDB",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="bg-background text-textPrimary min-h-screen flex flex-col">
        {/* Navbar */}
        <nav className="border-b border-border bg-background">
            <div className="max-w-8xl mx-auto flex justify-between items-center px-6 py-4">
                <Link
                    href="/"
                    className="text-2xl font-extrabold tracking-wide text-textPrimary"
                >
                    BURAK
                </Link>

                {/* Sağdaki menü */}
                <div className="space-x-6">
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
            </div>
        </nav>

        {/* Main content */}
        <main className="flex-1 max-w-5xl mx-auto w-full p-6">
            {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-border bg-background text-textSecondary text-sm text-center py-4">
            © {new Date().getFullYear()} Burak Korkmaz. All rights reserved.
        </footer>
        </body>
        </html>
    );
}
