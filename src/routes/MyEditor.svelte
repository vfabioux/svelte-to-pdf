<script lang="ts">
    import Editor from "$lib/Editor.svelte";
    import type { Snippet } from "svelte";
    import type { MyEditorRoute } from "./routes";
    import routes from "./routes";

    export interface MyEditorProps {
        children: Snippet;
        route: MyEditorRoute;
    }

    const { children, route }: MyEditorProps = $props();

    const apiUrl = import.meta.env.DEV ? "/" : undefined;
</script>

<Editor {apiUrl} filename={route.filename} routeKey={route.url} {routes}>{@render children?.()}</Editor>
