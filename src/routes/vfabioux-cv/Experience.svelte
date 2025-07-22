<script lang="ts">
    import type { Snippet } from "svelte";
    import Fa from "svelte-fa";
    import { faCalendarDays, faLocationDot } from "@fortawesome/free-solid-svg-icons";

    interface Props {
        children?: Snippet;
        duration: string;
        entity: string;
        location: string;
        title: string;
    }

    const { children, duration, entity, location, title }: Props = $props();
</script>

<h3>{title}</h3>
<p>{entity}</p>
<div>
    <span><Fa icon={faCalendarDays} /> &nbsp;{duration}</span>
    <span><Fa icon={faLocationDot} /> &nbsp;{location}</span>
</div>
<section>
    {@render children?.()}
</section>

<style>
    p {
        font-weight: bold;
        margin: 0 0 4pt 0;
    }

    div {
        color: var(--theme-light);
        font-size: 10pt;

        & > span:first-child {
            display: inline-block;
            width: 50%;
        }
    }

    section {
        color: var(--theme-light);
        margin-top: 5pt;
    }
</style>
