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
      if (expander[i]) {
        content.style.display = 'block';
        chevron.style.transform = 'rotate(90deg)';
      }
      else {
        expander[i] = 0;
      }

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
          <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>JS: Numbers</h4>
          <div class="question-content">
            <p></p>
            <pre class="language-javascript"><code class="code">

            </code></pre>
          </div>
        </div>

        <div class="question">
          <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>JS: IIFE</h4>
          <div class="question-content">
            <p>Print the numbers 1 to 10, 500ms apart</p>
            <pre class="language-javascript"><code class="code">
// fails
for (var i = 0; i < 10; i++) {
  setTimeout(function(){
    console.log(i + 1);
  }, 500 * i);
}

// works with block-scoped let variable i
// using let to define i, i gets a new closure for every loop iteration
// https://stackoverflow.com/questions/16473350/let-keyword-in-the-for-loop
for (let i = 0; i < 10; i++) {
  setTimeout(function(){
    console.log(i + 1);
  }, 500 * i);
}

// works with internally invoked function
for (var i = 0; i < 10; i++) {
  (function(j){
    setTimeout(function(){
      console.log(j + 1);
    }, 500 * j);
  })(i);
}
            </code></pre>
          </div>
        </div>

        <div class="question">
          <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>JS: Hoisting</h4>
          <div class="question-content">
            <p>The JavaScript engine "hoists" or moves variables and functions to the top of the code.
            Variables are hoisted and are set to the primitive 'undefined'. They are given they value when that
            line is reached.Functions are hoisted and are given their value defined by the code they contain.</p>
            <pre class="language-javascript"><code class="code">
// this code will successfully execute function b() on line 1
// even though it hasn't run the code that defines function b
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
            <p>https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign</p>
            <pre class="language-javascript"><code class="code">

            </code></pre>
          </div>
        </div>

        <div class="question">        
          <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Store an object in HTML5 localStorage</h4>
          <div class="question-content">          
            <!--<p><a href="https://stackoverflow.com/questions/2010892/storing-objects-in-html5-localstorage?noredirect=1&lq=1">
              Stackoverflow
            </a></p>-->
            <p>Since all localStorage values are stored as strings, use JSON.stringify to convert the<br>
            object to a string when storing it, and JSON.parse to parse the string to an object when retrieving it</p>
            <pre class="language-javascript"><code class="code">
let obj = {a: 1, b: 'two', c: [1,2,3]};
localStorage.setItem('obj', JSON.stringify(obj));
let fetchedObj = JSON.parse(localStorage.getItem('obj'));
// to remove the value from localStorage
localStorage.removeItem('obj');
            </code></pre>
          </div>
        </div>

        <div class="question">        
          <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>JS: Reverse words in place</h4>
          <div class="question-content">
            <p>Given a sentence string, reverse all words in the sentence keeping their order</p>
            <pre class="language-javascript"><code class="code">
function reverseInPlace(str) {
  return str.split(' ').reverse().join(' ').split('').reverse().join('');
}
            </code></pre>
          </div>
        </div>

        <div class="question">        
          <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>JS strict mode</h4>
          <div class="question-content">
            <p>Strict mode throws errors that are otherwise kept silent</p>
            <pre class="language-javascript"><code class="code">
// usage (must be first statement)
'use strict';

// 1) a variable must be declared before it is used
var person;
persom = { };   // misspelled, throws an error

// 2) all property names in an object must be unique
var o = { p: 1, p: 2 }    // throws an error

// 3) ES6 strict mode forbids properties on primitives 
// or assignment to a non-writable global
false.true = '';    // error
(14).sailing = 'home';    // error
"with".you = 'far away;   // error
let undefined = 5; // throws a TypeError
let Infinity = 5; // throws a TypeError

// 4) no leading zeros on ints
var sum = 015 + // !!! syntax error
          197 +
          142;

