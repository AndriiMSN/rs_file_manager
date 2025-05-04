// src/modules/brotli.js
import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliCompress, createBrotliDecompress } from 'node:zlib';
import { pipeline } from 'node:stream/promises';

export const compress = async (arg) => {
    try {
        const zip = createBrotliCompress();
        const srcStream = createReadStream(arg?.[0]);
        const dstStream = createWriteStream(arg?.[1]);
        await pipeline(srcStream, zip, dstStream);
    } catch {
        console.log('Operation failed');
    }
};
export const decompress = async (arg) => {
    try {
        const unzip = createBrotliDecompress();
        const srcStream = createReadStream(arg?.[0]);
        const dstStream = createWriteStream(arg?.[1]);
        await pipeline(srcStream, unzip, dstStream);
    } catch {
        console.log('Operation failed');
    }
};