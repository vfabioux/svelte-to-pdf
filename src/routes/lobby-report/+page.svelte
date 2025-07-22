<script lang="ts">
    import { Page } from "$lib";
    import routes from "../routes";
    import MyEditor from "../MyEditor.svelte";

    const route = $derived(routes.find((route) => route.url === "/lobby-report")!);
</script>

<MyEditor {route}>
    <Page><h1>Page 1</h1></Page>
    <Page><h1>Page 2</h1></Page>
</MyEditor>
