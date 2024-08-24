'use client';

import { motion } from 'framer-motion';
import { AuroraBackground } from '../components/ui/aceternity/aurora-background';
import { TypeAnimation } from 'react-type-animation';

const TypeWritingTech = () => {
  return (
    <TypeAnimation
      sequence={[
        'I am a Student.',
        1000,
        'I am a Fullstack Developer.',
        1000,
        'I am a Game Developer.',
        1000,
        'I am Growing and Learning.',
        3000,
      ]}
      wrapper="span"
      speed={45}
      style={{ fontSize: '2rem', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold text-white text-center">
          JINNAWAT VILAIRAT
        </div>
        <div className="font-extralight text-base md:text-4xl text-neutral-200 py-4">
          <TypeWritingTech />
        </div>
        {/* <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Debug now
        </button> */}
      </motion.div>
    </AuroraBackground>
  );
}

export default AuroraBackgroundDemo;
