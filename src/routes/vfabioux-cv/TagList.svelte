<script lang="ts">
    interface Props {
        tags: string[];
    }

    let { tags } = $props();
</script>

<ul>
    {#each tags as tag}
        <li>{tag}</li>
    {/each}
</ul>

<style>
    ul {
        display: flex;
        flex-wrap: wrap;
        gap: 4pt;
        padding: 0;
    }

    li {
        border: 1pt solid var(--theme-lighter);
        border-radius: 5pt;
        list-style-type: none;
        margin: 0;
        padding: 3pt;
    }
</style>
