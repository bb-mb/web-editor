import { BaseBlockParams, Block } from '../Block';
import { TextBlockSetting } from './TextBlock.setting';

export interface TextFields {
  text: string;
  color: string;
}

export class TextBlock extends Block<TextFields> {
  render = () => <p style={{ color: this.fields.color }}>{this.fields.text}</p>;
  renderSetting = () => (
    <TextBlockSetting
      updateBlock={this.update}
      deleteBlock={this.delete}
      initValue={this.fields}
    />
  );
}
