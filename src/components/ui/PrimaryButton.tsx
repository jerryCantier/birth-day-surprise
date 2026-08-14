import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick?: () => void;
};

export default function PrimaryButton({
  children,
  onClick,
}: Props) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: .96,
      }}
      onClick={onClick}
      className="
      rounded-full
      bg-pink-500
      px-8
      py-4
      text-white
      font-semibold
      shadow-xl
      "
    >
      {children}
    </motion.button>
  );
}