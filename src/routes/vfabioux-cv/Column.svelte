<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        children?: Snippet;
        width?: string;
    }

    let { children, width }: Props = $props();
</script>

<section style={width ? `flex: 0 0 ${width};` : "flex: 1 1 auto;"}>{@render children?.()}</section>
