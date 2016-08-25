/* @flow */
/* eslint-env browser */
import {myconst, myfunction} from 'examples/hello';

export default function application(): void {
	/* eslint-disable no-unused-vars */
	const value1: number = myconst + 1;
	const value2: number = myfunction() + 1;
	//
	// etc...
	//
}