// 5) strict mode can be function level
function strict() {
  // Function-level strict mode syntax
  'use strict';
  function nested() { return 'And so am I!'; }
  return "Hi!  I'm a strict mode function!  " + nested();
}
function notStrict() { return "I'm not strict."; }
            </code></pre>
          </div>
        </div>        

        <div class="question">
          <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>JS array methods</h4>
          <div class="question-content">

          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.concat()</h4>
            <div class="question-content">
              <p>Joins two or more arrays. Doesn't change the existing array, just returns a new joined array</p>
              <pre class="language-javascript"><code class="code">
// arr1, arr2, arr3 remain unchanged
let arr1 = ['Four', 'score', 'and'];
let arr2 = ['seven', 'years', 'ago'];
let arr3 = ['our', 'fathers', 'brought', 'forth'];
let concatArr = arr1.concat(arr2, arr3);
// concatArr = ["Four", "score", "and", "seven", "years", "ago", "our", "fathers", "brought", "forth"]
              </code></pre>
            </div>
          </div>

          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>FINISHArray.prototype.copyWithin()</h4>
            <div class="question-content">
              <p>Copies array elements within the array, to and from specified positions.<br>
              Returns the new array and modifies original array.</p>
              <pre class="language-javascript"><code class="code">
// target: (req'd) The index position to copy the elements to
// start Optional. The index position to start copying elements from  (default is 0)
// end Optional. The index position to stop copying elements from (default is array.length)
array.copyWithin(target, start, end)
              </code></pre>
            </div>
          </div>

          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.every()</h4>
            <div class="question-content">
              <p>Tests whether all array elements pass a condition</p>
              <pre class="language-javascript"><code class="code">
arr.every((el, index, arr) => condition);

// examples
[40, 50, 60, 70, 80].every(el => el >= 10); // true
[40, 50, 60, 70, 80].every(el => el >= 60); // false
              </code></pre>
            </div>
          </div>

          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.fill()</h4>
            <div class="question-content">
              <p>Fills array elements with a static value</p>
              <pre class="language-javascript"><code class="code">
arr.fill(value, start, end)  // start and end are optional, end is non-inclusive

//example
[1, 2, 3].fill(1);  // returns in [1, 1, 1]
[3, 4, 5].fill(6, 0, 1)   // returns [6, 4, 5]
              </code></pre>
            </div>
          </div>

          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.filter()</h4>
            <div class="question-content">
              <p>Return an array of all values that meet a condition</p>
              <pre class="language-javascript"><code class="code">
let products = [
  {name:'cucumber', type:'fruit'},
  {name:'banana', type:'fruit'},
  {name:'celery', type:'vegetable'},
  {name:'orange', type:'fruit'},
];


// ES5 for loop
let fruits = [ ];
for (var i=0; i < products.length; i++) {
  if (products[i].type === 'fruit') {
    fruits.push(products[i]);
  }
}

