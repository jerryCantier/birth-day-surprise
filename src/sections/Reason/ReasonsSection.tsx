import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { reasons } from "../../data/reasons";
import ReasonCard from "../../components/reasons/ReasonCard";

type Props = {
  onNext: () => void;
};

export default function ReasonsSection({
  onNext,
}: Props) {
  const [current, setCurrent] = useState(0);

  const nextReason = () => {
    if (current < reasons.length - 1) {
      setCurrent((c) => c + 1);
    } else {
      onNext();
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-gradient-to-br
        from-pink-50
        via-rose-50
        to-purple-100
      "
    >
      {/* Floating hearts */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              y: "110%",
              x: Math.random() * window.innerWidth,
              opacity: 0,
            }}
            animate={{
              y: "-10%",
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute text-2xl"
          >
            ❤️
          </motion.div>
        ))}
      </div>

      <div className="absolute top-16 text-center">
        <p className="uppercase tracking-[8px] text-pink-400">
          Chapter Three
        </p>

        <h1
          className="mt-5 text-6xl text-pink-600"
          style={{
            fontFamily: "'Great Vibes', cursive",
          }}
        >
          25 Reasons Why I Love You
        </h1>
      </div>

      <AnimatePresence mode="wait">
        <ReasonCard
          key={current}
          index={current}
          total={reasons.length}
          reason={reasons[current]}
          onNext={nextReason}
        />
      </AnimatePresence>
    </motion.section>
  );
}