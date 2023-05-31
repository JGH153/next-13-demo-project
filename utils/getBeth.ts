import "server-only";

export async function getBeth() {
  const response = await fetch("https://rickandmortyapi.com/api/character/4");
  const data = await response.json();

  return data;
}
