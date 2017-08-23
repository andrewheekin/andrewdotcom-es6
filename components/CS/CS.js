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
<!-#########################################################-->
        <div class="question">
          <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>JS: Numbers</h4>
          <div class="question-content">
            <p></p>
            <pre class="language-javascript"><code class="code">

            </code></pre>
          </div>
        </div>
<!-#########################################################-->
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
<!-#########################################################-->
        <div class="question">
          <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>JS: Function arguments</h4>
          <div class="question-content">
            <p>The arguments object is being deprecated, avoid using it.<br>
            Arguments are the actual function values passed in (1, 5, 10, 15, 20), whereas parameters are variables in the method definition.</p>
            <pre class="language-javascript"><code class="code">
let x = sum(1, 5, 10, 15, 20);

function sum() {
  let sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
            </code></pre>
          </div>
        </div>        
<!-#########################################################-->
        <div class="question">
          <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>JS: Closures and let vs var</h4>
          <div class="question-content">
            <p></p>
            <pre class="language-javascript"><code class="code">
// populate an array of functions using var in the for loop
var a = [];
for (var i = 0; i < 5; i++) {
  a.push(function() { return i });
}

// call the functions stored in the array
a.map(function(f) { return f() }); // outputs [5, 5, 5, 5, 5]


// populate an array of functions using let in the for loop
var a = [];
for (let i = 0; i < 5; i++) {
  a.push(function() { return i });
}

// call the functions stored in the array
a.map(function(f) { return f() }); // outputs [0, 1, 2, 3, 4]
            </code></pre>
          </div>
        </div>
<!-#########################################################-->  
        <div class="question">
          <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Quicksort</h4>
          <div class="question-content">
            <p>Average and best case: O(nlogn)<br>
            Worst case: O(n^2)</p>            
            <pre class="language-javascript"><code class="code">
const arr = [1, 20, 13, 4, 16, 8, 9, 0, 16, 27];
let sortedArr = quickSort(arr, 0, arr.length - 1);

function quickSort(arr, left, right) {
  let index;
  if (arr.length > 1) {
    index = partition(arr, left, right);
    if (left < index - 1) {
      quickSort(arr, left, index - 1);
    }
    if (index < right) {
      quickSort(arr, index, right);
    }
  }
  return arr;
}

function partition(arr, left, right) {
  let pivot = arr[Math.floor((right + left) / 2)];
  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }
    while (arr[right] > pivot) {
      right--;
    }
    if (left <= right) {  // swap the left and right elements
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }
  return left;
}
            </code></pre>
          </div>
        </div>
<!-#########################################################-->  
        <div class="question">
          <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Bubble Sort</h4>
          <div class="question-content">
            <p>O(1) space complexity, an in-place algorithm<br>
            Θ(n^2) avg time complexity<br>
            O(n^2) worst time complexity<br>
            Ω(n) best time complexity</p>            
            <pre class="language-javascript"><code class="code">
const arr = [6,2,4,8,9,199,28,384,5];
function bubbleSort(arr) {
  for (var i=arr.length-1; i>=0; i--) {
    for (var j=1; j<=i; j++) {
      if (arr[j-1] > arr[j]) {
        var temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp;
      }
    }
  }
  return arr;
}
            </code></pre>
          </div>
        </div>        
