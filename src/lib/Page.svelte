<script lang="ts">
    import type { Snippet } from "svelte";
    export interface PageProps {
        children?: Snippet;
    }

    let { children }: PageProps = $props();
</script>

<div>
    {@render children?.()}
</div>

<style>
    @media print {
        @page {
            size: "A4";
            margin: 0;
        }

        div {
            box-shadow: none !important;
        }
    }

    div {
        background-color: white;
        box-shadow: 0 0 1rem black;
        box-sizing: border-box;
        height: 11.75in;
        padding: 20pt;
        margin: 2rem;
        width: 8.25in;
    }
</style>
