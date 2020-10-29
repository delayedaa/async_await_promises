// Timing exercise 1
// Uncomment these lines and run them, observing the order that the logs happen
// How can you change it to log in the correct order?

// console.log('I should log before the data!');
// fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')
// .then((res) => res.json()).then((json) => {
//   console.log(json);
//   console.log('I should log after the data!');
// });


// async function exercise1()  {
//   console.log('I should log before the data!');
//   const res = await fetch('http://www.reddit.com/search.json?q=cats+nsfw:no');
//   const json = await res.json();
//   console.log(json);
//   console.log('I should log after the data!');
// }

// exercise1();


// ========================================

// Timing exercise 2: slightly more complicated

// console.log('I should be before the cats data');
// fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')
// .then((res) => res.json()).then((json) => {
//   console.log(json);
//   console.log('I should be between the cats and dogs');
// })
// .then(
//   fetch('http://www.reddit.com/search.json?q=dogs+nsfw:no')
//   .then((res) => res.json()).then((json) => {
//     console.log(json);
//     console.log('I should be last');
//   })
// );


// async function exercise2()  {
//   console.log('I should be before the cats data');
//   const resCats = await fetch('http://www.reddit.com/search.json?q=cats+nsfw:no');
//   const dataCats = await resCats.json();
//   console.log(`This is the cats data: ${dataCats}`);
//   console.log('I should be between the cats and dogs');
//   const resDogs = await fetch('http://www.reddit.com/search.json?q=dogs+nsfw:no');
//   const dataDogs = await resDogs.json();
//   console.log(`This is the dogs data: ${dataDogs}`);
//   console.log('I should be last');
// }

// exercise2();




// Promises

// const successfulPromise = new Promise(function(resolve, reject) {
//   setTimeout(resolve, 3000);
// });

// console.log(successfulPromise);

// const unsuccessfulPromise = new Promise(function(resolve, reject) {
//   setTimeout(reject, 3000);
// });

// console.log(unsuccessfulPromise);

// setTimeout(function() {
//   console.log(successfulPromise);
//   console.log(unsuccessfulPromise);
// }, 5000);

let conditionalPromise = new Promise(function(resolve, reject) {
  if (10 === '10') {
    resolve('Nice job!');
  } else {
    reject('You suck.');
  }
});

console.log(conditionalPromise);
conditionalPromise.then(res => {
  console.log(res);
})
.catch(err => {
  console.log(err);
});

// function myFetch(url) {
//   const myPromise = new Promise(function(resolve, reject) {
//     const data = getData();
//     if (data.statusCode === 200) {
//       resolve(data);
//     } else {
//       reject('This is bad data...');
//     }
//   });
//   return myPromise;
// }

// myFetch('some-url.com');