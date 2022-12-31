import Image from 'next/image';
import { Block } from '../Block';

interface Params {
  src: string;
}

export class ImageBlock implements Block {
  src: string;
  constructor({ src }: Params) {
    this.src = src;
  }

  render = () => <Image src={this.src} alt="img" />;
}
