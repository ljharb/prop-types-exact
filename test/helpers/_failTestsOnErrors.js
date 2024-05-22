'use strict';

var errorWhitelist = [
	/DeprecationWarning: /
];

function throwError(msg) {
	for (var i = 0; i < errorWhitelist.length; i += 1) {
		if (errorWhitelist[i].test(msg)) {
			return;
		}
	}
	throw new EvalError(msg);
}

console.warn = throwError;
console.error = throwError;
