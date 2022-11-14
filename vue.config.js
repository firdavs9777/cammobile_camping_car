const path = require('path');
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@'               : path.resolve (__dirname, 'src/') , 
        '@components'     : path.resolve(__dirname, 'src/components/'),
        '@pages'           :path.resolve(__dirname, 'src/components/pages/'),
        // '@nav_process'    : path.join(__dirname, 'src/components/nav_process') , 
        // '@AccordionList'  : path.join(__dirname, 'src/components/nav_process/AccordionList') , 
        // '@common'         : path.join(__dirname, 'src/components/common') , 
      }
  }
  },
  chainWebpack: (config) => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => {
        // options.compiler = require("vue-template-babel-compiler");
        return options;
      });
  },
  css: {
    loaderOptions: {
      // pass options to sass-loader
      // @/ is an alias to src/
      // so this assumes you have a file named `src/variables.sass`
      // Note: this option is named as "prependData" in sass-loader v8
      scss: {
        additionalData: `
          @import "${"@components/css/variable.scss"}";
        `,
      },
    },
  },
  // },
};
