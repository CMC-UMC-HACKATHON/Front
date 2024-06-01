# Front

## 돈파밍 프로젝트

돈파밍 프로젝트 프론트엔드 레포지토리입니다.

### 프로젝트 개요

- Don’t 도파밍 → 도파밍을 줄임
- ‘돈’파밍 → 도파밍을 돈으로 해결할 수 있음

### 사용 기술

Web

- 스타일링
  - Css module
  - React-icons(svg)
- 전역 상태 라이브러리
  - Zustand
- http 요청
  - axios
- 라우팅
  - React-router

App

- 스타일링
  - StyleSheet
- 전역 상태 라이브러리
  - zustand
- http 요청
  - axios
- 라우팅
  - react-navigation

### 팀원

| Frontend                                                                                                          | Frontend                                                                                                          | Frontend                                                                                                          |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| ![icon](https://github.com/joseph0926/project_02-MoneyNote/assets/100750188/212deebf-579d-409e-83b3-ead4e4ef7a90) | ![icon](https://github.com/joseph0926/project_02-MoneyNote/assets/100750188/212deebf-579d-409e-83b3-ead4e4ef7a90) | ![icon](https://github.com/joseph0926/project_02-MoneyNote/assets/100750188/212deebf-579d-409e-83b3-ead4e4ef7a90) |
| [이나령](https://github.com/devryyeong)                                                                           | [김영훈](https://github.com/joseph0926)                                                                           | [김준영](https://github.com/JunYoungKr)                                                                           |

### 환경 & 실행 방법

```shell

## web - 개발
cd web
npm install
npm run dev

## app - 개발
cd app
npm install
npx react-native start

```

### 브렌치 전략

`main`: 실서버
`dev`: 개발서버(각 브렌치 머지 후 테스트 환경 브렌치)
`feat/이슈넘버`: 기능 개발 브렌치
`bug/버그넘버`: 버그 수정 브렌치

- 커밋 메시지: feat/app or web: [넘버] 커밋 메시지
