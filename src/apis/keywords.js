import config from "../configs";

/*
export async function getKeywords() {
  let result = await fetch(`${config.url}/api/keywords`, {
    method: "GET",
    credentials: "include",
  });

  if (result.ok) {
    result = await result.json();
    return result;
  }
  return result.ok;
} */

export function getKeywords() {
  return {
    자기소개서: [
      {
        id: 1424,
        keyword: "Android",
        answered: 1,
      },
      {
        id: 1181,
        keyword: "비동기",
        answered: 2,
      },
      {
        id: 1496,
        keyword: "프로세스",
        answered: 2,
      },
      {
        id: 1319,
        keyword: "DB",
        answered: 1,
      },
      {
        id: 1438,
        keyword: "Room",
        answered: 1,
      },
      {
        id: 1249,
        keyword: "라이브러리",
        answered: 1,
      },
      {
        id: 1451,
        keyword: "MVP",
        answered: 1,
      },
      {
        id: 1447,
        keyword: "MVVM",
        answered: 1,
      },
      {
        id: 1439,
        keyword: "AAC",
        answered: 1,
      },
      {
        id: 1048,
        keyword: "컴포넌트",
        answered: 1,
      },
      {
        id: 1243,
        keyword: "서버",
        answered: 1,
      },
      {
        id: 1497,
        keyword: "스레드",
        answered: 2,
      },
    ],
    프론트엔드: {
      프레임워크: [
        {
          id: 1026,
          keyword: "JSX",
          answered: 0,
        },
        {
          id: 1060,
          keyword: "DOM",
          answered: 0,
        },
        {
          id: 1017,
          keyword: "props",
          answered: 0,
        },
        {
          id: 1039,
          keyword: "CSS",
          answered: 0,
        },
        {
          id: 1053,
          keyword: "flux",
          answered: 0,
        },
        {
          id: 1016,
          keyword: "state",
          answered: 0,
        },
        {
          id: 1072,
          keyword: "URL인코딩",
          answered: 0,
        },
        {
          id: 1058,
          keyword: "HOC",
          answered: 0,
        },
        {
          id: 1064,
          keyword: "불변성",
          answered: 0,
        },
      ],
      퍼블리싱: [
        {
          id: 1091,
          keyword: "HTML",
          answered: 0,
        },
        {
          id: 1139,
          keyword: "mediaquery",
          answered: 0,
        },
        {
          id: 1083,
          keyword: "크로스브라우징",
          answered: 0,
        },
        {
          id: 1086,
          keyword: "적응형웹",
          answered: 0,
        },
        {
          id: 1118,
          keyword: "position속성",
          answered: 0,
        },
        {
          id: 1105,
          keyword: "inline",
          answered: 0,
        },
        {
          id: 1089,
          keyword: "innerHTML",
          answered: 0,
        },
      ],
      "운영/최적화": [
        {
          id: 1224,
          keyword: "CORS",
          answered: 0,
        },
        {
          id: 1152,
          keyword: "브라우저저장소",
          answered: 0,
        },
        {
          id: 1202,
          keyword: "웹서비스",
          answered: 0,
        },
        {
          id: 1076,
          keyword: "렌더링",
          answered: 0,
        },
        {
          id: 1215,
          keyword: "promise",
          answered: 0,
        },
        {
          id: 1185,
          keyword: "HTTP",
          answered: 0,
        },
        {
          id: 1190,
          keyword: "UX",
          answered: 0,
        },
      ],
    },
    "개발자 공통": [
      {
        id: 1515,
        keyword: "garbagecollect",
        answered: 0,
      },
      {
        id: 1541,
        keyword: "객체지향프로그래밍",
        answered: 0,
      },
      {
        id: 1504,
        keyword: "컴파일언어",
        answered: 0,
      },
      {
        id: 1498,
        keyword: "OS",
        answered: 0,
      },
      {
        id: 1482,
        keyword: "Git",
        answered: 0,
      },
      {
        id: 1248,
        keyword: "프레임워크",
        answered: 0,
      },
      {
        id: 1528,
        keyword: "4차산업혁명",
        answered: 0,
      },
      {
        id: 1494,
        keyword: "Callbyvalue",
        answered: 0,
      },
      {
        id: 1551,
        keyword: "싱글톤",
        answered: 0,
      },
      {
        id: 1523,
        keyword: "협업",
        answered: 0,
      },
    ],
    CS: {
      운영체제: [
        {
          id: 1652,
          keyword: "페이지테이블",
          answered: 0,
        },
        {
          id: 1582,
          keyword: "round-robin",
          answered: 0,
        },
        {
          id: 1592,
          keyword: "멀티스레딩",
          answered: 0,
        },
        {
          id: 1671,
          keyword: "공간지역성",
          answered: 0,
        },
      ],
      객체지향: [
        {
          id: 2012,
          keyword: "다형성",
          answered: 0,
        },
        {
          id: 2001,
          keyword: "상속",
          answered: 0,
        },
        {
          id: 2007,
          keyword: "절차지향프로그래밍",
          answered: 0,
        },
        {
          id: 1275,
          keyword: "인스턴스",
          answered: 0,
        },
        {
          id: 2000,
          keyword: "오버라이딩",
          answered: 0,
        },
        {
          id: 2009,
          keyword: "캡슐화",
          answered: 0,
        },
        {
          id: 1595,
          keyword: "추상화",
          answered: 0,
        },
        {
          id: 2006,
          keyword: "OOP",
          answered: 0,
        },
        {
          id: 1999,
          keyword: "오버로딩",
          answered: 0,
        },
      ],
      네트워크: [
        {
          id: 1723,
          keyword: "이더넷",
          answered: 0,
        },
        {
          id: 1726,
          keyword: "UDP",
          answered: 0,
        },
        {
          id: 1724,
          keyword: "TCP",
          answered: 0,
        },
        {
          id: 1806,
          keyword: "gateway",
          answered: 0,
        },
        {
          id: 1669,
          keyword: "캐시",
          answered: 0,
        },
        {
          id: 1765,
          keyword: "MAC주소",
          answered: 0,
        },
        {
          id: 1785,
          keyword: "비연결성",
          answered: 0,
        },
        {
          id: 1778,
          keyword: "SSL",
          answered: 0,
        },
        {
          id: 1762,
          keyword: "IP주소",
          answered: 0,
        },
        {
          id: 1799,
          keyword: "unicast",
          answered: 0,
        },
      ],
      "자료구조/알고리즘": [
        {
          id: 1863,
          keyword: "추가",
          answered: 0,
        },
        {
          id: 1878,
          keyword: "deque",
          answered: 0,
        },
        {
          id: 1964,
          keyword: "정렬",
          answered: 0,
        },
        {
          id: 1987,
          keyword: "해시테이블",
          answered: 0,
        },
        {
          id: 1946,
          keyword: "bfs",
          answered: 0,
        },
      ],
    },
    인성: [
      {
        id: 2271,
        keyword: "비전/목표",
        answered: 0,
      },
      {
        id: 2280,
        keyword: "커뮤니케이션",
        answered: 0,
      },
      {
        id: 2289,
        keyword: "창의성",
        answered: 0,
      },
      {
        id: 2306,
        keyword: "기업적합성",
        answered: 0,
      },
      {
        id: 2312,
        keyword: "직무적합성",
        answered: 0,
      },
      {
        id: 2317,
        keyword: "성격/가치관",
        answered: 0,
      },
      {
        id: 2336,
        keyword: "공통",
        answered: 0,
      },
    ],
  };
}

