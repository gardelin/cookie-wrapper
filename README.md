# Cookie-wrapper

[![ookie-wrapper on NPM](https://img.shields.io/npm/v/sdom-js.svg?style=flat-square)](https://www.npmjs.com/package/@gardelin/cookie-wrapper) [![Standard JavaScript Style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

Tiny cookie wrapper

## Install

```sh
$ npm i @gardelin/cookie-wrapper --save
```

## Use
```javascrip
var wrapper = new Cookie();
```

## API

* [`get`](#get)
* [`set`](#set)
* [`delete`](#delete)

### .get(name)

Get cookie by name

```es6
wrapper.get("bla");
// {
//      key: "bla",
//      value: "asldkmalskdmas",
// }
```
### .set(name, value, options)

Set cookie

```es6
wrapper.set("bla", "aasdasd", { expires: 30, path: '/' });
```

### .delete(name)

Delete cookie

```es6
wrapper.delete("bla");
```

## License

[MIT](https://opensource.org/licenses/MIT). © 2019 Gardelin