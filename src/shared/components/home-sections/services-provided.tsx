import { useState } from 'react';

import { useLocale } from '@/shared/hooks/use-locale';
import { useLocaleSelected } from '@/shared/hooks/use-locale-selected';
import {
  DescriptionProjects,
  serviceHomeLocale,
} from '@/shared/data/locales/home/service-locale';

import styles from './styles/service.module.scss';
import Buttons from './service-components/buttons-component';
import Description from './service-components/descriptions';

export const ServicesProvided = () => {
  const { title, subtitle } = useLocale(serviceHomeLocale);
  const localeSelected = useLocaleSelected();

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleButtonClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <section className={styles.container}>
      <div className={styles.areaTitle}>
        <h2
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        />
        <h3>{subtitle}</h3>
      </div>
      <div className={styles.containerButton}>
        <Buttons
          selectedIndex={selectedIndex}
          onButtonClick={handleButtonClick}
        />
      </div>
      <div className={styles.containerDescription}>
        {DescriptionProjects.map((description, index) => (
          <Description
            isHidden={selectedIndex !== index}
            key={description['pt-br'].title}
            title={description[localeSelected].title}
            descriptions={description[localeSelected].descriptions}
            imgProject={description[localeSelected].imgProject}
          />
        ))}
      </div>
    </section>
  );
};
