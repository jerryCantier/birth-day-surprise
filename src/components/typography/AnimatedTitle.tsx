import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "../typography/Typewriter";

type Props = {
  paragraphs: string[];
  onComplete?: () => void;
};

export default function AnimatedLetter({
  paragraphs,
  onComplete,
}: Props) {
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    if (visibleCount > paragraphs.length) {
      onComplete?.();
    }
  }, [visibleCount, paragraphs.length, onComplete]);

  return (
    <div className="space-y-10">
      {paragraphs.slice(0, visibleCount).map((paragraph, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Typewriter
            text={paragraph}
            onComplete={() => {
              if (index === visibleCount - 1) {
                setTimeout(() => {
                  setVisibleCount((v) => v + 1);
                }, 700);
              }
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}