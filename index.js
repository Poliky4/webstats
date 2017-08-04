const express = require('express');

const app = express();

const prod = process.argv[2] === 'prod';
const PORT = prod ? '443' : '1337'

const utils = new Utils();

if(prod) app.use(express.static('static'));

// Returns requested webstats or all?
// app.get('/webstats', (req, res) => {
//     res.send('Eyo!');
// });

// Stores received webstats
app.post('/webstats', (req, res) => {

    utils.getHttpData(req).then(data => {
        
        console.log(data) // replace with db stuff ^^

    });
});

app.listen(PORT, _ => {
    console.log(`Webstats starting at port ${PORT} on`, new Date().toUTCString());
});

function Utils(){
    
    function getHttpData(req){
        return new Promise((resolve, reject) => {
            let dataStr = '';
            req.on('data', data => {
                dataStr += data;
            });
            req.on('end', () => {
                resolve(JSON.parse(dataStr));
            });            
        });
    }

    return {

        getHttpData: getHttpData,

    }
}