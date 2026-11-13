'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function AboutSlider({ images }) {
  const n = images.length;
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef(null);
  const go = useCallback((d) => setI((v) => (v + d + n) % n), [n]);

  useEffect(() => {
    if (paused || n < 2) return;
    const t = setInterval(() => go(1), 4000);
    return () => clearInterval(t);
  }, [paused, go, n]);

  if (!n) return null;
  return (
    <div
      className="slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
      }}
      role="region"
      aria-label="xSchool gallery"
    >
      <div className="slider-track" style={{ '--i': i }}>
        {images.map((src, idx) => (
          <button key={idx} className="slide" onClick={() => setI(idx)} aria-label={`Slide ${idx + 1}`}>
            <Image src={src} alt="" fill sizes="(max-width:768px) 50vw, 60vw" className="cover" draggable={false} />
          </button>
        ))}
      </div>
    </div>
  );
}
