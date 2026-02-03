<!-- HStack.svelte -->
<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import type { Snippet } from "svelte";

	interface Props extends HTMLAttributes<HTMLDivElement> {
		children: Snippet;
		gap?: string;
		align?: string;
	}
	// Optional: Allow passing gap and alignment props for convenience
	let { children, gap = "1rem", align = "center", ...rest }: Props = $props();
</script>

<div
	style="display: flex; flex-direction: row; gap: {gap}; align-items: {align};"
	{...rest}
>
	{@render children?.()}
</div>

<style>
</style>
