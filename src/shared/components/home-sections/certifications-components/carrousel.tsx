import { EmblaOptionsType } from 'embla-carousel-react';

import EmblaCarousel from './embla-carousel';

export const CarrouselComponentDeclaration = () => {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return <EmblaCarousel slides={SLIDES} options={OPTIONS} />;
};
