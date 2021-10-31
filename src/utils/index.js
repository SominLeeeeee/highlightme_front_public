/**
 * User의 로그인 여부를 확인함
 * @param {UserInfo} userInfo
 * @returns {Boolean} isUserValid
 */
export function isUserValid(userInfo) {
  return userInfo && userInfo.id && userInfo.email && userInfo.email.length > 0;
}
