/*!
 * The following problem is taken from Project Euler
 * http://projecteuler.net/problem=6
 *
 * A. 25164150
 */

var ANSWER_TO_PROBLEM_6 = (function () {
    'use strict';

    var sumOfTheSquares = 0,
        squareOfTheSum = 0,
        i;

    for (i = 1; i < 101; i += 1) {
        sumOfTheSquares += Math.pow(i, 2);
        squareOfTheSum += i;
    }

    squareOfTheSum = Math.pow(squareOfTheSum, 2);

    return sumOfTheSquares > squareOfTheSum ?
            sumOfTheSquares - squareOfTheSum :
            squareOfTheSum - sumOfTheSquares;

}());