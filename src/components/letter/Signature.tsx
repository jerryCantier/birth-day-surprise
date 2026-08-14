import { motion } from "framer-motion";

type Props = {
  visible: boolean;
};

export default function Signature({ visible }: Props) {
  if (!visible) return null;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -40,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 1,
      }}
      className="mt-16 text-right"
    >
      <p className="text-lg text-gray-500">
        With all my love,
      </p>

      <motion.h2
        initial={{
          width: 0,
        }}
        animate={{
          width: "100%",
        }}
        transition={{
          duration: 2,
        }}
        style={{
          fontFamily: "'Great Vibes', cursive",
        }}
        className="
          overflow-hidden
          whitespace-nowrap
          text-6xl
          text-pink-600
        "
      >
        Jerry ❤️
      </motion.h2>
    </motion.div>
  );
}