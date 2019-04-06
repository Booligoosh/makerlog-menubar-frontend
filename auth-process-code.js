var code = window.location.href.split('?code=')[1];
console.log(code);

fetch('https://makerlog-menubar-cloud-functions.netlify.com/.netlify/functions/exchangeMakerlogCode', {
	method: 'POST',
	body: JSON.stringify({code: code})
}).then(r => r.json()).then(r => {
    
    if(typeof require !== 'undefined') {
        getGlobal = require('electron').remote.getGlobal;
    } else {
        getGlobal = Bridge.getGlobal; 
    }
    
    var storeToken = getGlobal('storeToken');
    storeToken(`${r.access_token}|${r.refresh_token}`);

    getGlobal('redirectToApp')();
})