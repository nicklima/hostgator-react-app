const path = require('path');

/**
 * Este arquivo é necessário para
 * realizar imports com o path relativo `~`
 * Ex: import Store from '~/store/store'
 */

module.exports = function override(config) {
  // eslint-disable-next-line no-param-reassign
  config.resolve = {
    alias: { '~': path.resolve(__dirname, 'src') },
  };
  return config;
};
