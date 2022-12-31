import { BaseBlockParams, Block } from '../Block';

interface Params extends BaseBlockParams {
  text: string;
}

export class TextBlock implements Block {
  text: string;
  id: string;
  constructor({ id, text }: Params) {
    this.id = id;
    this.text = text;
  }

  render = () => <p>{this.text}</p>;
}
