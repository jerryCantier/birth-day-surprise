import { motion } from "framer-motion";

import GiftBox from "../../components/giftbox/GiftBox";
import FloatingHearts from "../../components/effects/FloatingHearts";
import GlassCard from "../../components/ui/GlassCard";

type LandingPageProps = {
    onOpen: () => void;
};

export default function LandingPage({ onOpen }: LandingPageProps) {
    return (
        <div className="relative flex min-h-screen py-16  items-center justify-center overflow-x-hidden bg-gradient-to-br from-[#FFF5F7] via-[#FFF0F6] to-[#F3E8FF] px-6">
            {/* Floating Hearts */}
            <FloatingHearts />

            {/* Background Glow */}
            <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-pink-300/30 blur-3xl" />

            <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-purple-300/30 blur-3xl" />

            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-3xl" />

            <GlassCard>
                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-pink-600"
                >
                    Happy Birthday,
                    <br />
                    My Love ❤️
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-6 text-2xl text-gray-700"
                >
                    To the most amazing person in my life.
                </motion.h2>

                <motion.p
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        delay: 1,
                    }}
                    className="mt-10 max-w-lg leading-8 text-gray-600"
                >
                    I spent a little time creating something special just for you.
                    <br />
                    I hope it brings a smile to your face today. ❤️
                </motion.p>

                <GiftBox onOpened={onOpen} />
            </GlassCard>
        </div>
    );
}