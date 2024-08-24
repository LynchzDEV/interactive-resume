import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import BackgroundBeamsWithCollisionDemo from '@/pages/Beam';
import AuroraBackgroundDemo from '@/pages/Aurora';
import { AppleCardsCarouselDemo } from '@/pages/Carousel';
import { TimelineDemo } from '@/pages/Timeline';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuroraBackgroundDemo />
    <AppleCardsCarouselDemo />
    <TimelineDemo />
    <BackgroundBeamsWithCollisionDemo />
  </StrictMode>
);
