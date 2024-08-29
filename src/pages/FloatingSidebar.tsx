import { FloatingNav } from '@/components/ui/aceternity/floating-navbar';
import {
  IconHome,
  IconUser,
  IconAlignJustified,
  IconPresentationAnalytics,
  IconCircleLetterV
} from '@tabler/icons-react';
import { animate } from 'framer-motion';

export function FloatingNavDemo() {
  const navItems = [
    {
      name: 'Home',
      link: '#home',
      icon: <IconHome className="h-6 w-6 text-white" />,
    },
    {
      name: 'About Me',
      link: '#about-me',
      icon: <IconAlignJustified className="h-6 w-6 text-white" />,
    },
    {
      name: 'Projects',
      link: '#projects',
      icon: (
        <IconPresentationAnalytics className="h-6 w-6 text-white" />
      ),
    },
    {
      name: 'Volunteer Experience',
      link: '#volunteer-experience',
      icon: <IconCircleLetterV className="h-6 w-6 text-white" />,
    },
    {
      name: 'Contact Me',
      link: '#contact-me',
      icon: (
        <IconUser className="h-6 w-6 text-white" />
      ),
    },
  ];

  const handleNavItemClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(link);
    if (targetElement) {
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      animate(window.scrollY, targetPosition, {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        onUpdate: (latest) => window.scrollTo(0, latest),
      });
    }
  };

  return (
    <div className="relative w-full">
      <FloatingNav
        navItems={navItems.map((item) => ({
          ...item,
          onClick: (e: React.MouseEvent) => handleNavItemClick(e, item.link),
        }))}
      />
    </div>
  );
}
