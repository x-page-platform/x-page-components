import DataSetManager from './dataSetManager';

export default class Component {
  constructor(config) {
    this.dataSet = DataSetManager.get(config.bindDataSet);
    this.dataSetField = config.bindField;
    this.initDataSetEvents();
    this.initSelfEvents();
  }

  initDataSetEvents() {
    this.listenTo(this.dataSet, 'change', this.onDataSetChange);
    this.listenTo(this.dataSet, `change:${this.dataSetField}`, this.onDataSetFieldChange);
  }

  $(selector) {
    return this.$el.querySelector(selector);
  }

  initSelfEvents() {

  }

  toElement(templateHtml) {
    let div = document.createElement('div');
    div.innerHTML = templateHtml;
    this.$el = div;
  }

  /**
   * 子类继承
   * 当DS数据变化时进行处理
   */
  onDataSetChange() {

  }

  /**
   * 子类继承
   * 当DS绑定的Field变化时进行处理
   */
  onDataSetFieldChange() {

  }
}
