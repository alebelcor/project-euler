/*!
 * The following problem is taken from Project Euler
 * http://projecteuler.net/problem=9
 *
 * A. 31875000
 */

var ANSWER_TO_PROBLEM_9 = (function () {
    'use strict';

    var i,
        j,
        k;

    for (i = 1; i < 1000; i += 1) {
        for (j = i + 1; j < 1000; j += 1) {
            for (k = j + 1; k < 1000; k += 1) {
                if ((k * k) === ((i * i) + (j * j))
                        && ((i + j + k) === 1000)) {
                    return i * j * k;
                }
            }
        }
    }

}());
