const babel = require('gulp-babel');

module.exports = babel({
  presets: ['@babel/env'],
  plugins: [
    ['@babel/plugin-transform-modules-commonjs', {
      strictMode: false
    }]
  ]
});