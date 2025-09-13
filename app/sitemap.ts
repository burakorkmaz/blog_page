import clientPromise from "@/lib/mongodb";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://burakorkmaz.com"; // 👈 change to your real domain

    const client = await clientPromise;
    const db = client.db("blog");

    // Fetch slugs from your MongoDB
    const posts = await db.collection("posts").find({}, { projection: { slug: 1, createdAt: 1 } }).toArray();

    // Static pages
    const staticPages = [
        "",
        "about",
        "gallery",
    ].map((path) => ({
        url: `${baseUrl}/${path}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    // Blog posts
    const blogPages = posts.map((post: any) => ({
        url: `${baseUrl}/blogs/${post.slug}`,
        lastModified: post.createdAt ? new Date(post.createdAt) : new Date(),
        changeFrequency: "daily" as const,
        priority: 1.0,
    }));

    return [...staticPages, ...blogPages];
}
