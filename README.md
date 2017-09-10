# node-url-cleaner

Remove garbage params from url (like utm_source)

```
npm install --save link-cleaner
```

```js
var removeUrlGarbage = require('link-cleaner')

var url = 'https://developers.google.com/web/updates/2016/10/navigator-share?foo=bar&utm_source=feed&utm_medium=feed&utm_campaign=updates_feed&from=rss'
removeUrlGarbage(url);

// > https://developers.google.com/web/updates/2016/10/navigator-share?foo=bar 
```
