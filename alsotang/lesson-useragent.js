/**
 * Created by zzl81cn on 2017/5/26.
 */

/**
 * Only for node
 * result:
 * 1."Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
 * 2."Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1"
* */
/*const http = require('http');

const server = http.createServer(function (req, res) {
	let deviceAgent = req.headers['user-agent'];
	res.writeHead(200, {'Cotent-Type': 'text/html;charset=utf-8'});
	res.end(JSON.stringify(deviceAgent));
});
server.listen(3001);

console.log('Server is running, listen at http://localhost:3001');*/


// For Express use express-useragent
/**
 * result:
 * {
	"isAuthoritative": true,
	"isMobile": false,
	"isTablet": false,
	"isiPad": false,
	"isiPod": false,
	"isiPhone": false,
	"isAndroid": false,
	"isBlackberry": false,
	"isOpera": false,
	"isIE": false,
	"isEdge": false,
	"isIECompatibilityMode": false,
	"isSafari": false,
	"isFirefox": false,
	"isWebkit": false,
	"isChrome": true,
	"isKonqueror": false,
	"isOmniWeb": false,
	"isSeaMonkey": false,
	"isFlock": false,
	"isAmaya": false,
	"isPhantomJS": false,
	"isEpiphany": false,
	"isDesktop": true,
	"isWindows": true,
	"isLinux": false,
	"isLinux64": false,
	"isMac": false,
	"isChromeOS": false,
	"isBada": false,
	"isSamsung": false,
	"isRaspberry": false,
	"isBot": false,
	"isCurl": false,
	"isAndroidTablet": false,
	"isWinJs": false,
	"isKindleFire": false,
	"isSilk": false,
	"isCaptive": false,
	"isSmartTV": false,
	"isUC": false,
	"silkAccelerated": false,
	"browser": "Chrome",
	"version": "58.0.3029.110",
	"os": "Windows 10.0",
	"platform": "Microsoft Windows",
	"geoIp": {},
	"source": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
}
 * */
const express = require('express');
const app = express();
const useragent = require('express-useragent');

app.use(useragent.express());
app.get('/', function(req, res){
	res.send(JSON.stringify(req.useragent));
});
app.listen(3001);

