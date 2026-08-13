const workshops = [
  { icon: "👜", name: "몽글가죽공방", star: "🌠 왕큰별", distance: "1.3km", service: "가죽 제작 · 수선 · 클래스" },
  { icon: "🪵", name: "나무결 목공소", star: "🌟 빛나는별", distance: "2.1km", service: "가구 제작 · 수리 · 복원" },
  { icon: "🏺", name: "달항아리 공방", star: "✨ 반짝별", distance: "2.7km", service: "도예 · 복원 · 원데이클래스" },
];

export default function Home() {
  return (
    <div className="shell">
      <header className="topbar"><div className="brand">🏠 옆집공방</div><div className="location">📍 우리 동네 ▾</div></header>
      <main className="main">
        <section className="hero">
          <h1>우리 동네에는<br />숨은 장인이 있어요 ✨</h1>
          <p>만들고 싶거나 고치고 싶은 물건을 사진으로 보여주세요.<br />가까운 공방을 찾아 연결해드릴게요.</p>
          <a className="photo-cta" style={{display:'block',textAlign:'center'}} href="/request">📸 사진으로 장인 찾기</a>
        </section>
        <nav className="quick" aria-label="빠른 메뉴"><a href="/request">🔨<br />만들어주세요</a><a href="/request">🩹<br />고쳐주세요</a><a href="#workshops">🎨<br />배우고 싶어요</a><a href="#workshops">🗺️<br />공방 찾아보기</a></nav>
        <section className="section" id="workshops">
          <div className="section-head"><div><h2>우리 동네 장인별</h2><small>가까운 공방부터 둘러보세요</small></div><small>전체보기 ›</small></div>
          <div className="cards">{workshops.map((workshop) => <article className="card" key={workshop.name}><div className="thumb">{workshop.icon}</div><div className="card-body"><span className="star-badge">{workshop.star}</span><h3>{workshop.name}</h3><div className="meta">📍 {workshop.distance}<br />{workshop.service}</div></div></article>)}</div>
        </section>
        <section className="section"><div className="section-head"><div><h2>어떻게 맡길까요?</h2><small>작업과 상황에 맞게 선택하세요</small></div></div><div className="delivery"><article><div style={{fontSize:34}}>🏠</div><strong>직접 방문</strong><div className="meta">장인과 직접 상담하고 공방에 물건을 맡겨요.</div></article><article><div style={{fontSize:34}}>🔄</div><strong>공방 왕복배달</strong><div className="meta">집에서 수거 → 공방 작업 → 수선 완료 후 다시 집으로 받아요.</div></article></div></section>
      </main>
      <nav className="bottom" aria-label="하단 메뉴"><div className="bottom-inner"><a href="/"><b>🏠</b>홈</a><a href="#workshops"><b>🔎</b>공방찾기</a><a href="/request"><b>➕</b>의뢰</a><a href="#"><b>💬</b>채팅</a><a href="#"><b>👤</b>MY</a></div></nav>
    </div>
  );
}
