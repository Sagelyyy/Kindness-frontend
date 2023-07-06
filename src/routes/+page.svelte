<script>
  import Post from "../components/Post.svelte";
  import PostForm from "../components/PostForm.svelte";
  import Title from "../components/Title.svelte";
  import { reloadPosts, posts } from "../utils/store.js";
  import { onMount } from "svelte";
  import { createClient } from "@supabase/supabase-js";
  import { PUBLIC_URL, PUBLIC_ANON_KEY } from "$env/static/public";

  let postsData = [];

  const client = createClient(PUBLIC_URL, PUBLIC_ANON_KEY);

  const channel = client
    .channel("any")
    .on("postgres_changes", { event: "*", schema: "*" }, (payload) => {
      reloadPosts.set(true);
    })
    .subscribe();

  const loadPosts = async () => {
    const res = await fetch("https://kindnes.onrender.com/api/posts", {
      credentials: "include",
    });
    const newPosts = await res.json();
    posts.set(newPosts);
    reloadPosts.set(false);
  };
  onMount(loadPosts);

  posts.subscribe((value) => {
    postsData = value;
  });

  reloadPosts.subscribe((value) => {
    if (value) {
      loadPosts();
    }
  });
</script>

<Title />
{#if postsData}
  <section class="content">
    <Post posts={postsData} />
  </section>
{:else}
  <section class="content">
    <h1>Be the first to post something nice.</h1>
  </section>
{/if}

<PostForm />

<style>
  :global(:root) {
    --bg-primary: #2e282a;
    --bg-offset: #a7a2a9;
    --font-white: #e8e9f3;
    --notification: #17bebb;
    --error: #ef3e36;
    --error-dark: #9e0d05;
    --fancy-font: "Comfortaa", sans-serif;
    --primary-font: "Montserrat", sans-serif;
  }

  :global(html, body) {
    background-color: var(--bg-primary);
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: var(--primary-font);
  }

  :global(.trash) {
    padding: 2px;
    color: var(--dark);
    transition: all 0.5s;
    border-radius: 5px;
  }

  :global(.trash:hover) {
    scale: 1.2;
    background-color: var(--error);
  }

  .content {
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    height: 95vh;
    width: 50rem;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 20px;
  }

  .content > h1 {
    font-size: 2rem;
    font-family: var(--fancy-font);
    color: var(--font-white);
  }
</style>
