import * as fs from 'fs';
import * as https from 'https';
import fetch from 'node-fetch';

fetch("https://raw.githubusercontent.com/AsynchronousAI/aki-api-nextjs/develop/src/ca_intermediate_root_bundle.pem")
  .then(response => response.text())
  .then(file => {
    https.globalAgent.options.ca = file
  })

import Aki, { answers } from './Akinator';
import { regions, region } from './constants/Client';

export {
  Aki,
  regions,
  region,
  answers
}
