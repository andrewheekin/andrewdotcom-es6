import { $id, $cl } from '../../js/util';

export class CS {
  constructor() {
    this.render();

    for (var i=0; i<$cl('question').length; i++) {
      let q = $cl('question')[i];
      let title = q.getElementsByClassName('question-title')[0];
      let content = q.getElementsByClassName('question-content')[0];
      let chevron = q.getElementsByClassName('question-chevron')[0];
      title.onclick = () => {
        if (content.style.display == '' || content.style.display == 'none') {
          content.style.display = 'block';
          chevron.style.transform = 'rotate(90deg)';
        }
        else if (content.style.display == 'block') {
          content.style.display = 'none';
          chevron.style.transform = 'rotate(0deg)';
        }
      }
    }
  }

  render() {
    let html = `
      <div id="cs">
        <div class="question">
          <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Deep copy a JS object</h4>
          <div class="question-content">
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
        </div>
        <div class="question">        
          <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Deep copy a JS object</h4>
          <div class="question-content">          
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
        </div>
      </div>
    `;
    $id('view').innerHTML = html;
  }
}
