import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

type Props = {
  className?: string;
  childrenClassName?: string;
  items: React.ReactNode[];
};

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.2,
    },
  },
};

const itemList = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const VariantsAnimate = (props: Props) => {
  const { className, items } = props;

  return (
    <motion.div
      className={cn(className)}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {items.map((item, index) => (
        <motion.div key={index} variants={itemList}>
          {item}
        </motion.div>
      ))}
    </motion.div>
  );
};
