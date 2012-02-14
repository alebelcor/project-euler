/*!
 * The following problem is taken from Project Euler
 * http://projecteuler.net/problem=7
 *
 * A. 104743
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

var ANSWER_TO_PROBLEM_7 = (function () {
    'use strict';

    var num = 2,
        primes = [];

    while (primes.length < 10001) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num += 1;
    }

    return primes[primes.length - 1];

}());
