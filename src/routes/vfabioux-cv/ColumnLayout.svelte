<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        children?: Snippet;
    }

    let { children }: Props = $props();
</script>

<div>{@render children?.()}</div>

<style>
    div {
        display: flex;
        gap: 25pt;
    }
</style>
