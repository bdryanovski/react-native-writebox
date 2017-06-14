# react-native-writebox
> ReactNative component for displaying Facebook/Twitter like textarea at the bottom of the screen
> with character counter.


[![NPM Version][npm-image]][npm-url]

Very basic component to display textarea at the bottom of the screen that will autogrow few lines
when the user input more content that we could display - also there is character counter that could
display how many characters are left.

![](header.png)

## Installation

```sh
npm install react-native-writebox --save
```

Yarn:

```sh
yarn add react-native-writebox
```

## Usage example

Basic usage:

```js
<WriteBox
  onSubmit={ ({ value }) => { console.log('Input value', value) } }
  >
  { this.props.children }
</WriteBox>
 ```

## Development setup

Describe how to install all development dependencies and how to run an automated test-suite of some kind. Potentially do this for multiple platforms.

```sh
make install
npm test
```

## Author

Bozhidar Dryanovski – [@dryanovski](https://twitter.com/dryanovski)

Distributed under the ISC license. See ``LICENSE`` for more information.

[https://github.com/bdryanovski/rn-writebox](https://github.com/bdryanovski/react-native-writebox)

## Contributing

1. Fork it (<https://github.com/bdryanovski/react-native-writebox/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/react-native-writebox.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/react-native-writebox
[wiki]: https://github.com/yourname/yourproject/wiki
