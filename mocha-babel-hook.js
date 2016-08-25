/* eslint-disable */
'use strict';

require('babel-register')({
	ignore: false,
	only: /src/,
	extensions: ['.js'],
	presets: ['es2015'],
	plugins: ['transform-flow-strip-types']
});
