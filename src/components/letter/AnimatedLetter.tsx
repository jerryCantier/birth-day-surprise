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
  // Paragraphs that are already finished
  const [completed, setCompleted] = useState<string[]>([]);

  // Current paragraph being typed
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= paragraphs.length) {
      onComplete?.();
    }
  }, [currentIndex, paragraphs.length, onComplete]);

  const handleParagraphComplete = () => {
    // Save finished paragraph
    setCompleted((prev) => [...prev, paragraphs[currentIndex]]);

    // Wait a little before starting the next one
    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 900);
  };

  return (
    <div className="space-y-10">
      {/* Finished paragraphs */}
      {completed.map((paragraph, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
          }}
          className="
            whitespace-pre-line
            text-[22px]
            sm:text-[24px]
            md:text-[26px]
            leading-[2.3]
            text-gray-700
            font-medium
            tracking-[0.02em]
          "
        >
          {paragraph}
        </motion.p>
      ))}

      {/* Current paragraph being typed */}
      {currentIndex < paragraphs.length && (
        <Typewriter
          key={currentIndex}
          text={paragraphs[currentIndex]}
          onComplete={handleParagraphComplete}
        />
      )}
    </div>
  );
}