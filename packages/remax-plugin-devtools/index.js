const { default: InjectPlugin, ENTRY_ORDER } = require('webpack-inject-plugin');

module.exports = () => ({
  name: 'remax-plugin-devtools',
  configWebpack({ config, webpack }) {
    config.plugin('plugin-devtools-define-plugin').use(webpack.DefinePlugin, [
      {
        __REACT_DEVTOOLS_GLOBAL_HOOK__: 'my.__REACT_DEVTOOLS_GLOBAL_HOOK__',
      },
    ]);

    config.plugin('plugin-devtools-webpack-inject-plugin').use(InjectPlugin, [
      () => "import '@remax/plugin-devtools/lib/runtime.js';",
      {
        entryName: 'app',
        entryOrder: ENTRY_ORDER.First,
      },
    ]);
  },
});
