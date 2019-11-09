# range  
Return an array with numbers either ascending or descending. 

## Installation  
npm install --save --save-exact @tmurphree/range  

## Basic usage  
``` js
// [1, 2, 3]
range(1, 3);

// goes down, too
// [4, 3, 2]
range(4, 2);

// returns a one-item array if start === end
// [42]
range(42, 42);

```

## More realistic usage  
Useful for Promise.all and paging:
``` js
const axios = require('axios');
const totalPages = 12;

Promise.all(
  range(2, totalPages) // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    .map((pageNumber) => `https://api.foo.com/getReports?key=${process.env.KEY}&page=${pageNumber}`)
    .map(axios.get)
);
```