import { motion } from "framer-motion";

type Props = {
  visible: boolean;
  onClick: () => void;
};

export default function WaxSeal({
  visible,
  onClick,
}: Props) {
  if (!visible) return null;

  return (
    <motion.div
      initial={{
        scale: 0,
        rotate: -180,
      }}
      animate={{
        scale: 1,
        rotate: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 120,
      }}
      className="mt-16 flex justify-center"
    >
      <motion.button
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: .95,
        }}
        onClick={onClick}
        className="
          h-28
          w-28
          rounded-full
          bg-gradient-to-br
          from-rose-700
          via-pink-600
          to-red-700
          shadow-2xl
          border-4
          border-red-900/30
        "
      >
        <span
          style={{
            fontFamily: "'Great Vibes', cursive",
          }}
          className="text-4xl text-white"
        >
          J
        </span>
      </motion.button>
    </motion.div>
  );
}