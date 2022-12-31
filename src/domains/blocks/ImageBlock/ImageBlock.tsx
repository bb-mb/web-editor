import Image from 'next/image';
import { BaseBlockParams, Block } from '../Block';
import { ImageBlockSetting } from './ImageBlock.setting';

export interface ImageFields {
  src: string;
}

export class ImageBlock implements Block {
  src: string;
  id: string;
  constructor({ id, src }: ImageFields & BaseBlockParams) {
    this.id = id;
    this.src = src;
  }

  render = () => <Image src={this.src} alt="img" width={200} height={100} />;

  renderSetting = () => <ImageBlockSetting initValue={{ src: this.src }} />;
}
