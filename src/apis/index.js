import config from "../configs";

/**
 * Get question list for matching user keyword Id
 * @param {Number} userKeywordId
 * @returns questions
 */
export const postQuestions = async (userKeywordId) => {
  return (
    await (
      await fetch(`${config.URL}/api/questions`, {
        method: "POST",
        credentials: "include",
        body: new URLSearchParams({
          user_keyword_id: userKeywordId,
        }),
      })
    ).json()
  ).questions;
};

/**
 * Like or Unlike a question
 * @param {Number} questionId
 * @returns response from server
 */
export const postQuestionLike = async (questionId) => {
  return await fetch(`${config.URL}/api/questions/like`, {
    method: "POST",
    credentials: "include",
    body: new URLSearchParams({
      question_id: questionId,
    }),
  });
};

/**
 * Dislike or Undislike a question
 * @param {Number} questionId
 * @returns response from server
 */
export const postQuestionDislike = async (questionId) => {
  return await fetch(`${config.URL}/api/questions/dislike`, {
    method: "POST",
    credentials: "include",
    body: new URLSearchParams({
      question_id: questionId,
    }),
  });
};

/**
 * Post user answer of question
 * @param {Number} userQuestionId
 * @param {Number} userKeywordId
 * @param {String} answer
 * @returns response from server
 */
export const postQuestionAnswer = async (
  userQuestionId,
  userKeywordId,
  answer
) => {
  return await fetch(`${config.URL}/api/questions/answer`, {
    method: "POST",
    credentials: "include",
    body: new URLSearchParams({
      user_question_id: userQuestionId,
      user_keyword_id: userKeywordId,
      answer: answer,
    }),
  });
};
