// Solution 1
// const removeFromArray = function (array, ...args) {
// 	let newArray = [];

// 	array.forEach((item) => {
// 		if (!args.includes(item)) {
// 			newArray.push(item);
// 		}
// 	});

// 	return newArray;
// };

// Solution 2
const removeFromArray = function (array, ...args) {
	return array.filter((item) => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
