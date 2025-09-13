import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";
import { BlogPost } from "@/types/blog";

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const client = await clientPromise;
    const db = client.db("blog");
    const post = (await db.collection("posts").findOne({ slug })) as BlogPost | null;

    if (!post) return notFound();
    return (
        <div className="max-w-3xl mx-auto py-12 px-6">
            <img src={post.image} alt={post.title} className="w-full rounded-md mb-6" />
            <h1 className="text-4xl font-serif font-extrabold mb-4">{post.title}</h1>
            <p className="text-xl text-textSecondary mb-8">
                {new Date(post.createdAt).toLocaleDateString()}
            </p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
    );
}
