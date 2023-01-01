import { ReactElement } from 'react';

export interface BaseBlockParams<T> {
  id: string;
  fields: T;
}

type WatchFn<Fields> = (fields: Fields) => void;

export interface IBlock {
  getId: () => string;
  render: () => ReactElement;
  renderSetting: () => ReactElement;
  subscribe: (fields: any) => () => void;
  update: (newFields: any) => void;
}

export class Block<Fields> implements IBlock {
  id: string;
  fields: Fields;
  watcher: WatchFn<typeof this.fields>[] = [];
  constructor({ id, fields }: BaseBlockParams<Fields>) {
    this.id = id;
    this.fields = fields;
  }

  getId = () => this.id;

  subscribe = (fn: WatchFn<typeof this.fields>) => {
    this.watcher = [...this.watcher, fn];

    return () => {
      this.watcher = this.watcher.filter((item) => item !== fn);
    };
  };

  update = (newFields: typeof this.fields) => {
    this.fields = newFields;
    this.watcher.forEach((fn) => fn(newFields));
  };

  render = () => <div></div>;

  renderSetting = () => <div>세팅페이지</div>;
}
