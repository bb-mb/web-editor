import { ImageBlock, TextBlock } from '@/domains/blocks';

export enum BLOCK {
  TEXT = 0,
  IMAGE = 1,
}

export const blockList = [
  {
    id: BLOCK.TEXT,
    type: 'text',
    name: '텍스트',
    block: TextBlock,
  },
  {
    id: BLOCK.IMAGE,
    type: 'image',
    name: '이미지',
    block: ImageBlock,
  },
];
