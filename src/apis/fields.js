import config from "../configs";

/**
 * Get field and job list
 * @returns {object}

export async function getFieldList() {
  const res = await fetch(`${config.url}/api/fields`, {
    method: "GET",
    credentials: "include",
  });
  return await res.json();
}
 */

export function getFieldList() {
  return [
    {
      id: 0,
      name: "IT",
      jobs: [
        {
          id: 0,
          name: "프론트엔드",
        },
        {
          id: 1,
          name: "백엔드",
        },
        {
          id: 2,
          name: "응용프로그래머",
        },
        {
          id: 3,
          name: "안드로이드 앱",
        },
        {
          id: 4,
          name: "iOS 앱",
        },
        {
          id: 5,
          name: "크로스플랫폼",
        },
        {
          id: 6,
          name: "시스템",
        },
        {
          id: 7,
          name: "DBA · 데이터베이스",
        },
        {
          id: 8,
          name: "네트워크 · 서버 · 보안",
        },
        {
          id: 9,
          name: "HTML · 퍼블리싱 · UI",
        },
        {
          id: 10,
          name: "QA 엔지니어",
        },
        {
          id: 11,
          name: "DEVOPS 엔지니어",
        },
        {
          id: 12,
          name: "AI · ML · 데이터",
        },
      ],
    },
  ];
}

/**
 * Post field and job result of user
 * @returns {number} statusCode
 */
export async function postField(userJob) {
  return Promise.ok;
}
