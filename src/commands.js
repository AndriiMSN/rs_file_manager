// src/modules/commands.js
import * as nwd from './utils/nwd.js';
import * as fb from './utils/file.js';
import * as fs from './utils/file_streams.js';
import * as os from './utils/os.js';
import * as hash from './utils/hash.js';
import * as brotli from './utils/brotli.js';

export default {
    ...nwd,
    ...fb,
    ...fs,
    ...os,
    ...hash,
    ...brotli,
};