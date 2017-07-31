import { $id, $cl } from '../../js/util';

export class CS {
  constructor() {
    this.render();

    // track expanded questions
    let expander = JSON.parse(window.localStorage.getItem('expander')) || [];

    for (var i=0; i<$cl('question').length; i++) {
      let q = $cl('question')[i];
      let title = q.getElementsByClassName('question-title')[0];
      let content = q.getElementsByClassName('question-content')[0];
      let chevron = q.getElementsByClassName('question-chevron')[0];
      
      // expand if 1
      if (expander[i]) content.style.display = 'block';
      else expander[i] = 0;

      let j = i;
      title.onclick = () => {
        if (content.style.display == '' || content.style.display == 'none') {
          content.style.display = 'block';
          chevron.style.transform = 'rotate(90deg)';
          expander[j] = 1;          
        }
        else if (content.style.display == 'block') {
          content.style.display = 'none';
          chevron.style.transform = 'rotate(0deg)';
          expander[j] = 0;
        }
        window.localStorage.setItem('expander', JSON.stringify(expander));   
      }
    }
  }

  render() {
    let html = `
      <div id="cs">

        <div class="question">
          <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>JS: Hoisting</h4>
          <div class="question-content">
            <p>The JavaScript engine "hoists" or moves variables and functions to the top of the code.
            Variables are hoisted and are set to the primitive 'undefined'. They are given they value when that
            line is reached.Functions are hoisted and are given their value defined by the code they contain.</p>
            <pre class="language-javascript"><code class="code">
// this code will successfully execute function b() on line 1 even though it hasn't run the code that defines function b
b();
function b() {  console.log('called b'); }

// console.log(a) will output a value of undefined
console.log(a);
var a  = 'Hello World!';

// this code throws an "Uncaught RefereceError: c is not defined"
console.log(c);
            </code></pre>
          </div>
        </div>

        <div class="question">        
          <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>JS: Deep copy an object</h4>
          <div class="question-content">          
            <p></p>
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
