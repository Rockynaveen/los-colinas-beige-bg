import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-11 w-full rounded-lg border border-gold-medium/30 bg-[#fbf8f2] px-3.5 py-2 text-sm text-navy-dark shadow-sm transition-all duration-300 placeholder:text-slate-400 focus-visible:outline-none focus-visible:border-gold-medium focus-visible:ring-1 focus-visible:ring-gold-medium disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
