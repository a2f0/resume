import {dirname} from 'path';
import path from 'path';
import {fileURLToPath} from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const testDownloadDir = path.join(__dirname, 'tempDownload');
export {testDownloadDir};
