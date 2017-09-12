var sentence = prompt("Please type in a sentence to generate your cipher.");

//alert (sentence);

var capsFirstLast = function(input1) {
	return input1.charAt(0).toUpperCase() + sentence.slice(-1).toUpperCase();
}

var reverseFirstLast = function(input2) {
	return input2.split('').reverse().join('');
}

var outputFirstLast = function(input3) {
	return input3 + reverseFirstLast(capsFirstLast(input3));
}



alert(outputFirstLast(sentence));
