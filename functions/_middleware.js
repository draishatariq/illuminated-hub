import cloudflareAccessPlugin from "@cloudflare/pages-plugin-cloudflare-access";

export const onRequest = cloudflareAccessPlugin({
  domain: "https://illuminatednotes.cloudflareaccess.com",
  aud: "5f8218c8896ec2695a0d5ea9f5299c021554fc519b98c643c2a88ca7138f9244"
});
