import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BackgroundBeamsDemo } from '@/pages/MoreBeam';
import { BackgroundBeamsWithCollisionDemo } from '@/pages/Beam';
import { AuroraBackgroundDemo } from '@/pages/Aurora';
import { AppleCardsCarouselDemo } from '@/pages/Carousel';
import { TimelineDemo } from '@/pages/Timeline';
import { FloatingNavDemo } from './pages/FloatingSidebar';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div id="home">
      <AuroraBackgroundDemo />
    </div>
    <div id="about-me">
      <BackgroundBeamsDemo />
    </div>
    <div id="projects">
      <AppleCardsCarouselDemo />
    </div>
    <div id="volunteer-experience">
      <TimelineDemo />
    </div>
    <div id="contact-me">
      <BackgroundBeamsWithCollisionDemo />
    </div>
    <FloatingNavDemo />
  </StrictMode>
);
