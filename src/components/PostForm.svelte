<script>
  import { invalidateAll } from "$app/navigation";
  import Errors from "./Errors.svelte";

  let formData = "";
  let inputData = "";
  let errors;

  async function handleForm() {
    const res = await fetch(
      "https://sprightly-figolla-eb9d0d.netlify.app/api/posts",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: formData,
          username: inputData,
        }),
      }
    );
    let data = await res.json();
    if (res.status == 200) {
      formData = "";
      inputData = "";
      invalidateAll();
    } else {
      errors = data.errors;
    }
  }
</script>

{#if errors}
  <Errors {errors} />
{/if}

<div class="submit-title-container">
  <h1>Submit a post</h1>
</div>
<div class="form-container">
  <div id="avatar" />
  <form on:submit|preventDefault={handleForm}>
    <input
      class="form-input"
      required
      placeholder="Username"
      bind:value={inputData}
      type="text"
    />
    <textarea
      class="form-input"
      required
      placeholder="Message"
      bind:value={formData}
    />
    <button class="submit-btn">Submit</button>
  </form>
</div>

<style>
  .submit-title-container {
    position: fixed;
    top: 90px;
    right: 150px;
    font-family: var(--fancy-font);
    color: var(--font-white);
  }
  .form-container {
    position: fixed;
    top: 150px;
    right: 10px;
    width: 25%;
    display: flex;
    justify-content: center;
    background-color: var(--bg-offset);
    padding: 10px;
    border-radius: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 400px;
    gap: 15px;
  }

  .form-input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
    font-size: 16px;
  }

  .submit-btn {
    cursor: pointer;
    padding: 10px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: #007bff;
    transition: background-color 0.3s;
  }

  .submit-btn:hover {
    background-color: #0056b3;
  }
</style>
