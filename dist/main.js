/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getDay/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/getDay/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getDay
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {0|1|2|3|4|5|6} the day of week, 0 represents Sunday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * const result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */

function getDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getDay();
  return day;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/nextDay/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/nextDay/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ nextDay)
/* harmony export */ });
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addDays/index.js */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var _getDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getDay/index.js */ "./node_modules/date-fns/esm/getDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name nextDay
 * @category Weekday Helpers
 * @summary When is the next day of the week?
 *
 * @description
 * When is the next day of the week? 0-6 the day of the week, 0 represents Sunday.
 *
 * @param {Date | number} date - the date to check
 * @param {Day} day - day of the week
 * @returns {Date} - the date is the next day of week
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // When is the next Monday after Mar, 20, 2020?
 * const result = nextDay(new Date(2020, 2, 20), 1)
 * //=> Mon Mar 23 2020 00:00:00
 *
 * @example
 * // When is the next Tuesday after Mar, 21, 2020?
 * const result = nextDay(new Date(2020, 2, 21), 2)
 * //=> Tue Mar 24 2020 00:00:00
 */

function nextDay(date, day) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var delta = day - (0,_getDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date);
  if (delta <= 0) delta += 7;
  return (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, delta);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/nextMonday/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/nextMonday/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ nextMonday)
/* harmony export */ });
/* harmony import */ var _nextDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nextDay/index.js */ "./node_modules/date-fns/esm/nextDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name nextMonday
 * @category Weekday Helpers
 * @summary When is the next Monday?
 *
 * @description
 * When is the next Monday?
 *
 * @param {Date | number} date - the date to start counting from
 * @returns {Date} the next Monday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // When is the next Monday after Mar, 22, 2020?
 * const result = nextMonday(new Date(2020, 2, 22))
 * //=> Mon Mar 23 2020 00:00:00
 */

function nextMonday(date) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_nextDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, 1);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/previousDay/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/previousDay/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ previousDay)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _getDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getDay/index.js */ "./node_modules/date-fns/esm/getDay/index.js");
/* harmony import */ var _subDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../subDays/index.js */ "./node_modules/date-fns/esm/subDays/index.js");




/**
 * @name previousDay
 * @category Weekday Helpers
 * @summary When is the previous day of the week?
 *
 * @description
 * When is the previous day of the week? 0-6 the day of the week, 0 represents Sunday.
 *
 * @param {Date | number} date - the date to check
 * @param {number} day - day of the week
 * @returns {Date} - the date is the previous day of week
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // When is the previous Monday before Mar, 20, 2020?
 * const result = previousDay(new Date(2020, 2, 20), 1)
 * //=> Mon Mar 16 2020 00:00:00
 *
 * @example
 * // When is the previous Tuesday before Mar, 21, 2020?
 * const result = previousDay(new Date(2020, 2, 21), 2)
 * //=> Tue Mar 17 2020 00:00:00
 */
function previousDay(date, day) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var delta = (0,_getDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date) - day;
  if (delta <= 0) delta += 7;
  return (0,_subDays_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, delta);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/previousMonday/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/previousMonday/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ previousMonday)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _previousDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../previousDay/index.js */ "./node_modules/date-fns/esm/previousDay/index.js");


/**
 * @name previousMonday
 * @category Weekday Helpers
 * @summary When is the previous Monday?
 *
 * @description
 * When is the previous Monday?
 *
 * @param {Date | number} date - the date to start counting from
 * @returns {Date} the previous Monday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // When is the previous Monday before Jun, 18, 2021?
 * const result = previousMonday(new Date(2021, 5, 18))
 * //=> Mon June 14 2021 00:00:00
 */

function previousMonday(date) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_previousDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, 1);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/subDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addDays/index.js */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name subDays
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the days subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * const result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */

function subDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Task {
  constructor(title, description, priority, project, dueDate) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.status = "Pending";
    this.dueDate = dueDate;
    if (project === "Home" || project === "Today" || project === "Week") {
      this.project = "";
    } else {
      this.project = project;
    }
    this.id = Math.floor(Math.random() * 1000);
  }

  setTaskStatus(status) {
    this.status = status;
  }

  getDate() {
    return this.dueDate;
  }

  setId(id) {
    this.id = id;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);


/***/ }),

/***/ "./src/TaskLibrary.js":
/*!****************************!*\
  !*** ./src/TaskLibrary.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/previousMonday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/nextMonday/index.js");

/* eslint-disable comma-dangle */
class TaskLibrary {
  constructor() {
    /* this.tasks = [];
    // this.tasks = [
    //   {
    //     title: "Task 1",
    //     description: "Task 1 description",
    //     priority: "High",
    //     status: "Pending",
    //     project: "Project-1",
    //     dueDate: "2020-01-01",
    //     id: 241,
    //   },
    //   {
    //     title: "Task 2",
    //     description: "Task 2 description",
    //     priority: "Medium",
    //     status: "Pending",
    //     project: "Project-2",
    //     dueDate: "2020-02-01",
    //     id: 238,
    //   },
    //   {
    //     title: "Task 3",
    //     description: "Task 3 description",
    //     priority: "Low",
    //     status: "Pending",
    //     project: "Project-3",
    //     dueDate: "2022-04-20",
    //     id: 237,
    //   },
    //   {
    //     title: "Task 3",
    //     description: "Task 3 description",
    //     priority: "Low",
    //     status: "Pending",
    //     project: "",
    //     dueDate: "2020-03-01",
    //     id: 235,
    //   },
    //   {
    //     title: "Task 3",
    //     description: "Task 3 description",
    //     priority: "Low",
    //     status: "Pending",
    //     project: "",
    //     dueDate: "2020-03-01",
    //     id: 234,
    //   },
    //   {
    //     title: "Task 3",
    //     description: "Task 3 description",
    //     priority: "Low",
    //     status: "Pending",
    //     project: "Project-4",
    //     dueDate: "2020-03-01",
    //     id: 233,
    //   },
    //   {
    //     title: "Task 3",
    //     description: "Task 3 description",
    //     priority: "Low",
    //     status: "Pending",
    //     project: "Project-4",
    //     dueDate: "2020-03-01",
    //     id: 231,
    //   },
    // ];*/
    if (localStorage.getItem("taskLibrary") === null) {
      this.tasks = [];
      localStorage.setItem("taskLibrary", JSON.stringify(this.tasks));
    } else {
      this.tasks = JSON.parse(localStorage.getItem("taskLibrary"));
    }
  }

