import { BaseBlockParams, Block } from '../Block';
import { TextBlockSetting } from './TextBlock.setting';

export interface TextFields {
  text: string;
  color: string;
}

export class TextBlock extends Block<TextFields> {
  constructor({ id, fields }: BaseBlockParams<TextFields>) {
    super({ id, fields });
  }

  render = () => <p style={{ color: this.fields.color }}>{this.fields.text}</p>;
  renderSetting = () => (
    <TextBlockSetting update={this.update} initValue={this.fields} />
  );
}
