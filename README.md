# tabby-cache
The smallest cache library that actually works.\
`37` lines of code, `0` dependencies.

Install: `npm install tabby-cache`

## Usage

```js
const TabbyCache = require('tabby-cache');
const cache = new TabbyCache(60); // in seconds

const obj = 'object'; // string, number, boolean, object, array
cache.set(obj, 'cache-key'); // set the cache

// cache that exists
cache.get('cache-key') // return obj

// cache that doesn't exists or after timeout
cache.get('cache') // return undenifed
```

*Example:*
```js
const myObj = { name: 'Tabby', description: 'bot' };
cache.set(myObj, 'user-data');

cache.get('user-data'); // return { name: 'Tabby', description: 'bot' };
```
