ember-checkbox-with-label
==============================================================================

[![Greenkeeper badge](https://badges.greenkeeper.io/kellyselden/ember-checkbox-with-label.svg)](https://greenkeeper.io/)
[![npm version](https://badge.fury.io/js/ember-checkbox-with-label.svg)](https://badge.fury.io/js/ember-checkbox-with-label)
[![Build Status](https://travis-ci.org/kellyselden/ember-checkbox-with-label.svg?branch=master)](https://travis-ci.org/kellyselden/ember-checkbox-with-label)
[![Ember Version](https://img.shields.io/badge/ember-2.12%2B-brightgreen.svg)](https://www.emberjs.com/)

Ember component for a checkbox wrapped in a label

### Demo

https://kellyselden.github.io/ember-checkbox-with-label

Installation
------------------------------------------------------------------------------

```
ember install ember-checkbox-with-label
```


Usage
------------------------------------------------------------------------------

```hbs
{{checkbox-with-label
  checked=checked
  text="text goes here"
  disabled=disabled
  update=(action (mut checked))
}}
```

or with positional params

```hbs
{{checkbox-with-label
  checked
  "text goes here"
  disabled=disabled
  update=(action (mut checked))
}}
```

or with a content block

```hbs
{{#checkbox-with-label
  checked
  disabled=disabled
  update=(action (mut checked))
}}
  text goes here
{{/checkbox-with-label}}
```


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-checkbox-with-label`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
