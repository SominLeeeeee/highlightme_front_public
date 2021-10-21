import config from "../configs";

/**
 * Sign up or in user
 * @param {String} email
 * @param {String} googleId
 * @param {String} accessToken
 * @returns
 */
export const postUsersOauthGoogle = async (email, googleId, accessToken) => {
  return await await fetch(`${config.URL}/api/users/oauth/google`, {
    method: "POST",
    credentials: "include",
    body: new URLSearchParams({
      email: email,
      googleId: googleId,
      accessToken: accessToken,
    }),
  }).json();
};
