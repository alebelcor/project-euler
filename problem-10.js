/*!
 * The following problem is taken from Project Euler
 * http://projecteuler.net/problem=10
 *
 * A. 142913828922
 */

var isPrime = function (num) {
    'use strict';

    var i,
        divisor,
        squareRoot;

    if (num === 1) {
        return false;
    }

    if (num === 2) {
        return true;
    }

    squareRoot = Math.sqrt(num);

    if (squareRoot % 1 === 0) {
        return false;
    }

    divisor = Math.ceil(squareRoot);

    for (i = 2; i <= divisor; i += 1) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;

};

var ANSWER_TO_PROBLEM_10 = (function () {
    'use strict';

    var i,
        sumOfPrimes = 0,
        limit = 2000000;

    for (i = 2; i < limit; i += 1) {
        if (isPrime(i)) {
            sumOfPrimes += i;
        }
    }

    return sumOfPrimes;

}());
