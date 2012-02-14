/*!
 * The following problem is taken from Project Euler
 * http://projecteuler.net/problem=5
 *
 * A. 232792560
 */

var ANSWER_TO_PROBLEM_5 = (function () {
    'use strict';

    var i, j;

    for (i = 1; i < Infinity; i += 1) {
        for (j = 1; j < 21; j += 1) {

            if (i % j !== 0) {
                break;
            }

            if (j === 20) {
                return i;
            }
        }
    }

}());
