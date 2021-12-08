### Universal router

Simple but highly functioning router for client side and server side.

### Usage

```javascript
const router = useUniversalRouter('/containers/3/hello', [
  ['/pages/:page', 'page-detail'],
  ['/containers/:number/:id', 'container-detail'],
  ['/', 'home'],
  ['/about', 'about'],
]);

// { match: 'container-detail', arguments: ['containers', '3', 'hello'] };
```

Happy hacking!
