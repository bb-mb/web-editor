import { ImageBlock, TextBlock } from '@/domains/blocks';

export const dummy = [
  new ImageBlock({
    id: 'img1',
    fields: { src: '/next.svg', width: '200', height: '200' },
  }),
  new TextBlock({
    id: 'text1',
    fields: { text: '텍스트입니다.', color: 'blue' },
  }),
  new ImageBlock({
    id: 'img2',
    fields: { src: '/vercel.svg', width: '100', height: '200' },
  }),
  new TextBlock({
    id: 'text2',
    fields: { text: '텍스트입니다.2', color: '#f00' },
  }),
];
