import { useState } from "react";
import { motion, stagger } from "motion/react";

interface WordFlipperProps {
  words: string[];
}

export const WordFlipper = ({ words }: WordFlipperProps) => {
  const [index, setIndex] = useState(0);

  const handleSwitchWord = () => {
    setIndex((prev) => (prev + 1) % words.length);
  };

  return (
    <motion.span
      key={index}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 5 }}
      onAnimationComplete={handleSwitchWord}
      className="inline text-accent-success"
    >
      <motion.span
        variants={{
          visible: {
            transition: {
              delayChildren: stagger(0.1),
            },
          },
        }}
        initial="hidden"
        animate="visible"
        className="inline-flex"
      >
        {words[index].split("").map((letter, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 1 }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.span>
    </motion.span>
  );
};