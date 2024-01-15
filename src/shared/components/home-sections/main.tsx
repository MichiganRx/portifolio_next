import { mainHomeLocale } from '@/shared/data/locales/home/main';
import { useLocale } from '@/shared/hooks/use-locale';

import { NumberedInfoBar } from './main-components/numbered-info-bar';
import style from './styles/main.module.scss';

export const MainSection = () => {
  const { titleMainPt1, titleMainPt2, descriptionMain } =
    useLocale(mainHomeLocale);

  return (
    <section className={style.container}>
      <div className={style.containerVideo}>
        <video autoPlay loop muted playsInline>
          <source src={`./video-bg-main-home.mp4`} type="video/mp4" />
        </video>
      </div>
      <div className={style.text}>
        <h1>{titleMainPt1}</h1>
        <h2>{titleMainPt2}</h2>
        <p>{descriptionMain}</p>
      </div>
      <NumberedInfoBar />
    </section>
  );
};
