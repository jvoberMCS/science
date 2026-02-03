<!-- Center.svelte -->
<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import type { Snippet } from "svelte";

	interface Props extends HTMLAttributes<HTMLDivElement> {
		children: Snippet;
		height?: string;
	}
	let { children, height = "100%", ...rest }: Props = $props();
</script>

<div class="center-wrapper" style="--height: {height}" {...rest}>
	{@render children?.()}
</div>

<style>
	.center-wrapper {
		display: flex;
		justify-content: center; /* Horizontal */
		align-items: center; /* Vertical */
		height: var(--height);
		width: 100%;
	}
</style>
