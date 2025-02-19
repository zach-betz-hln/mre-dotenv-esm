import assert from 'node:assert/strict';
import { MY_VAR } from './lib.mjs';

console.log({ MY_VAR });

assert.equal(MY_VAR, 'MY_VALUE');
