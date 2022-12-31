import Image from 'next/image';
import { BaseBlockParams, Block } from '../Block';

interface Params extends BaseBlockParams {
  src: string;
}

export class ImageBlock implements Block {
  src: string;
  id: string;
  constructor({ id, src }: Params) {
    this.id = id;
    this.src = src;
  }

  render = () => <Image src={this.src} alt="img" width={200} height={100} />;
}
