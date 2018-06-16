# authorer

Parse author :bow: string from package.json

* **ZERO** :zero: run :running: time dependencies
* actually a single dependency - *mocha* :coffee:

## Install

`npm install authorer`
or for cooler guys out there
`yarn add authorer`

## Usage

```js
const authorer = require('authorer')

var { name, email, website } = authorer('Dhruv Jain <dhruvjainpenny@gmail.com> (https://maddhruv.github.io)')

// name Dhruv Jain
// email dhruvjainpenny@gmail.com
// website https://maddhruv.github.io
```

### Found issue?

raise one at https://github.com/maddhruv/authorer/issues/new
