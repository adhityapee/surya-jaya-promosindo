import { useEffect, useRef, useState } from "react";
import { X } from "@phosphor-icons/react/X";
import { CaretLeft } from "@phosphor-icons/react/CaretLeft";
import { CaretRight } from "@phosphor-icons/react/CaretRight";
import "./photo-gallery.css";

function PhotoViewer({ photos, initialIndex, onClose }) {
  const [index, setIndex] = useState(initialIndex);
  const dialog = useRef(null);
  const photo = photos[index];
  const move = (step) => setIndex((current) => (current + step + photos.length) % photos.length);
  useEffect(() => {
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (!element.open) element.showModal();
    return () => { document.body.style.overflow = previousOverflow; };
  }, []);
  return <dialog className="gallery-viewer" ref={dialog} aria-label="Foto hasil custom pelanggan" onClose={onClose}
    onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
    onKeyDown={(event) => {
      if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
      if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
    }}>
    <div className="gallery-viewer__toolbar"><span aria-live="polite">{index + 1} / {photos.length}</span><button type="button" autoFocus onClick={onClose} aria-label="Tutup foto"><X size={24} /></button></div>
    <div className="gallery-viewer__stage">
      <button className="gallery-viewer__previous" type="button" onClick={() => move(-1)} aria-label="Foto sebelumnya"><CaretLeft size={28} /></button>
      <img key={photo.id} src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} />
      <button className="gallery-viewer__next" type="button" onClick={() => move(1)} aria-label="Foto berikutnya"><CaretRight size={28} /></button>
    </div>
  </dialog>;
}

export default function PhotoGallery({ photos, preview = false, pageSize = 24 }) {
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const [selected, setSelected] = useState(null);
  const trigger = useRef(null);
  const visible = photos.slice(0, preview ? 6 : visibleCount);
  const close = () => { setSelected(null); trigger.current?.focus({ preventScroll: true }); };
  return <>
    <div className={`photo-gallery${visible.length <= 4 ? " photo-gallery--small" : ""}${preview ? " photo-gallery--preview" : ""}`}>
      {visible.map((photo, index) => <button className="photo-gallery__photo" type="button" key={photo.id}
        aria-label={`Lihat foto: ${photo.alt}`} onClick={(event) => { trigger.current = event.currentTarget; setSelected(index); }}>
        <img src={photo.thumbnail} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" decoding="async" />
      </button>)}
    </div>
    {!preview && visibleCount < photos.length && <div className="gallery-load-more"><button type="button" onClick={() => setVisibleCount((current) => current + pageSize)}>Muat lebih banyak</button></div>}
    <span className="visually-hidden" role="status">{visible.length} dari {photos.length} foto ditampilkan</span>
    {selected !== null && <PhotoViewer photos={photos} initialIndex={selected} onClose={close} />}
  </>;
}
