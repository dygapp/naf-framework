'use strict';

const path = require('path');

// add you build-in plugin here, example:
// exports.nunjucks = {
//   enable: true,
//   package: 'egg-view-nunjucks',
// };

exports.multiTenancy = {
  enable: true,
  path: path.join(__dirname, '../lib/plugin/egg-multi-tenancy'),
};
