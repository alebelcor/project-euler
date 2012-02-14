/*!
 * The following problem is taken from Project Euler
 * http://projecteuler.net/problem=3
 *
 * A. 6857
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

var ANSWER_TO_PROBLEM_3 = (function () {
    'use strict';

    var given = 600851475143,
        i = 2;

    while (i < given) {
        if (isPrime(i)) {
            if (given % i === 0) {
                if (isPrime(given / i)) {
                    return (given / i);
                } else {
                    given = given / i;
                }
            } else {
                i += 1;
            }
        } else {
            i += 1;
        }
    }

}());
