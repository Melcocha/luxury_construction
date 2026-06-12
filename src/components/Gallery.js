import React from 'react';
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

function GallerySection({ title, images }) {
  return (
    <div className="gallery-section">
      <h2 className="gallery-section-title">{title}</h2>
      <div className="gallery-grid">
        {images.map((src, i) => (
          <div className="gallery-item" key={i}>
            <img src={src} alt={`${title} project ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <section className="gallery">
      <div className="gallery-inner">
        <GallerySection title="Bathroom" images={bathroomImages} />
        <GallerySection title="Kitchen" images={kitchenImages} />
        <GallerySection title="Room" images={roomImages} />
        <GallerySection title="LivingRoom" images={livingRoomImages} />
      </div>
    </section>
  );
}

export default Gallery;
