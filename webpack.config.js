
var path = require('path');
var webpack = require('webpack');
const config = {
	entry: [
	'react-hot-loader/patch',
		'webpack-hot-middleware/client',
		'babel-polyfill',
		'./src/app'],
  
	output: {
		filename: 'boundle.js',
		path: path.join(__dirname, 'dist'),
		publicPath: '/static/'
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				
				use: [
					{loader: 'react-hot-loader/webpack'},
					{loader: 'babel-loader'}

				]
			}
		],


	},
	plugins: [
	    new webpack.HotModuleReplacementPlugin(),
	]
};
module.exports = config;
