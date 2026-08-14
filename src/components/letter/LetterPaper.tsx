import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function LetterPaper({ children }: Props) {
  return (
    <motion.div
      initial={{
        scaleY: 0,
        opacity: 0,
        transformOrigin: "top",
      }}
      animate={{
        scaleY: 1,
        opacity: 1,
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        mt-12
        rounded-[40px]
        bg-[#FFFDF8]
        p-10
        shadow-[0_30px_70px_rgba(255,120,180,.25)]
        border
        border-pink-100
        relative
        overflow-hidden
      "
    >
      {/* Paper texture */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.05]
          pointer-events-none
        "
        style={{
          backgroundImage:
            "radial-gradient(#999 0.7px, transparent 0.7px)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}