import { Block } from '../Block';

interface Params {
  text: string;
}

export class TextBlock implements Block {
  text: string;
  constructor({ text }: Params) {
    this.text = text;
  }

  render = () => <p>{this.text}</p>;
}
