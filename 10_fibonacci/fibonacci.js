const fibonacci = function (arg) {
	let n;
	if (typeof arg !== "number") {
		n = parseInt(arg);
	} else {
		n = arg;
	}

	if (n < 0) return "OOPS";
	if (n === 0) return 0;

	let n1 = 0;
	let n2 = 1;

	for (let i = 0; i < arg; i++) {
		let current = n1 + n2;
		n1 = n2;
		n2 = current;
	}

	return n1;
};

// Do not edit below this line
module.exports = fibonacci;
