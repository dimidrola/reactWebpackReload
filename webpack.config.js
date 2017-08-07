
var path = require('path');
var webpack = require('webpack');


const config = {
	entry: [
		'babel-polyfill',
		'webpack-hot-middleware/client',
		'react-hot-loader/patch',
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
			},
			{
				test: /\.jsx?$/,
				loader: 'eslint-loader',
				include: path.resolve(process.cwd(), 'src'),
				enforce: 'pre',
				options: {
					fix: true,
				},
			},
			{
				test: /\.scss$/,
				use: [{
					loader: "style-loader"
				}, {
					loader: "css-loader"
				}, {
					loader: "sass-loader"
				}]
			}
		],


	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};
module.exports = config;
