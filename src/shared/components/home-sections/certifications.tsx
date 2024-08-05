import { useLocale } from '@/shared/hooks/use-locale';
import { CertificationsLocale } from '@/shared/data/locales/home/certifications-locale';

import style from './styles/certifications.module.scss';
import { CarrouselComponentDeclaration } from './certifications-components/carrousel';

export const Certifications = () => {
  const { title } = useLocale(CertificationsLocale);

  return (
    <section className={style.container}>
      <h2>{title}</h2>
      <CarrouselComponentDeclaration />
    </section>
  );
};
