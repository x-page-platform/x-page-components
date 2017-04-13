import EventEmitter from 'events';
import defaults from 'lodash/defaults';
import assign from 'lodash/assign';
import axios from 'axios';

let _uuid = 0;
function uuid() {
  return _uuid++;
}

let cache = {};

export class Record extends EventEmitter {
  constructor(data) {
    super();
    this.data = data;
  }
}

export default class DataSet extends EventEmitter {
  defaults() {
    return {
      // 自动分页
      autoPage: false,
      // 自动创建一条记录
      autoCreate: true,
      // 自动查询
      autoQuery: false,
      // 分页大小
      pageSize: 10,
      // 查询的url
      queryUrl: '',
      // 是否可选，grid组件使用
      selectable: false,
      // post url
      postUrl: '',
      // 查询的dataset
      queryDataSet: null,
      // cascade dataset
      bindDataSet: null,
      // cascade field
      bindDataSetField: ''
    };
  }

  constructor(config) {
    super();
    this.config = defaults({}, config, this.defaults());
    // 当前记录index
    this.index = 0;
    // 当前分页
    this.page = 1;
    // 记录
    this.records = [];
    // 绑定的组件
    this.bindCmps = [];

    // add this to cache
    this.id = config.id || uuid();
    if (cache[this.id]) {
      throw new Error(`dataset id has been created, id: ${this.id}`);
    } else {
      cache[this.id] = this;
    }

    if (config.bindDataSet) {
      this.config.bindDataSet = cache[config.bindDataSet];
    }

    if (config.queryDataSet) {
      this.config.queryDataSet = cache[config.queryDataSet];
    }

    if (config.data) {
      this.create();
    }
  }

  /**
   * add record
   */
  add(record) {
    if (record instanceof Record) {
      this.records.push(record);
    } else {
      this.records.push(new Record(record));
    }
  }

  /**
   * @param record
   */
  remove(record) {
    this.records.splice(this.findIndex(record), 1);
  }

  /**
   * remove all record
   */
  removeAll() {
    this.records = [];
  }

  /**
   * create record
   * @return record
   */
  create() {
    this.add(new Record(this.config.data));
  }

  /**
   * return current record
   * @return record
   */
  getCurrentRecord() {
    return this.records[this.index];
  }

  getCurrentJson() {
    return this.getCurrentRecord().data;
  }

  /**
   * locate index to record
   * @param index
   */
  locate(index) {
    this.emit('indexChange');
    this.index = index;
  }

  /**
   * @param columnName
   * @param value
   * @return record
   */
  findRecordByName(name, value) {
    return this.records.find(record => {
      return value === record.get(name);
    });
  }

  findIndex(record) {
    return this.records.indexOf(record);
  }

  /**
   * @param page
   */
  goPage() {

  }

  prepareQueryParams() {
    let params = {};
    const { bindDataSet, bindDataSetField, queryDataSet, autoPage, pageSize } = this.config;
    if (queryDataSet) {
      assign(params, queryDataSet.getCurrentJson());
    }
    if (bindDataSet && bindDataSetField) {
      assign(params, { [bindDataSetField]: bindDataSet.getCurrentJson[bindDataSetField] });
    }
    if (autoPage) {
      assign(params, { pageSize, page: this.page });
    }
    return params;
  }

  preparePostData() {
    return this.getCurrentJson();
  }

  /**
   * query server data
   */
  query() {
    this.emit('beforeAjax');
    let params = this.prepareQueryParams();

    axios.get(this.config.queryUrl, {
      params
    }).then(response => {
      if (response.status === 200) {
        console.log(response.data);
      }
    }).catch((e) => {
      console.log(e);
    });
  }

  /**
   * post data to server
   */
  post() {
    this.emit('beforeAjax');
    let data = this.preparePostData();
    axios.post(this.config.postUrl, data)
      .then(response => {
        console.log(response);
      })
      .catch(e => {
        console.log(e);
      });
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

  /**
   * destory dataset
   */
  destory() {

  }
}
