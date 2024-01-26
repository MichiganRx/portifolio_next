import {
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
} from 'react';
import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { ChangeHandler } from 'react-hook-form';

import { contactLocale } from '@/shared/data/locales/contact/contact';
import { useLocale } from '@/shared/hooks/use-locale';

import styles from './style.module.scss';

const SelectItem = forwardRef<
  ElementRef<typeof Select.Item>,
  ComponentPropsWithoutRef<typeof Select.Item>
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item className={styles.selectItem} {...props} ref={forwardedRef}>
      <Select.ItemText>{children}</Select.ItemText>
    </Select.Item>
  );
});

interface SelectProps extends ComponentProps<typeof Select.Root> {
  error?: string | undefined;
  width?: string;
  height?: string;
  name: string;
  id: string;
  onChange: ChangeHandler;
}

const SelectDemo = forwardRef<HTMLButtonElement, SelectProps>(
  ({ onChange, ...rest }: SelectProps, ref) => {
    const { placeholderSelect, optionSelect1, optionSelect2, optionSelect3 } =
      useLocale(contactLocale);

    return (
      <Select.Root
        {...rest}
        onValueChange={(value) =>
          onChange({ target: { name: rest.name, value } })
        }
      >
        <Select.Trigger
          className={styles.selectTrigger}
          aria-label="option"
          ref={ref}
        >
          <Select.Value placeholder={placeholderSelect} />
          <Select.Icon className={styles.selectIcon}>
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>
        <Select.Content position="popper" className={styles.selectContent}>
          <Select.Viewport>
            <SelectItem value="ORCAMENTO">{optionSelect1}</SelectItem>
            <SelectItem value="DUVIDAS">{optionSelect2}</SelectItem>
            <SelectItem value="OUTROS">{optionSelect3}</SelectItem>
          </Select.Viewport>
          <Select.ScrollDownButton>
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Root>
    );
  }
);

export default SelectDemo;
