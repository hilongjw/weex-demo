## weex-html5

### Intro

Weex is a solution for developers to build a world-class projects on multiple platforms (include both native and web platforms) based on html-css-javascript liked domain specific language. Weex is focused on lightweight, extendable and high performance, and the finally destination -- write once, run anywhere.

The dot we code transformed to weex bundle can currently run on android, ios and web platform. Weex HTML5 is a renderer for weex bundle to run in a webview or a browser environment.

### Get Weex HTML5

Use npm to install the latest version of Weex HTML5, require it from your code in the commonJS way and use it as a npm package. You can import Weex HTML5 from the javascript file as in the node modules' path `node_modules/weex-html5/dist/weex.js`, as in this way you don't need to require weex-jsframework manually since it is already embeded.

#### Install from npm

Make sure you get the latest version by `npm install` or `npm update`. Want more info about npm cmd? Please checkout the [npm official site](https://docs.npmjs.com/).

```
npm install weex-html5
```

#### use weex-html5

require weex-html5.

```
require('weex-html5');
```

or you can import script from `dist/weex.js`

This `weex.js` includes both `weex-jsframework` and `weex-html5`.


```
 <script src="./node_modules/weex-html5/dist/weex"></script>
```


Then you can use `window.weex` in the page.

### DEMO

in the root path of `node_modules/weex-html5`, you can input command `npm run serve` to run a server in localhost:12580. The index page is a simple demo whos source code is in the path `node_modules/weex-html5/demo/index.we`.

### Initialize

Once you have imported the weex-html5 into your page, you can use `window.weex` to initialize weex through the API ``init``. This method takes a config object as argument to confirm the runtime infomation and environment. Following parameters can be set by this config object:

* ``appId``: app instance id, can be either a string or a number
* ``source``: the requested url of weex bundle, or the transformed code it self.
* ``loader``: loader to load the request weex bundle, whose value is from 'xhr' or 'jsonp' or 'source'.
  * ``xhr``: load the source (weex bundle url) by XHR
  * ``jsonp``: load the source bundle by JSONP
  * ``source``: the source parameter above should be a weex bundle content (transformed bundle).
* ``rootId``: id of the root element. Default value is 'weex'.

Here is a example to do the initialzation:

```
function weexInit() {
  function getUrlParam (key) {
    var reg = new RegExp('[?|&]' + key + '=([^&]+)')
    var match = location.search.match(reg)
    return match && match[1]
  }

  var loader = getUrlParam('loader') || 'xhr'
  var page = getUrlParam('page')

  // jsonp callback name should be specified or be the default
  // value 'weexJsonpCallback' if the 'jsonp' loader is used.
  var JSONP_CALLBACK_NAME = 'weexJsonpCallback'

  window.weex.init({
    jsonpCallback: JSONP_CALLBACK_NAME,
    appId: location.href,
    source: page,
    loader: loader,
    rootId: 'weex'
  })
}

weexInit()
```

### Initialize with multiple instances

```
var weexConfig = [{
  appId: 'weexCt1',
  source: '//your-source-provider/bundle1.js',
  loader: 'xhr',
  width: document.querySelector('#weexCt1').getBoundingClientRect().width,
  rootId: 'weexCt1'
}, {
  appId: 'weexCt2',
  source: '//your-source-provider/bundle2.js',
  loader: 'xhr',
  width: document.querySelector('#weexCt2').getBoundingClientRect().width,
  rootId: 'weexCt2'
}]

function weexInit() { 
  // Init with multiple config objects for multiple instances.
  window.weex.init(weexConfig)
}

weexInit()
```

### Develop

#### Directories

**entry files**

* ``index.html``

**source code files**

* ``api`` directory: implementation of APIs.
* ``bridge`` directory:
  * ``sender.js``: encapsulate the two types of callJS method (fireEvent and callback).
  * ``receiver.js`` export the methods callNative and nativeLog to global.
* ``components`` directory: implementation of native components (container, text, image, list, slider, tabheader etc.).
* ``weex.js`` export weex to the global. Do the initiation.
* ``protocol.js``
  * registeration of components.
  * registeration of APIs.
* ``loader.js`` implementation of three different type of loaders (mtop/xhr/source).
* ``FrameUpdater.js`` execute tasks throuth requestAnimationFrame.
* ``config.js`` configuration.

### MORE

* More info: [Weex official site](http://alibaba.github.io/weex/)
* Document : [Weex DOC](http://alibaba.github.io/weex/doc/)

