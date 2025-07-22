import type { EditorRoute } from "$lib";

export interface MyEditorRoute extends EditorRoute {
    filename: string;
}

const routes: MyEditorRoute[] = [
    { filename: "none", label: "🏠 Homepage", url: "/" },
    { filename: "US Lobbies 2025 Report", label: "🇺🇸 Lobbies 2025 report", url: "/lobby-report" },
    { filename: "vfabioux-cv.en-US", label: "🇺🇸 Vincent Fabioux's CV", url: "/vfabioux-cv/en" },
    { filename: "vfabioux-cv.fr-FR", label: "🇫🇷 Vincent Fabioux's CV", url: "/vfabioux-cv/fr" },
];
export default routes;
