/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Image from 'next/image';
import Link from 'next/link';

import { footerLocale } from '@/shared/data/locales/footer';
import { useLocale } from '@/shared/hooks/use-locale';

import Button from '../button/button';

import styles from './footer.module.scss';

export interface NavProps {
  id: number;
  label: string;
  link: string;
}

export const Footer = () => {
  const {
    titlepart1,
    titlepart2,
    button,
    title2,
    link1,
    link2,
    link3,
    link4,
    title3,
    title4,
    end1,
    titleMap,
    copyright,
  } = useLocale(footerLocale);

  const navBar: NavProps[] = [
    {
      id: 1,
      label: link1,
      link: '/',
    },
    {
      id: 2,
      label: link2,
      link: '#solucoes',
    },
    {
      id: 3,
      label: link3,
      link: '#servicos',
    },
    {
      id: 4,
      label: link4,
      link: '/contato',
    },
  ];

  return (
    <footer>
      <div className={styles.footerTop}>
        <span>{titlepart1}</span>
        <span>{titlepart2}</span>
        <Button variant="tertiary" asChild>
          <Link href="./contato">{button}</Link>
        </Button>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.mapSite}>
          <span>{title2}</span>
          <ul>
            {navBar.map(({ id, label, link }: NavProps) => (
              <li key={id}>
                <Link href={link}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.contact}>
          <span>{title3}</span>
          <Button variant="tertiary" asChild>
            <Link href="./contato">
              <Image
                src="/img/icon-email-black.svg"
                alt="Entrat em contato por E-mail"
                width={24}
                height={16}
              />
              <p>{button}</p>
            </Link>
          </Button>
          <Button variant="tertiary" asChild>
            <Link href="./contato">
              <Image
                src="/img/icon-tel-black.svg"
                alt="Entrat em contato por Telefone"
                width={24}
                height={16}
              />
              <p>{button}</p>
            </Link>
          </Button>
        </div>
        <div className={styles.address}>
          <span>{title4}</span>
          <h4>{end1}</h4>
        </div>
        <div className={styles.mapBox}>
          <span>{titleMap}</span>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d922.019165839161!2d-45.456486339929064!3d-22.42614016135502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cb64aca264c789%3A0xff28bb5def3ccc17!2sB2ML%20Sistemas!5e0!3m2!1spt-BR!2sbr!4v1707243216422!5m2!1spt-BR!2sbr"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <span>{copyright}</span>
      </div>
    </footer>
  );
};
