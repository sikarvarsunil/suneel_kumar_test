 
const fs = require('fs');
const checkIpHits  = require('./checkIpHits.js');
const outputDir = 'dist/resultset.json';
const data  = require('./clicks.json');

(function(){
        let res = checkIpHits.checkIpData(data),
            resultdata = JSON.stringify(res);
        fs.writeFile(outputDir, resultdata, (err) => {
            if (err) throw err;
            console.log('Data written to file');
        });
}())