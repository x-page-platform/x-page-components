import Component from '../base/component';
import templateHtml from './template.html';

export default class TextField extends Component {
  constructor(config) {
    super(config);
    this.type = config.type;
    this.label = config.label;
    this.toElement(templateHtml);
    this.$input = this.$('input');
  }

  initSelfEvents() {
    this.$input.addEventListener('input', () => { this.hander }, false);
  }

  onDataSetFieldChange(value) {
    this.$('input').val(value);
  }

  hander(e) {
    this.dataSet.set(this.bindDataSetField, e.target.value);
  }

  render() {
    this.$el.html(this.template(this));
    return this;
  }
}
