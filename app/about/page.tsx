import {Github, Linkedin, Mail} from "lucide-react";

export default function AboutPage() {
    return (
        <section className="max-w-3xl mx-auto py-12 px-6">
            <h1 className="text-4xl font-extrabold mb-6 text-textPrimary">
                About Me
            </h1>

            <p className="text-lg text-textSecondary leading-relaxed mb-4">
                Hi, I’m <span className="text-textPrimary font-semibold">Burak</span>.
                This is my personal blog where I write about my thoughts, experiences,
                and the projects I’m working on.
            </p>

            <p className="text-lg text-textSecondary leading-relaxed mb-4">
                I enjoy exploring new technologies, building side projects, and sharing
                what I’ve learned along the way. My goal is to make this blog a place
                where I can document my journey and hopefully inspire or help others.
            </p>

            <p className="text-lg text-textSecondary leading-relaxed mb-8">
                Outside of coding, I love reading, traveling, and discovering new music.
            </p>

            <h1 className="text-4xl font-extrabold mb-6 text-textPrimary">
                Contact
            </h1>

            <p className="text-lg text-textSecondary mb-8">
                Feel free to reach out to me through the following platforms:
            </p>

            <div className="space-y-4">
                {/* Email */}
                <a
                    href="mailto:kkorkmazburakk@gmail.com"
                    className="flex items-center space-x-3 border border-border rounded-md px-3 py-2 text-textSecondary hover:text-accent hover:border-accent transition-colors"
                >
                    <Mail size={20} />
                    <span>Email</span>
                </a>

                <a
                    href="https://github.com/burakorkmaz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 border border-border rounded-md px-3 py-2 text-textSecondary hover:text-accent hover:border-accent transition-colors"
                >
                    <Github size={20} />
                    <span>GitHub</span>
                </a>

                <a
                    href="https://www.linkedin.com/in/korkmazburak1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 border border-border rounded-md px-3 py-2 text-textSecondary hover:text-accent hover:border-accent transition-colors"
                >
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                </a>
            </div>
        </section>
    );
}
