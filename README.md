# Eslint config itp base

[![NPM version][npm-version-image]][npm-url] [![MIT License][license-image]][license-url]

In The Pocket's base JavaScript ESLint config, based on [Airbnb's config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).

## Installation

Install the correct versions of each package, which are listed by the command:

```sh
npm info "eslint-config-itp-base@latest" peerDependencies
```

Linux/OSX users can simply run
```sh
(
export PKG=eslint-config-itp-base;
npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

Which produces and runs a command like:

```sh
npm install --save-dev eslint-config-itp-base eslint@^#.#.# eslint-plugin-import@^#.#.#
```

## Usage

Add the following to your .eslintrc file in the project root

```json
{
  "extends": "itp-base"
}
```

Run eslint

```sh
eslint .
```

## License

Eslint-Config-Itp-Base is freely distributable under the terms of the [MIT license](https://github.com/inthepocket/eslint-config-itp-base/blob/master/LICENSE).

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

[npm-url]: https://npmjs.org/package/eslint-config-itp-base
[npm-version-image]: http://img.shields.io/npm/v/eslint-config-itp-base.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/eslint-config-itp-base.svg?style=flat
