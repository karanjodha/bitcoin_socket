var request = require('request');


setInterval(() => {
    // willexecute every second
    
    const HASH='ec21ad7a1156c253c00cb36c48d943afc8179be8beddf4c5edaf965bcb1e4ad4'
    const URL='https://insight.bitpay.com/api/tx/'+HASH
    


    request(URL, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)  
        }
        else{
            console.log('Something Fishy...'+err)
        }
    })
}, 1000);