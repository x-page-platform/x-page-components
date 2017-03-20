import config from './config';
import { parse } from './parser/index';

const html = parse(config);
console.log(html);
