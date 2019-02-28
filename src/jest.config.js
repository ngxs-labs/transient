const { join } = require('path');

module.exports = {
  moduleNameMapper: {
    '@ngxs-labs/transient': join(__dirname, 'src')
  },
  cacheDirectory: '<rootDir>/.cache/unit'
};
