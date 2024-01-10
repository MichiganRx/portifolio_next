import Image from 'next/image';
import Link from 'next/link';

import { homeLocale } from '@/shared/data/locales/home';
import { useLocale } from '@/shared/hooks/use-locale';

import stylesGlobal from '../global.module.css';
import Button from '../ui/button/button';

import styles from './styles/main.module.css';

export const MainSection = () => {
  const { titleMain, descriptionMain, subtitleMain, buttonMain } =
    useLocale(homeLocale);

  return (
    <section className={styles.container}>
      <div className={styles.div_background_image}>
        <div className={`${styles.blur_blue} ${styles.blur_blue_left}`} />
        <div className={`${styles.blur_blue} ${styles.blur_blue_right}`} />
        <div className={styles.absolute}>
          <div className={styles.background_image} />
        </div>
        <div className={styles.gradient_overlay} />
        <div className={styles.custom_div_main_left}>
          <span className={stylesGlobal.subtitle}>{subtitleMain}</span>
          <h1
            className={stylesGlobal.title}
            dangerouslySetInnerHTML={{
              __html: titleMain,
            }}
          />
          <p className={stylesGlobal.description}>{descriptionMain}</p>
          <Button variant="tertiary" asChild>
            <Link href="/servicos">{buttonMain}</Link>
          </Button>
        </div>
        <div className={styles.custom_div_main_right}>
          <Image
            width={348}
            height={224}
            src="/img/svg/home/group.svg"
            alt="Logo da B2ML Sistemas: duas sementes, uma branca e um preta, representando a identidade da empresa."
            className={styles.logo}
          />
          <div className={styles.container_social_networks}>
            <div className={styles.social_network_line} />
            <Link
              href="https://www.linkedin.com/company/b2ml-sistemas/mycompany"
              target="_blank"
            >
              <Image
                width={32}
                height={32}
                src="/img/svg/home/icon-linkedin.svg"
                alt="Linkedin"
                className={`${styles.social_network_icon} ${styles.margin_top_bottom_25px}`}
              />
            </Link>
            <Link href="https://www.instagram.com/b2mlsistemas" target="_blank">
              <Image
                width={32}
                height={32}
                src="/img/svg/home/icon-instagram.svg"
                alt="Instagram"
                className={styles.social_network_icon}
              />
            </Link>
            <Link href="https://www.facebook.com/b2mlsistemas/" target="_blank">
              <Image
                width={32}
                height={32}
                src="/img/svg/home/icon-facebook.svg"
                alt="Facebook"
                className={`${styles.social_network_icon} ${styles.margin_top_bottom_25px}`}
              />
            </Link>
            <div className={styles.social_network_line} />
          </div>
        </div>
      </div>
    </section>
  );
};
