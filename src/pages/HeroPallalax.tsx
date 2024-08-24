'use client';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HeroParallax } from '../components/ui/aceternity/hero-parallax';

export function HeroParallaxDemo() {
  return (
    <Router>
      <HeroParallax products={products} />
    </Router>
  );
}

export const products = [
  {
    title: 'Moonbeam',
    link: 'https://gomoonbeam.com',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/moonbeam.png',
  },
  {
    title: 'Cursor',
    link: 'https://cursor.so',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/cursor.png',
  },
  {
    title: 'Rogue',
    link: 'https://userogue.com',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/rogue.png',
  },
  {
    title: 'Editorially',
    link: 'https://editorially.org',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/editorially.png',
  },
  {
    title: 'Invoker Labs',
    link: 'https://invoker.lol',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/invoker.png',
  },
  {
    title: 'E Free Invoice',
    link: 'https://efreeinvoice.com',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png',
  },
];
