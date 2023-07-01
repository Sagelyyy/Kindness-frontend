export async function load({ fetch }) {
  const res = await fetch("http://localhost:3000/api/posts", {
    credentials: "include",
  });
  const posts = await res.json();
  console.log(posts[0]);
  return {
    posts,
  };
}
