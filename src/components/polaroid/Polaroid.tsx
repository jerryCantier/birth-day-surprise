import { motion } from "framer-motion";

type Props = {
    image: string;
    date: string;
    title: string;
    text: string;
};

export default function Polaroid({
    image,
    date,
    title,
    text,
}: Props) {
    return (
   <motion.div
    key={title}
    initial={{
        opacity: 0,
        y: 80,
        scale: 0.9,
        rotate: -8,
    }}
    animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: -2,
    }}
    exit={{
        opacity: 0,
        x: -250,
        y: -50,
        rotate: -18,
        scale: .9,
    }}
    transition={{
        duration: .8,
        ease: "easeInOut",
    }}
    whileHover={{
        rotate: 0,
        scale: 1.03,
    }}
    whileTap={{
        scale: .98,
    }}
    className="
        relative
        cursor-pointer
        w-[340px]
        rounded-md
        bg-gradient-to-b
        from-white
        to-[#F7F4F2]
        p-4
        shadow-[0_25px_60px_rgba(0,0,0,0.18)]
    "
>
            {/* Photo */}
            <div className="overflow-hidden rounded-sm">
                <motion.img
                    src={image}
                    alt={title}
                    initial={{
                        scale: 1.15,
                        filter: "blur(18px) brightness(.35)",
                    }}
                    animate={{
                        scale: 1,
                        filter: "blur(0px) brightness(1)",
                    }}
                    transition={{
                        duration: 3,
                        ease: "easeOut",
                    }}
                    className="
        h-[340px]
        w-full
        object-cover
    "
                />
            </div>

            {/* Caption */}
            <div className="mt-5 px-1 text-center">
                <p className="text-xs uppercase tracking-[4px] text-pink-500">
                    {date}
                </p>

                <h3
                    style={{
                        fontFamily: "'Great Vibes', cursive",
                    }}
                    className="mt-3 text-4xl text-pink-600"
                >
                    {title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                    {text}
                </p>
            </div>

            <div
                className="
        pointer-events-none
        absolute
        inset-0
        rounded-md
        opacity-[0.06]
        mix-blend-multiply
    "
                style={{
                    backgroundImage:
                        "radial-gradient(circle, #000 0.7px, transparent 0.7px)",
                    backgroundSize: "10px 10px",
                }}
            />
        </motion.div>
    );
}