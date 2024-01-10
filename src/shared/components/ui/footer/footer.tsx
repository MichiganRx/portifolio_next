import Image from 'next/image';
import Link from 'next/link';

import { footerLocale } from '@/shared/data/locales/footer';
import { useLocale } from '@/shared/hooks/use-locale';
import { publicEnvs } from '@/shared/helpers/public-envs';

import Button from '../button/button';

import Styles from './footer.module.css';

interface FooterProps {
  title: string;
}

export const Footer = ({ title }: FooterProps) => {
  const {
    subtitle,
    titlepart2,
    button,
    title2,
    link1,
    link2,
    link3,
    link4,
    link5,
    link6,
    title3,
    title4,
    button2,
    button3,
    title5,
    end1,
    end2,
    end3,
    end4,
    copyright,
  } = useLocale(footerLocale);
  return (
    <footer className={Styles.container}>
      <div>
        <Image
          src={`${publicEnvs.NEXT_PUBLIC_ASSETS_URL}/img/bluer-blue-entire.png`}
          alt=""
          width={750}
          height={700}
          className={Styles.left}
        />
        <Image
          width={750}
          height={700}
          src={`${publicEnvs.NEXT_PUBLIC_ASSETS_URL}/img/bluer-blue-entire.png`}
          alt=""
          className={Styles.right}
        />
        <div className={Styles.services}>
          <div className={Styles.container_text}>
            <span className={StylesTitle.subtitle}>{subtitle}</span>
            <span className={Styles.invitation}>{title}</span>
            <span className={Styles.invitation}>{titlepart2}</span>
            <Button variant="tertiary" asChild className={Styles.button_invict}>
              <Link href="mailto:comercial@b2ml.com.br">
                <Image
                  width={22}
                  height={16}
                  src="/img/svg/home/img-services/icon-button-sevices.svg"
                  alt="Entrar em Contato"
                />
                {button}
              </Link>
            </Button>
          </div>
          <Image
            src="/img/svg/home/img-services/logo-services.svg"
            alt="B2ML Sistemas"
            width={358}
            height={330}
            className={Styles.img_logo}
          />
        </div>
      </div>

      <div className={Styles.backgound_info}>
        <div className={Styles.info_b2}>
          <div className={Styles.container_title}>
            <h1 className={Styles.title}>{title2}</h1>
            <Link href="/">{link1}</Link>
            <Link href="/quem-somos">{link2}</Link>
            <Link href="/servicos">{link3}</Link>
            <Link href="/clientes">{link4}</Link>
            <Link href="/contato">{link5}</Link>
            <a
              href="https://reachr.com.br/b2ml/#/"
              target="_blank"
              rel="noreferrer"
            >
              {link6}
            </a>
          </div>
          <div className={Styles.container_flex_wrap}>
            <div className={Styles.container_title}>
              <h1 className={Styles.title}>{title3}</h1>
              <div className={Styles.icons}>
                <Link
                  href="https://www.linkedin.com/company/b2ml-sistemas/mycompany/"
                  target="_blank"
                >
                  <Image
                    width={32}
                    height={32}
                    src="/img/svg/home/icon-linkedin.svg"
                    alt="Linkedin"
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/b2mlsistemas/"
                  target="_blank"
                >
                  <Image
                    width={32}
                    height={32}
                    src="/img/svg/home/icon-instagram.svg"
                    alt="Instagram"
                  />
                </Link>
                <Link
                  href="https://www.facebook.com/b2mlsistemas"
                  target="_blank"
                >
                  <Image
                    width={32}
                    height={32}
                    src="/img/svg/home/icon-facebook.svg"
                    alt="Facebook"
                  />
                </Link>
              </div>
            </div>
            <div className={Styles.container_title}>
              <h1 className={Styles.title}>{title4}</h1>
              <Button variant="primary" asChild>
                <Link href="mailto:comercial@b2ml.com.br" target="_blank">
                  <Image
                    src="/img/svg/home/img-services/icon-button-sevices.svg"
                    alt="Entrar em Contato"
                    width={22}
                    height={16}
                    className={Styles.icon_btn}
                  />
                  {button2}
                </Link>
              </Button>
              <Button variant="tertiary" className={Styles.button} asChild>
                <Link href="https://wa.me/553584311599" target="_blank">
                  <Image
                    width={22}
                    height={22}
                    src="/img/svg/home/img-services/icon-button-msg.svg"
                    alt="Enviar Mensagem"
                    className={Styles.icon_btn}
                  />
                  {button3}
                </Link>
              </Button>
            </div>
          </div>
          <div className={Styles.container_address}>
            <h1 className={Styles.title}>{title5}</h1>
            <span>{end1}</span>
            <span>{end2}</span>
            <span>{end3}</span>
            <span>{end4}</span>
          </div>
        </div>
      </div>

      <div className={Styles.copyright}>
        <span>{copyright}</span>
      </div>
    </footer>
  );
};
