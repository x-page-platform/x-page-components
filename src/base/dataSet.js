import EventEmitter from 'events';

export class DataSet extends EventEmitter {
  defaults() {
    return {
      autoCreate: true,
      autoQuery: false,
      pageSize: 10,
      queryUrl: '',
      selectable: false,
      postUrl: '',
      queryDataSet: null,
      bindDataSet: null,
      bindDataSetField: ''
    };
  }

  constructor(config) {
    super();
    this.data = config.data || {};
  }

  /**
   * add record
   */
  add() {

  }

  /**
   * @param record
   */
  remove() {

  }

  /**
   * remove all record
   */
  removeAll() {

  }

  /**
   * create record
   * @return record
   */
  create() {

  }

  /**
   * return current record
   * @return record
   */
  getCurrentRecord() {

  }

  /**
   * locate index to record
   * @param index
   */
  locate() {

  }

  /**
   * @param columnName
   * @param value
   * @return record
   */
  find() {

  }

  /**
   * @param page
   */
  goPage() {

  }

  /**
   * query server data
   */
  query() {

  }

  /**
   * post data to server
   */
  post() {

  }

  /**
   * refresh
   */
  refresh() {

  }

  /**
   * @param record
   * select record
   */
  select() {

  }

  /**
   * @param record
   * unselect record
   */
  unSelect() {

  }

  /**
   * un select all record
   */
  unSelectAll() {

  }

  /**
   * get selected record
   */
  getSelected() {

  }
}
