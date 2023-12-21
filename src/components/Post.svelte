<script>
  import { flip } from "svelte/animate";
  import { reloadPosts } from "../utils/store.js";
  import Errors from "./Errors.svelte";
  export let posts;
  let errors;

  async function handleDelete(id) {
    const res = await fetch(
      `https://sprightly-figolla-eb9d0d.netlify.app/api/posts/${id}`,
      {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res.status == 200 || res.status == 204) {
      reloadPosts.set(true);
    } else {
      errors = res.errors;
    }
  }
</script>

{#if errors}
  <Errors {errors} />
{/if}

{#if posts}
  {#each posts as post (post.id)}
    <div animate:flip={{ duration: 200 }} class="post">
      <span
        on:click={handleDelete(post.id)}
        class="material-symbols-outlined trash"
      >
        delete
      </span>
      <div class="header">
        {#if post.avatar}
          <img class="avatar" src={post.avatar} alt="avatar" />
        {/if}
        <h2>{post.username}</h2>
      </div>
      <hr />
      <p>{post.filtered_message}</p>
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
    width: 90%;
    transition: all 0.5s;
    position: relative;
  }

  .trash {
    position: absolute;
    right: 10px;
    top: 10px;
  }

  .post:hover {
    cursor: pointer;
    scale: 1.02;
    box-shadow: 2px 2px 20px var(--bg-offset);
  }

  .header {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .header > h2 {
    text-transform: capitalize;
  }

  .avatar {
    background-color: var(--bg-primary);
    border-radius: 50%;
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
