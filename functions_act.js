// - - - - - - - - - - - - - - - - - - - - - -

// Activity 1

// - - - - - - - - - - - - - - - - - - - - - -

// const factorial = (n) => {
//     if ((n === 0) || (n === 1)){
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// }

// console.log(factorial(33));

// - - - - - - - - - - - - - - - - - - - - - -

// Activity 2

// - - - - - - - - - - - - - - - - - - - - - -

// let orderCount = 0;

// const takeOrder = (topping1,topping2) => {
//     console.log(`Pizza with ${topping1} and ${topping2}.`);
//     orderCount++;
//     console.log(orderCount)
// }

// takeOrder("ham", "pineapple");

// - - - - - - - - - - - - - - - - - - - - - -

// Activity 3

// - - - - - - - - - - - - - - - - - - - - - -

// let pin = 6969;
// let accountId = 69420;
// let balance = Math.ceil(Math.random() * 100);

// function atm(userPin, userId, withdraw) {
//     if(accountId === userId) {
//         if(pin === userPin) {
//             if(withdraw <= balance) {
//                 console.log(`Your balance is: £${balance}.`)
//                 balance = balance - withdraw;
//                 console.log(`£${withdraw} withdrawn from your account, Your new balance is £${balance}`)
//             } else {
//                 console.log(`Error: Insufficient funds.`)
//             }
//         } else {
//             console.log("Error: Incorrect pin.")
//         }
//     } else {
//         console.log("Error: Unrecognised user.")
//     }
// }

// atm(6969, 69420, 50);