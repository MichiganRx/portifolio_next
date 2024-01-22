import { useLocale } from '@/shared/hooks/use-locale';
import { useLocaleSelected } from '@/shared/hooks/use-locale-selected';
import {
  ServicesOfferedLocale,
  CardsLocale as cardsLocale,
} from '@/shared/data/locales/home/services-offered-locale';

import Cards from './sevice-offered-components/cards';
import style from './styles/service-offered.module.scss';

export const ServicesOffered = () => {
  const { title, paragraph } = useLocale(ServicesOfferedLocale);
  const localeSelected = useLocaleSelected();

  return (
    <section className={style.container}>
      <div id="servicos" className={style.ancora}></div>
      <div className={style.containerText}>
        <h2>{title}</h2>
        <p>{paragraph}</p>
      </div>
      <div className={style.containerCards}>
        <div>
          <div>
            {cardsLocale.map((item, index) => (
              <Cards
                key={index}
                imgProject={item[localeSelected].imgProject}
                title={item[localeSelected].title}
                subtitle={item[localeSelected].subtitle}
                description={item[localeSelected].description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
