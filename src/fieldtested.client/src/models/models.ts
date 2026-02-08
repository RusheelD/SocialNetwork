export type SimpleObject = Record<string, any>

export interface Advice {
    id: number;
    advice: string;
    rating: number;
    implementation: string;
    intent: string;
}

export interface User {
    id: number;
    username: string;
    email: string;
    name?: string;
    dateOfBirth?: string;
}