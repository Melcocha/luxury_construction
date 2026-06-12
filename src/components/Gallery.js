import React, { useState, useEffect, useCallback } from 'react';
import { MdArrowBackIos, MdArrowForwardIos, MdClose } from 'react-icons/md';
import './Gallery.css';

const bathroomImages = [
  require('../images/bath/1-3jmRTu8u.jpg'),
  require('../images/bath/2-DdiNOdQQ.jpg'),
  require('../images/bath/3-CmZMsOQf.jpg'),
  require('../images/bath/4-DV639a8B.jpg'),
  require('../images/bath/6-BFEn964b.jpg'),
  require('../images/bath/7-CxDMUpTU.jpg'),
  require('../images/bath/33-BQ0iy8kb.jpg'),
  require('../images/bath/34-DbpWzMAw.jpg'),
  require('../images/bath/35-C7oZmcmm.jpg'),
  require('../images/bath/36-DL33an3e.jpg'),
  require('../images/bath/37-Dn9Pkbzb.jpg'),
  require('../images/bath/38-C5sQN8PR.jpg'),
];

const kitchenImages = [
  require('../images/kitchen/9-BuHPJG6X.jpg'),
  require('../images/kitchen/10-BL5t2krP.jpg'),
  require('../images/kitchen/11-zhPNYqTW.jpg'),
  require('../images/kitchen/12-BOtBgiX_.jpg'),
  require('../images/kitchen/13-BCZ7PydV.jpg'),
  require('../images/kitchen/14-CCabXLgb.jpg'),
  require('../images/kitchen/15-Cka7-PMh.jpg'),
];

const roomImages = [
  require('../images/room/17-DylWcybW.jpg'),
  require('../images/room/18-Bg33VOuU.jpg'),
  require('../images/room/19-CDhPWXkY.jpg'),
  require('../images/room/20-BzU7N_dg.jpg'),
  require('../images/room/21-CTXwb7Ys.jpg'),
  require('../images/room/22-NddgqGsw.jpg'),
  require('../images/room/23-CS-JpI3V.jpg'),
];

const livingRoomImages = [
  require('../images/living/22-NddgqGsw.jpg'),
  require('../images/living/23-CS-JpI3V.jpg'),
  require('../images/living/24-DQEobX-c.jpg'),
  require('../images/living/25-C6-8WBJr.jpg'),
  require('../images/living/26-CGp-szSJ.jpg'),
  require('../images/living/27-DJawmCUE.jpg'),
  require('../images/living/28-BrRE1MBd.jpg'),
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
      if (e.key === 'ArrowLeft')  setIndex((i) => (i - 1 + images.length) % images.length);
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
      <button className="lb-close" onClick={onClose}><MdClose size={26} /></button>
      <button className="lb-arrow lb-prev" onClick={prev}><MdArrowBackIos size={20} /></button>
      <img
        className="lb-image"
        src={images[index]}
        alt={`Preview ${index + 1}`}
        onClick={(e) => e.stopPropagation()}
      />
      <button className="lb-arrow lb-next" onClick={next}><MdArrowForwardIos size={20} /></button>
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
          <div className="gallery-item" key={i} onClick={() => onOpen(images, i)}>
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
  const openLightbox  = useCallback((images, index) => setLightbox({ images, index }), []);
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
        <Lightbox images={lightbox.images} startIndex={lightbox.index} onClose={closeLightbox} />
      )}
    </section>
  );
}

export default Gallery;
