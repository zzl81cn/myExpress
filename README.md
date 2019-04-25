## list
* [express-multiple-entry](/express-multiple-entry)



#### 文章链接

[NodeJS学习笔记][1]

#### 启动

	npm install && node app

#### 判断userAgent

``` javascript
    var deviceAgent = req.headers[“user-agent”].toLowerCase();
    var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
    if(agentID){
        // 指到手机、pad的网页
    }else{
        // 指到pc网页
    }

    // 也可以在html页面上做跳转。但为了速度，应该在后台nodejs服务上，judge一下
    // 如果在html页上的话。那时页面可能已经下载下来了。白白浪费流量，还占带宽

    // 不过使用express-useragent更方便些
    // Use express-useragent
    {
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

```

[1]: http://www.cnblogs.com/zhongweiv/tag/Nodejs/ "NodeJS实战：Express+Mongoose+ejs"