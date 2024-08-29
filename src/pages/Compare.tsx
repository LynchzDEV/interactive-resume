import { Compare } from '@/components/ui/aceternity/compare';

import tsFront from '@/assets/images/Compare/tsFront.png';
import javaBack from '@/assets/images/Compare/javaBack.png';

// const isMobile = window.innerWidth < 768;

export function CompareDemo() {
  return (
    <div>
      <Compare
        firstImage={tsFront}
        secondImage={javaBack}
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="w-[400px] h-[400px] overflow-hidden'"
        slideMode="hover"
        // autoplay={isMobile}
      />
    </div>
  );
}
