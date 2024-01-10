import { Label } from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';
import { ComponentPropsWithRef, forwardRef, useId } from 'react';

import { cn } from '@/shared/helpers/shadcn-utils';

const inputVariants = cva(
  'flex h-10 rounded-lg border-2 border-input border-white-200 bg-white-100 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      size: {
        default: 'w-96',
        lg: 'w-64',
        md: 'w-36',
        sm: 'w-16',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

export interface InputProps
  extends Omit<ComponentPropsWithRef<'input'>, 'size'>,
    VariantProps<typeof inputVariants> {
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, size = 'default', ...props }, ref) => {
    const id = useId();
    const inputId = props.id ?? id;

    return (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        {label && <Label htmlFor={inputId}>{label}</Label>}
        <input
          type={type}
          id={inputId}
          className={cn(inputVariants({ size, className }))}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

export { Input, inputVariants };
