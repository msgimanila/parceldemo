import getTheAnswer from './modules/module2.js';
var name = 'Radagast';
var answer = 'thisisthe answer';
console.log(answer);

alert('The answer is ' + getTheAnswer());

const converted = {
  ".main-wrapper": { flexDirection: "row", display: "flex", flex: 1 },
  ul: { padding: "20px 0", flex: 1 },
  li: { fontFamily: "'Lato'", color: "whitesmoke", lineHeight: "44px" },
  div: { background: "blue" }
}

// Create an object:
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

// Display data from the object:
document.getElementById("demo").innerHTML = person.fullName();
let info="Javascript CSS  using css to js conversion<button>THIS IS THE BUTTON</button>";

document.getElementById("demo").innerHTML = info;
//https://www.html-code-generator.com/html/html-code-convert-to-javascript
function js_css(){
	let codecss = "";
	codecss += 'body {background: blue;}\n';
	return codecss;
}


document.getElementById("js_css").innerText = js_css();
 
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
 
