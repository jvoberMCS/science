<!-- HStack.svelte -->
<script lang="ts">
  import type { CSSProperties } from 'svelte/elements';

  // Optional: Allow passing gap and alignment props for convenience
  let {gap = '1rem', align = 'center', children}: {gap?: string; align?: string; children: Snippet} = $props()
</script>

<div style="display: flex; flex-direction: row; gap: {gap}; align-items: {align};">
	{@render children?.()}
</div>

<style>
</style>
