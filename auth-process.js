var authDetails = {}
window.location.hash.split('&').map(q => {
    authDetails[q.split('=')[0].replace(/^#/, '')] = q.split('=')[1]
});

var token = authDetails.access_token;
var storeToken = require('electron').remote.getGlobal('storeToken');
storeToken(token);

require('electron').remote.getGlobal('redirectToApp')();