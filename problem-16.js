/*!
 * The following problem is taken from Project Euler
 * http://projecteuler.net/problem=16
 *
 * A. 1366
 *
* Depends (entirely) on BigInteger library (http://silentmatt.com/biginteger)
 */

var ANSWER_TO_PROBLEM_16 = (function () {
    'use strict';

    var arr = BigInteger(2).pow(1000).toString().split(''),
        len = arr.length,
        sumOfDigits = 0,
        i;

    for (i = 0; i < len; i += 1) {
        sumOfDigits += parseInt(arr[i], 10);
    }

    return sumOfDigits;

}());
