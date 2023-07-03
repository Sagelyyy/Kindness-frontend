import { writable } from "svelte/store";

export const reloadPosts = writable(false);
export const posts = writable([]);
