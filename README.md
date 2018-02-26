# Deckr

[![npm version](https://img.shields.io/npm/v/deckr.svg)](https://www.npmjs.org/package/deckr)
[![Build Status](https://travis-ci.org/interconnectit/deckr.svg?branch=master)](https://travis-ci.org/interconnectit/deckr)

Deckr is the UI framework that powers StandFirst.

## Requirements

Make sure all dependencies have been installed before moving on:

* [Node](https://nodejs.org/en/)
* [NPM](https://docs.npmjs.com/getting-started/installing-node)

## Install

Pull the whole package via NPM:

``` sh
$ npm install --save deckr
```

Or, pull individual Deckr components via NPM:

``` sh
$ npm install --save deckr-reboot
```

## Usage

The source files included are written in [Scss](http://sass-lang.com/). After [installing](#install) with npm, you can add your project's `node_modules` directory to your Sass [include paths](https://github.com/sass/node-sass#includepaths), then import it like this:

``` scss
@import "deckr/main.scss";
```

You can import individual Deckr components, for instance:

``` scss
@import "deckr-reboot/main.scss";
```

## Testing

``` sh
$ npm test
```

## Security

If you discover any security related issues, please email support@interconectit.com instead of using the issue tracker.

## Credits

- [interconnect/it](https://interconnectit.com)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
