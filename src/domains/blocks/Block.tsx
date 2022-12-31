export interface BaseBlockParams {
  id: string;
}

export abstract class Block {
  id: string;
  constructor({ id }: BaseBlockParams) {
    this.id = id;
  }

  render = () => <div></div>;
}
