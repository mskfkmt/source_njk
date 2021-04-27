// import webpack from 'webpack';

module.exports = {
  // mode: 'development',
  mode: 'production',
  entry: `./src/assets/js/app.js`,

  module: {
    rules: [
      {
        // 拡張子 .jsの場合
        test: /\.js$/,
        use: [
          {
            // Babelを使用する
            loader: 'babel-loader',
            // Babelのオフションを指定する
            options: {
              presets: [
                // プリセットを使用することで、ES2020をES5に変換
                '@babel/preset-env'
              ]
            }
          }
        ]
      }
    ]
  },

  output: {
    path: `${__dirname}/htdocs/assets/js`,
    filename: "app.js"
  },

  target: ['web', 'es5']
};