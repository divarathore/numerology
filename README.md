# numerology
 name numerology calculator

the calculation and information data is from these two sites: 
https://astrologyfutureeye.com/fortune-tellers/name-numerology-calculator#chart
https://www.prokerala.com/numerology/destiny-numbers.htm

name numerololgy is a study of no.s assigned to alphabets which have vibrations of energy and expressions.
this calulator only calculates your Destiny no. which can be calculated by date of birth or birth fullname.
It basically adds up your alphanumerals which are assigned in the Chaldean Numerology system.
each no. is added till its a single digit unless its a no. 11 or 22. 
each no. from 1-9 plus 11 and 22 have an explanation of one's destiny.

what my code is curretnly doing:
    it has an input box in which people will type in their names
    each alphabet from the name has a no. from 1-8 assigned to it in JavaScript
    and then those no.s get added up to create a total for example:
        d = 4, i = 1, v = 6, a = 1 
        so diva = 12
    and so i have a div in my html which would show the user the output which will be the no. 
    but after we arive at 12 i am making JavaScript add those no.s further to arrive at a single digit 
    and keeping an exception for 11 and 22 (meaning not adding that further like 11 to 2 or 22 to 4)
    how this is happening is basically theres a math function which is individualising the number into digits and adding them together and giving out a sum and then checking if it is less than 9 (also making sure if its ever 11 or 22 to leave it to that) then it shows that otherwise it adds further to come to a single digit.

    other than this i have added an animation in the background which i found in the p5.js examples and i gave it a z-index to push it behind everything and make it the background.

what i need to do next:
    I need to add a paragraph to each outcome from 1-8 plus 11 and 22 which would show up according to the persons individual name number calculation. 
    i guess how i would do that is like adding the paragraphs to the html and setting them to display none and then telling JavaScript to display them using the ids i give the paragraphs when it maches the single digit.

    (i also want this to register actual no.s when the user inputs the data as in right now each alphabets no.s are being added up but if i directly type in no.s say my date of birth i want it to treat these no.s the same way.)

    (auto fill doesnt work)(maybe i'll switch this off)