<!-#########################################################-->      
        <div class="question">
          <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Binary Search</h4>
          <div class="question-content">
            <p>Return the index of the iputted key in the array (or -1 if it doesn't exist). Requires a sorted array.<br>
            Average and worst case: O(logn)</p>
            <pre class="language-javascript"><code class="code">
const arr = [1,2,3,4,5,8,9,10,16,27];
const key = 27;

function binarySearch(arr, key) {
    let lo = 0;  // index 0
    let hi = arr.length - 1;  // the last element
    while (lo <= hi) {
      let mid = ((lo + hi) >> 1); // bitwise right shift, finds middle rounding down, similar to Math.floor((lo + hi)/2)
      if (key > arr[mid]) 
        lo = mid + 1;
      else if (key < arr[mid])
        hi = mid - 1;
      else
        return mid;
    }
    return -1;
}


// recursive binary search
// initial call: recursiveBS(arr, key, arr.length-1, 0);
function recursiveBS(arr, key, hi, lo) {
  let mid = Math.floor((hi+lo)/2);
  if (key > arr[mid])
    return recursiveBS(arr, key, hi, mid+1);
  else if (key < arr[mid])
    return recursiveBS(arr, key, mid-1, lo);
  else if (key == arr[mid])
    return mid;
  else
    return -1;
}
            </code></pre>
          </div>
        </div>
<!-#########################################################-->
        <div class="question">
          <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Encode a string by consecutive characters</h4>
          <div class="question-content">
            <p>Write a function encodeString(str) such that an encoded string is returned with counted consecutive characters:<br>
            input: <code>aaabbccaaddefg</code><br>
            output: <code>a3b2c2a2d2e1f1g1</code></p>
            <pre class="language-javascript"><code class="code">
let str = 'aaabbccaaddefg';

// encodeString(str) should return a3b2c2a2d2e1f1g1

function encodeString(str) {
  let encoded = '';
  let consecutive = 0;
  for (let i=0; i < str.length; i++) {
    consecutive++;
    // if the next char is different than the current or is the last in the string, append this char to result
    if (i + 1 >= str.length || str[i] != str[i + 1]) {
      encoded += str[i] + consecutive;
      consecutive = 0;
    }
  }
  return encoded;
}
            </code></pre>
          </div>
        </div>
<!-#########################################################-->
        <div class="question">
          <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Making change for an amount</h4>
          <div class="question-content">
            <p>Find all ways to make change for an amount of money given an array of coin denominations</p>
            <pre class="language-javascript"><code class="code">
function makeChange(amount, denominations) {

  // intialize a zero-array of length amount
  // ES6: let changePossibilities = Array.from({length: amount}).fill(0);
  let changePossibilities = [];
  for (var i=0; i <= amount; i++) {
    changePossibilities[i] = 0;
  }

  // initialize
  changePossibilities[0] = 1;

  // loop over every coin denomination
  for (var i=0; i < denominations.length; i++) {
    let coin = denominations[i];
    // loop from the coin value up to the desired amount by increments of 1
    for (var j=coin; j <= amount; j++) {
      // save to the array's j element itself plus the value of the element one coin length back
      changePossibilities[j] += changePossibilities[j - coin];
    }
  }

  return changePossibilities[amount];
}
            </code></pre>
          </div>
        </div>        
<!-#########################################################-->
        <div class="question">
          <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Find all duplicates in an array</h4>
          <div class="question-content">
            <p>Write a function that returns all elements in an array that appear more than once and their count</p>
            <pre class="language-javascript"><code class="code">
// obj.keys complexity
// indexOf complexity in JS...
// sort it first... ?

const arr = [10, 4, 7, 2, 49, 4, 8, 10, 3, 5, 18, 4];

// variation 1: only 1 number appears more than once
// O(n), ES5
function findDupes(arr) {  // should output {10: 2, 4: 3}
  let unique = {};
  for (var i=0; i < arr.length; i++) {
    if (arr[i] in unique)
      return arr[i];
    else
      unique[arr[i]] = true;
  }
  return false;
}


// variation 2: sort the array then check if sequential elements are equal (returns first dupe occurence)
function findDupes(arr) {
  arr.sort((a,b) => a - b); // O(nlogn) sort, type of quicksort
  for (var i=0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i+1])
      return arr[i];
  }
  return false;
}
            </code></pre>
          </div>
        </div>        
<!-#########################################################-->
        <div class="question">
          <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>JS: Promises</h4>
          <div class="question-content">
            <p>An object or value that will be returned when an async operation completes.<br>
            Wrap async operations within a promise object whose parameter is an anonymous function with two callback parameters, resolve and reject.</p>
            <pre class="language-javascript"><code class="code">
let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success baby'); // pass 'success baby' (or other data from an async operation) to the data parameter of the .then() callback function
    reject('error'); // pass 'error' (or other errorr message) to the data parameter of the .catch() callback function
  }, 2000);
});

// resolve a promise with .then() and .catch()
myPromise.then((successMessage) => {
  console.log(successMessage);
})
.catch((failMessage) => {
  console.log(failMessage);
});
            </code></pre>

            <pre class="language-javascript"><code class="code">
// promises with ES7 async/await
function resolveAfter2Seconds(message) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(message);
    }, 2000);
  });
}


// two await statements returned in parallel, the async operations execute simultaneously
async function add1(x) {
  let a = resolveAfter2Seconds(20);
  let b = resolveAfter2Seconds(30);
  return x + await a + await b;
}
add1(10).then(v => console.log(v));  // prints 60 after 2 seconds


// two await statements in series, b waits to execute until a finishes
async function add2(x) {
    let a = await resolveAfter2Seconds(20);
    let b = await resolveAfter2Seconds(30);
    return x + a + b;
}
add2(10).then(v => console.log(v));  // prints 60 after 4 seconds
            </code></pre>
            <pre class="language-javascript"><code class="code">
