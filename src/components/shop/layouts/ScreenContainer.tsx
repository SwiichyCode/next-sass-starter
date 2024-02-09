import { cn } from '@/lib/utils';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const ScreenContainer = ({ className, children }: Props) => {
  return (
    <main className={cn('w-full flex h-[calc(100vh-69px)]', className)}>
      {children}
    </main>
  );
};
