# 옆집공방 MVP Architecture

## 사용자 역할
- consumer: 공방 탐색, 의뢰, 견적 선택, 주문/진행 확인
- artisan: 공방 운영, 의뢰 확인, 견적, 작업 상태 갱신
- admin: 인증, 거래/신고/분쟁 관리

## 핵심 도메인
profiles → workshops → work_requests → quotes → job_updates

## 인계 방식
- visit: 직접 방문
- round_trip_delivery: 소비자 수거 → 공방 → 완료 후 소비자 반환
- parcel: 택배

## 왕복배달 상태
pickup_requested → received → inspection → in_progress → completed → returning → delivered

## 장인별 8단계
새싹별 → 꼬마별 → 반짝별 → 빛나는별 → 큰별 → 왕큰별 → 으뜸별 → 우주별

등급은 단순 매출이 아니라 완료 거래, 재의뢰, 납기, 만족, 분쟁, 인증, 활동 지속성을 기반으로 산정한다.

## 다음 구현
1. Supabase Auth 연결
2. RLS 정책
3. Storage 의뢰 사진 버킷
4. 공방/의뢰 CRUD
5. 지도 검색
6. 견적/상태 타임라인
