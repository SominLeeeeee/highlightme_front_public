/**
 * User의 로그인 여부를 확인함
 * @param {UserInfo} userInfo
 * @returns {Boolean} isUserValid
 */
export const isUserValid = (userInfo) => {
  return (
    userInfo &&
    userInfo.id &&
    userInfo.email &&
    userInfo.accessToken &&
    userInfo.email.length > 0 &&
    userInfo.accessToken.length > 0
  );
};
