/* @flow */
/* eslint-env browser */
import {myconst, myfunction} from 'examples/hello';

const value1: number = myconst + 1;
const value2: number = myfunction() + 1;

/* eslint-disable no-console */
console.log('value1 is', value1);
console.log('value2 is', value2);
