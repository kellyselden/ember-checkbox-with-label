# ember-checkbox-with-label

[![npm version](https://badge.fury.io/js/ember-checkbox-with-label.svg)](https://badge.fury.io/js/ember-checkbox-with-label)
[![Build Status](https://travis-ci.org/kellyselden/ember-checkbox-with-label.svg?branch=master)](https://travis-ci.org/kellyselden/ember-checkbox-with-label)

Ember component for a checkbox wrapped in a label

Ember 2+ only

## Usage

```hbs
{{checkbox-with-label
  checked=checked
  text="text goes here"
  update=(action (mut checked))
}}
```

or with positional params

```hbs
{{checkbox-with-label
  checked
  "text goes here"
  update=(action (mut checked))
}}
```
