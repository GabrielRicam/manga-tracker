import { readFileSync } from 'fs';

const data = JSON.parse(readFileSync("./../../data/data.json", 'utf-8'));
const res = [];
for (let manga of data) {
  const list = manga[Object.keys(manga)]["Chapter List"];
  const comp = { [Object.keys(manga)] : list.at(-1) || 0 }
  res.push(comp)
}

console.log(res)