// another async/await vs .then() example
// https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9

// simulated async operation that returns data after 2 seconds,
// in this case a variable value passed through the x parameter
function printAfter2Sec(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);  // x represents the value/object returned from the async operation
    }, 2000);
  });
}


// using .then()
function makeRequest() {
  printAfter2Sec('hello')
    .then(data => {
      console.log(data)
      return 'done';
    })
}
makeRequest();


// using async/await
async function makeRequest() {
  console.log(await printAfter2Sec('hello'))
  return 'done';
}
makeRequest();


// async/await in a function expression
const makeRequest = async () => {
  console.log(await printAfter2Sec('hello'))
  return 'done';
}
makeRequest();
            </code></pre>
          </div>
        </div>
<!-#########################################################-->
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
<!-#########################################################-->
        <div class="question">        
          <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Memoization</h4>
          <div class="question-content">          
            <p>Memoization relies on caching previously computed results to increase performance</p>
            <pre class="language-javascript"><code class="code">
// find the nth fibonacci number recursively
// O(2^n), terrible time complexity, crashes most browsers at n > 50
function fibonacci(n) {
  if (n === 0 || n === 1)
    return n;
  else
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// nth fibonacci using memoization
const fibonacci = (() => {
  let memo = {};  // create the memo object
  function f(n) {
    if (memo.hasOwnProperty(n)) return memo[n];  // return the memo value if it exists
    else if (n === 0 || n === 1) return n;  // return the base case 0 or 1
    else return memo[n] = f(n - 1) + f(n - 2);  // save the recursive call to memo and return the value
  }
  return f;
})();

            </code></pre>
          </div>
        </div>
<!-#########################################################-->
        <div class="question">        
          <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>JS: Deep copy an object</h4>
          <div class="question-content">          
            <p>https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign</p>
            <pre class="language-javascript"><code class="code">
const deepCopy = (extended, source) => {
  for (let property in source) {
    if (typeof source[property] === 'object' && source[property] !== null) {
      extended[property] = extended[property] || {};
      deepCopy(extended[property], source[property]);
    }
    else {
      extended[property] = source[property];
    }
  }
  return extended;
};
            </code></pre>
          </div>
        </div>
<!-#########################################################-->
        <div class="question">        
          <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>JS: Check if a key exists in an object</h4>
          <div class="question-content">          
            <p></p>
            <pre class="language-javascript"><code class="code">
const obj = {a: 1, b: 2, c: 'three'};
obj.hasOwnProperty('a')  // true
obj.hasOwnProperty('d')  // false
'a' in obj  // true
'd' in obj  // false
!('a' in obj)  // false
            </code></pre>
          </div>
        </div>        
<!-#########################################################-->  
        <div class="question">
          <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Routine stuff</h4>
          <div class="question-content">
            <p></p>
            <pre class="language-javascript"><code class="code">
// reverse for loop
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}


// string to nubmer
parseInt('123')  // 123
parseInt('20px')  // 20


// create a zero array of length 9
Array.from({length: 9}).fill(0)


// create a 9x9 double array of zeros
let nineByNine = Array.from({length: 9}).fill(Array.from({length: 9}).fill(0));


// the double tilde operator
// https://stackoverflow.com/questions/5971645/what-is-the-double-tilde-operator-in-javascript?noredirect=1&lq=1


// to remove an element at an index in a JS array, use arr.splice(start index, number of chars to remove)
[1, 2, 3, 3, 4, 6, 3, 4].splice(idx, 1);


// Array prototype method to remove all occurences of a value from a JS array
// [1, 2, 3, 3, 4, 6, 3, 4].removeVal(3) returns [1, 2, 4, 6, 4]
Array.prototype.removeVal = function(val) {
  for (var i=0; i < this.length; i++) {
    if (this[i] == val) {
      this.splice(i, 1);
      i--;
    }
  }
  return this;
}


// remove a property from a JS object
// https://stackoverflow.com/questions/208105/how-do-i-remove-a-property-from-a-javascript-object
let obj = {a: 1, b: 2, c: 'hello'};
delete obj.a /* OR */ delete obj[a]


// Javascript void(exp) evaluates expression exp then returns undefined
// Void can also be used to turn a function declaration into an internally invoked function expression.
// The function iife is never declared.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void#Immediately_Invoked_Function_Expressions
void function iife() {
    var bar = function () {};
    var baz = function () {};
    var foo = function () {
        bar();
        baz();
     };
    var biz = function () {};

    foo();
    biz();
}();


// empty href in HTML
// https://stackoverflow.com/questions/134845/which-href-value-should-i-use-for-javascript-links-or-javascriptvoid0
<a href="javascript:void(0);"></a>


