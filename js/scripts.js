$(document).ready(function() {
	$(".original-sentence").click(function() {
		alert(sentence);
	})

$(".encoded-sentence").click(function() {
	alert(reverseString(sentence));
	})
})

var sentence = prompt("Please type in a sentence to generate your cipher.");

var capsFirstLast = function(input1) {
	return input1.charAt(0).toUpperCase() + sentence.slice(-1).toUpperCase();
}

var reverseFirstLast = function(input2) {
	return input2.split('').reverse().join('');
}

var outputFirstLast = function(input3) {
	return input3 + reverseFirstLast(capsFirstLast(input3));
}

var addFirstLast = function(input4) {
	return sentence.charAt(Math.floor(sentence.length/2)) + outputFirstLast(input4);
}

var reverseString = function(input5) {
	return addFirstLast(input5).split('').reverse().join('');
}
