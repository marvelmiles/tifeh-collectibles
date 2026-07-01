import type { Testimonial, Stat } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      'I love my dress, everyone loves it as well I told my HR that a friend of mine made it, she doesn’t even need her measurements before she makes it for her, I’ll give her yojr number If she wants it  and she finally said, please give me her number 🥰😂',
    name: 'Tiana',
  },
  {
    id: 't2',
    quote:
      'You need to be out there, your sowing is nice, fine and neat',
    name: 'Victoria',
  },
  {
    id: 't3',
    quote:
      'This two piece looks so amazing, at this point i will finish all my money on clothes, the fact that it dosent need any adjustment, and what i ordered is what i got.',
    name: 'Omolola',
  },
  {
    id: 't4',
    quote:
      'It is really nice, i love my two piece, it suits me perfectly, and i like the color on my skin.',
    name: 'Chiamaka',
  },
];

export const stats: Stat[] = [
  { value: 10, suffix: '+', label: 'Years in the atelier' },
  { value: 250, suffix: '+', label: 'Garments hand-finished' },
  { value: 5, label: 'Runway showcases' },
  { value: 100, suffix: '%', label: 'Made to measure' },
];