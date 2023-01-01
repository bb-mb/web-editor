import Image from 'next/image';
import { BaseBlockParams, Block } from '../Block';
import { ImageBlockSetting } from './ImageBlock.setting';

export interface ImageFields {
  src: string;
}

export class ImageBlock implements Block {
  id: string;
  fields: ImageFields;
  constructor({ id, fields }: { fields: ImageFields } & BaseBlockParams) {
    this.id = id;
    this.fields = fields;
  }

  render = () => (
    <Image src={this.fields.src} alt="img" width={200} height={100} />
  );

  renderSetting = () => <ImageBlockSetting initValue={this.fields} />;
}
