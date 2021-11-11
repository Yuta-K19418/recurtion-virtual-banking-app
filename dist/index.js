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

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar BankAccount_1 = __importDefault(__webpack_require__(/*! ./clssses/BankAccount */ \"./src/clssses/BankAccount.ts\"));\nvar createInitialPage_1 = __importDefault(__webpack_require__(/*! ./createInitialPage */ \"./src/createInitialPage.ts\"));\nvar mainBankPage_1 = __importDefault(__webpack_require__(/*! ./mainBankPage */ \"./src/mainBankPage.ts\"));\n(0, createInitialPage_1.default)();\nvar config = {\n    initialForm: document.getElementById('initial-form'),\n    bankPage: document.getElementById('bankPage'),\n};\nfunction getRandomInteger(min, max) {\n    return Math.floor(Math.random() * (max - min)) + min;\n}\nvar InitializeUserAccount = function () {\n    var _a, _b;\n    var form = document.getElementById(\"bank-form\");\n    var userBankAccount = new BankAccount_1.default(form.querySelectorAll(\"input[name=\\\"userFirstName\\\"]\")[0].value, form.querySelectorAll(\"input[name=\\\"userLastName\\\"]\")[0].value, form.querySelectorAll(\"input[name=\\\"userEmail\\\"]\")[0].value, form.querySelectorAll(\"input[name=\\\"userAccountType\\\"]:checked\")[0].value, getRandomInteger(1, Math.pow(10, 8)), parseInt(form.querySelectorAll(\"input[name=\\\"userFirstDeposit\\\"]\")[0].value));\n    // ページの非表示\n    (_a = config.initialForm) === null || _a === void 0 ? void 0 : _a.classList.add(\"d-none\");\n    // 2ページ目を呼び出す\n    (_b = config.bankPage) === null || _b === void 0 ? void 0 : _b.append((0, mainBankPage_1.default)(userBankAccount));\n};\nexports[\"default\"] = InitializeUserAccount;\n\n\n//# sourceURL=webpack://recurtion-virtual-banking-app/./src/app.ts?");

/***/ }),

/***/ "./src/clssses/BankAccount.ts":
/*!************************************!*\
  !*** ./src/clssses/BankAccount.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar BankAccount = /** @class */ (function () {\n    function BankAccount(firstName, lastName, email, type, accountNumber, money) {\n        this.firstName = '';\n        this.lastName = '';\n        this.email = '';\n        this.type = '';\n        this.accountNumber = 0;\n        this.money = 0;\n        this.initialDeposit = 0;\n        this.firstName = firstName;\n        this.lastName = lastName;\n        this.email = email;\n        this.type = type;\n        this.accountNumber = accountNumber;\n        this.money = money;\n        this.initialDeposit = money;\n    }\n    BankAccount.prototype.getFullName = function () {\n        return this.firstName + \" \" + this.lastName;\n    };\n    return BankAccount;\n}());\nexports[\"default\"] = BankAccount;\n\n\n//# sourceURL=webpack://recurtion-virtual-banking-app/./src/clssses/BankAccount.ts?");

/***/ }),

