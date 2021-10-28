import config from "../configs";

/**
 * Get question list for matching user keyword Id
 * @param {Number} keywordId
 * @returns questions
 */
export async function postQuestions(keywordId) {
  var url = new URL(`${config.url}/api/questions`);
  url.search = new URLSearchParams({ keywordId: keywordId });

  return await (
    await fetch(url.toString(), {
      method: "GET",
      credentials: "include",
    })
  ).json();
}

/**
 * Like or Unlike a question
 * @param {Number} questionId
 * @returns response from server
 */
export async function postQuestionLike(questionId) {
  return await fetch(`${config.url}/api/questions/like`, {
    method: "POST",
    credentials: "include",
    body: new URLSearchParams({
      questionId: questionId,
    }),
  });
}

/**
 * Dislike or Undislike a question
 * @param {Number} questionId
 * @returns response from server
 */
export async function postQuestionDislike(questionId) {
  return await fetch(`${config.url}/api/questions/dislike`, {
    method: "POST",
    credentials: "include",
    body: new URLSearchParams({
      questionId: questionId,
    }),
  });
}

/**
 * Post user answer of question
 * @param {Number} userQuestionId
 * @param {Number} userKeywordId
 * @param {String} answer
 * @returns response from server
 */
export async function postQuestionAnswer(questionId, answer) {
  const tailQuestion = await fetch(`${config.url}/api/questions/answer`, {
    method: "POST",
    credentials: "include",
    body: new URLSearchParams({
      questionId: questionId,
      answer: answer,
    }),
  });

  if (tailQuestion.status === 200) return tailQuestion.json();
  else return false;
}

export async function postQuestionScrap(questionId) {
  return await fetch(`${config.url}/api/questions/scrap`, {
    method: "POST",
    credentials: "include",
    body: new URLSearchParams({
      questionId: questionId,
    }),
  });
}

export async function getScrappedQuestion() {
  const scrapped = await fetch(`${config.url}/api/questions/scrapped`, {
    method: "GET",
    credentials: "include",
  });

  if (scrapped.status) return await scrapped.json();
  else return scrapped.status;
}

export async function postInterviewListed(questionId) {
  return await fetch(`${config.url}/api/questions/interviewListed`, {
    method: "POST",
    credentials: "include",
    body: new URLSearchParams({
      questionId: questionId,
    }),
  });
}
