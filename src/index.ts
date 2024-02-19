import * as fs from 'fs';
import * as https from 'https';
https.globalAgent.options.ca = fs.readFileSync('./ca_intermediate_root_bundle.pem');

import Aki, { answers } from './Akinator';
import { regions, region } from './constants/Client';

export {
  Aki,
  regions,
  region,
  answers
}
