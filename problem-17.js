/*
 * The following problem is taken from Project Euler
 * http://projecteuler.net/problem=17
 *
 * A. 21124
 *
 */

var ANSWER_TO_PROBLEM_17 = (function () {
    'use strict';

    var i,
        number,
        numberLen = 0,
        sumOfNumberOfLetters = 0,
        numberOfLettersInNumbers = {
            units : {
                0 : 0, // zero
                1 : 3, // one
                2 : 3, // two
                3 : 5, // three
                4 : 4, // four
                5 : 4, // five
                6 : 3, // six
                7 : 5, // seven
                8 : 5, // eight
                9 : 4  // nine
            },

            tens : {
                10 : 3, // ten
                11 : 6, // eleven
                12 : 6, // twelve
                13 : 8, // thirteen
                14 : 8, // fourteen
                15 : 7, // fifteen
                16 : 7, // sixteen
                17 : 9, // seventeen
                18 : 8, // eighteen
                19 : 8, // nineteen
                20 : 6, // twenty
                30 : 6, // thirty
                40 : 5, // forty
                50 : 5, // fifty
                60 : 5, // sixty
                70 : 7, // seventy
                80 : 6, // eighty
                90 : 6  // ninety
            }
        };

    for (i = 1; i < 1000; i += 1) {
        number = i.toString();
        numberLen = number.length;

        if (numberLen === 1) {
            sumOfNumberOfLetters += numberOfLettersInNumbers.units[number];
        } else if (numberLen === 2) {
            if (number[1] === '0' || number[0] === '1') {
                sumOfNumberOfLetters += numberOfLettersInNumbers.tens[number];
            } else {
                sumOfNumberOfLetters += numberOfLettersInNumbers.tens[number[0] + '0'];
                sumOfNumberOfLetters += numberOfLettersInNumbers.units[number[1]];
            }
        } else if (numberLen === 3) {
            sumOfNumberOfLetters += numberOfLettersInNumbers.units[number[0]];
            sumOfNumberOfLetters += 7; // + hundred

            if (number[1] !== '0' || number[2] !== '0') {
                sumOfNumberOfLetters += 3; // + and

                if (number[1] === '0' && number[2] !== '0') {
                    sumOfNumberOfLetters += numberOfLettersInNumbers.units[number[2]];
                } else {
                    if ((number[1] === '1' && number[2] !== '0') ||
                            (number[1] !== '1' && number[2] === '0')) {
                        sumOfNumberOfLetters += numberOfLettersInNumbers.tens[number.substring(1, 3)];
                    } else {
                        sumOfNumberOfLetters += numberOfLettersInNumbers.tens[number[1] + '0'];
                        sumOfNumberOfLetters += numberOfLettersInNumbers.units[number[2]];
                    }
                }
            }
        }

    }

    sumOfNumberOfLetters += 3 + 8; // one + thousand

    return sumOfNumberOfLetters;

}());
