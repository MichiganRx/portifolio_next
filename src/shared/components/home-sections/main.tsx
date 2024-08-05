import Image from 'next/image';

import { mainHomeLocale } from '@/shared/data/locales/home/main';
import { useLocale } from '@/shared/hooks/use-locale';

import Typewriter from '../ui/title-animation/title-animation-component';
import Button from '../ui/button/button';

import style from './styles/main.module.scss';

export const MainSection = () => {
  const { titleMainPt1, titleMainPt2, titleMainPt3 } =
    useLocale(mainHomeLocale);

  const phrases = [titleMainPt1, titleMainPt2, titleMainPt3];
  const phraseClasses = [
    style.phraseStyle1,
    style.phraseStyle2,
    style.phraseStyle3,
  ];

  return (
    <section className={style.container}>
      <div className={style.containerVideo}>
        <video autoPlay loop muted playsInline>
          <source src="/video_bg.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={style.descriptionPersonal}>
        <Typewriter phrases={phrases} styles={phraseClasses} />
        <button>
          <Image
            src="/personal.png"
            alt="Foto da Amanda"
            width={300}
            height={450}
          />
        </button>
        <div className={style.gradient} id="sobre-mim"></div>
      </div>
    </section>
  );
};