/***/ "./src/createInitialPage.ts":
/*!**********************************!*\
  !*** ./src/createInitialPage.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar app_1 = __importDefault(__webpack_require__(/*! ./app */ \"./src/app.ts\"));\nvar CreateInitialPage = function () {\n    var initialPage = document.getElementById(\"initialPage\");\n    initialPage === null || initialPage === void 0 ? void 0 : initialPage.classList.add(\"vh-100\", \"bg-dark\", \"d-flex\", \"flex-column\", \"justify-content-center\", \"align-items-center\");\n    var div1 = document.createElement(\"div\");\n    div1.classList.add(\"d-flex\", \"align-items-center\", \"col-md-7\", \"col-10\");\n    var div2 = document.createElement(\"div\");\n    div2.id = \"initial-form\";\n    div2.classList.add(\"bg-white\", \"col-12\", \"text-center\", \"p-4\");\n    var titleH2 = document.createElement(\"h2\");\n    titleH2.innerHTML = \"Please type your information below\";\n    titleH2.classList.add(\"pb-3\");\n    div2.append(titleH2);\n    var formSection = document.createElement(\"form\");\n    formSection.id = \"bank-form\";\n    formSection.addEventListener(\"submit\", function (event) {\n        (0, app_1.default)();\n        event.preventDefault();\n    });\n    formSection.classList.add(\"form\");\n    var emailDiv = document.createElement(\"div\");\n    emailDiv.classList.add(\"form-group\");\n    var emailInput = document.createElement(\"input\");\n    emailInput.type = \"email\";\n    emailInput.name = \"userEmail\";\n    emailInput.placeholder = \"Email\";\n    emailInput.classList.add(\"form-control\");\n    emailInput.required = true;\n    emailDiv.append(emailInput);\n    formSection.append(emailDiv);\n    var userFirstNameDiv = document.createElement(\"div\");\n    userFirstNameDiv.classList.add(\"form-group\");\n    var userFirstNameInput = document.createElement(\"input\");\n    userFirstNameInput.type = \"text\";\n    userFirstNameInput.name = \"userFirstName\";\n    userFirstNameInput.placeholder = \"First name\";\n    userFirstNameInput.classList.add(\"form-control\");\n    userFirstNameInput.required = true;\n    userFirstNameDiv.append(userFirstNameInput);\n    formSection.append(userFirstNameDiv);\n    var userLastNameDiv = document.createElement(\"div\");\n    userLastNameDiv.classList.add(\"form-group\");\n    var userLastNameInput = document.createElement(\"input\");\n    userLastNameInput.type = \"text\";\n    userLastNameInput.name = \"userLastName\";\n    userLastNameInput.placeholder = \"Last name\";\n    userLastNameInput.classList.add(\"form-control\");\n    userLastNameInput.required = true;\n    userLastNameDiv.append(userLastNameInput);\n    formSection.append(userLastNameDiv);\n    var userFirstDepositDiv = document.createElement(\"div\");\n    userFirstDepositDiv.classList.add(\"form-group\");\n    var userFirstDepositInput = document.createElement(\"input\");\n    userFirstDepositInput.type = \"text\";\n    userFirstDepositInput.name = \"userFirstDeposit\";\n    userFirstDepositInput.placeholder = \"Enter your first deposit\";\n    userFirstDepositInput.classList.add(\"form-control\");\n    userFirstDepositInput.required = true;\n    userFirstDepositDiv.append(userFirstDepositInput);\n    formSection.append(userFirstDepositDiv);\n    var userAccountTypeSection = document.createElement(\"div\");\n    userAccountTypeSection.classList.add(\"form-group\");\n    var userAccountTypeDiv1 = document.createElement(\"div\");\n    userAccountTypeDiv1.classList.add(\"form-check\");\n    var userAccountTypeInput1 = document.createElement(\"input\");\n    userAccountTypeInput1.classList.add(\"form-check-input\");\n    userAccountTypeInput1.id = \"userAccountType1\";\n    userAccountTypeInput1.type = \"radio\";\n    userAccountTypeInput1.name = \"userAccountType\";\n    userAccountTypeInput1.value = \"savings\";\n    userAccountTypeInput1.checked = true;\n    userAccountTypeInput1.required = true;\n    userAccountTypeDiv1.append(userAccountTypeInput1);\n    var userAccountTypeLabel1 = document.createElement(\"label\");\n    userAccountTypeLabel1.classList.add(\"form-check-label\");\n    userAccountTypeLabel1.htmlFor = \"userAccountType1\";\n    userAccountTypeLabel1.innerHTML = \"Savings\";\n    userAccountTypeDiv1.append(userAccountTypeLabel1);\n    var userAccountTypeDiv2 = document.createElement(\"div\");\n    userAccountTypeDiv2.classList.add(\"form-check\");\n    var userAccountTypeInput2 = document.createElement(\"input\");\n    userAccountTypeInput2.classList.add(\"form-check-input\");\n    userAccountTypeInput2.id = \"userAccountType2\";\n    userAccountTypeInput2.type = \"radio\";\n    userAccountTypeInput2.name = \"userAccountType\";\n    userAccountTypeInput2.value = \"checkings\";\n    userAccountTypeInput2.checked = true;\n    userAccountTypeInput2.required = true;\n    userAccountTypeDiv2.append(userAccountTypeInput2);\n    var userAccountTypeLabel2 = document.createElement(\"label\");\n    userAccountTypeLabel2.classList.add(\"form-check-label\");\n    userAccountTypeLabel2.htmlFor = \"userAccountType2\";\n    userAccountTypeLabel2.innerHTML = \"Checkings\";\n    userAccountTypeDiv2.append(userAccountTypeLabel2);\n    userAccountTypeSection.append(userAccountTypeDiv1);\n    userAccountTypeSection.append(userAccountTypeDiv2);\n    formSection.append(userAccountTypeSection);\n    var submitButton = document.createElement(\"button\");\n    submitButton.classList.add(\"btn\", \"btn-primary\", \"col-12\");\n    submitButton.innerHTML = \"Submit\";\n    submitButton.type = \"submit\";\n    formSection.append(submitButton);\n    div2.append(formSection);\n    div1.append(div2);\n    initialPage === null || initialPage === void 0 ? void 0 : initialPage.append(div1);\n    var bankPageDiv = document.createElement(\"div\");\n    initialPage === null || initialPage === void 0 ? void 0 : initialPage.append(bankPageDiv);\n};\nexports[\"default\"] = CreateInitialPage;\n\n\n//# sourceURL=webpack://recurtion-virtual-banking-app/./src/createInitialPage.ts?");

/***/ }),

/***/ "./src/mainBankPage.ts":
/*!*****************************!*\
  !*** ./src/mainBankPage.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar mainBankPage = function (userBankAccount) {\n    var mainContainer = document.createElement(\"div\");\n    mainContainer.classList.add(\"bg-green\", \"col-12\", \"text-center\", \"pt-md-4\", \"px-4\", \"pt-1\", \"text-white\");\n    var userInfoDiv = document.createElement(\"div\");\n    var nameP = document.createElement(\"p\");\n    nameP.innerHTML = \"Your Name: \" + userBankAccount.getFullName();\n    nameP.classList.add(\"py-1\");\n    userInfoDiv.append(nameP);\n    var bankIdP = document.createElement(\"div\");\n    bankIdP.innerHTML = \"Your Back ID: \" + userBankAccount.accountNumber;\n    bankIdP.classList.add(\"py-1\");\n    userInfoDiv.append(bankIdP);\n    var depositP = document.createElement(\"p\");\n    depositP.innerHTML = \"Your First Deposit: $\" + userBankAccount.initialDeposit;\n    depositP.classList.add(\"py-1\");\n    userInfoDiv.append(depositP);\n    mainContainer.append(userInfoDiv);\n    return mainContainer;\n};\nexports[\"default\"] = mainBankPage;\n\n\n//# sourceURL=webpack://recurtion-virtual-banking-app/./src/mainBankPage.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;