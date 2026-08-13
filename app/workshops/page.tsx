const categories = ["전체","🪵 목공","👜 가죽","💍 금속","🏺 도예","🧵 봉제","🖨️ 3D제작"];
const items = [
  ["👜","몽글가죽공방","🌠 왕큰별","1.3km","가죽 제작 · 수선 · 클래스"],
  ["🪵","나무결 목공소","🌟 빛나는별","2.1km","가구 제작 · 수리 · 복원"],
  ["🏺","달항아리 공방","✨ 반짝별","2.7km","도예 · 복원 · 클래스"],
  ["💍","작은별 금속공방","💫 큰별","3.0km","주얼리 제작 · 수선"],
];
export default function WorkshopsPage(){return <div className="shell"><header className="topbar"><a className="brand" href="/">← 옆집공방</a><div className="location">📍 우리 동네</div></header><main className="main"><section className="section"><h1 style={{fontSize:32,letterSpacing:-1.5}}>내 주변 공방</h1><div style={{display:'flex',gap:8,overflowX:'auto',padding:'8px 0 18px'}}>{categories.map(c=><span className="star-badge" key={c} style={{whiteSpace:'nowrap'}}>{c}</span>)}</div><div style={{height:220,borderRadius:24,background:'#eee7de',display:'grid',placeItems:'center',marginBottom:20}}>🗺️ 지도 연결 예정<br/><span className="meta">주변 장인별이 지도에 표시됩니다</span></div><div className="cards">{items.map(i=><a className="card" href="/workshop" key={i[1]}><div className="thumb">{i[0]}</div><div className="card-body"><span className="star-badge">{i[2]}</span><h3>{i[1]}</h3><div className="meta">📍 {i[3]}<br/>{i[4]}</div></div></a>)}</div></section></main></div>}
