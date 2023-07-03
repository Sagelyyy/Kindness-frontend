export async function load({ fetch }) {
  const res = await fetch(
    "https://kindness-server-production.up.railway.app/api/posts",
    {
      credentials: "include",
    }
  );
  const posts = await res.json();
  console.log(posts[0].message);
  return {
    posts,
  };
}
