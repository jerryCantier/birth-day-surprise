import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function GlassCard({ children }: Props) {
  return (
    <div
      className="
        relative
        z-10
        flex
        w-[90%]
        max-w-2xl
        flex-col
        items-center
        rounded-3xl
        border
        border-white/40
        bg-white/20
        px-10
        py-14
        text-center
        shadow-2xl
        backdrop-blur-xl
      "
    >
      {children}
    </div>
  );
}