// check if a variable is undefined
if (typeof myVar === "undefined") {
    alert("myVar is undefined");
}


// JS variables are case sensitive, duh
let a = 'whatsup';  // 'whatsup'
let A = 'WHATSUP';  // 'WHATSUP'


// setTimeout and clearTimeout
<!DOCTYPE html>
<html>
  <body>
    <button onclick="myFunction()">Try it</button>
    <button onclick="myStopFunction()">Stop the alert</button>
    <script>
      let myVar;

      function myFunction() {
        // myVar here is undefined
        myVar = setTimeout(() => { alert("Hello") }, 3000);
        // myVar here is the setTimout ID and is initially set to 1 (becomes a counter and increments each time it executes)
      }

      function myStopFunction() {
        clearTimeout(myVar); // doesn't change the value of the myVar ID, only stops it from incrementing         
      }
    </script>
  </body>
</html>


// setInterval and clearInterval
<!DOCTYPE html>
<html>
  <body>
    <p>A script on this page starts this clock:</p>
    <p id="demo"></p>
    <button onclick="myStopFunction()">Stop time</button>
    <script>
      let myVar = setInterval(() => { myTimer() }, 1000);

      function myTimer() {
          var d = new Date();
          var t = d.toLocaleTimeString();
          document.getElementById('demo').innerHTML = t;
      }

      function myStopFunction() {
          clearInterval(myVar);
      }
    </script>
  </body>
</html>


// no trailing commas allowed in JSON
'{"a":1, "b":2}'
// trailing commas allowed in JS objects
let a = {a: 1, b: 2,}


// Use JSON.stringify to convert a JS object to a string
let obj = {a:1, b:2, c:[1,2,3]}
JSON.stringify(obj)  // '{"a":1,"b":2,"c":[1,2,3]}'


// Round a decimal to the hundredths place
Math.round(num * 100) / 100


// Bug with numbers
// 9.99 million billion becomes 10 million billion
let num = 9999999999999999  // num is 10,000,000,000,000,000


// Another bug with adding decimals
0.1 + 0.2 = 0.30000000000000004


            </code></pre>
          </div>
        </div>
<!-#########################################################-->
        <div class="question">        
          <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Sum 1...n</h4>
          <div class="question-content">          
            <p>The sum of 1 to n equal n*(n+1)/2</p>
            <pre class="language-javascript"><code class="code">
// sum 1...n
function sum(n) {
  return n*(n+1)/2;
}

// using reduce on an array from 1 to a million
Array.from({length:1000000}, (v, i) => i + 1).reduce((sum, val) => sum + val);
            </code></pre>
          </div>
        </div>
<!-#########################################################-->
        <div class="question">        
          <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Select all HTML elements on a page by class</h4>
          <div class="question-content">          
            <p></p>
            <pre class="language-javascript"><code class="code">
// plain javascript
document.querySelectorAll('#id')
document.querySelectorAll('.class')
document.querySelector()
document.getElementById('theId')
document.getElementsByClassName(theClass)  // returns an array

// JQuery
$('*')  // all elements
$('#id')  // element by id
$('.class')  // element by class
$('img')  // all image elements

            </code></pre>
          </div>
        </div>
<!-#########################################################-->
        <div class="question">        
          <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>JS: Debounce</h4>
          <div class="question-content">          
            <p></p>
            <pre class="language-javascript"><code class="code">
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If 'immediate' is passed, trigger the function on the
// leading edge, instead of the trailing.
// https://davidwalsh.name/javascript-debounce-function
function debounce(func, wait, immediate) {
  let timeout;
  return () => {
    let later = () => {
      timeout = null;
      if (!immediate) func.apply(this, arguments);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(this, arguments);
  };
};

// same debounce function with no immediate option (fires after wait period expires without having been called again)
function debounce(callback, wait, context = this) {
  let timeout;    
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback.apply(context, arguments), wait);
  }
}

// implement the debounce function on a mousemove event
let myEfficientFn = debounce(() => {
  // All the taxing stuff you do
  console.log('sup');
}, 250);

window.onmousemove = () => myEfficientFn();

            </code></pre>
          </div>
        </div>
<!-#########################################################-->
        <div class="question">        
          <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>JS: Throttle</h4>
          <div class="question-content">          
            <p></p>
            <pre class="language-javascript"><code class="code">

            </code></pre>
          </div>
        </div>
<!-#########################################################-->
        <div class="question">        
          <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>JS: Shuffle an Array</h4>
          <div class="question-content">          
            <p></p>
            <pre class="language-javascript"><code class="code">

            </code></pre>
          </div>
        </div>
