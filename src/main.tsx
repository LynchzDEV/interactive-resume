import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import BackgroundBoxesDemo from './pages/Boxes';
import BackgroundBeamsWithCollisionDemo from './pages/Beam';
// import BackgroundBeamsDemo from './pages/MoreBeam';
import AuroraBackgroundDemo from './pages/Aurora';
// import Hero from './pages/Hero';
// import { HeroParallaxDemo } from './pages/HeroPallalax';
import { AppleCardsCarouselDemo } from './pages/Carousel';
import { TimelineDemo } from './pages/Timeline';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuroraBackgroundDemo />
    {/* <Hero /> */}
    {/* <BackgroundBeamsDemo /> */}
    {/* <HeroParallaxDemo /> */}
    <AppleCardsCarouselDemo />
    <TimelineDemo />
    <BackgroundBeamsWithCollisionDemo />
  </StrictMode>
);
