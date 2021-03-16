# tabby-cache
The smallest cache library that actually works.\
`37` lines of code, `0` dependencies.

## Installation

Current stable version: `1.0`

```
$ npm install tabby-cache
```

## Usage

```js
const TabbyCache = require('tabby-cache');
const cache = new TabbyCache(60); // in seconds

const obj = 'object'; // string, number, boolean, object, array
cache.set(obj, 'cache-key'); // set the cache

// cache that exists
cache.get('cache-key'); // return obj

// cache that doesn't exists
cache.get('cache'); // return undefined
```

*Example:*
```js
const TabbyCache = require('tabby-cache');
const cache = new TabbyCache(300);
const fetch = require('node-fetch');

async function TabbyApi() {
    const getCache = cache.get('tabby-api');
    if (getCache == undefined) {
        const { users, servers } = await fetch('https://api.tabbybot.eu/').then(res => res.json());
        cache.set(users, 'tabby-api');
    } else {
        cache.get('tabby-api');
    };
};
```
