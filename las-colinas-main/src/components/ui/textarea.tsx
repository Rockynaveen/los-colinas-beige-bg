import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[100px] w-full rounded-lg border border-gold-medium/30 bg-[#fbf8f2] px-3.5 py-2.5 text-sm text-navy-dark shadow-sm transition-all duration-300 placeholder:text-slate-400 focus-visible:outline-none focus-visible:border-gold-medium focus-visible:ring-1 focus-visible:ring-gold-medium disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
