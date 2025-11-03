import type { SVGProps } from 'react';
import { cn } from '@/lib/utils';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 140 25"
      width="140"
      height="25"
      {...props}
      className={cn('text-foreground', props.className)}
    >
      <text
        x="0"
        y="20"
        className="font-headline"
        fontSize="24"
        fill="currentColor"
      >
        Charmony
      </text>
    </svg>
  );
}
