/*!
 * The following problem is taken from Project Euler
 * http://projecteuler.net/problem=1
 *
 * A. 233168
 */

var ANSWER_TO_PROBLEM_1 = (function () {
    'use strict';

    var i = 1000,
        sumOfMultiples = 0;

    while (i--) {
        if (i % 3 === 0 || i % 5 === 0) {
            sumOfMultiples += i;
        }
    }

    return sumOfMultiples;

}());
