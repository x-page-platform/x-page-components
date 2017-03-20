import Component from '../base/component';
import template from './template.html';

/**
 * attributes {
 *    columns: number, // 列
 *    position: relative,absolute 相对定位还是绝对定位
 *    left: number,  相对父级的x坐标
 *    top: number,   相对父级的y坐标
 *    width: 100% String
 *    children: Array<Object>  子元素配置
 * }
 */
export default class Layout extends Component {
  constructor(config) {
    super();
    this.template = template;

    this.columns = config.columns || 0;
    this.position = config.position || 'relative';
    this.left = config.left || 0;
    this.top = config.top || 0;
    this.width = config.width || '100%';

    this.children = [];
    this.parseChildren(config.children);
  }

  setColumns() {

  }

  setWidth() {

  }

  setLeft() {

  }

  setTop() {

  }

  setPosition() {

  }

  addChild(child) {
    this.$el.append(child.$el);
  }

  resolveConfigToComponent(config) {
    return new Component(config)
  }

  /**
   * 把children配置转化成实例
   * @param {Array<Object>} childrenConfig 
   */
  parseChildren(childrenConfig) {
    if (childrenConfig) {
      childrenConfig.forEach((config) => {
        this.children.push(this.resolveConfigToComponent(config))
      })
    }
  }

  render() {
    this.$el.html(this.template(this));
    return this;
  }
}
