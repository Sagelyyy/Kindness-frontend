<script>
  export let posts;
</script>

{#if posts}
  {#each posts as post (post.id)}
    <div class="post">
      <h2>{post.username}</h2>
      <p>{post.message}</p>
      <p class="footer">Posted at {post.formatted_timestamp}</p>
    </div>
  {/each}
{:else}
  <p>Loading...</p>
{/if}

<style>
  .post {
    background-color: var(--bg-offset);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.45);
    padding: 20px;
    border-radius: 10px;
    width: 100%;
  }

  .post h2 {
    margin: 0 0 10px 0;
    color: var(--bg-primary);
    font-size: 24px;
  }

  .post p:first-child {
    margin: 0;
    color: var(--font-white);
    font-size: 1.2rem;
  }

  .footer {
    color: var(--bg-primary);
    font-size: 0.7rem;
  }
</style>
