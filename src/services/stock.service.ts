export async function searchStock(query: string) {
  const apiKey = process.env.POLYGON_API_KEY;

  const capitalizedQuery = query.toUpperCase().trim();

  const data = await fetch(
    `https://api.polygon.io/v2/aggs/ticker/${capitalizedQuery}/prev?apiKey=${apiKey}`,
  );
  const response = await data.json();

  return response;
}
