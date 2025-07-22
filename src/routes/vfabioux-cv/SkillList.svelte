<script lang="ts">
    import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
    import { faStar } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";

    interface Props {
        skills: { label: string; level: 0 | 1 | 2 | 3 | 4 | 5 }[];
    }

    let { skills }: Props = $props();
</script>

<ul>
    {#each skills as skill}
        <li>
            <span>{skill.label}</span>
            <div>
                {#each { length: skill.level }}<Fa
                        icon={faStar}
                        color={"var(--theme-accent)"} />{/each}{#each { length: 5 - skill.level }}<Fa
                        icon={faStarRegular} />{/each}
            </div>
        </li>
    {/each}
</ul>

<style>
    ul {
        padding: 0;
    }

    li {
        display: flex;
        justify-content: space-between;
        list-style-type: none;
        margin: 5pt 0 5pt 0;
    }
</style>
