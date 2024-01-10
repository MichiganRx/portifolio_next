import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { publicEnvs } from '@/shared/helpers/public-envs';

import styles from './style.module.scss';

const locales = [
  {
    value: 'pt-br',
    icon: `${publicEnvs.NEXT_PUBLIC_ASSETS_URL}/img/pt.png`,
    label: 'Português Brasileiro',
  },
  {
    value: 'en-us',
    icon: `${publicEnvs.NEXT_PUBLIC_ASSETS_URL}/img/us.png`,
    label: 'Inglês',
  },
];

const SelectItem = forwardRef<
  ElementRef<typeof Select.Item>,
  ComponentPropsWithoutRef<typeof Select.Item>
>(({ children, ...props }, forwardedRef) => {
  return (
    <Select.Item className={styles.selectItem} {...props} ref={forwardedRef}>
      <Select.ItemText>{children}</Select.ItemText>
    </Select.Item>
  );
});

const SelectDemo = () => {
  const { locale, asPath, push } = useRouter();

  const handleChangeLocale = (value: string) => {
    push(asPath, {}, { locale: value });
  };

  return (
    <Select.Root defaultValue={locale} onValueChange={handleChangeLocale}>
      <Select.Trigger className={styles.selectTrigger} aria-label="option">
        <Select.Value />
        <Select.Icon className={styles.selectIcon}>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Content position="popper" className={styles.selectContent}>
        <Select.Separator className={styles.selectSeparator} />
        <Select.Viewport>
          <div className={styles.areaImg}>
            {locales.map(({ value, label, icon }) => (
              <SelectItem key={value} value={value} hidden={value === locale}>
                <Image
                  src={icon}
                  alt={label}
                  width={25}
                  height={20}
                  className={styles.image}
                />
              </SelectItem>
            ))}
          </div>
        </Select.Viewport>
      </Select.Content>
    </Select.Root>
  );
};

export default SelectDemo;
