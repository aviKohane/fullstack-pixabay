import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages, openCategoryModal, openDetailsModal } from "./features/imagesSlice.js";
import TopBar from "./components/TopBar.jsx";
import CategoryModal from "./components/CategoryModal.jsx";
import DetailsModal from "./components/DetailsModal.jsx";

export default function App() {
  const dispatch = useDispatch();
  const { items, page, perPage, total, category, status, showCategoryModal, showDetailsModal, selected } =
    useSelector(s => s.images);

  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const canPrev = page > 1;
  const canNext = page < totalPages;

  const onPrev = () => canPrev && dispatch(fetchImages({ category, page: page - 1, perPage }));
  const onNext = () => canNext && dispatch(fetchImages({ category, page: page + 1, perPage }));

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: 16 }}>
      <TopBar onPrev={onPrev} onNext={onNext} onPickCategory={() => dispatch(openCategoryModal())} canPrev={canPrev} canNext={canNext} />

      {status === "loading" && <p>Loading…</p>}
      {status === "failed" && <p>Failed to load.</p>}

      {status === "succeeded" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
          {items.slice(0, 9).map((it) => (
            <div key={it.id} onClick={() => dispatch(openDetailsModal(it))} style={{ cursor: "pointer", borderRadius: 8, overflow: "hidden" }}>
              <img
                src={it.webformatURL || it.previewURL}
                alt={it.tags}
                width={360} height={220}                 // réserve la place -> évite les reflows
                loading="lazy"                            // lazy load
                decoding="async"                          // décode hors thread principal
                style={{ width: "100%", height: 220, objectFit: "cover" }}
              />

            </div>
          ))}
        </div>
      )}

      <div style={{ marginTop: 12, textAlign: "center" }}>
        <small>Category: <b>{category}</b> — Page {page}/{totalPages} — Total: {total}</small>
      </div>

      {showCategoryModal && <CategoryModal />}
      {showDetailsModal && selected && <DetailsModal item={selected} />}
    </div>
  );
}
