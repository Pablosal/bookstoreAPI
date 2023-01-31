export async function fetchBooks() {
  const res = await fetch('http://localhost:3000/api/books');
  return res.json();
}
