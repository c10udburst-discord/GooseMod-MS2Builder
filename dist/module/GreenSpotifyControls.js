parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function t(t,e,o,n,r,i,l){try{var a=t[i](l),u=a.value}catch(c){return void o(c)}a.done?e(u):Promise.resolve(u).then(n,r)}function e(e){return function(){var o=this,n=arguments;return new Promise(function(r,i){var l=e.apply(o,n);function a(e){t(l,r,i,a,u,"next",e)}function u(e){t(l,r,i,a,u,"throw",e)}a(void 0)})}}var o;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n={goosemodHandlers:{onImport:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o=document.createElement("style"),document.head.appendChild(o),o.appendChild(document.createTextNode("/**\n * @name GreenSpotifyControls\n * @author Discord Addons\n * @version 1.0.2\n * @description Allows you to change the colors for the SpotifyControls plugin. Change the colors in the theme file.\n * @website https://discord-addons.github.io/main\n * @source https://github.com/discord-addons/discord-addons/blob/master/download-themes-here/GreenSpotifyControls\n * @invite g9heA3p6WW\n*/\n\n@import url(https://discord-addons.github.io/discord-addons/xcores/themes/GSC_Core.css);\n\n:root { /* DARK AND LIGHT THEMES HAVE DIFFERENT VALUES - You can use hex, rgb, vars, or what you want supported by CSS. */\n    /* Dark theme */\n    --dark-controls-background-color:  #1c9a48   ; /* General background using Dark Theme.                                              Default: #1c9a48   */\n    --dark-active-buttons:             #35ed86   ; /* Accent color for active buttons.                                                  Default: #35ed86   */\n    --dark-white-color-1:              #ffffff   ; /* White color, used for default buttons and title.                                  Default: #ffffff   */\n    --dark-white-color-2:              #ffffffa2 ; /* Second white color, used for subtitle. The last two digits indicates the opacity. Default: #ffffffa2 */\n    --dark-timeline-hover:             #35ed86   ; /* Hover the timeline to see this color, if enabled.                                 Default: #35ed86   */\n    --dark-timeline-empty-zone:        #0000003d ; /* Timeline empty zone color.                                                        Default: #0000003d */\n    --dark-button-hover-background:    #00000050 ; /* Button background when you hover on it.                                           Default: #00000050 */\n\n    /* Light theme */\n    --light-controls-background-color: #35ed86   ; /* General background using Light Theme.                                             Default: #35ed86   */\n    --light-active-buttons:            #ffffff   ; /* Accent color for active buttons.                                                  Default: #ffffff   */\n    --light-black-color-1:             #000000   ; /* Black color, used for default buttons and title.                                  Default: #000000   */\n    --light-black-color-2:             #000000a2 ; /* Second black color, used for subtitle. The last two digits indicates the opacity. Default: #000000a2 */\n    --light-timeline-hover:            #ffffff   ; /* Hover the timeline to see this color, if enabled.                                 Default: #ffffff   */\n    --light-timeline-empty-zone:       #0000003d ; /* Timeline empty zone color.                                                        Default: #0000003d */\n    --light-button-hover-background:   #0000003d ; /* Button background when you hover on it.                                           Default: #0000003d */\n\n    /* Update */\n    --version002_gsc:                  none      ; /* Do not change this please.                                                        Default: none      */\n}\n")),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("GreenSpotifyControls",["",{type:"text-and-color",text:"Dark Controls Background Color",oninput:function(t){document.body.style.setProperty("--dark-controls-background-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dark-controls-background-color")||"#1c9a48   ";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Dark Active Buttons",oninput:function(t){document.body.style.setProperty("--dark-active-buttons",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dark-active-buttons")||"#35ed86   ";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Dark White Color 1",oninput:function(t){document.body.style.setProperty("--dark-white-color-1",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dark-white-color-1")||"#ffffff   ";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Dark White Color 2",oninput:function(t){document.body.style.setProperty("--dark-white-color-2",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dark-white-color-2")||"#ffffffa2 ";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Dark Timeline Hover",oninput:function(t){document.body.style.setProperty("--dark-timeline-hover",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dark-timeline-hover")||"#35ed86   ";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Dark Timeline Empty Zone",oninput:function(t){document.body.style.setProperty("--dark-timeline-empty-zone",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dark-timeline-empty-zone")||"#0000003d ";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Dark Button Hover Background",oninput:function(t){document.body.style.setProperty("--dark-button-hover-background",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dark-button-hover-background")||"#00000050 ";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Light Controls Background Color",oninput:function(t){document.body.style.setProperty("--light-controls-background-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--light-controls-background-color")||"#35ed86   ";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Light Active Buttons",oninput:function(t){document.body.style.setProperty("--light-active-buttons",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--light-active-buttons")||"#ffffff   ";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Light Black Color 1",oninput:function(t){document.body.style.setProperty("--light-black-color-1",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--light-black-color-1")||"#000000   ";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Light Black Color 2",oninput:function(t){document.body.style.setProperty("--light-black-color-2",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--light-black-color-2")||"#000000a2 ";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Light Timeline Hover",oninput:function(t){document.body.style.setProperty("--light-timeline-hover",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--light-timeline-hover")||"#ffffff   ";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Light Timeline Empty Zone",oninput:function(t){document.body.style.setProperty("--light-timeline-empty-zone",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--light-timeline-empty-zone")||"#0000003d ";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Light Button Hover Background",oninput:function(t){document.body.style.setProperty("--light-button-hover-background",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--light-button-hover-background")||"#0000003d ";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Version002_gsc",oninput:function(t){document.body.style.setProperty("--version002_gsc",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--version002_gsc")||"none      ";return console.log(t),t}},{type:"text-input",text:"Gsc Build",oninput:function(t){document.body.style.setProperty("--gsc-build",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--gsc-build")||'"6"';return console.log(t),t}},{type:"text-input",text:"Theme Name",oninput:function(t){document.body.style.setProperty("--theme-name",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--theme-name")||'"Green Spotify Controls"';return console.log(t),t}}]);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),onRemove:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o.remove();try{goosemodScope.settings.removeItem("GreenSpotifyControls")}catch(e){}case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),getSettings:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",[["--dark-controls-background-color",document.body.style.getPropertyValue("--dark-controls-background-color")],["--dark-active-buttons",document.body.style.getPropertyValue("--dark-active-buttons")],["--dark-white-color-1",document.body.style.getPropertyValue("--dark-white-color-1")],["--dark-white-color-2",document.body.style.getPropertyValue("--dark-white-color-2")],["--dark-timeline-hover",document.body.style.getPropertyValue("--dark-timeline-hover")],["--dark-timeline-empty-zone",document.body.style.getPropertyValue("--dark-timeline-empty-zone")],["--dark-button-hover-background",document.body.style.getPropertyValue("--dark-button-hover-background")],["--light-controls-background-color",document.body.style.getPropertyValue("--light-controls-background-color")],["--light-active-buttons",document.body.style.getPropertyValue("--light-active-buttons")],["--light-black-color-1",document.body.style.getPropertyValue("--light-black-color-1")],["--light-black-color-2",document.body.style.getPropertyValue("--light-black-color-2")],["--light-timeline-hover",document.body.style.getPropertyValue("--light-timeline-hover")],["--light-timeline-empty-zone",document.body.style.getPropertyValue("--light-timeline-empty-zone")],["--light-button-hover-background",document.body.style.getPropertyValue("--light-button-hover-background")],["--version002_gsc",document.body.style.getPropertyValue("--version002_gsc")],["--gsc-build",document.body.style.getPropertyValue("--gsc-build")],["--theme-name",document.body.style.getPropertyValue("--theme-name")]]);case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),loadSettings:function(){var t=e(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.forEach(function(t){document.body.style.setProperty(t[0],t[1])});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}};exports.default=n;
},{}]},{},["index.js"], null);parcelRequire('index.js').default