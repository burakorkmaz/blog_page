import clientPromise from "@/lib/mongodb";
import { MetadataRoute } from "next";

interface SitemapPost {
    slug: string;
    createdAt?: Date;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://burakorkmaz.com";

    const client = await clientPromise;
    const db = client.db("blog");

    // Fetch slugs from your MongoDB
    const posts = (await db
        .collection<SitemapPost>("posts")
        .find({}, { projection: { slug: 1, createdAt: 1 } })
        .toArray()) as SitemapPost[];

    // Static pages
    const staticPages = ["", "about", "gallery"].map((path) => ({
        url: `${baseUrl}/${path}`,
        lastModified: new Date(),
        changeFrequency: "daily" as const,
        priority: 0.8,
    }));

    // Blog posts
    const blogPages = posts.map((post) => ({
        url: `${baseUrl}/blogs/${post.slug}`,
        lastModified: post.createdAt ? new Date(post.createdAt) : new Date(),
        changeFrequency: "daily" as const,
        priority: 1.0,
    }));

    return [...staticPages, ...blogPages];
}
