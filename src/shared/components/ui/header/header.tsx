/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Link from 'next/link';
import Image from 'next/image';

import { headerLocale } from '@/shared/data/locales/header';
import { useLocale } from '@/shared/hooks/use-locale';
import SelectDemo from '@/shared/components/ui/select-language/select-component';

import Button from '../button/button';

import styles from './header.module.scss';

import LogoHeader from '@/shared/assets/logo.svg';

export interface NavProps {
  id: number;
  label: string;
  link: string;
}

const Header = () => {
  const { link1, link2, link3 } = useLocale(headerLocale);

  const navBar: NavProps[] = [
    {
      id: 1,
      label: link1,
      link: '/solucoes',
    },
    {
      id: 2,
      label: link2,
      link: '/servicos',
    },
  ];

  return (
    <header className={styles.container}>
      <Image
        src={LogoHeader}
        alt="Logo da empresa"
        className={styles.logoCompany}
      />
      <nav className={styles.areaMenu}>
        <ul>
          {navBar.map(({ id, label, link }: NavProps) => (
            <li key={id}>
              <Link className={styles.link} href={link}>
                <p>{label}</p>
              </Link>
            </li>
          ))}
        </ul>
        <Button variant="primary" asChild className={styles.buttonLink}>
          <Link href="/contato">{link3}</Link>
        </Button>
        <SelectDemo />
      </nav>
    </header>
  );
};

export { Header };
