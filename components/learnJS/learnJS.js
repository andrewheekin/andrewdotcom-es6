import 'prismjs';
import { $id } from '../../js/util';

export function learnJS() {
  $id('code').innerHTML = Prism.highlight($id('code').innerHTML, Prism.languages.javascript);
}