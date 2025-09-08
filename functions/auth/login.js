import { generateLoginURL } from "@cloudflare/pages-plugin-cloudflare-access/api";

export const onRequest = () => {
const loginURL = generateLoginURL({
domain: "https://illuminatednotes.cloudflareaccess.com", // replace
aud: "5f8218c8896ec2695a0d5ea9f5299c021554fc519b98c643c2a88ca7138f9244",
redirectURL: "https://hub.illuminated.pro/"
});
return Response.redirect(loginURL, 302);
};
