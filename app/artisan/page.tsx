const jobs = [
  ["👜", "가죽가방 손잡이 수선", "검수 대기", "왕복배달"],
  ["👛", "맞춤 카드지갑", "작업 중", "직접 방문"],
  ["💼", "서류가방 염색 복원", "완료 대기", "왕복배달"],
];
export default function ArtisanPage(){return <div className="shell"><header className="topbar"><a className="brand" href="/">🏠 옆집공방</a><div className="location">장인센터</div></header><main className="main"><section className="hero"><span className="star-badge">🌠 왕큰별</span><h1>안녕하세요,<br/>몽글가죽공방님</h1><p>오늘 들어온 의뢰와 작업 일정을 확인하세요.</p></section><section className="section"><div className="quick"><a href="#">📨<br/>새 의뢰 4</a><a href="#">💬<br/>답변 필요 2</a><a href="#">🔨<br/>작업 중 6</a><a href="#">🚚<br/>오늘 출고 3</a></div></section><section className="section"><h2>오늘의 작업</h2><div className="cards">{jobs.map(j=><article className="card" key={j[1]}><div className="thumb">{j[0]}</div><div className="card-body"><span className="star-badge">{j[2]}</span><h3>{j[1]}</h3><div className="meta">{j[3]}</div></div></article>)}</div></section></main></div>}
