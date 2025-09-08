export const onRequest = async ({ data }) => {
const identity = await data.cloudflareAccess.JWT.getIdentity();
return new Response(JSON.stringify({
 ok: true,
 name: identity.name ?? identity.email,
 email: identity.email,
 picture: identity.picture ?? null
}), { headers: { "content-type": "application/json" }});
};
