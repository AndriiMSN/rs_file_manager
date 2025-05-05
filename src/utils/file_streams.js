// src/modules/file-streams.js
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { unlink } from 'node:fs/promises';
import path from 'node:path';

export const cp = async (arg) => {
    try {
        const filename = path.basename(arg?.[0]);
        const dest = path.join(arg?.[1], filename);
        const readStream = createReadStream(arg?.[0]);
        const writeStream = createWriteStream(dest);
        await pipeline(readStream, writeStream);
    } catch {
        console.log('Operation failed');
    }
};

export const mv = async (arg) => {
    try {
        const filename = path.basename(arg?.[0]);
        const dest = path.join(arg?.[1], filename);
        const readStream = createReadStream(arg?.[0]);
        const writeStream = createWriteStream(dest);
        await pipeline(readStream, writeStream);
        await unlink(arg?.[0]);
    } catch {
        console.log('Operation failed');
    }
};