import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  onOpened: () => void;
};

export default function GiftBox({ onOpened }: Props) {
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    if (opened) return;

    setOpened(true);

    setTimeout(() => {
      onOpened();
    }, 1800);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.5,
        y: 40,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        delay: 1.2,
        duration: 0.8,
      }}
      whileHover={{
        scale: 1.05,
      }}
      onClick={handleClick}
      className="relative mt-14 cursor-pointer"
    >
      {/* Bow */}
      <motion.div
        animate={
          opened
            ? {
                y: -90,
                rotate: -20,
              }
            : {}
        }
        transition={{ duration: 0.8 }}
        className="absolute left-1/2 top-0 z-30 h-10 w-10 -translate-x-1/2 rounded-full border-4 border-pink-500"
      />

      {/* Lid */}
      <motion.div
        animate={
          opened
            ? {
                y: -60,
                rotate: -10,
              }
            : {}
        }
        transition={{ duration: 0.8 }}
        className="relative z-20 h-10 w-44 rounded-lg bg-gradient-to-r from-pink-400 to-rose-400 shadow-xl"
      />

      {/* Ribbon Vertical */}
      <div className="absolute left-1/2 top-10 z-10 h-36 w-4 -translate-x-1/2 bg-pink-600" />

      {/* Ribbon Horizontal */}
      <div className="absolute left-0 top-24 z-10 h-4 w-44 bg-pink-600" />

      {/* Box */}
      <motion.div
        animate={
          opened
            ? {
                scale: [1, 1.04, 1],
              }
            : {}
        }
        transition={{
          repeat: opened ? 4 : 0,
          duration: 0.2,
        }}
        className="h-36 w-44 rounded-b-xl bg-gradient-to-b from-pink-300 to-pink-400 shadow-2xl"
      />

      {!opened && (
        <motion.p
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="mt-8 text-center font-medium text-pink-600"
        >
          Click to Open 🎁
        </motion.p>
      )}
    </motion.div>
  );
}