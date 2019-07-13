const url = require('url');

const myUrl = new URL('http://www.puton.com/spovagang.html?id=9827653&status=active');

console.log(myUrl.host);
console.log(myUrl.href);
console.log(myUrl.searchParams);