import { ObjectId } from "mongodb";

export interface BlogPost {
    _id: ObjectId;
    title: string;
    slug: string;
    image: string;
    content: string;
    createdAt: Date;
}
