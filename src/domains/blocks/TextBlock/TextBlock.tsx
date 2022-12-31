import { BaseBlockParams, Block } from '../Block';
import { TextBlockSetting } from './TextBlock.setting';

export interface TextFields {
  text: string;
}

export class TextBlock implements Block {
  text: string;
  id: string;
  constructor({ id, text }: TextFields & BaseBlockParams) {
    this.id = id;
    this.text = text;
  }

  render = () => <p>{this.text}</p>;

  renderSetting = () => <TextBlockSetting initValue={{ text: this.text }} />;
}