<!-#########################################################-->
        <div class="question">        
          <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>JS: String prototype to replace all occurences of a string with another string</h4>
          <div class="question-content">          
            <p></p>
            <pre class="language-javascript"><code class="code">
String.prototype.replaceAll = function(replace, replacement) {
    return this.split(replace).join(replacement);
};
            </code></pre>
          </div>
        </div>
<!-#########################################################-->
        <div class="question">        
          <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>JS: Capitalize the first letter of a string</h4>
          <div class="question-content">          
            <p></p>
            <pre class="language-javascript"><code class="code">
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
// OR, as a prototype
String.prototype.capitalize = function() {
  return this[0].toUpperCase() + this.slice(1);
}


// capitalize the first letter of each word in a sentence
function capitalizeEachWord(str) {
  let arr = str.split(' ');
  let capArr = arr.map(el => el.charAt(0).toUpperCase() + el.substr(1));
  capArr = capArr.join(' ');
  return capArr;
}
            </code></pre>
          </div>
        </div>
<!-#########################################################-->
        <div class="question">
          <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>JS: cast array of strings to numbers</h4>
          <div class="question-content">
            <p></p>
            <pre class="language-javascript"><code class="code">
let arr = Array.from('12345'); // ["1", "2", "3", "4", "5"]
let numArr = arr.map(c => parseInt(c));
            </code></pre>
          </div>
        </div>
<!-#########################################################-->
        <div class="question">
          <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>JS: call</h4>
          <div class="question-content">
            <p></p>
            <pre class="language-javascript"><code class="code">
let arr = Array.from('12345'); // ["1", "2", "3", "4", "5"]
let numArr = arr.map(c => parseInt(c));
            </code></pre>
          </div>
        </div>        
<!-#########################################################-->
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
<!-#########################################################-->
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
<!-#########################################################-->
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
<!-#########################################################-->
        <div class="question">
          <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>JS string methods</h4>
          <div class="question-content">
  <!-#########################################################-->
          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>String.prototype.charAt()</h4>
            <div class="question-content">
              <p>Returns the character at a given index, same as myString[index]</p>
              <pre class="language-javascript"><code class="code">

              </code></pre>
            </div>
          </div>
  <!-#########################################################-->
            <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>String.prototype.concat()</h4>
            <div class="question-content">
              <p></p>
              <pre class="language-javascript"><code class="code">

              </code></pre>
            </div>
          </div>
  <!-#########################################################-->
            <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>String.prototype.endsWith()</h4>
            <div class="question-content">
              <p></p>
              <pre class="language-javascript"><code class="code">

              </code></pre>
            </div>
          </div>
  <!-#########################################################-->
            <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>String.prototype.includes()</h4>
            <div class="question-content">
              <p></p>
              <pre class="language-javascript"><code class="code">

              </code></pre>
            </div>
          </div>
  <!-#########################################################-->
            <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>String.prototype.indexOf()</h4>
            <div class="question-content">
              <p></p>
              <pre class="language-javascript"><code class="code">

              </code></pre>
            </div>
          </div>
  <!-#########################################################-->
            <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>String.prototype.lastIndexOf()</h4>
            <div class="question-content">
              <p></p>
              <pre class="language-javascript"><code class="code">

              </code></pre>
            </div>
          </div>
  <!-#########################################################-->
            <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>String.prototype.match()</h4>
            <div class="question-content">
              <p></p>
              <pre class="language-javascript"><code class="code">

              </code></pre>
            </div>
          </div>
  <!-#########################################################-->
            <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>String.prototype.padEnd()</h4>
            <div class="question-content">
              <p></p>
              <pre class="language-javascript"><code class="code">

              </code></pre>
            </div>
          </div>
  <!-#########################################################-->
            <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>String.prototype.padStart()</h4>
            <div class="question-content">
              <p></p>
              <pre class="language-javascript"><code class="code">

              </code></pre>
            </div>
          </div>
  <!-#########################################################-->
            <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>String.prototype.repeat()</h4>
            <div class="question-content">
              <p></p>
              <pre class="language-javascript"><code class="code">

              </code></pre>
            </div>
          </div>
  <!-#########################################################-->
            <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>String.prototype.replace()</h4>
            <div class="question-content">
              <p></p>
              <pre class="language-javascript"><code class="code">

              </code></pre>
            </div>
          </div>
  <!-#########################################################-->
            <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>String.prototype.search()</h4>
            <div class="question-content">
              <p></p>
              <pre class="language-javascript"><code class="code">

              </code></pre>
            </div>
          </div>
  <!-#########################################################-->
            <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>String.prototype.slice()</h4>
            <div class="question-content">
              <p></p>
              <pre class="language-javascript"><code class="code">

              </code></pre>
            </div>
          </div>
  <!-#########################################################-->
            <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>String.prototype.split()</h4>
            <div class="question-content">
              <p></p>
              <pre class="language-javascript"><code class="code">

              </code></pre>
            </div>
          </div>
  <!-#########################################################-->
            <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>String.prototype.startsWith()</h4>
            <div class="question-content">
              <p></p>
              <pre class="language-javascript"><code class="code">

              </code></pre>
            </div>
          </div>
  <!-#########################################################-->
            <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>String.prototype.substr()</h4>
            <div class="question-content">
              <p></p>
              <pre class="language-javascript"><code class="code">

              </code></pre>
            </div>
          </div>
  <!-#########################################################-->
            <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>String.prototype.substring()</h4>
            <div class="question-content">
              <p></p>
              <pre class="language-javascript"><code class="code">

              </code></pre>
            </div>
          </div>
  <!-#########################################################-->
            <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>String.prototype.toLowerCase()</h4>
            <div class="question-content">
              <p></p>
              <pre class="language-javascript"><code class="code">

              </code></pre>
            </div>
          </div>
  <!-#########################################################-->
            <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>String.prototype.toUpperCase()</h4>
            <div class="question-content">
              <p></p>
              <pre class="language-javascript"><code class="code">

              </code></pre>
            </div>
          </div>
  <!-#########################################################-->
          </div>
        </div>        
