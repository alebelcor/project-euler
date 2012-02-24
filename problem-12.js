/*!
 * The following problem is taken from Project Euler
 * http://projecteuler.net/problem=12
 *
 * A. 76576500
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

var getPrimeFactors = function (num) {
    'use strict';

    var i = 2,
        primeFactors = [];

    while (i <= num) {
        if (isPrime(i) && (num % i === 0)) {
            primeFactors.push(i);
            num = num / i;
        } else {
            i += 1;
        }
    }

    return primeFactors;

};

var ANSWER_TO_PROBLEM_12 = (function () {
    'use strict';

    var i,
        j,
        primeFactorsLen,
        divisors,
        triangularNumber,
        primeFactors,
        primeFactorNum,
        primeFactorsCount,
        key;

    for (i = 1; i < Infinity; i += 1) {

        // reset
        divisors = 0;
        triangularNumber = getNthTriangularNumber(i);
        primeFactors = getPrimeFactors(triangularNumber);
        primeFactorsCount = {};

        // count prime factors into primeFactorsCount
        for (j = 0, primeFactorsLen = primeFactors.length; j < primeFactorsLen; j += 1) {
            primeFactorNum = primeFactors[j];
            primeFactorsCount[primeFactorNum] = primeFactorsCount[primeFactorNum] ?
                    (primeFactorsCount[primeFactorNum] + 1) :
                    1;
        }

        // get total or divisors
        for (key in primeFactorsCount) {
            divisors = divisors ?
                    divisors * (primeFactorsCount[key] + 1) :
                    (primeFactorsCount[key] + 1);
        }

        if (divisors >= 500) {
            return triangularNumber;
        }
    }

}());
