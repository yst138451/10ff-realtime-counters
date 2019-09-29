const { src, dest } = require('gulp');
const babel = require('./pipes/babel');
const rename = require('./pipes/rename');
const iife = require('./pipes/iife');
const uglify = require('gulp-uglify');

exports.build = function () {
  return src('./src/main.js')
    .pipe(iife)
    .pipe(babel)
    .pipe(uglify())
    .pipe(rename)
    .pipe(dest('./dist/', {
      overwrite: true
    }));
}