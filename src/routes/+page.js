export async function load({ fetch }) {
  const res = await fetch("https://kindnes.onrender.com/api/posts", {
    credentials: "include",
  });
  const posts = await res.json();
  return {
    posts,
  };
}
