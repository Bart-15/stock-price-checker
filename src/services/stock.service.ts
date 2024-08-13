export async function searchStock(query: string) {
  const apiKey = process.env.ALPHA_ADVANTAGE_API_KEY;

  const data = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${query}&apikey=${apiKey}`,
  );
  const response = await data.json();

  return response;
}
