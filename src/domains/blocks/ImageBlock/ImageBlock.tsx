import { BaseBlockParams, Block } from '../Block';
import { ImageBlockSetting } from './ImageBlock.setting';

export interface ImageFields {
  src: string;
  width: string;
  height: string;
}

export class ImageBlock extends Block<ImageFields> {
  render = () => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={this.fields.src}
      alt="img"
      width={this.fields.width}
      height={this.fields.height}
    />
  );

  renderSetting = () => (
    <ImageBlockSetting
      deleteBlock={this.delete}
      updateBlock={this.update}
      initValue={this.fields}
    />
  );
}