  addTask(task) {
    // check if task id already exists
    for (let i = 0; i < this.tasks.length; i++) {
      if (task.id === this.tasks[i].id) {
        const newId = Math.floor(Math.random() * 1000);
        task.setId(newId);
      }
    }
    this.tasks.push(task);
    this.updateStorage();
  }

  removeTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== parseInt(id));
    this.updateStorage();
  }

  getTask(id) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id === parseInt(id)) {
        return this.tasks[i];
      }
    }
  }

  getTasks(view) {
    // returns a filtered/unfiltered array of tasks
    switch (view) {
      case "Home":
        return this.tasks;
      case "Today":
        return this.getTodayTasks();
      case "Week":
        return this.getWeekTasks();
      default:
        break;
    }
  }

  getProjects() {
    const projects = [];
    this.tasks.forEach((task) => {
      if (task.project !== "") {
        if (!projects.includes(task.project)) {
          projects.push(task.project);
        }
      }
    });
    return projects;
  }

  getTodayTasks() {
    return this.tasks.filter((task) => {
      return task.dueDate === new Date().toISOString().slice(0, 10);
    });
  }

  getWeekTasks() {
    return this.tasks.filter((task) => {
      return (
        task.dueDate >= (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date()).toISOString().slice(0, 10) &&
        task.dueDate < (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date()).toISOString().slice(0, 10)
      );
    });
  }

  getTasksByProject(project) {
    return this.tasks.filter((task) => task.project === project);
  }

  updateStorage() {
    localStorage.setItem("taskLibrary", JSON.stringify(this.tasks));
  }

  updateTaskStatus(id, status) {
    const task = this.getTask(id);
    if (status === "Completed") {
      task.status = "Pending";
    } else {
      task.status = "Completed";
    }
    this.updateStorage();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskLibrary);


/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class UI {
  static displayView(view, library) {
    const tasks = library.getTasks(view);
    UI.renderTasks(tasks);
  }

  static displayProjects(project, library) {
    const projects = library.getTasksByProject(project);
    UI.renderTasks(projects);
  }

  static renderProjectList(library) {
    const projectList = document.querySelector(".projects-list");
    const projects = library.getProjects();
    projects.forEach((project) => {
      const li = document.createElement("li");
      li.innerText = project;
      projectList.appendChild(li);
    });
  }

  static renderTasks(tasks) {
    const tasksTable = document.querySelector(".todo-list table tbody");
    tasksTable.innerHTML = `
          <tr>
            <th class="task-name">Task</th>
            <th class="task-due-date">Due Date</th>
            <th class="task-priority">Priority</th>
            <th class="">Status</th>
          </tr>`;
    tasks.forEach((task) => {
      const row = `
          <tr class="todo-task" data-id=${task.id}>
            <td class="task-name">${task.title}</td>
            <td class="task-due-date">${task.dueDate}</td>
            <td class="task-priority">${task.priority}</td>
            <td class="task-status">${task.status}</td>
            <td class="task-status-change">
              <span class="material-icons-outlined"> done </span>
            </td>
            <td class="task-delete">
              <span class="material-icons-outlined"> delete </span>
            </td>
          </tr>`;
      tasksTable.innerHTML += row;
    });
  }

  static addProject(name) {
    const projectList = document.querySelector(".projects-list");
    const li = document.createElement("li");
    li.innerText = name;
    projectList.appendChild(li);
  }

  static removeProject() {}

  static showForm(section) {
    section.classList.remove("hidden");
  }

  static hideForm(section) {
    section.classList.add("hidden");
  }

  static addTask(task) {
    const tasksTable = document.querySelector(".todo-list table tbody");
    const row = `
          <tr class="todo-task" data-id=${task.id}>
            <td class="task-name">${task.title}</td>
            <td class="task-due-date">${task.dueDate}</td>
            <td class="task-priority">${task.priority}</td>
            <td class="task-status">${task.status}</td>
            <td class="task-status-change">
              <span class="material-icons-outlined"> done </span>
            </td>
            <td class="task-delete">
              <span class="material-icons-outlined"> delete </span>
            </td>
          </tr>`;
    tasksTable.innerHTML += row;
  }

  static removeTask(taskTable, task) {
    taskTable.removeChild(task);
  }

  static displayTaskInfo() {}

  static changeTaskStatus(id) {
    const task = document.querySelector(`[data-id="${id}"] .task-status`);
    if (task.innerText === "Completed") {
      task.innerText = "Pending";
    } else {
      task.innerText = "Completed";
    }
  }

  static sortTasks() {}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);


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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI.js */ "./src/UI.js");
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task.js */ "./src/Task.js");
/* harmony import */ var _TaskLibrary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaskLibrary.js */ "./src/TaskLibrary.js");




const library = new _TaskLibrary_js__WEBPACK_IMPORTED_MODULE_2__["default"]();

// views
const mainViews = document.querySelectorAll(".views-list li");
const projectViews = document.querySelector(".projects-list");
const viewTitle = document.querySelector(".todo-project");

// buttons
const addProjectBtn = document.querySelector(".add-project button");
const addTaskBtn = document.querySelector(".add-task button");
const cancelBtn = document.querySelectorAll(".cancel");

// forms
const addProjectForm = document.querySelector(".todo-project-form");
const addTaskForm = document.querySelector(".todo-task-form");

// form buttons & inputs
// // inputs
const projectName = document.querySelector("#project-name");
const taskName = document.querySelector("#task-name");
const taskDesc = "";
const taskPriority = document.querySelector("#task-priority");
const taskDueDate = document.querySelector("#task-due-date");
const taskProject = document.querySelector(".todo-project");

// // buttons
const addProjectFormBtn = document.querySelector("#addNewProject");
const addTaskFormBtn = document.querySelector("#addNewTask");

// task List
const taskList = document.querySelector(".todo-list table tbody");

// Listeners

// DOM loads for the first time
document.addEventListener("DOMContentLoaded", () => {
  // renders all tasks by default when loading the page
  const tasks = library.getTasks("Home");
  _UI_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderTasks(tasks);
  _UI_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderProjectList(library);
});

// Switch main views
mainViews.forEach((view) => {
  view.addEventListener("click", () => {
    // changes the view
    viewTitle.innerHTML = view.innerText;
    _UI_js__WEBPACK_IMPORTED_MODULE_0__["default"].displayView(view.innerText, library);
  });
});

