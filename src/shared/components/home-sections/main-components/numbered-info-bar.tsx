import { mainHomeLocale } from '@/shared/data/locales/home/main';
import { useLocale } from '@/shared/hooks/use-locale';

import style from './style.module.scss';
import AnimatedNumber from './component-numbered';

export const NumberedInfoBar = () => {
  const {
    NumberedInfoBar1,
    NumberedInfoBar2,
    NumberedInfoBar3,
    NumberedInfoBar4,
  } = useLocale(mainHomeLocale);
  return (
    <div className={style.container}>
      <AnimatedNumber initialValue={0} speed={18} nome={NumberedInfoBar1} />
      <AnimatedNumber
        initialValue={0}
        speed={100}
        mais={true}
        nome={NumberedInfoBar2}
      />
      <AnimatedNumber
        initialValue={0}
        speed={250}
        mais={true}
        nome={NumberedInfoBar3}
      />
      <AnimatedNumber
        initialValue={0}
        speed={400}
        mais={true}
        nome={NumberedInfoBar4}
      />
    </div>
  );
};
