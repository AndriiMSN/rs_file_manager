// src/modules/nwd.js
import { chdir } from 'node:process';
import { homedir } from 'node:os';
import { dirname } from 'node:path';
import { readdir } from 'node:fs/promises';

const START_DIR = homedir();

export const pwd = () => {
    console.log(`You are currently in ${process.cwd()}`);
};

export const up = () => {
    try {
        const parentDir = dirname(process.cwd());
        if (parentDir.length < START_DIR.length) throw new Error();
        chdir(parentDir);
    } catch {
        console.log('Operation failed');
    }
};

export const cd = (arg) => {
    try {
        chdir(arg?.[0]);
    } catch {
        console.log('Operation failed');
    }
};

export const ls = async () => {
    try {
        const files = await readdir(process.cwd(), { withFileTypes: true });
        const dirs = [];
        const ordinaryFiles = [];
        files.forEach(f =>
            f.isDirectory()
                ? dirs.push([f.name, 'directory'])
                : ordinaryFiles.push([f.name, 'file'])
        );
        const sorted = [...dirs.sort(), ...ordinaryFiles.sort()];
        console.table(sorted);
    } catch {
        console.log('Operation failed');
    }
};