# ember-checkbox-with-label

[![Greenkeeper badge](https://badges.greenkeeper.io/kellyselden/ember-checkbox-with-label.svg)](https://greenkeeper.io/)
[![npm version](https://badge.fury.io/js/ember-checkbox-with-label.svg)](https://badge.fury.io/js/ember-checkbox-with-label)
[![Build Status](https://travis-ci.org/kellyselden/ember-checkbox-with-label.svg?branch=master)](https://travis-ci.org/kellyselden/ember-checkbox-with-label)
[![Ember Version](https://img.shields.io/badge/ember-2.12%2B-brightgreen.svg)](https://www.emberjs.com/)

Ember component for a checkbox wrapped in a label

## Demo

https://kellyselden.github.io/ember-checkbox-with-label

## Usage

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
