export type SimpleObject = Record<string, any>

export interface Advice {
    id: string;
    advice: string;
    rating: number;
    implementation: string;
    intent: string;
}

export interface User {
    id: string;
    username: string;
    email: string;
    name?: string;
    dateOfBirth?: string;
    posts: string[];
    followers: string[];
    following: string[];
    likedPosts: string[];
    comments: string[];
}

export interface Post {
    id: string;
    authorId: string;
    content: Advice;
    timestamp: string;
    likes: number;
    comments: string[];
}

export interface Comment {
    id: string;
    postId: string;
    authorId: string;
    content: string;
    timestamp: string;
}