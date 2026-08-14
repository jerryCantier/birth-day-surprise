import { motion } from "framer-motion";

type Props = {
    onShoot: () => void;
};

export default function Camera({ onShoot }: Props) {
    return (
        <motion.div
            initial={{
                y: 300,
                opacity: 0,
            }}
            animate={{
                y: 0,
                opacity: 1,
            }}
            transition={{
                duration: 1,
                ease: "easeOut",
            }}
            className="flex flex-col items-center"
        >
            <motion.div
                animate={{
                    y: [0, -6, 0],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                }}
                className="
                    relative
                    h-56
                    w-80
                    rounded-3xl
                    bg-gradient-to-b
                    from-[#444]
                    to-[#222]
                    shadow-2xl
                "
            >
                {/* Flash */}
                <div
                    className="
                        absolute
                        left-8
                        top-8
                        h-8
                        w-10
                        rounded-md
                        bg-gray-200
                    "
                />

                {/* Lens */}

                <motion.div
                    animate={{
                        boxShadow: [
                            "0 0 0px #fff",
                            "0 0 25px #fff",
                            "0 0 0px #fff",
                        ],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                    className="
                        absolute
                        left-1/2
                        top-1/2
                        h-24
                        w-24
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        bg-black
                        border-8
                        border-gray-700
                    "
                />

                {/* Button */}

                <motion.button
                    whileTap={{
                        scale: .9,
                    }}
                    onClick={onShoot}
                    className="
                        absolute
                        right-8
                        top-6
                        h-8
                        w-8
                        rounded-full
                        bg-red-500
                    "
                />
            </motion.div>

            <p className="mt-8 text-pink-600">
                Press the shutter ❤️
            </p>
        </motion.div>
    );
}