define('@weex-component/webview', function (require, exports, module) {

;
    require('weex-components');

    module.exports = {
        methods: {
            goback: function() {
                var $webview = require('@weex-module/webview');
                var webElement = this.$el('webview');
                $webview.goBack(webElement.ref);           
             },
            goforward: function() {
                var $webview = require('@weex-module/webview');
                var webElement = this.$el('webview');
                $webview.goForward(webElement.ref); 
            },
            refresh: function() {
                var $webview = require('@weex-module/webview');
                var webElement = this.$el('webview');
                $webview.reload(webElement.ref); 
            },
            startload: function(e) {

            },
            finishload: function(e) {

            },
            failload: function(e) {

            }
        }
    }


;module.exports.style = {
  "wrapper": {
    "width": 750,
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "content": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0,
    "marginTop": 0,
    "marginBottom": 70
  },
  "toolbar": {
    "flexDirection": "row",
    "position": "fixed",
    "bottom": 0,
    "left": 0,
    "right": 0,
    "height": 70
  }
}

;module.exports.template = {
  "type": "div",
  "classList": [
    "wrapper"
  ],
  "children": [
    {
      "type": "div",
      "classList": [
        "toolbar"
      ],
      "append": "tree",
      "children": [
        {
          "type": "wxc-button",
          "attr": {
            "type": "primary",
            "size": "small",
            "value": "back"
          },
          "events": {
            "click": "goback"
          },
          "style": {
            "marginLeft": 30,
            "width": 210,
            "marginTop": 5,
            "marginBottom": 5
          }
        },
        {
          "type": "wxc-button",
          "attr": {
            "type": "primary",
            "size": "small",
            "value": "forward"
          },
          "events": {
            "click": "goforward"
          },
          "style": {
            "marginLeft": 30,
            "width": 210,
            "marginTop": 5,
            "marginBottom": 5
          }
        },
        {
          "type": "wxc-button",
          "attr": {
            "type": "primary",
            "size": "small",
            "value": "refresh"
          },
          "events": {
            "click": "refresh"
          },
          "style": {
            "marginLeft": 30,
            "width": 210,
            "marginTop": 5,
            "marginBottom": 5
          }
        }
      ]
    },
    {
      "type": "web",
      "classList": [
        "content"
      ],
      "id": "webview",
      "attr": {
        "src": "http://gold.xitu.io/entry/5738887a71cfe40057038b8a/view"
      },
      "events": {
        "pagestart": "startload",
        "pagefinish": "finishload",
        "error": "failload"
      }
    }
  ]
}

;})

// require module
bootstrap('@weex-component/webview', {"transformerVersion":"0.3.1"})