import {dirname} from 'path';
import {fileURLToPath} from 'url';
import path from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const testDownloadDir = path.join(__dirname, 'tempDownload');
export {testDownloadDir};
