import { motion } from "framer-motion";
import LetterPaper from "../../components/letter/LetterPaper";
import Signature from "../../components/letter/Signature";
import WaxSeal from "../../components/letter/WaxSeal";
import { useState } from "react";
import AnimatedLetter from "../../components/typography/AnimatedTitle";
type Props = {
    onNext: () => void;
};

export default function StorySection({ onNext }: Props) {
    const [finished, setFinished] = useState(false);
    return (
        <motion.section
            className="
      relative
      min-h-screen
      overflow-x-hidden
      bg-gradient-to-br
      from-[#FFF5F7]
      via-[#FFF8FC]
      to-[#F3E8FF]
      px-6
      py-20
      "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
                opacity: 0,
                scale: 0.98,
                filter: "blur(8px)",
            }}
            transition={{ duration: 0.6 }}
        >
            {/* Background Glow */}

            <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-pink-200/30 blur-3xl" />

            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-200/30 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-2xl">

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center uppercase tracking-[10px] text-pink-500"
                >
                    Chapter One
                </motion.p>
                <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    style={{
                        fontFamily: "'Great Vibes', cursive",
                        lineHeight: 1.1,
                    }}
                    className="mt-6 text-center text-5xl sm:text-6xl md:text-7xl text-pink-600"
                >
                    A Letter From My Heart
                </motion.h1>

                <LetterPaper>

                    <AnimatedLetter
                        paragraphs={[
                            "Dear Love,",

                            "Today isn't just another birthday.\n\nToday is the day the world became brighter because you were born.",

                            "Even though we're miles apart, you've never stopped making me feel loved, supported, and appreciated.",

                            "I wish I could be there today to celebrate with you, hold your hand, and remind you how incredibly special you are.",

                            "So instead... I built this little journey for you.\n\nEvery page holds a piece of my heart.",

                            "Happy Birthday, My Love ❤️",
                        ]}
                        onComplete={() => setFinished(true)}
                    />
                    <Signature visible={finished} />

                    {finished && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="mt-8 text-center italic text-gray-500"
                        >
                            Tap the wax seal to open the next memory ❤️
                        </motion.p>
                    )}

                    <WaxSeal
                        visible={finished}
                        onClick={onNext}
                    />
                </LetterPaper>

            </div>
        </motion.section>
    );
}