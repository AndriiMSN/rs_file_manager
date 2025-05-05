// src/modules/os-info.js
import { EOL, cpus, homedir, arch, userInfo } from 'node:os';

export const os = async (arg) => {
    if (!arg?.[0]?.startsWith('--')) {
        console.log('Params must started with --');
        return;
    }
    const params = {
        EOL: JSON.stringify(EOL),
        cpus: cpus(),
        homedir: homedir(),
        username: userInfo().username,
        architecture: arch(),
    };

    const data = params[arg?.[0].slice(2)];
    if (!data) {
        console.log('unknown OS param');
    } else {
        console.log(data);
    }
};