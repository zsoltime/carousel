# Simple Carousel

![Carousel](preview.gif?raw=true)

## Usage

```html
<!-- Include CSS -->

<!-- Wrapper -->
<div class="carousel">
  <!-- Slider -->
  <div="carousel__items">
    <img src="image-1.jpg" alt="">
    <img src="image-2.jpg" alt="">
    <img src="image-3.jpg" alt="">
  </div>
  <!-- Controls -->
  <nav class="carousel__controls">
    <button class="btn btn--prev" type="button">Prev</button>
    <button class="btn btn--next" type="button">Next</button>
  </nav>
</div>

<!-- Include JS -->
<!-- Add Carousel when all images have finished loading -->
<script>
window.addEventListener('load', () => {
  document.querySelectorAll('.carousel')
    .forEach(Carousel);
});
</script>
```

## Tools Used

- [Gulp.js](https://github.com/gulpjs/gulp) task runner
- [Webpack](https://github.com/webpack/webpack) module bundler
- [Babel](https://github.com/babel/babel) compiler
- [ESLint](https://github.com/eslint/eslint) linter with Airbnb's [base config](https://www.npmjs.com/package/eslint-config-airbnb-base)
- [Pug](https://github.com/pugjs/pug) template engine
- [Sass](http://sass-lang.com) with [PostCSS](https://github.com/postcss/postcss)' [Autoprefixer](https://github.com/postcss/autoprefixer)

## Install and Build

You need to have `yarn` [installed](https://yarnpkg.com/lang/en/docs/install/) on your computer. (Actually, you could also use `npm` 👌)

#### Clone this repo

``` bash
git clone https://github.com/zsoltime/carousel.git
cd carousel
```

#### Install dependencies

``` bash
yarn
# OR
npm install
```

#### Start dev server with browser sync

It builds HTML, CSS, and the JavaScript bundle, starts a dev server and refreshes the browser on every saved changes.

``` bash
yarn start
# OR
npm start
```

#### Build production bundle

It uglifies JS, minifies CSS and images, replaces references to non-optimized scripts and stylesheets in HTML files and copies everything necessary to the `dist` folder - ready to upload.

``` bash
yarn build
# OR
npm run build
```

#### Preview production build

It's the same as the build task above but it also starts a server so you can check your work.

``` bash
yarn preview
# OR
npm run preview
```
