export interface BaseBlockParams {
  id: string;
}

export abstract class Block {
  id: string;
  constructor({ id }: BaseBlockParams) {
    this.id = id;
  }

  render = () => <div></div>;

  renderSetting = () => <div>세팅페이지</div>;
}
