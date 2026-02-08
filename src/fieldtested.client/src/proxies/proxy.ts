import { SimpleObject } from "../models/models";

const SERVER = "http://localhost:8192";


export async function get(route: string): Promise<SimpleObject> {
    const result = await fetch(SERVER+route, {
        method: "GET"
    });
    return result;
}