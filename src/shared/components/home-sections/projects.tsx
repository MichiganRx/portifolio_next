import { useState } from 'react';

import { useLocale } from '@/shared/hooks/use-locale';
import { useLocaleSelected } from '@/shared/hooks/use-locale-selected';
import {
  DescriptionProjects,
  serviceHomeLocale,
} from '@/shared/data/locales/home/service-locale';

import styles from './styles/project.module.scss';
import Buttons from './projects-components/buttons-component';
import Description from './projects-components/descriptions';

export const Projects = () => {
  const { title, subtitle } = useLocale(serviceHomeLocale);
  const localeSelected = useLocaleSelected();

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleButtonClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <section className={styles.container}>
      <div>
        <div className={styles.areaTitle}>
          <h2>{title}</h2>
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
              linkButton={description[localeSelected].linkButton}
              isButtonVisible={description[localeSelected].isButtonVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
