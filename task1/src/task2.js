import csv from 'csvtojson';
import fs from 'fs';

const INPUT_PATH ='./src/input/capitals.csv';
const OUTPUT_DIR = './src/output/';
const OUTPUT_PATH = `${OUTPUT_DIR}capitals.txt`;

/** Create dir for output */
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const readStream = fs.createReadStream(INPUT_PATH, {encoding: 'utf8'});
const writeStream = fs.createWriteStream(OUTPUT_PATH)
  .on('close', () => {
    console.timeEnd('completed');
  });

console.time('completed');
readStream.pipe(csv()).pipe(writeStream);

/**
 * Async solution
 *
 * console.time('completed');
 * fs.readFile(INPUT_PATH, 'utf8', (err, data) => {
 *   if (err) throw err;
 *   csv()
 *     .fromString(data)
 *     .then(data => {
 *        fs.writeFile(OUTPUT_PATH, data, (err) => {
 *           if (err) throw err;
 *           console.timeEnd('completed');
 *        });
 *   });
 * });
 */

/**
 * Sync solution
 *
 *
 * console.time('completed');
 * const data = fs.readFileSync(INPUT_PATH, 'utf8');
 *
 * csv()
 *  .fromString(data)
 *  .then(data => {
 *    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(data));
 *    console.timeEnd('completed');
 *  });
 */


