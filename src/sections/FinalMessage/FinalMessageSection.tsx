import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  onFinish?: () => void;
};

export default function FinalMessageSection({ onFinish }: Props) {
  const [finished, setFinished] = useState(false);

  const handleComplete = () => {
    setFinished(true);
    onFinish?.();
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-gradient-to-br
        from-[#FFF5F7]
        via-[#FFF8FC]
        to-[#F3E8FF]
        px-6
        py-20
      "
    >
      {/* Soft background glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 6,
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
          bg-pink-300/30
          blur-[120px]
        "
      />

      {/* Floating hearts */}

      {[...Array(12)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute text-pink-300/40"
          style={{
            left: `${(index * 37) % 100}%`,
            top: `${(index * 53) % 100}%`,
          }}
          animate={{
            y: [-10, -35, -10],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + (index % 3),
            repeat: Infinity,
            delay: index * 0.2,
          }}
        >
          ❤️
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto w-full max-w-2xl text-center">

        {/* Final chapter */}

        <motion.p
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
          }}
          className="
            uppercase
            tracking-[8px]
            text-pink-500
          "
        >
          The Final Chapter
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
            delay: 0.9,
            duration: 1,
          }}
          style={{
            fontFamily: "'Great Vibes', cursive",
          }}
          className="
            mt-6
            text-5xl
            text-pink-600
            sm:text-6xl
          "
        >
          One Last Thing...
        </motion.h1>

        {/* Message */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.5,
            duration: 1,
          }}
          className="
            mt-12
            rounded-3xl
            border
            border-pink-200
            bg-white/40
            p-8
            shadow-xl
            backdrop-blur-xl
            sm:p-12
          "
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
            className="
              text-[22px]
              leading-[2]
              text-gray-700
              sm:text-[24px]
            "
          >
            If you've made it this far...
          </p>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
            className="
              mt-7
              text-[21px]
              leading-[2]
              text-gray-700
              sm:text-[23px]
            "
          >
            I hope you know just how much you mean to me.
          </p>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
            className="
              mt-7
              text-[21px]
              leading-[2]
              text-gray-700
              sm:text-[23px]
            "
          >
            I may not always have the perfect words,
            and I may not always be able to be there beside you...
            but I hope you never doubt how deeply I love you.
          </p>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
            className="
              mt-7
              text-[21px]
              leading-[2]
              text-gray-700
              sm:text-[23px]
            "
          >
            Every memory we've made,
            every laugh we've shared,
            every difficult moment we've overcome,
            and every dream we have for the future...
            I treasure all of it.
          </p>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
            className="
              mt-7
              text-[21px]
              leading-[2]
              text-gray-700
              sm:text-[23px]
            "
          >
            And if I had the chance to choose again,
            I would still choose you.
          </p>

          {/* Signature */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 4,
              duration: 1,
            }}
            className="mt-12"
          >
            <p
              style={{
                fontFamily: "'Great Vibes', cursive",
              }}
              className="text-4xl text-pink-600"
            >
              Always yours,
            </p>

            <p
              style={{
                fontFamily: "'Great Vibes', cursive",
              }}
              className="mt-2 text-5xl text-pink-600"
            >
              Jerry ❤️
            </p>
          </motion.div>
        </motion.div>

        {/* Final birthday message */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 5,
            duration: 1,
          }}
          onAnimationComplete={handleComplete}
          className="mt-16"
        >
          <p
            style={{
              fontFamily: "'Great Vibes', cursive",
            }}
            className="
              text-5xl
              text-pink-600
              sm:text-6xl
            "
          >
            Happy Birthday,
          </p>

          <p
            style={{
              fontFamily: "'Great Vibes', cursive",
            }}
            className="
              mt-2
              text-6xl
              text-pink-600
              sm:text-7xl
            "
          >
            My Love ❤️
          </p>
        </motion.div>

        {finished && (
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="mt-8 text-sm italic text-gray-500"
          >
            Made with all my heart, just for you.
          </motion.p>
        )}

      </div>
    </motion.section>
  );
}