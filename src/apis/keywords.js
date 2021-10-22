import config from "../configs";

export async function getKeywords() {
  let result = await fetch(`${config.url}/api/keywords`, {
    method: "GET",
    credentials: "include",
  });

  if (result.ok) {
    result = await result.json();
    return result.keywords;
  }
  return result.ok;
}
