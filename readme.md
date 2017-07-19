# Generator Shopify Skeleton

Scaffold and develop shopify themes quickly

<a href='https://pixel2html.com/' target='_blank'>
  <img src='pixel2html-logo.png' width='300px' />
</a>

This is a tool for scaffolding Shopify themes quickly. Built as a starting point like Slate but with more flexibility in mind.

## Instructions
```
$ npm i -g yo generator-shop-skeleton

$ yo shop-skeleton
```

If your terminal doesn't have TrueColor Support or doesn't handle animations properly you can run the generator with the optional flag:

```
$ yo shop-skeleton --noAnims
```

## Local Development
- Clone

```
$ npm run get-ready
$ npm link
```

- Update tests as needed, we are using Jest in conjunction with Yeoman-Assert and Yeoman-Helpers

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
