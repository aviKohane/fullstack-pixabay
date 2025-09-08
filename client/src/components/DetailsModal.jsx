import { useDispatch } from "react-redux";
import { closeDetailsModal } from "../features/imagesSlice.js";

export default function DetailsModal({ item }) {
  const dispatch = useDispatch();
  return (
    <div style={overlay}>
      <div style={modal}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h3>Image #{item.id}</h3>
          <button onClick={() => dispatch(closeDetailsModal())}>×</button>
        </div>
        <img src={item.largeImageURL || item.webformatURL} alt={item.tags} style={{ width: "100%", borderRadius: 8, marginBottom: 12 }} />
        <ul style={{ lineHeight: 1.8 }}>
          <li><b>Views:</b> {item.views}</li>
          <li><b>Downloads:</b> {item.downloads}</li>
          <li><b>Collections:</b> {item.collections}</li>
          <li><b>Likes:</b> {item.likes}</li>
          <li><b>Tags:</b> {item.tags}</li>
          <li><b>User:</b> {item.user}</li>
        </ul>
      </div>
    </div>
  );
}

const overlay = { position: "fixed", inset: 0, background: "rgba(0,0,0,.35)", display: "grid", placeItems: "center" };
const modal = { width: 720, maxWidth: "92vw", background: "#fff", borderRadius: 10, padding: 16, boxShadow: "0 10px 30px rgba(0,0,0,.2)" };
