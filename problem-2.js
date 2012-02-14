/*!
 * The following problem is taken from Project Euler
 * http://projecteuler.net/problem=2
 *
 * A. 4613732
 */

var ANSWER_TO_PROBLEM_2 = (function () {
    'use strict';

    var i = 1,
        next,
        sumOfEvenTerms = 0,
        fibo = function (n) {
            if (n < 2) {
                return 1;
            }

            return fibo(n - 2) + fibo(n - 1);
        };

    while (next = fibo(i), next < 4000000) {
        if (next % 2 === 0) {
            sumOfEvenTerms += next;
        }

        i += 1;
    }

    return sumOfEvenTerms;

}());
