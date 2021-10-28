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

/**
 * post coverletters
 * @param {Object} cle
 * @returns post result
 */
export async function postCoverletters(cle) {
  const request = {
    elements: JSON.stringify(cle.elements),
    title: "자기소개서제목",
    company: "카뱅",
    tags: ["카카오", "뱅크"],
    comments: "잘부탁드림다",
  };

  const result = await fetch(`${config.url}/api/cls`, {
    method: "POST",
    credentials: "include",
    body: new URLSearchParams(request),
  });

  return result;
}
