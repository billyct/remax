const { default: InjectPlugin, ENTRY_ORDER } = require('webpack-inject-plugin');

module.exports = () => ({
  name: 'remax-plugin-devtools',
  configWebpack({ config }) {
    config.plugin('webpack-inject-plugin').use(InjectPlugin, [
      () => "import '@remax/plugin-devtools/lib/runtime.js';",
      {
        entryName: 'app',
        entryOrder: ENTRY_ORDER.First,
      },
    ]);
  },
});
