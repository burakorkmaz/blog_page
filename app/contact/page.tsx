import { Mail, Github, Linkedin } from "lucide-react";

export default function ContactPage() {
    return (
        <section className="max-w-3xl mx-auto py-12 px-6">
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