<!-#########################################################-->
        <div class="question">
          <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>JS array methods</h4>
          <div class="question-content">
  <!-#########################################################-->
          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.from()</h4>
            <div class="question-content">
              <p>Creates an array from a string or iterable. New in ES6</p>
              <pre class="language-javascript"><code class="code">
Array.from('foo');
// ["f", "o", "o"]

var s = new Set(['foo', window]); 
Array.from(s); 
// ["foo", window]

var m = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(m); 
// [[1, 2], [2, 4], [4, 8]]

// Generate a sequence of numbers
// Since the array is initialized with \`undefined\` on each position,
// the value of \`v\` below will be \`undefined\`
Array.from({length: 5}, (v, i) => i);
// [0, 1, 2, 3, 4]
              </code></pre>
            </div>
          </div>           
  <!-#########################################################-->
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
  <!-#########################################################-->
          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.copyWithin()</h4>
            <div class="question-content">
              <p>Copies array elements within the array, to and from specified positions.<br>
              Returns the new array and modifies original array. New in ES6</p>
              <pre class="language-javascript"><code class="code">
// array.copyWithin(index to copy the elements to, index to start copying elements from, index to stop copying)

[1, 2, 3, 4, 5].copyWithin(-2);
// [1, 2, 3, 1, 2]

[1, 2, 3, 4, 5].copyWithin(0, 3);
// [4, 5, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, 3, 4);
// [4, 2, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(-2, -3, -1);
// [1, 2, 3, 3, 4]
              </code></pre>
            </div>
          </div>
  <!-#########################################################-->
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
  <!-#########################################################-->
          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.entries()</h4>
            <div class="question-content">
              <p>Returns a new Array iterator object</p>
              <pre class="language-javascript"><code class="code">
var a = ['a', 'b', 'c'];
var iterator = a.entries();

console.log(iterator.next().value); // [0, 'a']

for (let e of iterator) {
  console.log(e);
}
// [1, 'b']
// [2, 'c']
              </code></pre>
            </div>
          </div>          
  <!-#########################################################-->
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
  <!-#########################################################-->
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

// ES5 filter
let fruits = products.filter(function(product) {
  return product.type == 'fruit';
})

// ES6 filter
let fruits = products.filter(product => product.type === 'fruit');
              </code></pre>
            </div>
          </div>        
  <!-#########################################################-->
          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.find()</h4>
            <div class="question-content">
              <p>Identical to filter but stops after returning the first matching result. Doesn't change the original array.<br>
              Returns undefined if no matching value is found. New in ES6</p>
              <pre class="language-javascript"><code class="code">
let arr = [12, 5, 8, 130, 44, 150];              
arr.find(el => el >= 15); // returns 130
              </code></pre>
            </div>
          </div>
  <!-#########################################################-->
          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.findIndex()</h4>
            <div class="question-content">
              <p>Identical to find but returns the index instead of the value of the first matching result or -1 if no matching value exists.<br>
              New in ES6.</p>
              <pre class="language-javascript"><code class="code">
