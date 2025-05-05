// src/modules/hash.js
import { readFile } from 'node:fs/promises';

const { createHash } = await import('node:crypto');

export const hash = async (arg) => {
    try {
        const hash256 = createHash('sha256');
        const content = await readFile(arg?.[0]);
        hash256.update(content);
        console.log(hash256.digest('hex'));
    } catch (err) {
        console.log('Operation failed');
    }
};