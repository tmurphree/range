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
Useful as a starting point for Array.map.  E.g. with Promise.all and paging:
``` js
const axios = require('axios');

const getAllPages = (lastPageNumber) => return Promise.all(
  range(1, lastPageNumber) // [1, 2, 3, 4, . . . all the way to lastPageNumber]
    .map((pageNumber) => `https://api.foo.com/getReports?key=${process.env.KEY}&page=${pageNumber}`)
    .map(axios.get)
);

getTotalPages()
  .then(getAllPages)
  .then(doSomethingUseful)
  .catch(myGreatErrorHandler);
```