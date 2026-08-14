import { useEffect, useState } from "react";

type Props = {
  text: string;
  speed?: number;
  onComplete?: () => void;
};

export default function Typewriter({
  text,
  speed = 35,
  onComplete,
}: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= text.length) {
      onComplete?.();
      return;
    }

    const timeout = setTimeout(() => {
      setIndex((i) => i + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, text, speed]);

  return (
    <p
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
      {text.slice(0, index)}
      {index < text.length && (
        <span className="animate-pulse text-pink-500">|</span>
      )}
    </p>
  );
}