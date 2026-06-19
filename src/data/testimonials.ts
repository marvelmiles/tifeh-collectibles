import type { Testimonial, Stat } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      'My wedding gown felt like it had always existed and was simply waiting for me. The fittings were the calmest part of the whole celebration.',
    name: 'Adaeze O.',
    role: 'Bride · Gilded Vows',
  },
  {
    id: 't2',
    quote:
      'Tifeh translated my mother’s aso-oke into something I will actually wear again. It honours where I come from without ever feeling like a costume.',
    name: 'Ngozi A.',
    role: 'Private client · Traditional',
  },
  {
    id: 't3',
    quote:
      'The tailoring is impeccable. I walked into the boardroom and the room shifted. That is what good clothes are supposed to do.',
    name: 'Tunde B.',
    role: 'Bespoke · Boardroom Noir',
  },
  {
    id: 't4',
    quote:
      'Working with the atelier felt like a genuine collaboration. They listened, then gave me something better than I could have described.',
    name: 'Sarah M.',
    role: 'Custom commission',
  },
];

export const stats: Stat[] = [
  { value: 12, suffix: '+', label: 'Years in the atelier' },
  { value: 480, suffix: '+', label: 'Garments hand-finished' },
  { value: 9, label: 'Runway showcases' },
  { value: 100, suffix: '%', label: 'Made to measure' },
];
