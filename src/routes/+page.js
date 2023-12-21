export async function load({ fetch }) {
  try {
    const res = await fetch("https://kindnes.onrender.com/api/posts", {
      credentials: "include",
    });
    const posts = await res.json();
    return {
      posts,
    };
  } catch (err) {
    console.log("Svelte Load Error: " + err);
  }
}
