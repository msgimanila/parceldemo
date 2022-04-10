export function hi (name) {
    return `Hello, ${name}, You are using a module `;
    }
var answer = 42;

var getTheAnswer = function () {
	return answer;
};

export getTheAnswer;
