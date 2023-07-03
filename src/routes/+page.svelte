<script>
  import Post from "../components/Post.svelte";
  import PostForm from "../components/PostForm.svelte";
  import Title from "../components/Title.svelte";

  export let posts;
  export let data;

  $: {
    if (data) {
      posts = data.posts;
    } else {
      posts = undefined;
    }
  }
</script>

<Title />
{#if posts}
  <section class="content">
    <Post {posts} />
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
