import { BaseBlockParams, Block } from '../Block';
import { TextBlockSetting } from './TextBlock.setting';

export interface TextFields {
  text: string;
}

export class TextBlock extends Block<TextFields> {
  constructor({ id, fields }: BaseBlockParams<TextFields>) {
    super({ id, fields });
  }

  render = () => <p>{this.fields.text}</p>;
  renderSetting = () => (
    <TextBlockSetting update={this.update} initValue={this.fields} />
  );
}
