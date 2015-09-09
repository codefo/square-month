# SquareMonth

[![Build Status](https://travis-ci.org/codefo/square-month.svg)](https://travis-ci.org/codefo/square-month.svg)
[![Dependencies](https://david-dm.org/codefo/square-month/dev-status.svg)](https://david-dm.org/codefo/square-month/dev-status.svg)

SquareMonth – simple library for getting all days in a squared month.

For example: if you want to display calendar like this:

> September 2015

| Mon  | Tue | Wen | Thu | Fri | Sat | Sun |
| :-:  | :-: | :-: | :-: | :-: | :-: | :-: |
| *31* | 1   | 2   | 3   | 4   | 5   | 6   |
| 7    | 8   | 9   | 10  | 11  | 12  | 13  |
| 14   | 15  | 16  | 17  | 18  | 19  | 20  |
| 21   | 22  | 23  | 24  | 25  | 26  | 27  |
| 28   | 29  | 30  | *1* | *2* | *3* | *4* |

You can use `SquareMonth` to get a list of all `Date` objects in in required month (including `31 Aug` and `1-4 Oct`).

## Install

### npm

```
npm install square-month --save
```

## Import

```js
// CommonJS on ES6 syntax
import SquareMonth from 'square-month';

// CommonJS on ES5 syntax
var SquareMonth = require('square-month');

// RequireJS or other AMD
define(['SquareMonth'], function(SquareMonth) {
    // ...
});

// Browser
var SquareMonth = window.SquareMonth;
```

## Usage

```js
var days = SquareMonth(2015, 8);

console.log(days.length);           // 35
console.log(days[0])                // Mon Aug 31 2015 00:00:00
console.log(days[days.length - 1]); // Sun Oct 04 2015 00:00:00
```
