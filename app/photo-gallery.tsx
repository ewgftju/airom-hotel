"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { siteCopy, type SiteLocale } from "./content";

const photos = [
  { src: "/airom/hero-room.jpeg", width: 1280, height: 960 },
  { src: "/airom/room-single-main.webp", width: 1600, height: 1200 },
  { src: "/airom/bathroom.jpeg", width: 1280, height: 1280 },
  { src: "/airom/room-single-workspace.webp", width: 1600, height: 1200 },
  { src: "/airom/coffee-station.jpeg", width: 1280, height: 960 },
  { src: "/airom/room-twin-wide-new.webp", width: 1600, height: 1200 },
];

export default function PhotoGallery({ locale }: { locale: SiteLocale }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const touchStart = useRef<number | null>(null);
  const t = siteCopy[locale].gallery;
  const labels = locale === "kk"
    ? { open: "Фотоны үлкейту", close: "Жабу", previous: "Алдыңғы фото", next: "Келесі фото" }
    : { open: "Увеличить фото", close: "Закрыть", previous: "Предыдущее фото", next: "Следующее фото" };
  const isOpen = activeIndex !== null;
  const photo = photos[activeIndex ?? 0];

  useEffect(() => {
    if (!isOpen) return;
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  function move(direction: number) {
    setActiveIndex((index) => ((index ?? 0) + direction + photos.length) % photos.length);
  }

  return (
    <>
      <div className="photo-grid">
        {photos.map((item, index) => (
          <button
            className="photo-card"
            type="button"
            key={item.src}
            onClick={() => setActiveIndex(index)}
            aria-label={`${labels.open}: ${t.alts[index]}`}
            aria-haspopup="dialog"
          >
            <span className="photo-card-image">
              <Image src={item.src} alt={t.alts[index]} fill quality={85}
                sizes="(max-width: 700px) 50vw, (max-width: 1000px) 45vw, (max-width: 1480px) 30vw, 440px" />
              <span className="photo-expand" aria-hidden="true"><Expand size={19} /></span>
            </span>
            <span className="photo-caption">{t.captions[index]}</span>
          </button>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="photo-dialog"
        aria-label={t.title}
        onCancel={() => setActiveIndex(null)}
        onClose={() => setActiveIndex(null)}
        onClick={(event) => { if (event.target === event.currentTarget) setActiveIndex(null); }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
          if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
        }}
      >
        {activeIndex !== null && (
          <div className="photo-dialog-content">
            <div className="photo-toolbar">
              <span>{activeIndex + 1} / {photos.length}</span>
              <button type="button" className="photo-control" onClick={() => setActiveIndex(null)} aria-label={labels.close} autoFocus><X size={24} /></button>
            </div>
            <div className="photo-stage"
              onTouchStart={(event) => { touchStart.current = event.touches.length === 1 ? event.touches[0].clientX : null; }}
              onTouchEnd={(event) => {
                if (touchStart.current !== null) {
                  const distance = event.changedTouches[0].clientX - touchStart.current;
                  if (Math.abs(distance) > 60) move(distance < 0 ? 1 : -1);
                }
                touchStart.current = null;
              }}
              onTouchCancel={() => { touchStart.current = null; }}
            >
              <Image key={photo.src} src={photo.src} alt={t.alts[activeIndex]} width={photo.width} height={photo.height} unoptimized />
            </div>
            <div className="photo-navigation">
              <button type="button" className="photo-control" onClick={() => move(-1)} aria-label={labels.previous}><ChevronLeft size={26} /></button>
              <p aria-live="polite">{t.alts[activeIndex]}</p>
              <button type="button" className="photo-control" onClick={() => move(1)} aria-label={labels.next}><ChevronRight size={26} /></button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
