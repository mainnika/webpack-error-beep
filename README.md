# webpack-error-beep

[Webpack](https://webpack.js.org/) plugin that make a beep when compilation has errors or warnings.

## Installation


```
npm install --save-dev https://github.com/mainnika/webpack-error-beep
```

## Usage

In config file:

``` javascript
var WebpackErrorBeep = require('webpack-error-beep');

// ...
    plugins: [
      new WebpackErrorBeep({ beepWarning: true }),
    ]
// ...
```

It's possible to omit options in constructor.
