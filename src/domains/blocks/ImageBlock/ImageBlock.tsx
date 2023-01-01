import Image from 'next/image';
import { BaseBlockParams, Block } from '../Block';
import { ImageBlockSetting } from './ImageBlock.setting';

export interface ImageFields {
  src: string;
}

export class ImageBlock extends Block<ImageFields> {
  constructor({ id, fields }: BaseBlockParams<ImageFields>) {
    super({ id, fields });
  }

  render = () => (
    <img src={this.fields.src} alt="img" width={200} height={100} />
  );

  renderSetting = () => (
    <ImageBlockSetting update={this.update} initValue={this.fields} />
  );
}
