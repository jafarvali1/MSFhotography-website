'use client';

import React from 'react';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-screen flex items-center justify-center">
      <InfiniteMovingCards items={testimonialsWithImages} direction="right" speed="slow" />
    </div>
  );
}

const testimonialsWithImages = [
  {
    quote:
      "Working with Malik was a delightful experience. Very sincere and professional. He is open to creative ideas and collaborations. Good working experience overall.",
    name: "Ananthika",
    title: "Outdoor Shoot",
    image: "/images/Ananthika.jpg", // Add image path
  },
  {
    quote:
      "It was soo easy working with Malik.He knows his craft and is really good with the lights, and the photos turned out amazing.He has endless patience, and I never felt awkward asking for more shots or changes. Even though I&apos;m a shy person, he made me feel comfortable in front of the camera, which made the whole experience super relaxed and fun. I&apos;m sure he is going to be a big name soon, so get your shoot done before his prices go u.",
    name: "Lekhya",
    title: "WildLife Shoot",
    image: "/images/Lekhya.jpg", // Add image path
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
    image: "/images/Sarya-Indoor.jpg", // Add image path
  },
  // {
  //   quote:
  //     "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
  //   name: "Jane Austen",
  //   title: "Pride and Prejudice",
  //   image: "/images/jane-austen.jpg", // Add image path
  // },
  // {
  //   quote:
  //     "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
  //   name: "Herman Melville",
  //   title: "Moby-Dick",
  //   image: "/images/herman-melville.jpg", // Add image path
  // },
];

export default InfiniteMovingCardsDemo;
