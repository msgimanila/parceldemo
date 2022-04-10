import getTheAnswer from './modules/module2.js';
var name = 'Radagast';
var answer = 'thisisthe answer';
console.log(answer);

alert('The answer is ' + getTheAnswer());

 

// Create an object:
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

// Create CSS
document.getElementById("demo").innerHTML = person.fullName();
let info="Javascript CSS  using css to js conversion<button>THIS IS THE BUTTON</button>";

document.getElementById("demo").innerHTML = info;
//https://www.html-code-generator.com/html/html-code-convert-to-javascript
function js_css(){
	let codecss = "";
	codecss += 'body {background: #eeeeee;}\n';
	codecss += 'div {background: #f5100;}\n';
	codecss += 'h1 {font-family: Arial; color: blue;}\n';
	codecss += 'p {text-align: center; padding: 20px;}\n';
	return codecss;
}

// create HTML
document.head.innerHTML = '<style>' + js_css() + '</style>';
 
function js_thml(){
	let code = "";
	code += '<h1>HTML To JavaScript</h1>\n';
	code += '<ol>\n';
	code += '\t<li>First item</li>\n';
	code += '\t<li>Second item</li>\n';
	code += '\t<li>Third item</li>\n';
	code += '\t<li>Fourth item</li>\n';
	code += '</ol>\n';
	return code;
}


document.getElementById("js_html").innerHTML = js_thml();
document.getElementById("html-text").value = js_thml();
 
fetch('https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json')
  .then(response => response.json())
  .then(data => console.log(data));
