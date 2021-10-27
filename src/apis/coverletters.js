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

  const rjson = await result.json();

  if (result.ok) {
    return await rjson;
  }
  return result.ok;
}

/**
 * post coverletters
 * @param {Object} cle
 * @returns post result
 */
export async function postCoverletters(cle) {
  const CLES = cle.element.map((e, idx, arr) => ({
    cl_element_id: idx + 1,
    problem: e.problem,
    answer: e.answer,
    _public: 1,
  }));

  const request = {
    CLES: JSON.stringify(CLES),
    cl_id: cle.cl_id,
    title: `자기소개서 ${cle.cl_id}번`,
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
