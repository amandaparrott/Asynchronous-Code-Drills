// new function that takes a string as a message
// const newMessage = (message) => console.log(message);
//call function
// newMessage('I like carrots.'); 

//use setTimeout to call function again with diff. message after 2 seconds
// setTimeout(function () {newMessage('I like strawberries more than carrots.')}, 2000);

//new function getWords, setTimeout functions at specified intervals
// const getWords = (fruit) => {
//     console.log(fruit);
// }
// getWords('apple');
// setTimeout(function() {getWords('banana')}, 3000);
// setTimeout(function() {getWords('mango')}, 2000);
// setTimeout(function() {getWords('orange')}, 1000);

//done function
const done = ()=> console.log('Job is done!');



//countdown function
const countdown = (num, callback) => {
setTimeout(function() {
    if (num > 0) {
        console.log(num);
        countdown(num -1, callback);
    } else {
        done();
    }
}, 1000);
}

countdown(5, done);

let lunchTime = true;

const orderMeSomeFood = () => {
    return new Promise ((resolve, reject) => {
if (lunchTime === true) {
    let myLunch = {
        lunch: 'burger',
        drink: 'sparking water'
    };
    resolve(myLunch);
} else {
    let error = new Error('not lunchtime');
    reject(error);
}
    });
}

orderMeSomeFood().then((resolve) => {
    return console.log(resolve);
}).catch((error) => {
    console.log(error);
})