import { devData as devConfig } from "./dev.data";
import { stgData as stagingConfig } from "./stg.data";

const env = process.env.ENV?.trim() || 'dev';

console.log("ENV =", env);
console.log("DEV URL =", devConfig.closioUrl);
console.log("STG URL =", stagingConfig.closioUrl);
console.log(env === 'stg')

export const variable = env == 'stg' ? stagingConfig : devConfig;

console.log("SELECTED URL =", variable.closioUrl);