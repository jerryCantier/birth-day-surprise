import { motion } from "framer-motion";

const hearts = Array.from({ length: 18 });

export default function FloatingHearts() {
  return (
    <>
      {hearts.map((_, index) => (
        <motion.div
          key={index}
          className="pointer-events-none absolute select-none text-pink-300"
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${16 + Math.random() * 20}px`,
          }}
          initial={{
            y: "110vh",
            opacity: 0,
          }}
          animate={{
            y: "-20vh",
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        >
          ❤️
        </motion.div>
      ))}
    </>
  );
}