// ES6 filter
let fruits = products.filter(product => product.type === 'fruit');
              </code></pre>
            </div>
          </div>

          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.()</h4>
            <div class="question-content">
              <p></p>
              <pre class="language-javascript"><code class="code">

              </code></pre>
            </div>
          </div>

          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.()</h4>
            <div class="question-content">
              <p></p>
              <pre class="language-javascript"><code class="code">

              </code></pre>
            </div>
          </div>

          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.()</h4>
            <div class="question-content">
              <p></p>
              <pre class="language-javascript"><code class="code">

              </code></pre>
            </div>
          </div>

          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.()</h4>
            <div class="question-content">
              <p></p>
              <pre class="language-javascript"><code class="code">

              </code></pre>
            </div>
          </div>

          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.()</h4>
            <div class="question-content">
              <p></p>
              <pre class="language-javascript"><code class="code">

              </code></pre>
            </div>
          </div>

          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.()</h4>
            <div class="question-content">
              <p></p>
              <pre class="language-javascript"><code class="code">

              </code></pre>
            </div>
          </div>

          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.()</h4>
            <div class="question-content">
              <p></p>
              <pre class="language-javascript"><code class="code">

              </code></pre>
            </div>
          </div>

          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.()</h4>
            <div class="question-content">
              <p></p>
              <pre class="language-javascript"><code class="code">

              </code></pre>
            </div>
          </div>

          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.()</h4>
            <div class="question-content">
              <p></p>
              <pre class="language-javascript"><code class="code">

              </code></pre>
            </div>
          </div>

          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.()</h4>
            <div class="question-content">
              <p></p>
              <pre class="language-javascript"><code class="code">

              </code></pre>
            </div>
          </div>

          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.()</h4>
            <div class="question-content">
              <p></p>
              <pre class="language-javascript"><code class="code">

              </code></pre>
            </div>
          </div>

          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.()</h4>
            <div class="question-content">
              <p></p>
              <pre class="language-javascript"><code class="code">

              </code></pre>
            </div>
          </div>

          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.()</h4>
            <div class="question-content">
              <p></p>
              <pre class="language-javascript"><code class="code">

              </code></pre>
            </div>
          </div>

          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.()</h4>
            <div class="question-content">
              <p></p>
              <pre class="language-javascript"><code class="code">

              </code></pre>
            </div>
          </div>

          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.()</h4>
            <div class="question-content">
              <p></p>
              <pre class="language-javascript"><code class="code">

              </code></pre>
            </div>
          </div>

          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.()</h4>
            <div class="question-content">
              <p></p>
              <pre class="language-javascript"><code class="code">

              </code></pre>
            </div>
          </div>

          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.()</h4>
            <div class="question-content">
              <p></p>
              <pre class="language-javascript"><code class="code">

              </code></pre>
            </div>
          </div>

          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.()</h4>
            <div class="question-content">
              <p></p>
              <pre class="language-javascript"><code class="code">

              </code></pre>
            </div>
          </div>

          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.()</h4>
            <div class="question-content">
              <p></p>
              <pre class="language-javascript"><code class="code">

              </code></pre>
            </div>
          </div>

          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.()</h4>
            <div class="question-content">
              <p></p>
              <pre class="language-javascript"><code class="code">

              </code></pre>
            </div>
          </div>

          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.()</h4>
            <div class="question-content">
              <p></p>
              <pre class="language-javascript"><code class="code">

              </code></pre>
            </div>
          </div>

          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.()</h4>
            <div class="question-content">
              <p></p>
              <pre class="language-javascript"><code class="code">

              </code></pre>
            </div>
          </div>

          </div>
        </div>

        <div class="question">        
          <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Python</h4>
          <div class="question-content">
            <p>Given a sentence string, reverse all words in the sentence keeping their order</p>
            <pre class="language-python"><code class="code">
class TempTracker:

    def __init__(self):

        # for mode
        self.occurrences = [0] * (111)  # list of 0s at indices 0..110
        self.max_occurrences = 0
        self.mode = None

        # for mean
        self.total_numbers = 0
        self.total_sum = 0.0  # mean should be float
        self.mean = None

        # for min and max
        self.min_temp = float('inf')
        self.max_temp = float('-inf')

    def insert(self, temperature):

        # for mode
        self.occurrences[temperature] += 1
        if self.occurrences[temperature] > self.max_occurrences:
            self.mode = temperature
            self.max_occurrences = self.occurrences[temperature]

        # for mean
        self.total_numbers += 1
        self.total_sum += temperature
        self.mean = self.total_sum / self.total_numbers

        # for min and max
        if temperature > self.max_temp:
            self.max_temp = temperature
        if temperature < self.min_temp:
            self.min_temp = temperature

    def get_max(self):
        return self.max_temp

    def get_min(self):
        return self.min_temp

    def get_mean(self):
        return self.mean

    def get_mode(self):
        return self.mode
            </code></pre>
          </div>
        </div>

      </div>
    `;
    $id('view').innerHTML = html;
  }
}
