<script>
  import Post from "../components/Post.svelte";
  import PostForm from "../components/PostForm.svelte";

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

<section class="content">
  <Post {posts} />
</section>
<PostForm />

<style>
  :global(:root) {
    --bg-primary: #2e282a;
    --bg-offset: #a7a2a9;
    --font-white: #e8e9f3;
    --notification: #17bebb;
    --error: #ef3e36;
  }

  :global(html, body) {
    background-color: var(--bg-primary);
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .content {
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    height: 98vh;
    width: 50rem;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 20px;
  }
</style>
