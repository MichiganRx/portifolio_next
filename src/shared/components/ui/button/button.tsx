import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/shared/helpers/shadcn-utils';

import style from './button.module.scss';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'default' | 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  children: ReactNode;
  className?: string;
  href?: string;
  asChild?: boolean;
}

export default function Button({
  variant = 'default',
  children,
  className,
  href,
  asChild = false,
  ...rest
}: ButtonProps) {
  const buttonClasses = cn(
    style.globalButton,
    {
      default: 'default-button',
      primary: 'primary',
      secondary: 'secondary',
      tertiary: 'tertiary',
      quaternary: 'quaternary',
    }[variant],
    className
  );

  const Component = asChild ? Slot : 'button';

  return (
    <Component className={`${buttonClasses} ${style[variant]}`} {...rest}>
      {children}
    </Component>
  );
}
