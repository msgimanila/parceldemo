require(styleMyCSS from '/styles.js');
 
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
let info="eographical <h1>divisions</h1> from north to south: <a href="#">Luzon, Visayas, and Mindanao</a> <button></button>";

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
 
