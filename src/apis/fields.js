import config from "../configs";

/**
 * Get field and job list
 * @returns {object}
 */
export async function getFieldList() {
  const res = await fetch(`${config.url}/api/fields`, {
    method: "GET",
    credentials: "include",
  });
  return await res.json();
}

/**
 * Post field and job result of user
 * @returns {number} statusCode
 */
export async function postField(userJob) {
  const res = await fetch(`${config.url}/api/fields`, {
    method: "POST",
    credentials: "include",
    body: new URLSearchParams({
      fieldIds: JSON.stringify(userJob),
    }),
  });
  return res.status;
}
