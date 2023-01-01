import { BLOCK } from '@/contants/block';
import { ImageBlock } from '../ImageBlock';
import { TextBlock } from '../TextBlock';

export const createDefaultBlock = (id: BLOCK) => {
  switch (id) {
    case BLOCK.TEXT:
      return new TextBlock({
        id: `${Date.now()}`,
        fields: {
          text: '텍스트입니다.',
          color: 'black',
        },
      });
    case BLOCK.IMAGE:
      return new ImageBlock({
        id: `${Date.now()}`,
        fields: { src: '/vercel.svg', width: '200', height: '200' },
      });
    default:
      return null;
  }
};
