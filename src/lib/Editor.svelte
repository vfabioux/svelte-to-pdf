<script lang="ts">
    import download from "downloadjs";
    import type { Snippet } from "svelte";
    import { page } from "$app/state";
    import Fa from "svelte-fa";
    import {
        faDownLeftAndUpRightToCenter,
        faDownload,
        faMinus,
        faPlus,
        faServer,
        faWindowMaximize,
    } from "@fortawesome/free-solid-svg-icons";

    export interface EditorProps {
        apiUrl?: string;
        children?: Snippet;
        filename?: string;
        routeKey?: string;
        routes?: EditorRoute[];
    }

    export interface EditorRoute {
        label?: string;
        url: string;
    }

    let { apiUrl, children, filename = "PDF", routeKey = "", routes }: EditorProps = $props();
    const isPrinting = apiUrl && page.url.searchParams.has("print");
    let isDownloading = $state(false);
    let serverStatus: "none" | "disconnected" | "connected" | "connecting" | "error" = $state(
        isPrinting ? "none" : "disconnected",
    );

    async function checkApi(url: string): Promise<boolean> {
        try {
            const result = await fetch(url + "?action=ping");
            if (!result.ok) return false;
            const json = await result.json();
            return "apiType" in json && json.apiType === "svelte-to-pdf";
        } catch {
            return false;
        }
    }

    async function downloadSingle() {
        if (apiUrl) {
            isDownloading = true;
            const result = await fetch(
                apiUrl + "?" + new URLSearchParams({ action: "download", page: window.location.href }),
            );
            const blob = await result.blob();
            download(blob, filename, "application/pdf");
            isDownloading = false;
        } else {
            window.print();
        }
    }

    $effect(() => {
        if (serverStatus === "disconnected" && apiUrl) serverStatus = "connecting";
        if (serverStatus === "connecting") checkApi(apiUrl!).then((ok) => (serverStatus = ok ? "connected" : "error"));
    });

    let serverIconColor = $derived.by(() => {
        switch (serverStatus) {
            case "connected":
                return "green";
            case "connecting":
                return "orange";
            case "error":
                return "red";
            default:
                return undefined;
        }
    });

    let serverIconTooltip = $derived.by(() => {
        switch (serverStatus) {
            case "connected":
                return "Download PDF using the download server.";
            case "connecting":
                return "Connecting to the download server...";
            case "error":
                return "Could not connect to the download server.";
            case "disconnected":
                return "Print PDF using your browser.";
            default:
                return undefined;
        }
    });
</script>

<nav>
    <button onclick={downloadSingle} disabled={isDownloading} title={serverIconTooltip}
        >{#if serverIconColor}<Fa color={serverIconColor} icon={faServer} size="lg" />{:else}<Fa
                color="grey"
                icon={faWindowMaximize}
                size="lg" />{/if}
        <Fa icon={faDownload} size="lg" /></button>
    <hr />
    <button title="Decrease zoom"><Fa icon={faMinus} size="lg" /></button>
    <button style="width: 3rem" title="Reset zoom to 100%">100%</button>
    <button title="Increase zoom"><Fa icon={faPlus} size="lg" /></button>
    <button title="Fit to screen"><Fa icon={faDownLeftAndUpRightToCenter} size="lg" /></button>
    {#if routes}
        <hr />
        <select
            title="Current page"
            onchange={(event) => (window.location.href = event.currentTarget.value)}
            value={routeKey}>
            {#each routes as route}
                <option value={route.url}>{route.label ?? route.url}</option>
            {/each}
        </select>
    {/if}
</nav>
<main>
    {@render children?.()}
</main>

<style>
    :global(html) {
        height: 100%;
    }

    :global(body) {
        height: 100%;
        margin: 0;
        overflow-x: hidden;
        overflow-y: scroll;

        & > * {
            height: 100%;
            width: 100%;
        }
    }

    @media print {
        main {
            align-items: normal !important;
            background-color: white !important;
            justify-content: normal !important;
            gap: 0 !important;
            padding: 0 !important;
        }

        nav {
            display: none !important;
        }
    }

    main {
        align-items: center;
        background-color: grey;
        display: flex;
        flex-direction: column;
        gap: 4rem;
        min-height: 100%;
        padding-top: 2rem;
    }

    nav {
        align-items: center;
        background-color: #ffffff;
        box-shadow: 0 0 1rem black;
        display: flex;
        height: 2rem;
        justify-content: center;
        position: fixed;
        width: 100%;
    }

    hr {
        background-color: lightgrey;
        border: none;
        border-radius: 0.1rem;
        height: 1.5rem;
        margin: 0 0.5rem 0 0.5rem;
        width: 0.1rem;
    }

    button {
        background-color: white;
        border: none;
        cursor: pointer;
        height: 2rem;
        padding: 0 0.5rem 0 0.5rem;

        &:hover {
            background-color: lightgrey;
        }

        &:disabled {
            cursor: progress;
        }
    }

    select {
        appearance: none;
        background-color: white;
        border: none;
        cursor: pointer;
        height: 2rem;
        padding: 0 0.5rem 0 0.5rem;

        &:hover {
            background-color: lightgrey;
        }
    }
</style>
