import { motion } from "framer-motion";

type Props = {
  src: string;
  alt?: string;
};

export default function PhotoFrame({
  src,
  alt = "Our Photo",
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -8, 0],
      }}
      transition={{
        duration: 1.2,
        ease: "easeOut",
        y: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="relative mt-12 w-[320px]"
    >
      {/* Pink glow behind the photo */}
      <div className="absolute inset-0 -z-10 rounded-[40px] bg-pink-300/30 blur-3xl" />

      {/* Photo */}
      <img
        src={src}
        alt={alt}
        className="w-full rounded-[30px] border-4 border-white object-cover shadow-[0_25px_60px_rgba(236,72,153,0.35)]"
      />

      {/* Bottom fade into the page */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-40
          rounded-b-[30px]
          bg-gradient-to-t
          from-[#FFF5F7]
          via-[#FFF5F7]/70
          to-transparent
        "
      />
    </motion.div>
  );
}