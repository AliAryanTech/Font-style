## font-style
[![NPM](https://img.shields.io/badge/Available%20On-NPM-lightgrey.svg?logo=npm&logoColor=DA291A&labelColor=white&style=flat-square)](https://www.npmjs.com/package/font-style)


A Node.js module to convert text into various font styles.


### Installation
You can install `font-style` using npm or yarn:

```sh
npm install font-style
```
or
```sh
yarn add font-style
```

### Usage:
The font-style module provides a function fontStyle(text, font) that takes two parameters:

- text (required): The text you want to transform.
- font (optional): The font style you want to apply. Default is 'black-square'.
Here's an example usage:
```js
const fontStyle = require('font-style');

// Transform text with default font style (black-square)
const text1 = 'Hello World';
const result1 = fontStyle(text1);
console.log(result1);

// Transform text with small-caps font style
const text2 = 'Lorem Ipsum';
const result2 = fontStyle(text2, 'small-caps');
console.log(result2);
```
Output:
```js
🅗🅔🅛🅛🅞 🅦🅞🅡🅛🅓
ʟᴏʀᴇᴍ ɪᴘꜱᴜᴍ
```

### Available Fonts
```js
const { getAllFonts } = require('font-style')

console.log('Available fonts:')
console.log(getAllFonts)
```

### Contribution
Contributions to the font-style module are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request on the [GitHub repository](https://github.com/AliAryanTech/font-style).

### Credits
The font-style module is created and maintained by [AliAryanTech](https://github.com/AliAryanTech).
