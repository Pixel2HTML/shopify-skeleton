# Pixel2HTML Shopify Skeleton Generator

[![npm version](https://badge.fury.io/js/generator-pixel2html-shopify.svg)](https://badge.fury.io/js/generator-pixel2html-shopify)
[![Build Status](https://travis-ci.org/Pixel2HTML/pixel2html-generator.svg?branch=master)](https://travis-ci.org/Pixel2HTML/pixel2html-generator)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This is a tool for scaffolding Shopify themes quickly. Built as a starting point like Slate but with more flexibility in mind.

Brought to you by ~>
<a href='https://pixel2html.com/'><img alt='Pixel2HTML Logo' src='pixel2html-logo.png' width='100px' /></a>


## Instructions
```
$ npm i -g yo generator-pixel2html-shopify
$ yo pixel2html-shopify
```

If your terminal doesn't have TrueColor Support or doesn't handle animations properly you can run the generator with the optional flag:

```
$ yo pixel2html-shopify --noAnims

```

## Features

- Sourcemaps
- JS with Browserify and ES6 (Just require your problems away)
- Split vendor and app code (both JS and SCSS)
- SVG System
- Shopify Plus in mind (Checkout layouts)
- Sensible starting points (all in blank but already wired up)
- Based of Gulp 4
- Live reloading with Browser Sync
- Zip everything in the end
