import clientPromise from "@/lib/mongodb";
import Link from "next/link";
import { BlogPost } from "@/types/blog";

export default async function HomePage() {
    const client = await clientPromise;
    const db = client.db("blog");
    const posts = (await db.collection("posts").find().sort({ createdAt: -1 }).toArray()) as BlogPost[];

    return (
        <section className="max-w-5xl mx-auto py-12 px-6">
            <h1 className="text-4xl font-serif font-extrabold mb-8 text-textPrimary">
                Blogs
            </h1>

            <div className="space-y-8">
                {posts.map((post) => (
                    <Link
                        key={post._id.toString()}
                        href={`/blogs/${post.slug}`}
                        className="block border border-border rounded-md overflow-hidden hover:border-accent transition-colors"
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-2xl font-serif font-bold text-textPrimary mb-2">
                                {post.title}
                            </h2>
                            <p className="text-sm text-textSecondary">
                                {new Date(post.createdAt).toLocaleDateString()}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
