const { src, dest, watch, parallel, series } = require('gulp');

// Server
const server = require('browser-sync').create();

// Templates
const nunjucksRender = require('gulp-nunjucks-render');
const data = require('gulp-data');
const htmlBeautify = require('gulp-html-beautify');

// Images
const imagemin = require('gulp-imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');
const svgo = require('imagemin-svgo');

// Sass
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const postcss = require('gulp-postcss');

// JavaScript
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

const filepath = { src: 'src/', dist: 'htdocs/' };
const filesrc = {
  tmp: [`${filepath.src}templates/_pages/*.njk`, `${filepath.src}templates/_pages/**/*.njk`, `${filepath.src}templates/_pages/**/**/*.njk`, `!${filepath.src}templates/_parts/**/*.njk`, `!${filepath.src}templates/**/_*.njk`, `!${filepath.src}templates/_data/*.json`],
  imgs: [`${filepath.src}assets/img/**`, `${filepath.src}assets/img/**/*.{jpg,png,svg}`],
  css: [`${filepath.src}assets/scss/*.scss`, `${filepath.src}assets/scss/_*.scss`,`${filepath.src}assets/scss/**/_*.scss`],
  js: `${filepath.src}assets/js/*.js`
};


// Browsersync
const reload = (done) => {
  server.reload();
  done();
}

const serve = (done) => {
  server.init({
    server: {
      baseDir: './htdocs/'
    },
    notify: false
  });
  done();
}


// Templatesタスク
const tmp_options = {
  'indent_with_tabs':true
}

const tmp = () => {
  return src(filesrc.tmp)
    .pipe(
      data(function(){
        return require('./src/templates/_data/site.json');
    }))
    .pipe(
      nunjucksRender({
        path: 'src/templates/'
    }))
    .pipe(htmlBeautify(tmp_options))
    .pipe(dest(filepath.dist));
}


// Imagesタスク
const images = () => {
  return src(filesrc.imgs)
    .pipe(
      imagemin([
        pngquant({
          quality: [0.7, 0.8]
        }),
        mozjpeg({
          quality: 80
        }),
        svgo()
      ])
    )
    .pipe(dest(`${filepath.dist}assets/img/`));
}


// Sassタスク
const css = () => {
  return src(filesrc.css)
    .pipe(sassGlob())
    .pipe(
      sass({
        outputStyle: 'compact'
      }).on('error', sass.logError)
    )
    .pipe(
      postcss([
        require('autoprefixer')({
          grid: 'autoplace',
          cascade: false
        }),
        require('css-mqpacker')
      ])
    )
    .pipe(dest(`${filepath.dist}assets/css/`));
}


// JavaScirptタスク
const js = () => {
  return src(filesrc.js)
    .pipe(
      babel({
        presets: ['@babel/preset-env']
        })
      )
    .pipe(uglify())
    .pipe(dest(`${filepath.dist}assets/js/`));
};


// ファイルの変更監視＆タスクを自動で実行
const watchFiles = () => {
  watch(filesrc.tmp, series(tmp, reload));
  watch(filesrc.imgs, series(images, reload));
  watch(filesrc.css, series(css, reload));
  watch(filesrc.js, series(js, reload));
}


// `$ gulp tmp` `$ gulp css` `$ gulp js` で個別にタスクを実行
exports.tmp = tmp;
exports.images = images;
exports.css = css;
exports.js = js;


// dev(開発用ビルド)
exports.dev = series(tmp, images, css, js, serve, watchFiles);

// build（HTML, CSS, JS）
exports.build = series(tmp, css, js);
