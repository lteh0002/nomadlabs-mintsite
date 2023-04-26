<script>
  import { slide } from "svelte/transition";
  import { hideAccordionButton } from "./../utils/nav.js";
  export let entry;
  let isOpen = false;
  if (entry[0] === "Phase 1 - Space Nomads Genesis Collection") {
    isOpen = true
  } else {
    isOpen = false;
  }

  const toggle = () => (isOpen = !isOpen);
</script>

<button on:click={toggle} aria-expanded={isOpen} class="accordion">
    <svg
      class="toggleAccordion"
      style="tran"
      width="20"
      height="20"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke="currentColor"><path d="M9 5l7 7-7 7" /></svg
    >
  {entry[0]}
</button>
{#if isOpen}
  <ul
    class="list-disc list-inside sm:ml-[35px]"
    transition:slide={{ duration: 300 }}
  >
    {#each entry[1] as item}
      <li class="roadmap-desc text-[14px] sm:text-[18px]">{item}</li>
    {/each}
  </ul>
{/if}

<style>
  button {
    border: none;
    background: none;
    display: block;
    color: inherit;
    font-size: 24px;
    cursor: pointer;
    margin: 0;
    padding-bottom: 0.5em;
    padding-top: 0.5em;
  }

  @media (max-width: 640px) {
    button {
      font-size: 18px;
    }
  }

  svg {
    transition: transform 0.2s ease-in;
    z-index: 0;
    display: inline;
  }

  [aria-expanded="true"] svg {
    z-index: 0;
    transform: rotate(0.25turn);
  }


  .roadmap-desc {
    font-family: "Open Sans", sans-serif;
  }
</style>
