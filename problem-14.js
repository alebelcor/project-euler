/*!
 * The following problem is taken from Project Euler
 * http://projecteuler.net/problem=14
 *
 * A. 837799
 */

var getNextTerm = function (num) {
    'use strict';

    return (num % 2 === 0) ? num / 2 : ((3 * num) + 1);
};

var ANSWER_TO_PROBLEM_14 = (function () {
    'use strict';

    var i = 999999,
        numberWithLongestChain = 0,
        longestChain = 0,
        nextTerm,
        terms;

    while (i--) {
        terms = [];
        terms.push(i);
        nextTerm = getNextTerm(i);

        while (nextTerm > 1) {
            terms.push(nextTerm);
            nextTerm = getNextTerm(nextTerm);
        }

        if (terms.length > longestChain) {
            longestChain = terms.length;
            numberWithLongestChain = i;
        }
    }

    return numberWithLongestChain;

}());
