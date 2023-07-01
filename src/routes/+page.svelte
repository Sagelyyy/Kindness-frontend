<script>
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

{#if posts}
  {#each posts as post (post.id)}
    <h2>{post.username}</h2>
    <p>{post.message}</p>
  {/each}
{:else}
  <p>Loading...</p>
{/if}

<style></style>
