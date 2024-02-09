import { cn } from '@/lib/utils';

type Props = {
  bgImage: string;
  className?: string;
};

export const ImageContainer = ({ bgImage, className }: Props) => {
  return (
    <div
      className={cn('w-2/4 bg-cover bg-center h-full', bgImage, className)}
    />
  );
};
