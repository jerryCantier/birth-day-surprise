import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import Camera from "../../components/polaroid/Camera";
import CameraFlash from "../../components/polaroid/CameraFlash";
import Polaroid from "../../components/polaroid/Polaroid";

import { memories } from "../../data/memories";

type Props = {
  onNext: () => void;
};


export default function MemoriesSection({
  onNext,
}: Props) {
  const [flash, setFlash] = useState(false);
  const [photoVisible, setPhotoVisible] = useState(false);
  const [currentMemory, setCurrentMemory] = useState(0);
  const [ending, setEnding] = useState(false);
  const shoot = () => {
    setFlash(true);

    setTimeout(() => {
      setFlash(false);
      setPhotoVisible(true);
    }, 200);
  };

  const nextMemory = () => {
    if (currentMemory < memories.length - 1) {
      setPhotoVisible(false);

      setTimeout(() => {
        setCurrentMemory((m) => m + 1);
        shoot();
      }, 700);
    } else {
      // Last photo
      setEnding(true);

      setTimeout(() => {
        onNext();
      }, 2500);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#FFF5F7] via-[#FFF8FC] to-[#F3E8FF]"
    >
      <CameraFlash show={flash} />

      <div className="relative w-[360px] h-[650px] flex items-start justify-center">

        {/* Camera */}
        <motion.div
          animate={{
            opacity: photoVisible ? 0.35 : 1,
            scale: photoVisible ? 0.95 : 1,
          }}
          transition={{ duration: .5 }}
          className="absolute top-0 z-10"
        >
          <Camera onShoot={shoot} />
        </motion.div>

        {/* Photo */}
        <AnimatePresence mode="wait">
          {photoVisible && (
            <motion.div
              key={currentMemory}
              initial={{
                y: -150,
                opacity: 0,
                scale: 0.8,
              }}
              animate={
                ending
                  ? {
                    y: 120,
                    opacity: 0,
                    scale: 2,
                    rotate: 8,
                  }
                  : {
                    y: 120,
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                  }
              }
              exit={{
                opacity: 0,
                y: 200,
                scale: 0.9,
              }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
              onClick={nextMemory}
              className="absolute z-20 cursor-pointer"
            >
              <Polaroid
                image={memories[currentMemory].image}
                date={memories[currentMemory].date}
                title={memories[currentMemory].title}
                text={memories[currentMemory].text}
              />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.section>
  );
}