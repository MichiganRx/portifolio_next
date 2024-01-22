import { useState, useEffect } from 'react';

import style from './style.module.scss';

type AnimatedNumberProps = {
  initialValue: number;
  speed: number;
  nome: string;
  mais?: boolean;
};

const AnimatedNumber = ({
  initialValue,
  speed,
  nome,
  mais,
}: AnimatedNumberProps) => {
  const [count, setCount] = useState(initialValue);
  const duration = 2000;
  const updateInterval = (speed - initialValue) / (duration / 1000);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number | null = null;

    const animate = (time: number) => {
      if (!startTime) {
        startTime = time;
      }

      const deltaTime = time - startTime;
      const updatedCount = initialValue + updateInterval * (deltaTime / 1000);

      if (updatedCount < speed) {
        setCount(updatedCount);
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(speed);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [initialValue, speed, updateInterval]);

  return (
    <div className={style.alignmentNumberCounter} id="solucoes">
      <div>{mais ? `+${Math.round(count)}` : Math.round(count)}</div>
      {nome}
    </div>
  );
};

export default AnimatedNumber;
