'use client';

import * as React from 'react';
import Image from 'next/image';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

interface CommonSliderProps {
  images: string[];
  height?: number; // fixed height, width is always responsive
  alt?: string;
  interval?: number;
  backgroundColor?: string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string; // Controls which part of the image is visible when cropped
}

export default function CommonSlider({
  images,
  height = 400,
  alt = 'Bathroom fitting image',
  interval = 3000,
  backgroundColor = 'bg-white',
  objectFit = 'cover', // Changed default from contain to cover
  objectPosition = 'center', // Default to center positioning
}: CommonSliderProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  const goToIndex = (index: number) => setCurrentIndex(index);

  const objectFitClass = {
    contain: 'object-contain',
    cover: 'object-cover',
    fill: 'object-fill',
    none: 'object-none',
    'scale-down': 'object-scale-down',
  }[objectFit];

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div
        className={`relative w-full overflow-hidden rounded-xl shadow-xl ${backgroundColor}`}
        style={{ height: `${height}px` }}
      >
        <Image
          src={images[currentIndex]}
          alt={alt}
          fill
          className={`${objectFitClass} transition-transform duration-500`}
          style={{ objectPosition }}
          priority
        />
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goToIndex(i)}
            className={`h-2 w-2 rounded-full transition-colors ${
              i === currentIndex ? 'bg-black' : 'bg-gray-400'
            }`}
          >
            <VisuallyHidden>Go to slide {i + 1}</VisuallyHidden>
          </button>
        ))}
      </div>
    </div>
  );
}