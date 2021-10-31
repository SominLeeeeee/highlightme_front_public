import config from "../configs";

/**
 * Sign up or in user
 * @param {String} email
 * @param {String} googleId
 * @param {String} accessToken
 * @returns {Array} [result json, status code(200: signup, 409: signin)]
 */
export async function postUsersOauthGoogle(email, googleId) {
  const res = await fetch(`${config.url}/api/users/oauth/google`, {
    method: "POST",
    credentials: "include",
    body: new URLSearchParams({
      email: email,
      googleId: googleId,
    }),
  });

  return [await res.json(), res.status];
}
