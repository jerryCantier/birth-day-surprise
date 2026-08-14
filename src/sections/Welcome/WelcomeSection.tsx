import { motion } from "framer-motion";
import welcomePhoto from "../../assets/welcomephoto.png";
import PhotoFrame from "../../components/photo/PhotoFrame";
type Props = {
    onNext: () => void;
};

export default function WelcomeSection({ onNext }: Props) {
    return (
        <motion.div
            className="relative min-h-screen overflow-y-auto bg-gradient-to-br from-[#FFF5F7] via-[#FFF0F6] to-[#F3E8FF] px-6 py-16" initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            {/* Background Glow */}

            <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-pink-300/30 blur-3xl" />

            <div className="absolute -bottom-40 -right-40 h-[30rem] w-[30rem] rounded-full bg-purple-300/30 blur-3xl" />

            {/* Floating Hearts */}

            <motion.div
                animate={{
                    y: [0, -20, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                }}
                className="absolute top-20 left-10 text-4xl"
            >
                ❤️
            </motion.div>

            <motion.div
                animate={{
                    y: [0, 20, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                }}
                className="absolute bottom-20 right-10 text-5xl"
            >
                ❤️
            </motion.div>

            <div className="relative z-10 mx-auto flex w-full max-w-lg flex-col items-center">

                {/* Title */}

                <motion.h1
                    initial={{
                        opacity: 0,
                        y: -30,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: .8,
                    }}
                    style={{
                        fontFamily: "'Great Vibes', cursive",
                    }}
                    className="text-6xl text-pink-600"
                >
                    To My Love,
                </motion.h1>

                {/* Message */}

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
                        delay: .5,
                    }}
                    className="mt-8 w-full rounded-3xl border border-pink-200 bg-white/30 p-6 text-center shadow-xl backdrop-blur-xl"
                >
                    <p className="text-lg font-semibold text-pink-600">
                        Before you continue...
                    </p>

                    <p className="mt-5 leading-8 text-gray-700">
                        I made this little surprise because you deserve to feel special
                        today.
                    </p>

                    <p className="mt-4 leading-8 text-gray-700">
                        Even though we're miles apart,
                        I wanted to give you something
                        made with all my love.
                    </p>

                    <p className="mt-5 font-semibold text-pink-600">
                        Happy Birthday ❤️
                    </p>
                </motion.div>

                {/* Photo */}
                <div className="-mt-6">
                    <PhotoFrame src={welcomePhoto} />
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="mt-5 text-center text-sm italic text-gray-500"
                    >
                        One of my favorite memories with you ❤️
                    </motion.p>
                </div>

                {/* Button */}

                <motion.button
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        delay: 1.5,
                        duration: .8,
                        scale: {
                            duration: 2,
                            repeat: Infinity,
                        },
                    }}
                    whileHover={{
                        scale: 1.08,
                    }}
                    whileTap={{
                        scale: .95,
                    }}
                    onClick={onNext}
                    className="
mt-10
rounded-full
bg-gradient-to-r
from-pink-500
via-rose-500
to-pink-500
px-12
py-4
text-lg
font-semibold
tracking-wide
text-white
shadow-[0_15px_35px_rgba(236,72,153,0.45)]
transition-all
duration-300
hover:shadow-[0_20px_45px_rgba(236,72,153,0.55)]
"
                >
                    Begin Our Story →
                </motion.button>
            </div>
        </motion.div>
    );
}