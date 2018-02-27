const path = require('path');
const webpack = require('webpack');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
// const combineLoaders = require('webpack-combine-loaders');

module.exports = {
	// devtool: 'inline-source-map',
	devtool: 'eval-source-map',
	entry: [
		'react-hot-loader/patch',
		'./src/assets/js/index.js',
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader'],
			},
			// {
			// 	test: /\.scss$/,
			// 	loaders: ['style-loader', 'css-loader', 'sass-loader']
			// },
			{
				test: /\.(scss)$/,
				use: [{
					loader: 'style-loader', // inject CSS to page
				}, {
					loader: 'css-loader', // translates CSS into CommonJS modules
				}, {
					loader: 'postcss-loader', // Run post css actions
					options: {
						plugins() { // post css plugins, can be exported to postcss.config.js
							return [
								precss, autoprefixer,
							];
						},
					},
				}, {
					loader: 'sass-loader', // compiles Sass to CSS
				}],
			},
			{ test: /\.(woff|woff2|eot|ttf)$/, loader: 'url-loader?limit=100000' },
			{ test: /\.(jpe?g|png|gif|svg)$/i, loader: 'file-loader?name=img/[name].[ext]' },
			// {
			// 	test: /\.(gif|png|jpe?g|svg)$/i,
			// 	use: [
			// 	  'file-loader',
			// 	  {
			// 			loader: 'image-webpack-loader',
			// 			options: {
			// 		  mozjpeg: {
			// 					progressive: true,
			// 					quality: 65,
			// 		  },
			// 		  // optipng.enabled: false will disable optipng
			// 		  optipng: {
			// 					enabled: false,
			// 		  },
			// 		  pngquant: {
			// 					quality: '65-90',
			// 					speed: 4,
			// 		  },
			// 		  gifsicle: {
			// 					interlaced: false,
			// 		  },
			// 		  // the webp option will enable WEBP
			// 		  webp: {
			// 					quality: 75,
			// 		  },
			// 			},
			// 	  },
			// 	],
			//   },
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		publicPath: '/',
		filename: 'bundle.js',
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({
			jQuery: 'jquery',
			$: 'jquery',
			jquery: 'jquery',
		}),
		// new ExtractTextPlugin('style.min.css', { allChunks: true }),
	],
	devServer: {
		contentBase: './dist',
		hot: true,
		port: process.env.PORT || 3000,
		inline: true,
		publicPath: '/',
		historyApiFallback: true,
	},
};