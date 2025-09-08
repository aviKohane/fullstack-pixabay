export default function TopBar({ onPrev, onNext, onPickCategory, canPrev, canNext }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", alignItems: "center", marginBottom: 16 }}>
      <div style={{ justifySelf: "start" }}>
        <button onClick={onPrev} disabled={!canPrev}>prev</button>
      </div>
      <div style={{ justifySelf: "center" }}>
        <button onClick={onPickCategory}>pick category</button>
      </div>
      <div style={{ justifySelf: "end" }}>
        <button onClick={onNext} disabled={!canNext}>next</button>
      </div>
    </div>
  );
}
