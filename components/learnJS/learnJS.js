import { $id } from '../../js/util';

export function learnJS() {

  let html = `
    <div id="learnJS">
      <h3>Deep copy a JS object</h3>
      <p>Test test test</p>
      <pre class="language-javascript"><code class="code">
        let copy = () => {
          let extended = {};
          for (key in arguments)
        }
        function myFunc() {
          console.log('a');
        }
      </code></pre>
    </div>
  `;

  $id('view').innerHTML = html;
}
