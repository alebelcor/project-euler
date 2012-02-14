/*!
 * The following problem is taken from Project Euler
 * http://projecteuler.net/problem=4
 *
 * A. 906609
 */

var ANSWER_TO_PROBLEM_4 = (function () {
    'use strict';

    var i = 998001,
        j = 999,
        strNumber;

    while (i--) {
        strNumber = i.toString();

        if (strNumber !== (strNumber.split('').reverse().join(''))) {
            continue;
        }

        for (j = 999; j.toString().length === 3; j -= 1) {
            if (i % j === 0 && (i / j).toString().length === 3) {
                return i;
            }
        }
    }

}());