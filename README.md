src/
├── app/  
│ ├── App.tsx # 애플리케이션 최상위 컴포넌트
│ ├── store/ # 전역 상태 관리 (예: Redux store)
│ ├── routes/ # 라우팅 설정
│ └── providers/ # 전역 Providers (예: ThemeProvider, QueryProvider)
├── pages/  
│ ├── Home/ # 메인 페이지
│ │ ├── index.tsx
│ │ ├── model.ts # 상태 및 로직
│ │ └── ui/
│ ├── ProductDetail/ # 상품 상세 페이지
│ │ ├── index.tsx
│ │ ├── model.ts  
│ │ └── ui/
│ ├── Cart/ # 장바구니 페이지
│ │ ├── index.tsx
│ │ ├── model.ts  
│ │ └── ui/
│ ├── Checkout/ # 결제 페이지
│ │ ├── index.tsx
│ │ ├── model.ts  
│ │ └── ui/
│ └── OrderHistory/ # 주문 내역 페이지
│ ├── index.tsx
│ ├── model.ts  
│ └── ui/
├── features/  
│ ├── cart/ # 장바구니 기능
│ │ ├── model.ts # 상태 관리 (예: Redux slice)
│ │ ├── api.ts # API 호출 (예: 상품 추가/제거)
│ │ └── ui/ # 장바구니 관련 UI 컴포넌트 (CartIcon 등)
│ ├── product/ # 상품 관련 기능
│ │ ├── model.ts  
│ │ ├── api.ts # API 호출 (예: 상품 목록, 상품 상세 정보)
│ │ └── ui/  
│ ├── user/ # 사용자 기능 (로그인, 회원가입)
│ │ ├── model.ts  
│ │ ├── api.ts # API 호출 (예: 로그인, 회원가입)
│ │ └── ui/  
│ └── order/ # 주문 기능
│ ├── model.ts  
│ ├── api.ts # API 호출 (예: 주문 생성, 주문 조회)
│ └── ui/  
├── entities/  
│ ├── product/ # 상품 엔터티
│ │ ├── model.ts # 상품 관련 상태
│ │ └── ui/ # 상품 관련 공통 UI (예: ProductCard 등)
│ ├── user/ # 사용자 엔터티
│ │ ├── model.ts
│ │ └── ui/
│ └── order/ # 주문 엔터티
│ ├── model.ts
│ └── ui/
├── shared/  
│ ├── api/ # 공통 API 호출 설정 (axios 인스턴스 등)
│ ├── lib/ # 유틸리티 함수 및 헬퍼 함수
│ ├── hooks/ # 공통 커스텀 훅 (예: useAuth)
│ ├── ui/ # 공통 UI 컴포넌트 (Button, Modal 등)
│ └── styles/ # 전역 스타일 및 테마
├── assets/ # 정적 파일 (이미지, 폰트, 아이콘 등)
├── main.tsx # ReactDOM 렌더링 및 진입 파일
└── index.html # Vite 진입점
