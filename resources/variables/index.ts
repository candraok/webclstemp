import { devData as devConfig } from "./dev.data";
import { stgData as stagingConfig } from "./stg.data";

const env = process.env.ENV?.trim() || 'dev';
export const variable = env == 'stg' ? stagingConfig : devConfig;