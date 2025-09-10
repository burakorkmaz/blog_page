import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(
    req: NextRequest,
    context: { params: { id: string } }
) {
  try {
    const { id } = context.params;
    const client = await clientPromise;
    const db = client.db("blog");

    const post = await db
        .collection("posts")
        .findOne({ _id: new ObjectId(id) });

    if (!post) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
        { error: "Failed to fetch post" },
        { status: 500 }
    );
  }
}
