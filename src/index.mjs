import assert from 'node:assert/strict';

import * as dotenv from 'dotenv';
dotenv.config();

const { MY_VAR } = process.env;

console.log({ MY_VAR });

assert.equal(MY_VAR, 'MY_VALUE');
