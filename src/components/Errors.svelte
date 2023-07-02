<script>
  export let errors;
</script>

{#if errors}
  <div class="error">
    Submission error
    <ul>
      {#each errors as error}
        <li>{error.msg}</li>
      {/each}
    </ul>
  </div>
{/if}

<style>
  .error {
    position: fixed;
    top: 30px;
    right: 10px;
    width: 25%;
    padding: 5px;
    background-color: var(--error);
    border: 1px solid var(--bg-offset);
    color: var(--font-white);
  }
</style>
