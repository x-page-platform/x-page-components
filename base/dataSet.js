import EventEmitter from 'events';

export class DataSet extends EventEmitter {
  constructor(config) {
    super();
    this.data = config.data || {};
  }

  set() {

  }

  get() {

  }
}
