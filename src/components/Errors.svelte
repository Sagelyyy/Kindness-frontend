<script>
  export let errors;
</script>

{#if errors}
  <div on:click={() => (errors = null)} class="error">
    <div class="header">
      <h2>Submission error</h2>
    </div>
    <ul>
      {#each errors as error}
        <li>{error.msg}</li>
      {/each}
    </ul>
  </div>
{/if}

<style>
  .error {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    position: fixed;
    top: 50%;
    right: 10px;
    width: 25%;
    padding: 15px;
    background-color: var(--error);
    border: 2px solid var(--bg-offset);
    color: var(--font-white);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    z-index: 1000;
  }

  .error:hover {
    transform: scale(1.02);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
    background-color: var(--error-dark);
  }

  .error .header h2 {
    margin-bottom: 15px;
  }

  .error ul {
    padding: 0;
    list-style-type: none;
  }

  .error li {
    margin-bottom: 5px;
    text-align: center;
  }
</style>
