var messages = [1, 2, 3, 4, 5];

/**
 * Incorrect Implementation
 * The solution provided below does not work because var is scoped in the current execution context. (See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var).
 * The provided for loop runs for values of i from 0 through 4 and queues 5 console.log calls on the message queue (in new event loops).
 * When the for loop is finished, the queue is empty and it starts going through the console.log one by one.
 * However, at this stage the value of i is 5 (which is the failing condition for the loop).
 * We try to log messages[5] which does not exist and hence the 'undefined'
 */

// for (var i = 0; i < messages.length; i++) {
//     setTimeout(function() {
//         console.log(messages[i]);
//     }, 1000 * i);
// }

/**
 * Correct Implementation
 * The solution to the above problem is to use let instead of a var, which scopes variables on a block level (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
 * This ensures that each console.log statement has the required value of i and the code works as expected
 */

for (let i = 0; i < messages.length; i++) {
    setTimeout(function() {
        console.log(messages[i]);
    }, 1000 * i);
}

