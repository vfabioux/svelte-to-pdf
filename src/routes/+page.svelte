<script lang="ts">
    import { base } from "$app/paths";
    import routes from "./routes";

    let exampleRoutes = $derived(routes.filter((route) => route.url !== "/"));
</script>

<head>
    <title>SVELTE-TO-PDF</title>
</head>

<div>
    <main>
        <h1>HOME : TO-DO</h1>
        <h2>Browse examples</h2>
        <ul>
            {#each exampleRoutes as route}<li>
                    <a href={base + route.url}><b>{route.label ?? route.url}</b><br /><span>{route.url}</span></a>
                </li>{/each}
        </ul>
    </main>
</div>

<style>
    :global(html) {
        height: 100%;
    }

    :global(body) {
        height: 100%;
        margin: 0;
        overflow-x: hidden;
        overflow-y: auto;
        width: 100%;
        box-sizing: border-box;
    }

    :global(body > *) {
        height: 100%;
        width: 100%;
    }

    div {
        background-color: grey;
        display: flex;
        justify-content: center;
        min-height: 100%;
        width: 100%;
    }

    div > main {
        background-color: white;
        box-shadow: 0 0 1rem black;
        flex: 0 1 800px;
        padding: 2rem;
        min-height: 100%;
    }

    ul {
        list-style-type: none;

        & > li {
            & > a {
                color: black;
                text-decoration: none;
            }
        }
    }
</style>
