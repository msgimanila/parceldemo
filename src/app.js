import bootstrap from './modules/bootstrap.js';
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

// Display data from the object:
document.getElementById("demo").innerHTML = person.fullName();
let info="eographical <h2>Using JSS</h2> for CSS styling</a> <button></button>";

document.getElementById("demo").innerHTML = info;

 
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
 
