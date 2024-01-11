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
    end2,
    end3,
    end4,
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
      link: '/',
    },
    {
      id: 3,
      label: link3,
      link: '/',
    },
    {
      id: 4,
      label: link4,
      link: '/',
    },
  ];

  return (
    <footer>
      <div className={styles.footerTop}>
        <span>{titlepart1}</span>
        <span>{titlepart2}</span>
        <Button variant="tertiary" asChild>
          <Link href="./">{button}</Link>
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
            <Link href="./">
              <Image
                src="/icon-email-black.svg"
                alt="Entrat em contato por E-mail"
                width={24}
                height={16}
              />
              <p>{button}</p>
            </Link>
          </Button>
          <Button variant="tertiary" asChild>
            <Link href="./">
              <Image
                src="/icon-tel-black.svg"
                alt="Entrat em contato por E-mail"
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
          <h4>{end2}</h4>
          <h4>{end3}</h4>
          <h4>{end4}</h4>
        </div>
      </div>
      <div className={styles.copyright}>
        <span>{copyright}</span>
      </div>
    </footer>
  );
};
