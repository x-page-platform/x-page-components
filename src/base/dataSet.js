import EventEmitter from 'events';
import DataSetManager from './dataSetManager';

export class DataSet extends EventEmitter {
  constructor(config) {
    super();
    this.data = config.data || {};
    this.queryDataSet = DataSetManager.get(config.queryDataSet);
  }

  set() {

  }

  get(field) {
    this.data[field];
  }

  getCurrentRecord() {

  }

  query() {
    let params;
    if (this.queryDataSet) {
      params = this.queryDataSet.getCurrentRecord();
    }
    setTimeout(() => {
      console.log(params);
    }, 100);
  }

  submit() {

  }
}
