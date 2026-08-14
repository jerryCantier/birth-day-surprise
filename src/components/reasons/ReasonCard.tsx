import { motion } from "framer-motion";

type Props = {
  index: number;
  total: number;
  reason: string;
  onNext: () => void;
};

export default function ReasonCard({
  index,
  total,
  reason,
  onNext,
}: Props) {
  return (
    <motion.div
      key={index}
      initial={{
        rotateY: -90,
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        rotateY: 0,
        opacity: 1,
        scale: 1,
      }}
      exit={{
        rotateY: 90,
        opacity: 0,
        scale: 0.9,
      }}
      transition={{
        duration: 0.7,
      }}
      onClick={onNext}
      className="
        cursor-pointer
        rounded-3xl
        bg-white
        p-10
        shadow-2xl
        w-[420px]
        max-w-[90vw]
        text-center
      "
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <p className="text-pink-500 uppercase tracking-[5px]">
        Reason #{index + 1}
      </p>

      <div className="text-5xl mt-5">❤️</div>

      <p
        className="mt-8 text-2xl leading-10 text-gray-700"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
        }}
      >
        {reason}
      </p>

      <p className="mt-10 text-sm text-pink-400">
        Tap to continue
      </p>

      <div className="mt-5 text-gray-400">
        {index + 1} / {total}
      </div>
    </motion.div>
  );
}