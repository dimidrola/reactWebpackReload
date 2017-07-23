
var path = require('path');
var webpack = require('webpack');
const config = {
  entry: [
  'babel-polyfill',
  'react-hot-loader/patch',
  './src/app.js'],
  
  output: {
    filename: 'boundle.js',
    path: path.join(__dirname, 'dist'),
	publicPath: '/static/'
  },
  
  watch: true,

	module: {
		rules: [
		{
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/,
			use: [
			{ 
				loader: 'react-hot-loader/webpack' 
			},
			{
				loader: 'babel-loader',
				options: {
					presets: ["react"]
				}
			}
			]
	    }
	  ]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};
module.exports = config;
