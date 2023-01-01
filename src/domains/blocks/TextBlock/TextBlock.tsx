import { BaseBlockParams, Block } from '../Block';
import { TextBlockSetting } from './TextBlock.setting';

export interface TextFields {
  text: string;
}

export class TextBlock implements Block {
  fields: TextFields;
  id: string;
  constructor({ id, fields }: { fields: TextFields } & BaseBlockParams) {
    this.id = id;
    this.fields = fields;
  }

  render = () => <p>{this.fields.text}</p>;

  renderSetting = () => <TextBlockSetting initValue={this.fields} />;
}
