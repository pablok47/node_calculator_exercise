var calculator = function(a, b) {
	var add = a + b;
	var sub = a - b;
	var mul = a * b;
	var div = a / b;

	var results = "add" + " = " + add + "; " + "sub" + " = " + sub +  "; " + "mul" + " = " + mul +  "; " + "div" + " = " + div;
	console.log(results);

};

module.exports = calculator;

