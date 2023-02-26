/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"analyzeArray\": () => (/* binding */ analyzeArray),\n/* harmony export */   \"caesarCipher\": () => (/* binding */ caesarCipher),\n/* harmony export */   \"calculator\": () => (/* binding */ calculator),\n/* harmony export */   \"capitalize\": () => (/* binding */ capitalize),\n/* harmony export */   \"reverseString\": () => (/* binding */ reverseString)\n/* harmony export */ });\n\n\nfunction capitalize(string) {\n    return string.charAt(0).toUpperCase() + string.substring(1);\n}\n\nfunction reverseString(string) {\n    return string.split('').reverse().join('');\n}\n\nconst calculator = {\n    add(operand1, operand2) {\n        operand1 = parseNumber(operand1);\n        operand2 = parseNumber(operand2);\n\n        return operand1 + operand2;\n    },\n    subtract(operand1, operand2) {\n        return operand1 - operand2;\n    },\n    multiply(operand1, operand2) {\n        return operand1 * operand2;\n    },\n    divide(operand1, operand2) {\n        return operand1 / operand2;\n    }\n}\n\nfunction parseNumber(number) {\n    if (typeof number === number) return number;\n\n    if (number % 1 === 0) {\n        return parseInt(number);\n    } else {\n        return parseFloat(number);\n    }\n}\n\nfunction caesarCipher(string, shift, shouldEncrypt) {\n    string = string.toLowerCase();\n    const letters = 'abcdefghijklmnopqrstuvwxyz';\n    let text = '';\n\n    for (let i = 0; i < string.length; i++) {\n        const letter = string[i];\n        const letterIndex = letters.indexOf(letter);\n\n        if (letterIndex === -1) {\n            text += letter;\n            continue;\n        }\n\n        if (shouldEncrypt) {\n            let wrapCount = letterIndex + shift;\n\n            if (wrapCount > letters.length - 1) {\n                wrapCount = wrapCount - letters.length;\n            }\n\n            text += letters[wrapCount];\n        } else {\n            let wrapCount = letterIndex - shift;\n\n            if (wrapCount > letters.length - 1) {\n                wrapCount = wrapCount - letters.length;\n            }\n\n            text += letters[wrapCount];\n        }\n    }\n\n    return text;\n}\n\nfunction analyzeArray(integers) {\n    const sortedIntegers = integers.sort((a, b) => a - b);\n    const sum = integers.reduce(\n        (accumulator, currentValue) => accumulator + currentValue, 0\n    );\n\n    return {\n        average: sum / sortedIntegers.length,\n        min: sortedIntegers[0],\n        max: sortedIntegers[sortedIntegers.length - 1],\n        length: sortedIntegers.length\n    };\n}\n\n//# sourceURL=webpack://testing-practice/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;