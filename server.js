var request = require('request');


setInterval(() => {
    // willexecute every second
    
    const HASH='1D9o3c45VkQHDVCXGtJ42z29NVM6TycL1c'
    const URL='https://insight.bitpay.com/api/txs?address='+HASH+'&pageNum=0'

    request(URL, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)  
        }
        else{
            console.log('Something Fishy...'+error)
        }
    })
}, 2000);