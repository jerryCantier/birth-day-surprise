import { motion, AnimatePresence } from "framer-motion";

type Props = {
    show: boolean;
};

export default function CameraFlash({ show }: Props) {
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: .15,
                    }}
                    className="
                        fixed
                        inset-0
                        bg-white
                        z-50
                    "
                />
            )}
        </AnimatePresence>
    );
}