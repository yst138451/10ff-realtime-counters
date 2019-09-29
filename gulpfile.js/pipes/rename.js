const path = require('path');
const { name } = require(path.resolve(process.cwd(), 'package.json'));
const rename = require('gulp-rename');

module.exports = rename({
  basename: name,
  extname: '.min.js'
});