let arr = [12, 5, 8, 130, 44, 150];              
arr.find(el => el >= 15); // returns 3
              </code></pre>
            </div>
          </div>          
  <!-#########################################################-->
          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.forEach()</h4>
            <div class="question-content">
              <p>Iterate over an Array</p>
              <pre class="language-javascript"><code class="code">
let arr = [1, 2, 3, 4, 5];
arr.forEach((element, index, array) => {
  console.log(element);
})
              </code></pre>
            </div>
          </div>
  <!-#########################################################-->
          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.includes()</h4>
            <div class="question-content">
              <p>Returns true if an element exists in an array. New in ES7</p>
              <pre class="language-javascript"><code class="code">
var a = [1, 2, 3];
a.includes(2); // true 
a.includes(4); // false
              </code></pre>
            </div>
          </div>
  <!-#########################################################-->
          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.indexOf()</h4>
            <div class="question-content">
              <p>Returns the index of the first occurence of an element in an array or -1 if not present</p>
              <pre class="language-javascript"><code class="code">
var a = [2, 9, 9]; 
a.indexOf(9); // 1
a.indexOf(7); // -1
              </code></pre>
            </div>
          </div>
  <!-#########################################################-->
          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.join()</h4>
            <div class="question-content">
              <p>Joins array elements into a string, optional separator parameter (comma is default)</p>
              <pre class="language-javascript"><code class="code">
var a = ['Hi', 'Hola', 'Hello'];
a.join();    // 'Hi,Hola,Hello'
a.join('-'); // 'Hi-Hola-Hello'
              </code></pre>
            </div>
          </div>
  <!-#########################################################-->
          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.keys()</h4>
            <div class="question-content">
              <p>Returns an Array Iterator containing the keys for each index. New in ES6</p>
              <pre class="language-javascript"><code class="code">
var arr = ['a', 'b', 'c'];
var iterator = arr.keys();

console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
              </code></pre>
            </div>
          </div>
  <!-#########################################################-->
          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.lastIndexOf()</h4>
            <div class="question-content">
              <p>Returns the index of the last occurence of an element in an array or -1 if not present</p>
              <pre class="language-javascript"><code class="code">
var numbers = [2, 5, 9, 2];
numbers.lastIndexOf(2); // 3
numbers.lastIndexOf(7); // -1
              </code></pre>
            </div>
          </div>
  <!-#########################################################-->
          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.map()</h4>
            <div class="question-content">
              <p>Performs an operation on each array element and returns a new array</p>
              <pre class="language-javascript"><code class="code">
var numbers = [1, 2, 3, 4, 5];
var x2 = numbers.map(num => num * 2);
              </code></pre>
            </div>
          </div>
  <!-#########################################################-->
          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.pop()</h4>
            <div class="question-content">
              <p>Removes and returns the last element from the array, and modifies the original array</p>
              <pre class="language-javascript"><code class="code">
let arr = [1, 2, 3];
let res = a.pop();  // res = 3, arr = [1, 2]
              </code></pre>
            </div>
          </div>
  <!-#########################################################-->
          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.push()</h4>
            <div class="question-content">
              <p>Adds one or more elements to the array and returns the array's new length.</p>
              <pre class="language-javascript"><code class="code">
var numbers = [1, 2, 3];
numbers.push(4);  // [1, 2, 3, 4]
numbers.push(5, 6, 7);  // [1, 2, 3, 4, 5, 6, 7]
              </code></pre>
            </div>
          </div>
  <!-#########################################################-->
          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.reduce()</h4>
            <div class="question-content">
              <p>Applies an accumulator function to each array element</p>
              <pre class="language-javascript"><code class="code">
//  array.reduce(function(total, currentValue, currentIndex, originalArray) {
//    return operation;
//  }, initialValue)

let total = [0, 1, 2, 3].reduce((sum, value) => sum + value, 0);
// total is 6

let flattened = [[0, 1], [2, 3], [4, 5]].reduce((a, b) => a.concat(b), []);
// flattened is [0, 1, 2, 3, 4, 5]
              </code></pre>
            </div>
          </div>
  <!-#########################################################-->
          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.reduceRight()</h4>
            <div class="question-content">
              <p>Identical to reduce but goes right to left</p>
              <pre class="language-javascript"><code class="code">
let flattened = [[0, 1], [2, 3], [4, 5]].reduceRight((a, b) => a.concat(b), []);
// flattened is [4, 5, 2, 3, 0, 1]
              </code></pre>
            </div>
          </div>
  <!-#########################################################-->
          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.reverse()</h4>
            <div class="question-content">
              <p>Reverses the order of the array, changing the original and returning a reference to the array</p>
              <pre class="language-javascript"><code class="code">
