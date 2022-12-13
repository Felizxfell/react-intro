const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@comp': 'src/components',    
  })(config);

  return config;
};