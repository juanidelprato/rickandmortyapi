export const getApi = async (page) => {
  const url = `https://rickandmortyapi.com/api/character/?page=${page}`;

  const resp = await fetch(url);
  const { results } = await resp.json();

  const characters = results.map((ch) => ({
    id: ch.id,
    image: ch.image,
    name: ch.name,
    species: ch.species,
    lastSeen: ch.location.name,
    status: ch.status,
    firstSeen: ch.origin.name,
  }));

  return characters;
};