let arr = [1, 2, 3];
let reversed = a.reverse();  // a = [3, 2, 1]
              </code></pre>
            </div>
          </div>
  <!-#########################################################-->
          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.shift()</h4>
            <div class="question-content">
              <p>Removes and returns the first element from the array, and modifies the original array.</p>
              <pre class="language-javascript"><code class="code">
let arr = [1, 2, 3];
let res = a.shift();  // res = 1, arr = [2, 3]
              </code></pre>
            </div>
          </div>
  <!-#########################################################-->
          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.slice()</h4>
            <div class="question-content">
              <p>Returns a shallow copy of a portion of an array into a new array. Doesn't modify the original array.</p>
              <pre class="language-javascript"><code class="code">
// array.slice(start, end non-inclusive)

let arr = [1, 2, 3, 4, 5];  // arr is still [1, 2, 3, 4, 5]
let sliced1 = arr.slice(3);  // sliced1 is [4, 5]
let sliced2 = arr.slice(1, 2);  // sliced2 is [2]
              </code></pre>
            </div>
          </div>
  <!-#########################################################-->
          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.some()</h4>
            <div class="question-content">
              <p>Return true if any element in the array passes the condition in the parameter function</p>
              <pre class="language-javascript"><code class="code">
[2, 5, 8, 1, 4].some(x => x > 10);  // false
[12, 5, 8, 1, 4].some(x => x > 10);  // true
              </code></pre>
            </div>
          </div>
  <!-#########################################################-->
          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.sort()</h4>
            <div class="question-content">
              <p>Sorts the array elements in-place (modifying the array) and returns the array. Default sort order is according to string Unicode code points. Algorithm used is a version of quicksort, avg runtime of O(nlogn)</p>
              <pre class="language-javascript"><code class="code">
let fruit = ['cherries', 'apples', 'bananas'];
fruit.sort(); // ['apples', 'bananas', 'cherries']

let points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);  // sorts in ascending order
points.sort((a, b) => b - a);  // sorts in descending order

let scores = [1, 10, 21, 2]; 
scores.sort(); // [1, 10, 2, 21]
// Note that 10 comes before 2,
// because '10' comes before '2' in Unicode code point order.

let things = ['word', 'Word', '1 Word', '2 Words'];
things.sort(); // ['1 Word', '2 Words', 'Word', 'word']
// In Unicode, numbers come before upper case letters, which come before lower case letters.
              </code></pre>
            </div>
          </div>
  <!-#########################################################-->
          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.splice()</h4>
            <div class="question-content">
              <p>Starts at an index of the array then removes n elements and/or adds elements. Returns an array of the deleted elements</p>
              <pre class="language-javascript"><code class="code">
// array.splice(start index, deleteCount, item1 to add, item2 to add, ...)

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2, 0, 'drum');
// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"] 
// removed is [], no elements removed

var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
var removed = myFish.splice(3, 1);
// removed is ["mandarin"]
// myFish is ["angel", "clown", "drum", "sturgeon"]

var myFish = ['angel', 'clown', 'drum', 'sturgeon'];
var removed = myFish.splice(2, 1, 'trumpet');
// myFish is ["angel", "clown", "trumpet", "sturgeon"]
// removed is ["drum"]

var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
var removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');
// myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"] 
// removed is ["angel", "clown"]
              </code></pre>
            </div>
          </div>
  <!-#########################################################-->
          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.toString()</h4>
            <div class="question-content">
              <p>Returns a string representation of an array. Doesn't modify the original array</p>
              <pre class="language-javascript"><code class="code">
var months = ['Jan', 'Feb', 'Mar', 'Apr'];
months.toString();  // "Jan,Feb,Mar,Apr"
              </code></pre>
            </div>
          </div>
  <!-#########################################################-->
          <div class="question tab-1">
            <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Array.prototype.unshift()</h4>
            <div class="question-content">
              <p>Adds one or more elements to the beginning of an array and returns the length of the new array. Modifies the original array.</p>
              <pre class="language-javascript"><code class="code">
let a = [1, 2, 3];
a.unshift(4, 5);  // returns 5, arr = [4, 5, 1, 2, 3]
              </code></pre>
            </div>
          </div>
  <!-#########################################################-->
          </div>
        </div>
<!-#########################################################-->
        <div class="question">        
          <h4 class="question-title"><i class="fa fa-chevron-right question-chevron"></i>Python: TempTracker class</h4>
          <div class="question-content">
            <p></p>
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
