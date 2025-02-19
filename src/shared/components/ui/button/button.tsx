import React, { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/shared/helpers/shadcn-utils';

import style from './button.module.scss';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  children: ReactNode;
  className?: string;
  href?: string;
  asChild?: boolean;
}

export default function Button({
  variant = 'primary',
  children,
  className,
  href,
  asChild = false,
  ...rest
}: ButtonProps) {
  const buttonClasses = cn(
    style.globalButton,
    {
      primary: 'primary',
      secondary: 'secondary',
      tertiary: 'tertiary',
      quaternary: 'quaternary',
    }[variant],
    className
  );

  const Component = asChild ? Slot : 'button';

  return (
    <Component
      className={`${buttonClasses} ${style[variant as keyof typeof style]}`}
      {...rest}
    >
      {children}
    </Component>
  );
}

interface DownloadButtonProps {
  link: string;
  isVisible: boolean;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  link,
  isVisible,
}) => {
  if (!isVisible) {
    return null;
  }

  return (
    <Button variant="primary" asChild>
      <a href={link} download>
        Download Projeto
      </a>
    </Button>
  );
};
