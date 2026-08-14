import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Props = {
  onNext: () => void;
};

export default function BirthdaySection({ onNext }: Props) {
  const [candlesLit, setCandlesLit] = useState(false);
  const [blown, setBlown] = useState(false);

  const lightCandles = () => {
    setCandlesLit(true);
  };

  const blowCandles = () => {
    setBlown(true);

    setTimeout(() => {
      onNext();
    }, 3000);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-[#080914]
        px-6
        text-white
      "
    >
      {/* Background glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-pink-500
          blur-[120px]
        "
      />

      {/* Stars */}

      <div className="pointer-events-none absolute inset-0">
        {[...Array(35)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute h-1 w-1 rounded-full bg-white"
            style={{
              left: `${(index * 31) % 100}%`,
              top: `${(index * 47) % 100}%`,
            }}
            animate={{
              opacity: [0.15, 1, 0.15],
              scale: [0.7, 1.4, 0.7],
            }}
            transition={{
              duration: 2 + (index % 3),
              repeat: Infinity,
              delay: (index % 5) * 0.4,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex w-full max-w-xl flex-col items-center text-center">

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
          className="uppercase tracking-[8px] text-pink-300"
        >
          Chapter Five
        </motion.p>

        {/* Birthday title */}

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
            delay: 0.4,
          }}
          style={{
            fontFamily: "'Great Vibes', cursive",
          }}
          className="
            mt-6
            text-5xl
            text-pink-200
            sm:text-6xl
          "
        >
          Happy Birthday,
          <br />
          My Love ❤️
        </motion.h1>

        {/* Cake */}

        <motion.div
          initial={{
            opacity: 0,
            y: 80,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            delay: 1,
            duration: 1,
            type: "spring",
          }}
          className="relative mt-16"
        >
          {/* Candles */}

          <div className="absolute -top-24 left-1/2 flex -translate-x-1/2 gap-6">

            {[0, 1, 2].map((candle) => (
              <div
                key={candle}
                className="relative flex h-20 w-5 flex-col items-center"
              >
                {/* Flame */}

                <AnimatePresence>
                  {candlesLit && !blown && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0,
                      }}
                      animate={{
                        opacity: [0.7, 1, 0.7],
                        scale: [0.9, 1.15, 0.9],
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0,
                        y: -10,
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                      }}
                      className="
                        absolute
                        -top-8
                        h-7
                        w-5
                        rounded-full
                        bg-orange-400
                        shadow-[0_0_20px_rgba(251,146,60,0.8)]
                      "
                    />
                  )}
                </AnimatePresence>

                {/* Candle */}

                <div
                  className="
                    h-16
                    w-5
                    rounded-t-md
                    bg-gradient-to-r
                    from-pink-300
                    via-pink-100
                    to-pink-300
                    shadow-lg
                  "
                />
              </div>
            ))}

          </div>

          {/* Cake top */}

          <div
            className="
              relative
              h-24
              w-72
              rounded-t-3xl
              bg-gradient-to-b
              from-pink-300
              to-pink-500
              shadow-[0_15px_40px_rgba(236,72,153,0.4)]
              sm:w-80
            "
          >
            {/* Cream */}

            <div className="absolute -top-4 left-0 h-8 w-full rounded-full bg-pink-100" />

            {/* Cream drips */}

            <div className="absolute left-8 top-0 h-8 w-8 rounded-b-full bg-pink-100" />
            <div className="absolute left-24 top-0 h-10 w-8 rounded-b-full bg-pink-100" />
            <div className="absolute right-24 top-0 h-9 w-8 rounded-b-full bg-pink-100" />
            <div className="absolute right-8 top-0 h-8 w-8 rounded-b-full bg-pink-100" />
          </div>

          {/* Cake bottom */}

          <div
            className="
              h-20
              w-80
              rounded-b-3xl
              bg-gradient-to-b
              from-rose-500
              to-rose-700
              shadow-2xl
              sm:w-96
            "
          />

          {/* Plate */}

          <div
            className="
              absolute
              -bottom-5
              left-1/2
              h-6
              w-[380px]
              -translate-x-1/2
              rounded-full
              bg-white/20
              blur-sm
              sm:w-[440px]
            "
          />
        </motion.div>

        {/* Message */}

        <AnimatePresence mode="wait">

          {!candlesLit && (
            <motion.div
              key="start"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 2,
              }}
              className="mt-14"
            >
              <p className="text-lg text-purple-200">
                I have one more little surprise for you...
              </p>

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={lightCandles}
                className="
                  mt-8
                  rounded-full
                  bg-gradient-to-r
                  from-pink-500
                  to-rose-500
                  px-10
                  py-4
                  font-semibold
                  shadow-[0_10px_35px_rgba(236,72,153,0.4)]
                "
              >
                Light the Candles ✨
              </motion.button>
            </motion.div>
          )}

          {candlesLit && !blown && (
            <motion.div
              key="wish"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="mt-14"
            >
              <p className="text-xl text-pink-200">
                Make a wish... ✨
              </p>

              <p className="mt-3 text-sm text-purple-200">
                Then blow out the candles.
              </p>

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={blowCandles}
                className="
                  mt-8
                  rounded-full
                  border
                  border-pink-300/40
                  bg-white/10
                  px-10
                  py-4
                  font-semibold
                  backdrop-blur-xl
                "
              >
                Blow the Candles 💨
              </motion.button>
            </motion.div>
          )}

          {blown && (
            <motion.div
              key="blown"
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              className="mt-14"
            >
              <p
                style={{
                  fontFamily: "'Great Vibes', cursive",
                }}
                className="text-4xl text-pink-200"
              >
                Make your wish... ❤️
              </p>

              <p className="mt-4 text-purple-200">
                I hope every beautiful wish you make comes true.
              </p>
            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </motion.section>
  );
}