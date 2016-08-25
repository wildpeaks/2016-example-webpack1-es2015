/* eslint-env node, mocha */
/* eslint-disable no-undefined */
import {strictEqual} from 'assert';
import application from './application.js';

describe('/application', () => {
	it('Basic tests', () => {
		strictEqual(typeof application, 'function');
		strictEqual(typeof application(), 'undefined');
	});
});
