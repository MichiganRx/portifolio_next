import { useLocale } from '@/shared/hooks/use-locale';
import { useLocaleSelected } from '@/shared/hooks/use-locale-selected';
import {
  quartenaryLocale,
  Acting as ActingData,
} from '@/shared/data/locales/home/quartenary-locale';

import styles from './styles/acting.module.scss';
import ModuleActing from './acting-components/module-acting';

export const QuartenarySection = () => {
  const { title, description } = useLocale(quartenaryLocale);
  const localeSelected = useLocaleSelected();
  return (
    <section className={styles.container}>
      <span>{title}</span>
      <p>{description}</p>
      <div>
        <div>
          {ActingData.map((item, index) => (
            <ModuleActing
              key={index}
              image={item[localeSelected].image}
              title={item[localeSelected].title}
              subtitle={item[localeSelected].subtitle}
              description={item[localeSelected].description}
              alt={item[localeSelected].alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
