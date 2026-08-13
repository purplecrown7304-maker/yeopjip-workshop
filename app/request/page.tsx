export default function RequestPage() {
  return (
    <div className="shell">
      <header className="topbar"><a className="brand" href="/">← 옆집공방</a><div className="location">의뢰하기</div></header>
      <main className="main" style={{maxWidth:720}}>
        <section className="section">
          <h1 style={{fontSize:32,letterSpacing:-1.5}}>무엇을 도와드릴까요?</h1>
          <p className="meta">사진과 간단한 설명을 남기면 가까운 장인이 제안할 수 있어요.</p>
          <div className="card" style={{padding:20,marginTop:20}}>
            <label><strong>작업 종류</strong></label>
            <select style={{width:'100%',padding:14,margin:'8px 0 18px',border:'1px solid var(--line)',borderRadius:14}}><option>고쳐주세요</option><option>만들어주세요</option><option>복원해주세요</option><option>리폼해주세요</option></select>
            <label><strong>사진</strong></label>
            <div style={{padding:28,textAlign:'center',border:'1px dashed #cfc5bb',borderRadius:16,margin:'8px 0 18px'}}>📸 사진 추가</div>
            <label><strong>설명</strong></label>
            <textarea placeholder="예: 가죽가방 손잡이가 끊어졌어요." style={{width:'100%',minHeight:120,padding:14,margin:'8px 0 18px',border:'1px solid var(--line)',borderRadius:14}} />
            <label><strong>맡기는 방법</strong></label>
            <div className="delivery" style={{margin:'8px 0 18px'}}><article>🏠 <strong>직접 방문</strong></article><article>🔄 <strong>공방 왕복배달</strong></article></div>
            <button className="photo-cta">주변 장인에게 의뢰하기</button>
          </div>
        </section>
      </main>
    </div>
  );
}
