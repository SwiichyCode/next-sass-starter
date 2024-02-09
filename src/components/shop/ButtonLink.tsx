import Link from 'next/link';

import { cn } from '@/lib/utils';

type Props = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export const ButtonLink = ({ href, className, children }: Props) => {
  return (
    <Link
      href={href}
      className={cn(
        'border font-semibold border-black px-4 py-2 uppercase hover:bg-black hover:text-white block',
        className,
      )}
    >
      {children}
    </Link>
  );
};
