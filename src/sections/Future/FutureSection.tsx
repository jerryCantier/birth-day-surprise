import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  onNext: () => void;
};

const dreams = [
  {
    emoji: "🌎",
    title: "Traveling the world with you",
    text: "I want to discover beautiful places, try new things, and make memories with you wherever life takes us.",
  },
  {
    emoji: "🏠",
    title: "Having a little place of our own",
    text: "A place filled with laughter, late-night conversations, little routines, and everything that makes it feel like home.",
  },
  {
    emoji: "☕",
    title: "Waking up beside you",
    text: "I dream about the simple mornings when distance isn't between us anymore.",
  },
  {
    emoji: "❤️",
    title: "Growing together",
    text: "I want to keep learning, growing, and becoming better with you by my side.",
  },
  {
    emoji: "🌅",
    title: "Growing old with you",
    text: "More than anything, I want to look back one day and realize we built a beautiful life together.",
  },
];

export default function FutureSection({ onNext }: Props) {
  const [currentDream, setCurrentDream] = useState(0);

  const dream = dreams[currentDream];

  const nextDream = () => {
    if (currentDream < dreams.length - 1) {
      setCurrentDream((value) => value + 1);
    }
  };

  const isLast = currentDream === dreams.length - 1;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-gradient-to-b
        from-[#090B22]
        via-[#11143A]
        to-[#1D1745]
        px-6
        py-20
        text-white
      "
    >
      {/* Stars */}

      <div className="pointer-events-none absolute inset-0">
        {[...Array(45)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute h-1 w-1 rounded-full bg-white"
            style={{
              left: `${(index * 37) % 100}%`,
              top: `${(index * 53) % 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.7, 1.3, 0.7],
            }}
            transition={{
              duration: 2 + (index % 4),
              repeat: Infinity,
              delay: (index % 5) * 0.5,
            }}
          />
        ))}
      </div>

      {/* Moon */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="
          pointer-events-none
          absolute
          right-[-80px]
          top-[-80px]
          h-64
          w-64
          rounded-full
          bg-white
          shadow-[0_0_80px_rgba(255,255,255,0.35)]
          sm:right-10
          sm:top-10
        "
      />

      {/* Content */}

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-10rem)] max-w-3xl flex-col items-center justify-center">

        {/* Chapter */}

        <motion.p
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="
            uppercase
            tracking-[8px]
            text-purple-300
          "
        >
          Chapter Four
        </motion.p>

        {/* Title */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
          }}
          style={{
            fontFamily: "'Great Vibes', cursive",
          }}
          className="
            mt-6
            text-center
            text-5xl
            text-pink-200
            sm:text-6xl
            md:text-7xl
          "
        >
          The Future I Dream About
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.7,
          }}
          className="mt-4 text-center text-purple-200"
        >
          With you.
        </motion.p>

        {/* Dream */}

        <motion.div
          key={currentDream}
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mt-14
            w-full
            max-w-xl
            rounded-3xl
            border
            border-white/10
            bg-white/10
            p-8
            text-center
            shadow-2xl
            backdrop-blur-xl
            sm:p-12
          "
        >
          {/* Emoji */}

          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="text-6xl"
          >
            {dream.emoji}
          </motion.div>

          {/* Title */}

          <h2
            style={{
              fontFamily: "'Great Vibes', cursive",
            }}
            className="
              mt-7
              text-4xl
              text-pink-200
              sm:text-5xl
            "
          >
            {dream.title}
          </h2>

          {/* Text */}

          <p className="mt-6 leading-8 text-purple-100">
            {dream.text}
          </p>

          {/* Progress */}

          <div className="mt-8 flex justify-center gap-2">
            {dreams.map((_, index) => (
              <div
                key={index}
                className={`
                  h-2
                  rounded-full
                  transition-all
                  duration-500
                  ${
                    index === currentDream
                      ? "w-8 bg-pink-300"
                      : "w-2 bg-white/30"
                  }
                `}
              />
            ))}
          </div>

          {/* Button */}

          {!isLast ? (
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={nextDream}
              className="
                mt-10
                rounded-full
                bg-gradient-to-r
                from-pink-500
                to-purple-500
                px-10
                py-4
                font-semibold
                shadow-xl
              "
            >
              There's More... →
            </motion.button>
          ) : (
            <motion.button
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1,
              }}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={onNext}
              className="
                mt-10
                rounded-full
                bg-gradient-to-r
                from-pink-500
                to-purple-500
                px-10
                py-4
                font-semibold
                shadow-xl
              "
            >
              Continue Our Story ❤️
            </motion.button>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}