var code = window.location.href.split('?code=')[1];
console.log(code);

fetch('https://makerlog-menubar-cloud-functions.netlify.com/.netlify/functions/exchangeMakerlogCode', {
	method: 'POST',
	body: JSON.stringify({code: code})
}).then(r => r.json()).then(r => {
    var storeToken = require('electron').remote.getGlobal('storeToken');
    storeToken(`${r.access_token}|${r.refresh_token}`);

    require('electron').remote.getGlobal('redirectToApp')();
})