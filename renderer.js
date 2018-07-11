// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process. http://localhost:9999/ctakes?text=Pain in the left leg.
const fs = require('fs')

const file = fs.readFileSync('input.txt', 'utf8');

var url = new URL("http://localhost:9999/ctakes?"),
    params = {text:file}
Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
fetch(url)
.then(res => res.json())
.then(json => {
  console.log(json);
  fs.writeFileSync('./result.json', JSON.stringify(json, null, 4), 'utf8');
})

console.log(params);
