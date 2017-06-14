# react-native-writebox
> ReactNative component for displaying Facebook/Twitter like textarea at the bottom of the screen
> with character counter.


[![NPM Version][npm-image]][npm-url]

Very basic component to display textarea at the bottom of the screen that will autogrow few lines
when the user input more content that we could display - also there is character counter that could
display how many characters are left.

![](assets/demo.gif)

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
import React, { Component } from 'react'
import WriteBox from 'react-native-writebox'

export default class Demo extends Component {
  render() {
    return (
      <WriteBox onSubmit={ ({ value }) => { console.log('Input value', value) } } >
        { this.props.children }
      </WriteBox>
    )
  }
}
 ```
 
| Prop          | Type     | Default Value   | Description                                                                                                                                                          |
| ---           | ---      | ---             | ---                                                                                                                                                                  |
| onSubmit      | function |                 | When pressing `Done` or save button on the right this function will be called with the value of the textare as first argument                                        |
| onBlur        | function |                 |                                                                                                                                                                      |
| onFocus       | function |                 |                                                                                                                                                                      |
| submitLabel   | string   | 'Send'          | Text of the button on the right                                                                                                                                      |
| placeholder   | string   | 'Type here ...' | Text of the textarea that will be display when there is no value                                                                                                     |
| inputLimit    | number   | undefined       | If set this is the number of max characters that could be inputed into the textarea - after that the counter will become red and will start to count negative values |
| autoFocus     | boolean  | false           | When the component will finish rendering it auto set focus to the text area and will open the keyboard                                                               |
| value         | string   | ''              | The value of the textarea at start                                                                                                                                   |
| clearOnSubmit | boolean  | false           | When submiting the textarea if set to `true` the value of the component will be set to `undefined`                                                                   |


## Author

Bozhidar Dryanovski – [@dryanovski](https://twitter.com/dryanovski)

Distributed under the ISC license. See ``LICENSE`` for more information.

[https://github.com/bdryanovski/react-native-writebox](https://github.com/bdryanovski/react-native-writebox)

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
