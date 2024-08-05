import { useCallback, useEffect, useState, useRef } from 'react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import { flushSync } from 'react-dom';
import Image from 'next/image';

import { useLocaleSelected } from '@/shared/hooks/use-locale-selected';
import { certificateDescription } from '@/shared/data/locales/home/certifications-locale';

import { DotButton } from '../../ui/carousel/bullet-points';

import Depositions from './box-depositions-components/depositions';
import style from './embla.module.scss';

const TWEEN_FACTOR = 1;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

interface EmblaCarouselProps {
  slides: number[];
  options?: EmblaOptionsType;
}

const EmblaCarousel = ({ slides, options }: EmblaCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [tweenValues, setTweenValues] = useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const localeSelected = useLocaleSelected();
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
      setSelectedIndex(index);
    },
    [emblaApi]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const newIndex = emblaApi.selectedScrollSnap();
    setSelectedIndex(newIndex);

    const scrollProgress = emblaApi.scrollProgress();
    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      const diffToTarget = scrollSnap - scrollProgress;
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
      return numberWithinRange(tweenValue, 0, 1);
    });

    setTweenValues(styles);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll();
    emblaApi.on('scroll', () => flushSync(onScroll));
    emblaApi.on('reInit', onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className={style.container}>
      <div className={style.embla}>
        <div ref={emblaRef}>
          <div className={style.emblaContainer}>
            {slides.map((index) => (
              <div className={style.emblaSlide} key={index}>
                <Depositions
                  {...certificateDescription[index]?.[localeSelected]}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={style.emblaButtons}>
        <button
          onClick={scrollPrev}
          ref={prevButtonRef}
          className={style.buttonPrev}
        >
          <Image src="/next.png" alt="fewf" width={50} height={50} />
        </button>
        <div>
          {slides.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => scrollTo(index)}
              className={`${style.emblaDot} ${
                index === selectedIndex ? style.emblaDotSelected : ''
              }`}
            />
          ))}
        </div>
        <button
          onClick={scrollNext}
          ref={nextButtonRef}
          className={style.buttonNext}
        >
          <Image src="/next.png" alt="fuiweh" width={50} height={50} />
        </button>
      </div>
    </div>
  );
};

export default EmblaCarousel;
