# Supabase 연결

현재 `schema.sql`은 MVP 데이터 모델 초안입니다. 실제 프로젝트 연결 전에는 운영 DB에 실행하지 않습니다.

연결 후 순서:
1. Supabase URL / anon key를 로컬 `.env.local`에 설정
2. schema.sql 검토 및 migration 변환
3. profiles 자동 생성 trigger 추가
4. 모든 테이블 RLS 활성화 및 역할별 policy 작성
5. request-images / workshop-portfolio Storage bucket과 정책 생성
6. Realtime은 채팅과 작업 상태에 제한적으로 활성화

보안 원칙: service role key는 브라우저 환경변수에 절대 노출하지 않습니다.
