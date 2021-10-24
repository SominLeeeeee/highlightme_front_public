import config from "../configs";

/**
 * get coverletters
 * @returns success -> result, fail -> false
 */
export async function getCoverletters() {
  const result = await fetch(`${config.url}/api/cls`, {
    method: "GET",
    credentials: "include",
  });

  if (result.ok) {
    return await result.json();
  }
  return result.ok;
}
