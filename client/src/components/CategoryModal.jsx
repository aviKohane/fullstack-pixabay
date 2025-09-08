import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { closeCategoryModal } from "../features/imagesSlice.js";
import { fetchImages } from "../features/imagesSlice.js";

const PRESETS = ["sports", "work", "animals", "nature", "cars", "technology", "food", "travel", "music"];

export default function CategoryModal() {
  const dispatch = useDispatch();
  const { perPage } = useSelector(s => s.images);
  const [value, setValue] = useState("sports");

  const onApply = async () => {
    await dispatch(fetchImages({ category: value, page: 1, perPage }));
    dispatch(closeCategoryModal());
  };

  return (
    <div style={overlay}>
      <div style={modal}>
        <h3>Select a category</h3>
        <input value={value} onChange={(e) => setValue(e.target.value)} style={{ width: "100%", marginBottom: 8 }} />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
          {PRESETS.map(p => <button key={p} onClick={() => setValue(p)}>{p}</button>)}
        </div>
        <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
          <button onClick={() => dispatch(closeCategoryModal())}>cancel</button>
          <button onClick={onApply}>apply</button>
        </div>
      </div>
    </div>
  );
}

const overlay = { position: "fixed", inset: 0, background: "rgba(0,0,0,.35)", display: "grid", placeItems: "center" };
const modal = { width: 420, background: "#fff", borderRadius: 10, padding: 16, boxShadow: "0 10px 30px rgba(0,0,0,.2)" };
