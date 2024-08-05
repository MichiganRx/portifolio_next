import { useLocale } from '@/shared/hooks/use-locale';
import { certificateTitle } from '@/shared/data/locales/home/certifications-locale';

import style from './style.module.scss';

interface DepositionsProps {
  title: string;
  institution: string;
  duration: string;
  year: string;
  level: string;
  link: string;
}

const Depositions = ({
  title,
  institution,
  duration,
  year,
  level,
  link,
}: DepositionsProps) => {
  const { institutionTitle, durationTitle, yearTitle, button } =
    useLocale(certificateTitle);

  return (
    <div className={style.container}>
      <div className={style.boxTitle}>
        <h3>{title}</h3>
        <span>{level}</span>
      </div>
      <div className={style.boxInformation}>
        <div>
          <strong>{institutionTitle}:</strong>
          <span>{institution}</span>
        </div>
        <div>
          <strong>{durationTitle}:</strong>
          <span>{duration}</span>
        </div>
        <div>
          <strong>{yearTitle}:</strong>
          <span>{year}</span>
        </div>
        <a href={link}>{button}</a>
      </div>
    </div>
  );
};

export default Depositions;