// Switch project views
projectViews.addEventListener("click", (e) => {
  // changes the project view
  viewTitle.innerHTML = e.target.innerText;
  _UI_js__WEBPACK_IMPORTED_MODULE_0__["default"].displayProjects(e.target.innerText, library);
});

// Show add project form
addProjectBtn.addEventListener("click", (e) => {
  e.preventDefault();
  _UI_js__WEBPACK_IMPORTED_MODULE_0__["default"].showForm(addProjectForm);
});

// Add project
addProjectFormBtn.addEventListener("click", (e) => {
  e.preventDefault();
  _UI_js__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(projectName.value);
  _UI_js__WEBPACK_IMPORTED_MODULE_0__["default"].hideForm(addProjectForm);
});

// Show add task form
addTaskBtn.addEventListener("click", (e) => {
  e.preventDefault();
  _UI_js__WEBPACK_IMPORTED_MODULE_0__["default"].showForm(addTaskForm);
});

// Add task
addTaskFormBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const taskNameCap =
    taskName.value.charAt(0).toUpperCase() + taskName.value.slice(1);
  const task = new _Task_js__WEBPACK_IMPORTED_MODULE_1__["default"](
    taskNameCap,
    taskDesc,
    taskPriority.value,
    taskProject.innerText,
    taskDueDate.value
  );
  library.addTask(task);
  _UI_js__WEBPACK_IMPORTED_MODULE_0__["default"].addTask(task);
  _UI_js__WEBPACK_IMPORTED_MODULE_0__["default"].hideForm(addTaskForm);
});

// Close Project/Task form
cancelBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const sect = e.target.parentElement.parentElement.parentElement;
    _UI_js__WEBPACK_IMPORTED_MODULE_0__["default"].hideForm(sect);
  });
});

// change task status or remove task
taskList.addEventListener("click", (e) => {
  if (e.target.innerText === "delete") {
    _UI_js__WEBPACK_IMPORTED_MODULE_0__["default"].removeTask(taskList, e.target.parentElement.parentElement);
    library.removeTask(e.target.parentElement.parentElement.dataset.id);
  } else if (e.target.innerText === "done") {
    const currStatus = document.querySelector(
      `[data-id="${e.target.parentElement.parentElement.dataset.id}"] .task-status`
    ).innerText;
    library.updateTaskStatus(
      e.target.parentElement.parentElement.dataset.id,
      currStatus
    );
    _UI_js__WEBPACK_IMPORTED_MODULE_0__["default"].changeTaskStatus(e.target.parentElement.parentElement.dataset.id);
  }
});

