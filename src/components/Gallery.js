import React, { useState, useEffect, useCallback } from 'react';
import { MdArrowBackIos, MdArrowForwardIos, MdClose } from 'react-icons/md';
import './Gallery.css';

const bathroomImages = [
  'https://picsum.photos/seed/gb1/400/300',
  'https://picsum.photos/seed/gb2/400/300',
  'https://picsum.photos/seed/gb3/400/300',
  'https://picsum.photos/seed/gb4/400/300',
  'https://picsum.photos/seed/gb5/400/300',
  'https://picsum.photos/seed/gb6/400/300',
  'https://picsum.photos/seed/gb7/400/300',
  'https://picsum.photos/seed/gb8/400/300',
  'https://picsum.photos/seed/gb9/400/300',
  'https://picsum.photos/seed/gb10/400/300',
  'https://picsum.photos/seed/gb11/400/300',
  'https://picsum.photos/seed/gb12/400/300',
];

const kitchenImages = [
  'https://picsum.photos/seed/gk1/400/300',
  'https://picsum.photos/seed/gk2/400/300',
  'https://picsum.photos/seed/gk3/400/300',
  'https://picsum.photos/seed/gk4/400/300',
  'https://picsum.photos/seed/gk5/400/300',
  'https://picsum.photos/seed/gk6/400/300',
  'https://picsum.photos/seed/gk7/400/300',
];

const roomImages = [
  'https://picsum.photos/seed/gr1/400/300',
  'https://picsum.photos/seed/gr2/400/300',
  'https://picsum.photos/seed/gr3/400/300',
  'https://picsum.photos/seed/gr4/400/300',
  'https://picsum.photos/seed/gr5/400/300',
  'https://picsum.photos/seed/gr6/400/300',
  'https://picsum.photos/seed/gr7/400/300',
];

const livingRoomImages = [
  'https://picsum.photos/seed/gl1/400/300',
  'https://picsum.photos/seed/gl2/400/300',
  'https://picsum.photos/seed/gl3/400/300',
  'https://picsum.photos/seed/gl4/400/300',
  'https://picsum.photos/seed/gl5/400/300',
  'https://picsum.photos/seed/gl6/400/300',
  'https://picsum.photos/seed/gl7/400/300',
];

function Lightbox({ images, startIndex, onClose }) {
  const [index, setIndex] = useState(startIndex);

  const prev = useCallback(
    (e) => { e.stopPropagation(); setIndex((i) => (i - 1 + images.length) % images.length); },
    [images.length]
  );
  const next = useCallback(
    (e) => { e.stopPropagation(); setIndex((i) => (i + 1) % images.length); },
    [images.length]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % images.length);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [images.length, onClose]);

  return (
    <div className="lb-overlay" onClick={onClose}>
      <button className="lb-close" onClick={onClose}>
        <MdClose size={26} />
      </button>

      <button className="lb-arrow lb-prev" onClick={prev}>
        <MdArrowBackIos size={22} />
      </button>

      <img
        className="lb-image"
        src={images[index]}
        alt={`Preview ${index + 1}`}
        onClick={(e) => e.stopPropagation()}
      />

      <button className="lb-arrow lb-next" onClick={next}>
        <MdArrowForwardIos size={22} />
      </button>

      <div className="lb-counter" onClick={(e) => e.stopPropagation()}>
        {index + 1} / {images.length}
      </div>
    </div>
  );
}

function GallerySection({ title, images, onOpen }) {
  return (
    <div className="gallery-section">
      <h2 className="gallery-section-title">{title}</h2>
      <div className="gallery-grid">
        {images.map((src, i) => (
          <div
            className="gallery-item"
            key={i}
            onClick={() => onOpen(images, i)}
          >
            <img src={src} alt={`${title} project ${i + 1}`} loading="lazy" />
            <div className="gallery-item-overlay">
              <span className="gallery-zoom-icon">🔍</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = useCallback((images, index) => {
    setLightbox({ images, index });
  }, []);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  return (
    <section className="gallery">
      <div className="gallery-inner">
        <GallerySection title="Bathroom"   images={bathroomImages}   onOpen={openLightbox} />
        <GallerySection title="Kitchen"    images={kitchenImages}    onOpen={openLightbox} />
        <GallerySection title="Room"       images={roomImages}       onOpen={openLightbox} />
        <GallerySection title="LivingRoom" images={livingRoomImages} onOpen={openLightbox} />
      </div>

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          startIndex={lightbox.index}
          onClose={closeLightbox}
        />
      )}
    </section>
  );
}

export default Gallery;
