import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import LandingPage from "./pages/Landing/LandingPage";
import WelcomeSection from "./sections/Welcome/WelcomeSection";
import StorySection from "./sections/Story/StorySection";
import MemoriesSection from "./sections/Memories/MemoriesSection";
import ReasonsSection from "./sections/Reason/ReasonsSection";
import FutureSection from "./sections/Future/FutureSection";
import BirthdaySection from "./sections/Birthday/BirthdaySection";
import FinalMessageSection from "./sections/FinalMessage/FinalMessageSection";

function App() {
  const [step, setStep] = useState(0);

  return (
    <AnimatePresence mode="wait">
      {step === 0 && (
        <LandingPage
          key="landing"
          onOpen={() => setStep(1)}
        />
      )}

      {step === 1 && (
        <WelcomeSection
          key="welcome"
          onNext={() => setStep(2)}
        />
      )}
      {step === 2 && (
        <StorySection
          key="story"
          onNext={() => setStep(3)}
        />
      )}
      {step === 3 && (
        <MemoriesSection
          key="memories"
          onNext={() => setStep(4)}
        />
      )}

      {step === 4 && (
        <ReasonsSection
          key="reasons"
          onNext={() => setStep(5)}
        />
      )}

      {step === 5 && (
        <FutureSection
          key="future"
          onNext={() => setStep(6)}
        />
      )}
      {step === 6 && (
        <BirthdaySection
          key="birthday"
          onNext={() => setStep(7)}
        />
      )}
      {step === 7 && (
        <FinalMessageSection
          key="final-message"
        />
      )}
    </AnimatePresence>
  );
}

export default App;