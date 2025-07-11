"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
  texts: string[];
  speed?: number;
  pause?: number;
  loop?: boolean;
}

export default function Typewriter({
  texts,
  speed = 70,
  pause = 1000,
  loop = true,
}: TypewriterProps) {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!isDeleting) {
      if (charIndex < texts[textIndex].length) {
        setIsTypingDone(false);
        const timeout = setTimeout(() => {
          setCurrentText((prev) => prev + texts[textIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        setIsTypingDone(true);
        const pauseTimeout = setTimeout(() => {
          setIsDeleting(true);
        }, pause);
        return () => clearTimeout(pauseTimeout);
      }
    } else {
      if (charIndex > 0) {
        setIsTypingDone(false);
        const deleteTimeout = setTimeout(() => {
          setCurrentText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, speed / 2);
        return () => clearTimeout(deleteTimeout);
      } else {
        setIsTypingDone(false);
        setIsDeleting(false);
        if (textIndex < texts.length - 1) {
          setTextIndex((prev) => prev + 1);
        } else if (loop) {
          setTextIndex(0);
        }
      }
    }
  }, [charIndex, textIndex, texts, speed, pause, loop, isDeleting]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="inline-block whitespace-pre"
    >
      {currentText}
      <motion.span
        animate={isTypingDone && !isDeleting ? { opacity: [0, 1, 0] } : { opacity: 1 }}
        transition={
          isTypingDone && !isDeleting
            ? { duration: 1.2, delay: .5, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0 }
        }
      >
        |
      </motion.span>
    </motion.span>
  );
}
