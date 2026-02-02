<!-- Center.svelte -->
<script lang="ts">
  import type { CSSProperties } from 'svelte/elements';

  let {height = '100%', children}: {height?: string; children: Snippet} = $props()
</script>

<div class="center-wrapper" style="--height: {height}">
	{@render children?.()}
</div>

<style>
  .center-wrapper {
    display: flex;
    justify-content: center; /* Horizontal */
    align-items: center;     /* Vertical */
    height: var(--height);
    width: 100%;
  }
</style>
