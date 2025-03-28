# FAQ 페이지 프로젝트

현대 오토에버 채용 과제로 개발된 FAQ 페이지 프로젝트입니다. React, TypeScript, Vite를 사용하여 구현되었으며, MSW를 통한 목데이터 패칭이 구현되어 있습니다.

## 주요 기술 스택

- React
- TypeScript
- Vite
- Tanstack-Query
- emotion
- framer-motion
- MSW (Mock Service Worker)
- Yarn

## 시작하기

### 사전 요구사항

- Node.js
- Yarn

### 설치

```bash
yarn install
```

### 개발 서버 실행

개발 모드로 서버를 실행합니다:

```bash
yarn dev
```

### 빌드 및 프리뷰

프로덕션 빌드를 생성하고 프리뷰합니다:

```bash
yarn build && yarn preview
```

> **참고**: 프리뷰 모드에서는 기본적으로 MSW(Mock Service Worker)가 비활성화되어 있습니다. 프리뷰 모드에서 API 목데이터를 테스트하고 싶다면 `main.tsx`의 `enableMocking` 조건문을 주석 처리하면 됩니다.

## 주요 기능

- 카테고리별 FAQ 필터링
- 검색 기능
- MSW를 통한 목데이터 API 구현
- 반응형 디자인

## 프로젝트 구조

프로젝트는 React + Vite의 기본 구조를 따르며, FAQ 페이지 구현은 `src` 디렉토리에 위치해 있습니다.
