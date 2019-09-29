const wrap = require('gulp-wrap');
const path = require('path');
const config = require(path.resolve(process.cwd(), 'src/config.json'));

const template = `
(function (global, __options) {

  <%= contents %>
  
})(
  window,
  
  ${JSON.stringify(config)}
);
`;

module.exports = wrap(template);