import { generateLogoutURL } from "@cloudflare/pages-plugin-cloudflare-access/api";

export const onRequest = () => {
const url = generateLogoutURL({ domain: "https://illuminatednotes.cloudflareaccess.com" });
return Response.redirect(url, 302);
};
