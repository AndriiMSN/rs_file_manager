// src/modules/file-basic.js
import { createReadStream } from 'node:fs';
import { open, rename, unlink } from 'node:fs/promises';
import { mkdir } from 'node:fs/promises';

export const cat = async (arg) => {
    try {
        const stream = createReadStream(arg?.[0], 'utf8');
        stream.pipe(process.stdout);
    } catch {
        console.log('Operation failed');
    }
};
export const add = async (arg) => {
    let filehandle;
    try {
        filehandle = await open(arg?.[0], 'w');
    } catch {
        console.log('Operation failed');
    } finally {
        await filehandle?.close();
    }
};
export const rn = async (arg) => {
    try {
        await rename(arg?.[0], arg?.[1]);
    } catch {
        console.log('Operation failed');
    }
};
export const rm = async (arg) => {
    try {
        await unlink(arg?.[0]);
    } catch {
        console.log('Operation failed');
    }
};
export const mkdirCmd = async (arg) => {
    try {
        await mkdir(arg?.[0]);
    } catch {
        console.log('Operation failed');
    }
};