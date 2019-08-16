const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  plugins: [],
  // Modify the webpack config
  config: (conf, { dev, env }, webpack) => {
    conf.plugins.push(new MonacoWebpackPlugin({
      // languages: ['bat', 'coffee', 'cpp', 'csharp', 'csp', 'css', 'dockerfile', 'fsharp', 'go', 'handlebars', 'html', 'ini', 'java', 'json', 'less', 'lua', 'markdown', 'msdax', 'mysql', 'objective', 'pgsql', 'php', 'postiats', 'powershell', 'pug', 'python', 'r', 'razor', 'redis', 'redshift', 'ruby', 'sb', 'scss', 'solidity', 'sql', 'swift', 'typescript', 'vb', 'xml', 'yaml'],
      // features: ['accessibilityHelp', 'bracketMatching', 'caretOperations', 'clipboard', 'codelens', 'colorDetector', 'comment', 'contextmenu', 'coreCommands', 'cursorUndo', 'dnd', 'find', 'folding', 'format', 'gotoDeclarationCommands', 'gotoDeclarationMouse', 'gotoError', 'gotoLine', 'hover', 'inPlaceReplace', 'inspectTokens', 'iPadShowKeyboard', 'linesOperations', 'links', 'multicursor', 'parameterHints', 'quickCommand', 'quickFixCommands', 'quickOutline', 'referenceSearch', 'rename', 'smartSelect', 'snippets', 'suggest', 'toggleHighContrast', 'toggleTabFocusMode', 'transpose', 'wordHighlighter', 'wordOperations'],
    }));
    if (env === 'prod') {
      // conf = {
      //   ...conf,
      //   optimization: {
      //     ...conf.optimization,
      //     // https://webpack.js.org/plugins/split-chunks-plugin/
      //     splitChunks: {
      //       chunks: 'async',
      //       minSize: 30000,
      //       minChunks: 2,
      //       maxAsyncRequests: 5,
      //       maxInitialRequests: 3,
      //       automaticNameDelimiter: '~',
      //       name: true,
      //       cacheGroups: {
      //         vendors: {
      //           test: /[\\/]node_modules[\\/]/,
      //           priority: -10
      //         },
      //         default: {
      //           minChunks: 2,
      //           priority: -20,
      //           reuseExistingChunk: true
      //         }
      //       }
      //     }
      //   }
      // };
    }
    return conf;
  },
};
