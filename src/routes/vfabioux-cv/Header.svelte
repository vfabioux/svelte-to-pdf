<script lang="ts">
    import { base } from "$app/paths";
    import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";

    export interface HeaderProps {
        list: { label: string; icon: IconDefinition; url?: string }[];
        name: string;
        photo?: string;
        title: string;
    }

    let { list, name, photo = "/photo.png", title }: HeaderProps = $props();
</script>

<header>
    <div>
        <h1>{name}</h1>
        <p class="subtitle">{title}</p>
        <ul>
            {#each list as item}
                <li><Fa icon={item.icon} /> &nbsp;<a href={item.url}>{item.label}</a></li>
            {/each}
        </ul>
    </div>
    <img src={base + photo} alt={name} />
</header>

<style>
    header {
        display: flex;
    }

    header > div {
        flex: 1 1 auto;
    }

    img {
        border-radius: 50%;
        flex: 0 0 auto;
        height: 100pt;
        object-fit: cover;
        width: 100pt;
    }

    h1 {
        margin: 0;
        margin-bottom: 3pt;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        margin: 0;
        margin-top: 5pt;
        padding: 0;

        & > li {
            list-style-type: none;
            margin-right: 30pt;
            margin-top: 5pt;
        }
    }
</style>
