import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import style from './style.module.scss';

interface TypewriterProps {
  phrases: string[];
  styles: string[]; // classes CSS
  typingSpeed?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({
  phrases,
  styles,
  typingSpeed = 100,
}) => {
  const [lines, setLines] = useState<string[]>([]);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      setLines([]);
      setCurrentPhraseIndex(0);
      setCurrentCharIndex(0);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    if (currentPhraseIndex >= phrases.length) return;

    const currentPhrase = phrases[currentPhraseIndex];

    if (currentCharIndex <= currentPhrase.length) {
      const timer = setTimeout(() => {
        setLines((prevLines) => {
          const newLines = [...prevLines];
          newLines[currentPhraseIndex] = currentPhrase.slice(
            0,
            currentCharIndex + 1
          );
          return newLines;
        });
        setCurrentCharIndex((prevIndex) => prevIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else {
      setCurrentCharIndex(0);
      setLines((prevLines) => [...prevLines, '']);
      setCurrentPhraseIndex((prevIndex) => prevIndex + 1);
    }
  }, [currentCharIndex, currentPhraseIndex, phrases, typingSpeed]);

  return (
    <div className={style.typewriter}>
      {lines.map((line, index) => (
        <div key={index} className={styles[index]}>
          {line}
        </div>
      ))}
    </div>
  );
};

export default Typewriter;
