import Image from 'next/image';

import { useLocale } from '@/shared/hooks/use-locale';
import { aboutMeLocale } from '@/shared/data/locales/home/about-me-locale';

import LinkButton from '../ui/link/link';

import styles from './styles/about-me.module.scss';

export const AboutMe = () => {
  const { title, description, education } = useLocale(aboutMeLocale);

  return (
    <section className={styles.container}>
      <div>
        <Image src="/gif.gif" alt="git da Amanda" width={350} height={300} />
        <div>
          <h2>{title}</h2>
          <span
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
          <span>{education}</span>
          <div>
            <LinkButton
              img="/github.svg"
              link="https://github.com/MichiganRx"
              alt="GitHub Link"
            />
            <LinkButton
              img="/linkedin.svg"
              link="https://www.linkedin.com/in/riroamanda/"
              alt="Linkedin Link"
            />
            <LinkButton
              img="/envelope.svg"
              link="mailto:amandariro.contato@gmail.com"
              alt="E-mail Link"
            />
            <LinkButton
              img="/whatsapp.svg"
              link="https://wa.me/5535999346259"
              alt="WhatsApp Link"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
