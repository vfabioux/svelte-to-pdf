import type { RequestHandler } from "@sveltejs/kit";
import puppeteer from "puppeteer";

export const GET: RequestHandler = async ({ url }) => {
    const action = url.searchParams.get("action") ?? "none";
    switch (action) {
        case "download":
            const pageUrl = url.searchParams.get("page") ?? "";
            if (!pageUrl) return Response.error();
            const browser = await puppeteer.launch({ headless: true });
            const page = await browser.newPage();
            await page.goto(pageUrl);

            const buffer = await page.pdf({
                format: "A4",
                printBackground: true,
                tagged: true,
                margin: {
                    left: "0px",
                    top: "0px",
                    right: "0px",
                    bottom: "0px",
                },
            });
            await browser.close();
            return new Response(buffer, {
                headers: {
                    "Content-Type": "application/pdf",
                    "Content-Length": buffer.byteLength.toString(),
                },
            });
        case "ping":
            return Response.json({ apiType: "svelte-to-pdf" });
        default:
            return Response.error();
    }
};
