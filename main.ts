import { resolve, basename } from 'path';
import { readFileSync, access, existsSync, writeFileSync } from 'fs';
import * as Scraper from "./tracker/scraper";
import "dotenv/config";

const baseDataPath = resolve('./data/baselink.json');
const dataPath = resolve('./data/data.json');
const baseData = JSON.parse(readFileSync(baseDataPath, 'utf-8'));
const data = existsSync(dataPath) ? JSON.parse(readFileSync(dataPath, 'utf-8')) : writeFileSync(dataPath, "", "utf8");
let interval: number = parseInt(process.env.INTERVAL as string);


if (isNaN(interval)) {
  console.log("Cannot get the INTERVAL value from env. Using the default value (30) instead.");
  interval = 30;
}

// for (let key in baseData) {
//   if (baseData.hasOwnProperty(key)) {
//     console.log(baseData[key])
//   }
// }
// // run interval
// // get scraped data (var1)
// // get base data (var2)
// setInterval(
//   async () => {
    
    
//   }, 30 * interval);