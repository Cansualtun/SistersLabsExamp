export async function fetchDogImage() {
  const apiKey = process.env.NEXT_PUBLIC_DOG_API_KEY;
  const response = await fetch("https://api.thecatapi.com/v1/images/search", {
    method: "GET",
    headers: {
      "x-api-key": apiKey,
    },
  });
  const data = await response.json();
  return data[0].url;
}
