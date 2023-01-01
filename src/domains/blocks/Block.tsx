import { ReactElement } from 'react';

export interface BaseBlockParams<T> {
  id: string;
  fields: T;
}

interface Watch {
  action: 'update' | 'delete';
  listener: (block: IBlock) => void;
}

export interface IBlock {
  getId: () => string;
  render: () => ReactElement;
  renderSetting: () => ReactElement;
  subscribe: (fields: Watch) => () => void;
  update: (newFields: any) => void;
}

export class Block<Fields> implements IBlock {
  id: string;
  fields: Fields;
  watcher: Watch[] = [];
  constructor({ id, fields }: BaseBlockParams<Fields>) {
    this.id = id;
    this.fields = fields;
  }

  getId = () => this.id;

  subscribe = (watch: Watch) => {
    this.watcher = [...this.watcher, watch];

    return () => {
      this.watcher = this.watcher.filter((item) => item !== watch);
    };
  };

  update = (newFields: Fields) => {
    this.fields = newFields;
    this.watcher
      .filter((item) => item.action === 'update')
      .forEach((item) => item.listener(this));
  };

  delete = () => {
    this.watcher
      .filter((item) => item.action === 'delete')
      .forEach((item) => item.listener(this));
  };

  render = () => <div></div>;

  renderSetting = () => <div>세팅페이지</div>;
}