// display task info
taskList.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("task-name") &&
    e.target.innerText !== "Task"
  ) {
    console.log(e.target.innerText);
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSmU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWm1EO0FBQ1g7QUFDaUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsUUFBUTtBQUNuQixhQUFhLE1BQU07QUFDbkIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCxhQUFhLDREQUFNO0FBQ25CLGVBQWUsbUVBQVM7O0FBRXhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ3dDO0FBQ2lCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixhQUFhLGVBQWU7QUFDNUIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCxhQUFhLDREQUFNO0FBQ25CO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QjBDO0FBQ0Y7QUFDaUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxNQUFNO0FBQ25CLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLG9CQUFvQiw0REFBTTtBQUMxQjtBQUNBLFNBQVMsNkRBQU87QUFDaEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQzBDO0FBQ2U7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQixhQUFhLE1BQU07QUFDbkIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCxTQUFTLDZEQUFPO0FBQ2hCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCeUQ7QUFDakI7QUFDRTs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQixXQUFXLFFBQVE7QUFDbkIsYUFBYSxNQUFNO0FBQ25CLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZixFQUFFLHNFQUFZO0FBQ2QsY0FBYyw0REFBTTtBQUNwQjtBQUNBLFNBQVMsNkRBQU87QUFDaEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ3lEO0FBQ1A7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQixhQUFhLE1BQU07QUFDbkIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCxTQUFTLGlFQUFXO0FBQ3BCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCbUQ7QUFDVDtBQUNlO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLFFBQVE7QUFDbkIsYUFBYSxNQUFNO0FBQ25CLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2QsZUFBZSxtRUFBUztBQUN4QixTQUFTLDZEQUFPO0FBQ2hCOzs7Ozs7Ozs7Ozs7Ozs7QUM5QnlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsTUFBTTtBQUNuQixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCx5REFBeUQ7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0Esd0tBQXdLOztBQUV4SztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVCa0M7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvREFBYztBQUN0Qyx1QkFBdUIsb0RBQVU7QUFDakM7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDbkszQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsUUFBUTtBQUNsRCxvQ0FBb0MsV0FBVztBQUMvQyx3Q0FBd0MsYUFBYTtBQUNyRCx3Q0FBd0MsY0FBYztBQUN0RCxzQ0FBc0MsWUFBWTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxRQUFRO0FBQ2xELG9DQUFvQyxXQUFXO0FBQy9DLHdDQUF3QyxhQUFhO0FBQ3JELHdDQUF3QyxjQUFjO0FBQ3RELHNDQUFzQyxZQUFZO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxREFBcUQsR0FBRztBQUN4RDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLEVBQUUsRUFBQzs7Ozs7OztVQ3JHbEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnlCO0FBQ0k7QUFDYzs7QUFFM0Msb0JBQW9CLHVEQUFXOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMERBQWM7QUFDaEIsRUFBRSxnRUFBb0I7QUFDdEIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwREFBYztBQUNsQixHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOERBQWtCO0FBQ3BCLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1REFBVztBQUNiLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsRUFBRSx5REFBYTtBQUNmLEVBQUUsdURBQVc7QUFDYixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdURBQVc7QUFDYixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0RBQUk7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHNEQUFVO0FBQ1osRUFBRSx1REFBVztBQUNiLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQVc7QUFDZixHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFhO0FBQ2pCO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsbUJBQW1CLGdEQUFnRDtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrREFBbUI7QUFDdkI7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wX3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvcF90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2dldERheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL25leHREYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9uZXh0TW9uZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvcF90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcHJldmlvdXNEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wcmV2aW91c01vbmRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1YkRheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9saXN0Ly4vc3JjL1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9saXN0Ly4vc3JjL1Rhc2tMaWJyYXJ5LmpzIiwid2VicGFjazovL3RvcF90b2RvbGlzdC8uL3NyYy9VSS5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3BfdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3BfdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3BfdG9kb2xpc3QvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIGRheXMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSAtIHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXlzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IC0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDEwIGRheXMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZERheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxuICogLy89PiBUaHUgU2VwIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGREYXlzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuXG4gIGlmIChpc05hTihhbW91bnQpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICBpZiAoIWFtb3VudCkge1xuICAgIC8vIElmIDAgZGF5cywgbm8tb3AgdG8gYXZvaWQgY2hhbmdpbmcgdGltZXMgaW4gdGhlIGhvdXIgYmVmb3JlIGVuZCBvZiBEU1RcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGFtb3VudCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZ2V0RGF5XG4gKiBAY2F0ZWdvcnkgV2Vla2RheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGRheSBvZiB0aGUgd2VlayBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgZGF5IG9mIHRoZSB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcmV0dXJucyB7MHwxfDJ8M3w0fDV8Nn0gdGhlIGRheSBvZiB3ZWVrLCAwIHJlcHJlc2VudHMgU3VuZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggZGF5IG9mIHRoZSB3ZWVrIGlzIDI5IEZlYnJ1YXJ5IDIwMTI/XG4gKiBjb25zdCByZXN1bHQgPSBnZXREYXkobmV3IERhdGUoMjAxMiwgMSwgMjkpKVxuICogLy89PiAzXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHJldHVybiBkYXk7XG59IiwiaW1wb3J0IGFkZERheXMgZnJvbSBcIi4uL2FkZERheXMvaW5kZXguanNcIjtcbmltcG9ydCBnZXREYXkgZnJvbSBcIi4uL2dldERheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgbmV4dERheVxuICogQGNhdGVnb3J5IFdlZWtkYXkgSGVscGVyc1xuICogQHN1bW1hcnkgV2hlbiBpcyB0aGUgbmV4dCBkYXkgb2YgdGhlIHdlZWs/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBXaGVuIGlzIHRoZSBuZXh0IGRheSBvZiB0aGUgd2Vlaz8gMC02IHRoZSBkYXkgb2YgdGhlIHdlZWssIDAgcmVwcmVzZW50cyBTdW5kYXkuXG4gKlxuICogQHBhcmFtIHtEYXRlIHwgbnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF5fSBkYXkgLSBkYXkgb2YgdGhlIHdlZWtcbiAqIEByZXR1cm5zIHtEYXRlfSAtIHRoZSBkYXRlIGlzIHRoZSBuZXh0IGRheSBvZiB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IC0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hlbiBpcyB0aGUgbmV4dCBNb25kYXkgYWZ0ZXIgTWFyLCAyMCwgMjAyMD9cbiAqIGNvbnN0IHJlc3VsdCA9IG5leHREYXkobmV3IERhdGUoMjAyMCwgMiwgMjApLCAxKVxuICogLy89PiBNb24gTWFyIDIzIDIwMjAgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hlbiBpcyB0aGUgbmV4dCBUdWVzZGF5IGFmdGVyIE1hciwgMjEsIDIwMjA/XG4gKiBjb25zdCByZXN1bHQgPSBuZXh0RGF5KG5ldyBEYXRlKDIwMjAsIDIsIDIxKSwgMilcbiAqIC8vPT4gVHVlIE1hciAyNCAyMDIwIDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmV4dERheShkYXRlLCBkYXkpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWx0YSA9IGRheSAtIGdldERheShkYXRlKTtcbiAgaWYgKGRlbHRhIDw9IDApIGRlbHRhICs9IDc7XG4gIHJldHVybiBhZGREYXlzKGRhdGUsIGRlbHRhKTtcbn0iLCJpbXBvcnQgbmV4dERheSBmcm9tIFwiLi4vbmV4dERheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgbmV4dE1vbmRheVxuICogQGNhdGVnb3J5IFdlZWtkYXkgSGVscGVyc1xuICogQHN1bW1hcnkgV2hlbiBpcyB0aGUgbmV4dCBNb25kYXk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBXaGVuIGlzIHRoZSBuZXh0IE1vbmRheT9cbiAqXG4gKiBAcGFyYW0ge0RhdGUgfCBudW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBzdGFydCBjb3VudGluZyBmcm9tXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5leHQgTW9uZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hlbiBpcyB0aGUgbmV4dCBNb25kYXkgYWZ0ZXIgTWFyLCAyMiwgMjAyMD9cbiAqIGNvbnN0IHJlc3VsdCA9IG5leHRNb25kYXkobmV3IERhdGUoMjAyMCwgMiwgMjIpKVxuICogLy89PiBNb24gTWFyIDIzIDIwMjAgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXh0TW9uZGF5KGRhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBuZXh0RGF5KGRhdGUsIDEpO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0RGF5IGZyb20gXCIuLi9nZXREYXkvaW5kZXguanNcIjtcbmltcG9ydCBzdWJEYXlzIGZyb20gXCIuLi9zdWJEYXlzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgcHJldmlvdXNEYXlcbiAqIEBjYXRlZ29yeSBXZWVrZGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFdoZW4gaXMgdGhlIHByZXZpb3VzIGRheSBvZiB0aGUgd2Vlaz9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFdoZW4gaXMgdGhlIHByZXZpb3VzIGRheSBvZiB0aGUgd2Vlaz8gMC02IHRoZSBkYXkgb2YgdGhlIHdlZWssIDAgcmVwcmVzZW50cyBTdW5kYXkuXG4gKlxuICogQHBhcmFtIHtEYXRlIHwgbnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7bnVtYmVyfSBkYXkgLSBkYXkgb2YgdGhlIHdlZWtcbiAqIEByZXR1cm5zIHtEYXRlfSAtIHRoZSBkYXRlIGlzIHRoZSBwcmV2aW91cyBkYXkgb2Ygd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAtIDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoZW4gaXMgdGhlIHByZXZpb3VzIE1vbmRheSBiZWZvcmUgTWFyLCAyMCwgMjAyMD9cbiAqIGNvbnN0IHJlc3VsdCA9IHByZXZpb3VzRGF5KG5ldyBEYXRlKDIwMjAsIDIsIDIwKSwgMSlcbiAqIC8vPT4gTW9uIE1hciAxNiAyMDIwIDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoZW4gaXMgdGhlIHByZXZpb3VzIFR1ZXNkYXkgYmVmb3JlIE1hciwgMjEsIDIwMjA/XG4gKiBjb25zdCByZXN1bHQgPSBwcmV2aW91c0RheShuZXcgRGF0ZSgyMDIwLCAyLCAyMSksIDIpXG4gKiAvLz0+IFR1ZSBNYXIgMTcgMjAyMCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmV2aW91c0RheShkYXRlLCBkYXkpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWx0YSA9IGdldERheShkYXRlKSAtIGRheTtcbiAgaWYgKGRlbHRhIDw9IDApIGRlbHRhICs9IDc7XG4gIHJldHVybiBzdWJEYXlzKGRhdGUsIGRlbHRhKTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHByZXZpb3VzRGF5IGZyb20gXCIuLi9wcmV2aW91c0RheS9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBwcmV2aW91c01vbmRheVxuICogQGNhdGVnb3J5IFdlZWtkYXkgSGVscGVyc1xuICogQHN1bW1hcnkgV2hlbiBpcyB0aGUgcHJldmlvdXMgTW9uZGF5P1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogV2hlbiBpcyB0aGUgcHJldmlvdXMgTW9uZGF5P1xuICpcbiAqIEBwYXJhbSB7RGF0ZSB8IG51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIHN0YXJ0IGNvdW50aW5nIGZyb21cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcHJldmlvdXMgTW9uZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hlbiBpcyB0aGUgcHJldmlvdXMgTW9uZGF5IGJlZm9yZSBKdW4sIDE4LCAyMDIxP1xuICogY29uc3QgcmVzdWx0ID0gcHJldmlvdXNNb25kYXkobmV3IERhdGUoMjAyMSwgNSwgMTgpKVxuICogLy89PiBNb24gSnVuZSAxNCAyMDIxIDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJldmlvdXNNb25kYXkoZGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHByZXZpb3VzRGF5KGRhdGUsIDEpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkRGF5cyBmcm9tIFwiLi4vYWRkRGF5cy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3ViRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBzdWJ0cmFjdGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCAxMCBkYXlzIGZyb20gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1YkRheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxuICogLy89PiBGcmkgQXVnIDIyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJEYXlzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gYWRkRGF5cyhkaXJ0eURhdGUsIC1hbW91bnQpO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdC5pby9manVsZVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBwcm9qZWN0LCBkdWVEYXRlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5zdGF0dXMgPSBcIlBlbmRpbmdcIjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIGlmIChwcm9qZWN0ID09PSBcIkhvbWVcIiB8fCBwcm9qZWN0ID09PSBcIlRvZGF5XCIgfHwgcHJvamVjdCA9PT0gXCJXZWVrXCIpIHtcbiAgICAgIHRoaXMucHJvamVjdCA9IFwiXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgfVxuICAgIHRoaXMuaWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKTtcbiAgfVxuXG4gIHNldFRhc2tTdGF0dXMoc3RhdHVzKSB7XG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gIH1cblxuICBnZXREYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gIH1cblxuICBzZXRJZChpZCkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrO1xuIiwiaW1wb3J0IHsgbmV4dE1vbmRheSwgcHJldmlvdXNNb25kYXkgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbi8qIGVzbGludC1kaXNhYmxlIGNvbW1hLWRhbmdsZSAqL1xuY2xhc3MgVGFza0xpYnJhcnkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiB0aGlzLnRhc2tzID0gW107XG4gICAgLy8gdGhpcy50YXNrcyA9IFtcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgdGl0bGU6IFwiVGFzayAxXCIsXG4gICAgLy8gICAgIGRlc2NyaXB0aW9uOiBcIlRhc2sgMSBkZXNjcmlwdGlvblwiLFxuICAgIC8vICAgICBwcmlvcml0eTogXCJIaWdoXCIsXG4gICAgLy8gICAgIHN0YXR1czogXCJQZW5kaW5nXCIsXG4gICAgLy8gICAgIHByb2plY3Q6IFwiUHJvamVjdC0xXCIsXG4gICAgLy8gICAgIGR1ZURhdGU6IFwiMjAyMC0wMS0wMVwiLFxuICAgIC8vICAgICBpZDogMjQxLFxuICAgIC8vICAgfSxcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgdGl0bGU6IFwiVGFzayAyXCIsXG4gICAgLy8gICAgIGRlc2NyaXB0aW9uOiBcIlRhc2sgMiBkZXNjcmlwdGlvblwiLFxuICAgIC8vICAgICBwcmlvcml0eTogXCJNZWRpdW1cIixcbiAgICAvLyAgICAgc3RhdHVzOiBcIlBlbmRpbmdcIixcbiAgICAvLyAgICAgcHJvamVjdDogXCJQcm9qZWN0LTJcIixcbiAgICAvLyAgICAgZHVlRGF0ZTogXCIyMDIwLTAyLTAxXCIsXG4gICAgLy8gICAgIGlkOiAyMzgsXG4gICAgLy8gICB9LFxuICAgIC8vICAge1xuICAgIC8vICAgICB0aXRsZTogXCJUYXNrIDNcIixcbiAgICAvLyAgICAgZGVzY3JpcHRpb246IFwiVGFzayAzIGRlc2NyaXB0aW9uXCIsXG4gICAgLy8gICAgIHByaW9yaXR5OiBcIkxvd1wiLFxuICAgIC8vICAgICBzdGF0dXM6IFwiUGVuZGluZ1wiLFxuICAgIC8vICAgICBwcm9qZWN0OiBcIlByb2plY3QtM1wiLFxuICAgIC8vICAgICBkdWVEYXRlOiBcIjIwMjItMDQtMjBcIixcbiAgICAvLyAgICAgaWQ6IDIzNyxcbiAgICAvLyAgIH0sXG4gICAgLy8gICB7XG4gICAgLy8gICAgIHRpdGxlOiBcIlRhc2sgM1wiLFxuICAgIC8vICAgICBkZXNjcmlwdGlvbjogXCJUYXNrIDMgZGVzY3JpcHRpb25cIixcbiAgICAvLyAgICAgcHJpb3JpdHk6IFwiTG93XCIsXG4gICAgLy8gICAgIHN0YXR1czogXCJQZW5kaW5nXCIsXG4gICAgLy8gICAgIHByb2plY3Q6IFwiXCIsXG4gICAgLy8gICAgIGR1ZURhdGU6IFwiMjAyMC0wMy0wMVwiLFxuICAgIC8vICAgICBpZDogMjM1LFxuICAgIC8vICAgfSxcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgdGl0bGU6IFwiVGFzayAzXCIsXG4gICAgLy8gICAgIGRlc2NyaXB0aW9uOiBcIlRhc2sgMyBkZXNjcmlwdGlvblwiLFxuICAgIC8vICAgICBwcmlvcml0eTogXCJMb3dcIixcbiAgICAvLyAgICAgc3RhdHVzOiBcIlBlbmRpbmdcIixcbiAgICAvLyAgICAgcHJvamVjdDogXCJcIixcbiAgICAvLyAgICAgZHVlRGF0ZTogXCIyMDIwLTAzLTAxXCIsXG4gICAgLy8gICAgIGlkOiAyMzQsXG4gICAgLy8gICB9LFxuICAgIC8vICAge1xuICAgIC8vICAgICB0aXRsZTogXCJUYXNrIDNcIixcbiAgICAvLyAgICAgZGVzY3JpcHRpb246IFwiVGFzayAzIGRlc2NyaXB0aW9uXCIsXG4gICAgLy8gICAgIHByaW9yaXR5OiBcIkxvd1wiLFxuICAgIC8vICAgICBzdGF0dXM6IFwiUGVuZGluZ1wiLFxuICAgIC8vICAgICBwcm9qZWN0OiBcIlByb2plY3QtNFwiLFxuICAgIC8vICAgICBkdWVEYXRlOiBcIjIwMjAtMDMtMDFcIixcbiAgICAvLyAgICAgaWQ6IDIzMyxcbiAgICAvLyAgIH0sXG4gICAgLy8gICB7XG4gICAgLy8gICAgIHRpdGxlOiBcIlRhc2sgM1wiLFxuICAgIC8vICAgICBkZXNjcmlwdGlvbjogXCJUYXNrIDMgZGVzY3JpcHRpb25cIixcbiAgICAvLyAgICAgcHJpb3JpdHk6IFwiTG93XCIsXG4gICAgLy8gICAgIHN0YXR1czogXCJQZW5kaW5nXCIsXG4gICAgLy8gICAgIHByb2plY3Q6IFwiUHJvamVjdC00XCIsXG4gICAgLy8gICAgIGR1ZURhdGU6IFwiMjAyMC0wMy0wMVwiLFxuICAgIC8vICAgICBpZDogMjMxLFxuICAgIC8vICAgfSxcbiAgICAvLyBdOyovXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza0xpYnJhcnlcIikgPT09IG51bGwpIHtcbiAgICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza0xpYnJhcnlcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy50YXNrcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tMaWJyYXJ5XCIpKTtcbiAgICB9XG4gIH1cblxuICBhZGRUYXNrKHRhc2spIHtcbiAgICAvLyBjaGVjayBpZiB0YXNrIGlkIGFscmVhZHkgZXhpc3RzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGFzay5pZCA9PT0gdGhpcy50YXNrc1tpXS5pZCkge1xuICAgICAgICBjb25zdCBuZXdJZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApO1xuICAgICAgICB0YXNrLnNldElkKG5ld0lkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xuICAgIHRoaXMudXBkYXRlU3RvcmFnZSgpO1xuICB9XG5cbiAgcmVtb3ZlVGFzayhpZCkge1xuICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5pZCAhPT0gcGFyc2VJbnQoaWQpKTtcbiAgICB0aGlzLnVwZGF0ZVN0b3JhZ2UoKTtcbiAgfVxuXG4gIGdldFRhc2soaWQpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLnRhc2tzW2ldLmlkID09PSBwYXJzZUludChpZCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3NbaV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0VGFza3Modmlldykge1xuICAgIC8vIHJldHVybnMgYSBmaWx0ZXJlZC91bmZpbHRlcmVkIGFycmF5IG9mIHRhc2tzXG4gICAgc3dpdGNoICh2aWV3KSB7XG4gICAgICBjYXNlIFwiSG9tZVwiOlxuICAgICAgICByZXR1cm4gdGhpcy50YXNrcztcbiAgICAgIGNhc2UgXCJUb2RheVwiOlxuICAgICAgICByZXR1cm4gdGhpcy5nZXRUb2RheVRhc2tzKCk7XG4gICAgICBjYXNlIFwiV2Vla1wiOlxuICAgICAgICByZXR1cm4gdGhpcy5nZXRXZWVrVGFza3MoKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGdldFByb2plY3RzKCkge1xuICAgIGNvbnN0IHByb2plY3RzID0gW107XG4gICAgdGhpcy50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBpZiAodGFzay5wcm9qZWN0ICE9PSBcIlwiKSB7XG4gICAgICAgIGlmICghcHJvamVjdHMuaW5jbHVkZXModGFzay5wcm9qZWN0KSkge1xuICAgICAgICAgIHByb2plY3RzLnB1c2godGFzay5wcm9qZWN0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfVxuXG4gIGdldFRvZGF5VGFza3MoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB7XG4gICAgICByZXR1cm4gdGFzay5kdWVEYXRlID09PSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0V2Vla1Rhc2tzKCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGFzay5kdWVEYXRlID49IHByZXZpb3VzTW9uZGF5KG5ldyBEYXRlKCkpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApICYmXG4gICAgICAgIHRhc2suZHVlRGF0ZSA8IG5leHRNb25kYXkobmV3IERhdGUoKSkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMClcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRUYXNrc0J5UHJvamVjdChwcm9qZWN0KSB7XG4gICAgcmV0dXJuIHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnByb2plY3QgPT09IHByb2plY3QpO1xuICB9XG5cbiAgdXBkYXRlU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tMaWJyYXJ5XCIsIEpTT04uc3RyaW5naWZ5KHRoaXMudGFza3MpKTtcbiAgfVxuXG4gIHVwZGF0ZVRhc2tTdGF0dXMoaWQsIHN0YXR1cykge1xuICAgIGNvbnN0IHRhc2sgPSB0aGlzLmdldFRhc2soaWQpO1xuICAgIGlmIChzdGF0dXMgPT09IFwiQ29tcGxldGVkXCIpIHtcbiAgICAgIHRhc2suc3RhdHVzID0gXCJQZW5kaW5nXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhc2suc3RhdHVzID0gXCJDb21wbGV0ZWRcIjtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVTdG9yYWdlKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFza0xpYnJhcnk7XG4iLCJjbGFzcyBVSSB7XG4gIHN0YXRpYyBkaXNwbGF5Vmlldyh2aWV3LCBsaWJyYXJ5KSB7XG4gICAgY29uc3QgdGFza3MgPSBsaWJyYXJ5LmdldFRhc2tzKHZpZXcpO1xuICAgIFVJLnJlbmRlclRhc2tzKHRhc2tzKTtcbiAgfVxuXG4gIHN0YXRpYyBkaXNwbGF5UHJvamVjdHMocHJvamVjdCwgbGlicmFyeSkge1xuICAgIGNvbnN0IHByb2plY3RzID0gbGlicmFyeS5nZXRUYXNrc0J5UHJvamVjdChwcm9qZWN0KTtcbiAgICBVSS5yZW5kZXJUYXNrcyhwcm9qZWN0cyk7XG4gIH1cblxuICBzdGF0aWMgcmVuZGVyUHJvamVjdExpc3QobGlicmFyeSkge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1saXN0XCIpO1xuICAgIGNvbnN0IHByb2plY3RzID0gbGlicmFyeS5nZXRQcm9qZWN0cygpO1xuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgbGkuaW5uZXJUZXh0ID0gcHJvamVjdDtcbiAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyByZW5kZXJUYXNrcyh0YXNrcykge1xuICAgIGNvbnN0IHRhc2tzVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tbGlzdCB0YWJsZSB0Ym9keVwiKTtcbiAgICB0YXNrc1RhYmxlLmlubmVySFRNTCA9IGBcbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGggY2xhc3M9XCJ0YXNrLW5hbWVcIj5UYXNrPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzcz1cInRhc2stZHVlLWRhdGVcIj5EdWUgRGF0ZTwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3M9XCJ0YXNrLXByaW9yaXR5XCI+UHJpb3JpdHk8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzPVwiXCI+U3RhdHVzPC90aD5cbiAgICAgICAgICA8L3RyPmA7XG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgY29uc3Qgcm93ID0gYFxuICAgICAgICAgIDx0ciBjbGFzcz1cInRvZG8tdGFza1wiIGRhdGEtaWQ9JHt0YXNrLmlkfT5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRhc2stbmFtZVwiPiR7dGFzay50aXRsZX08L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwidGFzay1kdWUtZGF0ZVwiPiR7dGFzay5kdWVEYXRlfTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJ0YXNrLXByaW9yaXR5XCI+JHt0YXNrLnByaW9yaXR5fTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJ0YXNrLXN0YXR1c1wiPiR7dGFzay5zdGF0dXN9PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRhc2stc3RhdHVzLWNoYW5nZVwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCI+IGRvbmUgPC9zcGFuPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRhc2stZGVsZXRlXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIj4gZGVsZXRlIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPC90cj5gO1xuICAgICAgdGFza3NUYWJsZS5pbm5lckhUTUwgKz0gcm93O1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGFkZFByb2plY3QobmFtZSkge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1saXN0XCIpO1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpLmlubmVyVGV4dCA9IG5hbWU7XG4gICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQobGkpO1xuICB9XG5cbiAgc3RhdGljIHJlbW92ZVByb2plY3QoKSB7fVxuXG4gIHN0YXRpYyBzaG93Rm9ybShzZWN0aW9uKSB7XG4gICAgc2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICB9XG5cbiAgc3RhdGljIGhpZGVGb3JtKHNlY3Rpb24pIHtcbiAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIH1cblxuICBzdGF0aWMgYWRkVGFzayh0YXNrKSB7XG4gICAgY29uc3QgdGFza3NUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1saXN0IHRhYmxlIHRib2R5XCIpO1xuICAgIGNvbnN0IHJvdyA9IGBcbiAgICAgICAgICA8dHIgY2xhc3M9XCJ0b2RvLXRhc2tcIiBkYXRhLWlkPSR7dGFzay5pZH0+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJ0YXNrLW5hbWVcIj4ke3Rhc2sudGl0bGV9PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRhc2stZHVlLWRhdGVcIj4ke3Rhc2suZHVlRGF0ZX08L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwidGFzay1wcmlvcml0eVwiPiR7dGFzay5wcmlvcml0eX08L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwidGFzay1zdGF0dXNcIj4ke3Rhc2suc3RhdHVzfTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJ0YXNrLXN0YXR1cy1jaGFuZ2VcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiPiBkb25lIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJ0YXNrLWRlbGV0ZVwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCI+IGRlbGV0ZSA8L3NwYW4+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+YDtcbiAgICB0YXNrc1RhYmxlLmlubmVySFRNTCArPSByb3c7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlVGFzayh0YXNrVGFibGUsIHRhc2spIHtcbiAgICB0YXNrVGFibGUucmVtb3ZlQ2hpbGQodGFzayk7XG4gIH1cblxuICBzdGF0aWMgZGlzcGxheVRhc2tJbmZvKCkge31cblxuICBzdGF0aWMgY2hhbmdlVGFza1N0YXR1cyhpZCkge1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7aWR9XCJdIC50YXNrLXN0YXR1c2ApO1xuICAgIGlmICh0YXNrLmlubmVyVGV4dCA9PT0gXCJDb21wbGV0ZWRcIikge1xuICAgICAgdGFzay5pbm5lclRleHQgPSBcIlBlbmRpbmdcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFzay5pbm5lclRleHQgPSBcIkNvbXBsZXRlZFwiO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBzb3J0VGFza3MoKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBVSTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFVJIGZyb20gXCIuL1VJLmpzXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi9UYXNrLmpzXCI7XG5pbXBvcnQgVGFza0xpYnJhcnkgZnJvbSBcIi4vVGFza0xpYnJhcnkuanNcIjtcblxuY29uc3QgbGlicmFyeSA9IG5ldyBUYXNrTGlicmFyeSgpO1xuXG4vLyB2aWV3c1xuY29uc3QgbWFpblZpZXdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi52aWV3cy1saXN0IGxpXCIpO1xuY29uc3QgcHJvamVjdFZpZXdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1saXN0XCIpO1xuY29uc3Qgdmlld1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXByb2plY3RcIik7XG5cbi8vIGJ1dHRvbnNcbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0IGJ1dHRvblwiKTtcbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrIGJ1dHRvblwiKTtcbmNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FuY2VsXCIpO1xuXG4vLyBmb3Jtc1xuY29uc3QgYWRkUHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tcHJvamVjdC1mb3JtXCIpO1xuY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tdGFzay1mb3JtXCIpO1xuXG4vLyBmb3JtIGJ1dHRvbnMgJiBpbnB1dHNcbi8vIC8vIGlucHV0c1xuY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbmFtZVwiKTtcbmNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLW5hbWVcIik7XG5jb25zdCB0YXNrRGVzYyA9IFwiXCI7XG5jb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stcHJpb3JpdHlcIik7XG5jb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kdWUtZGF0ZVwiKTtcbmNvbnN0IHRhc2tQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXByb2plY3RcIik7XG5cbi8vIC8vIGJ1dHRvbnNcbmNvbnN0IGFkZFByb2plY3RGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGROZXdQcm9qZWN0XCIpO1xuY29uc3QgYWRkVGFza0Zvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZE5ld1Rhc2tcIik7XG5cbi8vIHRhc2sgTGlzdFxuY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tbGlzdCB0YWJsZSB0Ym9keVwiKTtcblxuLy8gTGlzdGVuZXJzXG5cbi8vIERPTSBsb2FkcyBmb3IgdGhlIGZpcnN0IHRpbWVcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgLy8gcmVuZGVycyBhbGwgdGFza3MgYnkgZGVmYXVsdCB3aGVuIGxvYWRpbmcgdGhlIHBhZ2VcbiAgY29uc3QgdGFza3MgPSBsaWJyYXJ5LmdldFRhc2tzKFwiSG9tZVwiKTtcbiAgVUkucmVuZGVyVGFza3ModGFza3MpO1xuICBVSS5yZW5kZXJQcm9qZWN0TGlzdChsaWJyYXJ5KTtcbn0pO1xuXG4vLyBTd2l0Y2ggbWFpbiB2aWV3c1xubWFpblZpZXdzLmZvckVhY2goKHZpZXcpID0+IHtcbiAgdmlldy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vIGNoYW5nZXMgdGhlIHZpZXdcbiAgICB2aWV3VGl0bGUuaW5uZXJIVE1MID0gdmlldy5pbm5lclRleHQ7XG4gICAgVUkuZGlzcGxheVZpZXcodmlldy5pbm5lclRleHQsIGxpYnJhcnkpO1xuICB9KTtcbn0pO1xuXG4vLyBTd2l0Y2ggcHJvamVjdCB2aWV3c1xucHJvamVjdFZpZXdzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAvLyBjaGFuZ2VzIHRoZSBwcm9qZWN0IHZpZXdcbiAgdmlld1RpdGxlLmlubmVySFRNTCA9IGUudGFyZ2V0LmlubmVyVGV4dDtcbiAgVUkuZGlzcGxheVByb2plY3RzKGUudGFyZ2V0LmlubmVyVGV4dCwgbGlicmFyeSk7XG59KTtcblxuLy8gU2hvdyBhZGQgcHJvamVjdCBmb3JtXG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIFVJLnNob3dGb3JtKGFkZFByb2plY3RGb3JtKTtcbn0pO1xuXG4vLyBBZGQgcHJvamVjdFxuYWRkUHJvamVjdEZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgVUkuYWRkUHJvamVjdChwcm9qZWN0TmFtZS52YWx1ZSk7XG4gIFVJLmhpZGVGb3JtKGFkZFByb2plY3RGb3JtKTtcbn0pO1xuXG4vLyBTaG93IGFkZCB0YXNrIGZvcm1cbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgVUkuc2hvd0Zvcm0oYWRkVGFza0Zvcm0pO1xufSk7XG5cbi8vIEFkZCB0YXNrXG5hZGRUYXNrRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCB0YXNrTmFtZUNhcCA9XG4gICAgdGFza05hbWUudmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0YXNrTmFtZS52YWx1ZS5zbGljZSgxKTtcbiAgY29uc3QgdGFzayA9IG5ldyBUYXNrKFxuICAgIHRhc2tOYW1lQ2FwLFxuICAgIHRhc2tEZXNjLFxuICAgIHRhc2tQcmlvcml0eS52YWx1ZSxcbiAgICB0YXNrUHJvamVjdC5pbm5lclRleHQsXG4gICAgdGFza0R1ZURhdGUudmFsdWVcbiAgKTtcbiAgbGlicmFyeS5hZGRUYXNrKHRhc2spO1xuICBVSS5hZGRUYXNrKHRhc2spO1xuICBVSS5oaWRlRm9ybShhZGRUYXNrRm9ybSk7XG59KTtcblxuLy8gQ2xvc2UgUHJvamVjdC9UYXNrIGZvcm1cbmNhbmNlbEJ0bi5mb3JFYWNoKChidG4pID0+IHtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBzZWN0ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgVUkuaGlkZUZvcm0oc2VjdCk7XG4gIH0pO1xufSk7XG5cbi8vIGNoYW5nZSB0YXNrIHN0YXR1cyBvciByZW1vdmUgdGFza1xudGFza0xpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldC5pbm5lclRleHQgPT09IFwiZGVsZXRlXCIpIHtcbiAgICBVSS5yZW1vdmVUYXNrKHRhc2tMaXN0LCBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICAgIGxpYnJhcnkucmVtb3ZlVGFzayhlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pZCk7XG4gIH0gZWxzZSBpZiAoZS50YXJnZXQuaW5uZXJUZXh0ID09PSBcImRvbmVcIikge1xuICAgIGNvbnN0IGN1cnJTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWlkPVwiJHtlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pZH1cIl0gLnRhc2stc3RhdHVzYFxuICAgICkuaW5uZXJUZXh0O1xuICAgIGxpYnJhcnkudXBkYXRlVGFza1N0YXR1cyhcbiAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5kYXRhc2V0LmlkLFxuICAgICAgY3VyclN0YXR1c1xuICAgICk7XG4gICAgVUkuY2hhbmdlVGFza1N0YXR1cyhlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pZCk7XG4gIH1cbn0pO1xuXG4vLyBkaXNwbGF5IHRhc2sgaW5mb1xudGFza0xpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGlmIChcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YXNrLW5hbWVcIikgJiZcbiAgICBlLnRhcmdldC5pbm5lclRleHQgIT09IFwiVGFza1wiXG4gICkge1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlubmVyVGV4dCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9