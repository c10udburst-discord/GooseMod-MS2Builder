parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function t(t,e,n,o,r,a,i){try{var l=t[a](i),u=l.value}catch(s){return void n(s)}l.done?e(u):Promise.resolve(u).then(o,r)}function e(e){return function(){var n=this,o=arguments;return new Promise(function(r,a){var i=e.apply(n,o);function l(e){t(i,r,a,l,u,"next",e)}function u(e){t(i,r,a,l,u,"throw",e)}l(void 0)})}}var n;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o={goosemodHandlers:{onImport:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=document.createElement("style"),document.head.appendChild(n),n.appendChild(document.createTextNode('/**\n * @name Material You\n * @author Leeprky#2063\n * @version 0.9.0\n * @description An Android 12 Inspired Material You Theme\n * @source https://github.com/leeprky/MaterialYouTheme\n * @updateUrl https://raw.githubusercontent.com/leeprky/MaterialYouTheme/main/betterdiscord/MaterialYouTheme.theme.css\n * @authorId 224524143482241035\n * @invite Ff3rqAYB89\n * @donate https://www.paypal.com/paypalme/leeparkinson22\n * @website https://leeprky.github.io/\n*/\n\n/* \n __  __  ___  _____  ___  ___  ___  ___  _       __   __  ___   _   _ \n|  \\/  |/   \\|_   _|| __|| _ \\|_ _|/   \\| |      \\ \\ / / / _ \\ | | | |\n| |\\/| || - |  | |  | _| |   / | | | - || |__     \\   / | (_) || |_| |\n|_|  |_||_|_|  |_|  |___||_|_\\|___||_|_||____|     |_|   \\___/  \\___/ \n                             .--------.\n                             | v0.9.0 |\n                             \'--------\' \n                Last Updated: 20/02/2022 23:23PM (UK)\n          Version: BetterDiscord (https://betterdiscord.app/)\n*/\n\n/* Required Imports */\n@import "https://leeprky.github.io/themes/MaterialYouTheme/main.css";\n@import "https://leeprky.github.io/themes/MaterialYouTheme/extras/betterdiscord.css";\n\n\n/* Google Emojis */\n\n\n@import url(\'https://raw.githack.com/Davr1/Discord-CSS-snippets/main/snippets/revolt_emojis.css\'); \n \n/* Horizontal Server List (Bottom) */ /*\n@import url(\'@import url(leeprky.github.io/themes/MaterialYouTheme/extras/horizontallist.css);\');\n\n/*\n ___  _____ __   __ _     ___  ___ \n/ __||_   _|\\ \\ / /| |   | __|/ __|\n\\__ \\  | |   \\   / | |__ | _| \\__ \\\n|___/  |_|    |_|  |____||___||___/\n\n/* Material Blue - Default */\n\n\n@import "https://leeprky.github.io/themes/MaterialYouTheme/styles/material-blue.css";\n\n/* Material Green */ \n\n/* REMOVE LINE\n@import "https://leeprky.github.io/themes/MaterialYouTheme/styles/material-green.css";\n\n/* Material Red */ \n\n/* REMOVE LINE\n@import "https://leeprky.github.io/themes/MaterialYouTheme/styles/material-red.css";\n\n/* Material Pink */ \n\n/* REMOVE LINE\n@import "https://leeprky.github.io/themes/MaterialYouTheme/styles/material-pink.css";\n\n/* Material Yellow */ \n\n/* REMOVE LINE\n@import "https://leeprky.github.io/themes/MaterialYouTheme/styles/material-yellow.css";\n\n/* Material Grey */ \n\n/* REMOVE LINE\n@import "https://leeprky.github.io/themes/MaterialYouTheme/styles/material-grey.css";\n:root {--material-grey-greytone: 100% !important} /* 0% For Grey 100% For Colours */\n\n/* Material AMOLED */\n\n/* REMOVE LINE\n@import "https://leeprky.github.io/themes/MaterialYouTheme/styles/material-amoled.css";\n:root {--material-black-greytone: 60% !important} /* 0% For Grey 100% For Colours */\n\n/*\n _   _  ___  ___  ___        ___  _____ __   __ _     ___  ___ \n| | | |/ __|| __|| _ \\      / __||_   _|\\ \\ / /| |   | __|/ __|\n| |_| |\\__ \\| _| |   /      \\__ \\  | |   \\   / | |__ | _| \\__ \\\n \\___/ |___/|___||_|_\\      |___/  |_|    |_|  |____||___||___/\n*/\n\n/* Create Your Own Import Scheme\n   Create A CSS File On A Github Using This Scheme File..\n   https://github.com/leeprky/leeprky.github.io/blob/gh-pages/themes/MaterialYouTheme/styles/material-user-preset.css\n   \n   Then Copy Link And Place Inside () */\n   \n   @import url();\n\n   \n/*\n _____  ___  ___  _  _  ___  ___  ___  ___  ___  _  _   ___ __   __\n|_   _|| _ \\/   \\| \\| |/ __|| _ \\/   \\| _ \\| __|| \\| | / __|\\ \\ / /\n  | |  |   /| - || .  |\\__ \\|  _/| - ||   /| _| | .  || (__  \\   / \n  |_|  |_|_\\|_|_||_|\\_||___/|_|  |_|_||_|_\\|___||_|\\_| \\___|  |_|  \n\n    TRANSPARENCY ENABLED IN BETTERDISCORD / POWERCORD REQUIRED\n          (GLASSCORD OPTIONAL FOR BLUR ON POWERCORD */\n\n/* REMOVE LINE\n@import "https://leeprky.github.io/themes/MaterialYouTheme/extras/glasscord.css";\n.transparent {--glasscord-win-blur: blurbehind;--glasscord-linux-blur: true;--glasscord-macos-vibrancy: fullscreen-ui;--background-accent: var(--glasscord-accent); --background-floating: var(--glasscord-floating); --glasscord-primary: var(--glasscord-current-style-bg) !important;}\n\n/* USE TO SET A MANUAL BACKGROUND (IT FOLLOWS THE SCHEME OTHERWISE) */\n\n/* REMOVE LINE\n:root {--glasscord-current-style-bg: black !important}\n\n/*\n  ___  _   _  ___  _____   ___   __  __        ___  _____ __   __ _     ___ \n / __|| | | |/ __||_   _| / _ \\ |  \\/  |      / __||_   _|\\ \\ / /| |   | __|\n| (__ | |_| |\\__ \\  | |  | (_) || |\\/| |      \\__ \\  | |   \\   / | |__ | _| \n \\___| \\___/ |___/  |_|   \\___/ |_|  |_|      |___/  |_|    |_|  |____||___|\n     DELETE THE /* ABOVE .theme-dark             And Add /* To The Import\n*/\n\n/*\n.theme-dark {\n  --main-colour: 90, 130, 179 !important;\n  --main-colour2: #5a82b3 !important; \n  --main-colour3: 213 !important; \n  --main-background: #152029 !important;\n  --secondary-background: #111a22 !important;\n  --tertiary: #000000 !important;\n  --floating: #0e151c !important;\n\n  --headers: #b2cef0 !important; \n  --headers-secondary: #a9caf2 !important;\n  \n  --namesusernames: #d1e0f2 !important;\n  --text: #d1e0f2 !important;\n  --text-positive1: var(--green-color) !important;\n  --muted: #d1e0f2 !important;\n  --links: var(--alt-color2) !important;\n  --button-interactive: #cbdcf2 !important;\n  --button-interactive-hover: var(--main-colour2) !important;\n  --button-interactive-active: #b2cef0 !important;\n  --button-interactive-muted: #b2cef0 !important;\n}\n.theme-light {\n  --main-colour: 113, 164, 226 !important; \n  --main-colour2: #71a4e2 !important; \n  --main-colour3: 213 !important; \n\n  --main-background: #ebf3fc !important;\n  --secondary-background: rgb(219, 236, 255) !important;\n  --tertiary: #ffffff !important;\n  --floating: #ffffff !important;\n\n  --headers: #343c46 !important; \n  --headers-secondary: #1c2127 !important;\n  \n  --namesusernames: #272a2e !important;\n  --text: #1e2022 !important;\n  --text-positive1: var(--green-color) !important;\n  --muted: #18191b !important;\n  --links: var(--alt-color2) !important;\n  --button-interactive: #15171a !important;\n  --button-interactive-hover: var(--main-colour2) !important;\n  --button-interactive-active: #15191d !important;\n  --button-interactive-muted: #13161a !important;\n}\n\n/*\n ___ __  __ _____  ___  ___  ___ \n| __|\\ \\/ /|_   _|| _ \\/   \\/ __|\n| _|  >  <   | |  |   /| - |\\__ \\\n|___|/_/\\_\\  |_|  |_|_\\|_|_||___/\n     Customisable Features\n*/\n\n:root {\n\n  /* Only Needed For Horizontal Server List Enabled */\n  --HSL-server-icon-size: 40px;  \n  --HSL-server-spacing: 10px;  \n  --HSL-server-direction: column; \n\n  --scrollbars: flex; /* Flex To See Scrollbars / None For None */\n\n  --display-notes-in-popout: none;\n\n  --spotify-title-in-music-player: block; /* None To Remove Spotify From Spotify Player In Powercord / Block To Display It */\n  --topbar-label-buttons: flex; /* None To Remove Labels / Flex To Display Lables */\n\n  --bubble-radius: 25px !important; /* Radius Of Things */\n  --bubble-padding-small: 9px !important; /* The Space Around The Content Of The Bubble */\n  --bubble-padding-large: 12px !important; /* The Space Around The Content Of The Bubble */\n\n  --rs-avatar-shape: 50%; /* 50% for round - 0% for square */\n\n  --rs-online-color: #43b581 !important; /* Colour for online status */\n  --rs-idle-color: #faa61a; /* Colour for idle status */\n  --rs-dnd-color: #f04747; /* Colour for dnd status */\n  --rs-offline-color: #636b75; /* Colour for offline status */\n  --rs-streaming-color: #643da7; /* Colour for streaming status */\n  --rs-invisible-color: #747f8d; /* Colour for invisible status - Note: this will only show for your own invisibility */\n  --rs-phone-color: var(--rs-online-color); /* Colour of the ring and phone icon when a user is on their phone |  */\n\n  --rs-phone-visible: block; /* Visibility of the phone icon next to a users avatar. | block = visible | none = hidden */\n\n  --sidebar-fade: 92%;\n}\n\n/*\n   ___  _____    \n .\'/,-Y"     "~-.  \n l.Y             ^.           \n /\\               _\\_  \ni            ___/"   "\\ \n|          /"   "\\   o !   \nl         ]     o !__./   \n \\ _  _    \\.___./    "~\\  \n  X \\/ \\            ___./        \n ( \\ ___.   _..--~~"   ~`-.  \n  ` Z,--   /               \\    \n    \\__.  (   /       ______) \n      \\   l  /-----~~" /         >>  Made By Leeprky#2063 <<\n       Y   \\          /                 \n       |    "x______.^ \n       |           \\    \n       |            \\\n\n  ___  ___  ___  ___   ___  _____  ___ \n / __|| _ \\| __||   \\ |_ _||_   _|/ __|\n| (__ |   /| _| | |) | | |   | |  \\__ \\\n \\___||_|_\\|___||___/ |___|  |_|  |___/\n\n > Thanks To:\n   > crearts-community\n     > https://github.com/CreArts-Community\n\n   > Any Snippits From Other Developers In Powercord/Betterdiscord Servers\n\n/*\n ___   ___  _  _   ___   ___  ___ \n|_ _| / __|| \\| | / _ \\ | _ \\| __|\n | | | (_ || .  || (_) ||   /| _| \n|___| \\___||_|\\_| \\___/ |_|_\\|___|\n*/\n\n:root {--outdated_materialyou-090: none !important; --version: "0.9.0.BD" !important; --build: "090" !important; \n      --main-background-alternative: var(--main-background);--secondary-background-alternative: var(--secondary-background);--accent: var(--alt-color2);--green-color: var(--alt-color2); /* HEX ONLY */--green-color2: var(--alt-color); /* RGB ONLY */--green-bar-on: rgba(var(--alt-color), 0.3); /* RGBA ONLY */--green-bar-bg: var(--green-color); /* RGB ONLY */--green-slider-on: var(--green-color); /* RGB ONLY */--green-slider-off: rgba(var(--alt-color), 0.4); /* RGBA ONLY */--green-slider-dot: #fff;--rs-online-color: var(--main-colour2);  /* Colour for online status */--chatbox-colour: var(--background-secondary);--mentioned: rgba(var(--alt-color), 0.4);--mentioned-hover: rgba(var(--alt-color), 0.2); --main-hover: rgba(var(--alt-color), 0.2);--main-hover-active: rgba(var(--alt-color), 0.8);--main-hover-selected: rgba(var(--alt-color), 0.5); --main-hover-accent: rgba(var(--alt-color), 0.1); --scrollbar-small: rgba(var(--alt-color), 0.2);--scrollbar-small-track: transparent;--scrollbar-large-thumb: rgba(var(--alt-color), 0.4); --scrollbar-large-track: rgba(var(--alt-color), 0.2);--scrollbar-small-scrollbar-color: rgba(var(--alt-color), 0.4); --scrollbar-small-scrollbar-color-track: rgba(var(--alt-color), 0.2);--default-gradient: 315deg, rgba(var(--alt-color), 0.6) 0%, rgba(var(--alt-color), 0.8) 74%;--special-gradient: 315deg, rgba(var(--alt-color), 0.1) 0%, #c987b8 74%;--red-gradient: 315deg, #AA3738 0%, #F04747 74%;--red-hsl: hsl(359, 63%, 53%);--yellow-gradient: 315deg, #c29b1b 0%, #ffa640 74%;--yellow-hsl: hsl(46, 72%, 52%);--green-gradient: 315deg, #507a73 0%, #4b7c72  74%;--grey-gradient: 315deg, rgba(var(--alt-color), 0.6) 0%, rgba(var(--alt-color), 0.8) 74%;--white-gradient: 315deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.342) 74%;--font-normal: 500;--font-hover: bold;--font-size-hover: 15px;--hover-transition: 0.1s linear;--transform-normal: scale(1);--hover-transform: scale(1.15);--setting-hover-transform: scale(1.025);--button-hover-transform: scale(1.03);--info-warning: var(--alt-color2);--help-warning: var(--alt-color2); --help-info: var(--alt-color2);--radio-group-dot: var(--alt-color);--shadow-stroke: 0 0 0 1px rgba(4,4,5,0.15);--shadow-low: 0 1px 0 rgba(18, 20, 36, 0.767),0 1.5px 0 rgba(6,6,7,0.05),0 2px 0 rgba(4,4,5,0.05);--shadow-medium: 0 4px 4px rgba(0,0,0,0.16);--shadow-high: 0 8px 16px rgba(0,0,0,0.24);}\n\n/* DEV VERSION DISPLAY */\n:root{--version-display: flex} /* Display Version Number Above Chat Box */ /*\n\n\n\n\n ___  ___   ___         ___  _  _ __   __ _____  _  _  ___  _  _   ___        ___  ___  _      ___  __      __\n/   \\|   \\ |   \\       /   \\| \\| |\\ \\ / /|_   _|| || ||_ _|| \\| | / __|      | _ )| __|| |    / _ \\ \\ \\    / /\n| - || |) || |) |      | - || .  | \\   /   | |  | __ | | | | .  || (_ |      | _ \\| _| | |__ | (_) | \\ \\/\\/ / \n|_|_||___/ |___/       |_|_||_|\\_|  |_|    |_|  |_||_||___||_|\\_| \\___|      |___/|___||____| \\___/   \\_/\\_/  \n/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */\n\n\n\n\n\n')),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("Material You",["",{type:"text-and-color",text:"Main Colour",oninput:function(t){document.body.style.setProperty("--main-colour",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--main-colour")||"90, 130, 179";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Main Colour2",oninput:function(t){document.body.style.setProperty("--main-colour2",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--main-colour2")||"#5a82b3";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Main Colour3",oninput:function(t){document.body.style.setProperty("--main-colour3",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--main-colour3")||"213";return console.log(t),t}},{type:"text-and-color",text:"Main Background",oninput:function(t){document.body.style.setProperty("--main-background",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--main-background")||"#152029";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Secondary Background",oninput:function(t){document.body.style.setProperty("--secondary-background",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--secondary-background")||"#111a22";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Tertiary",oninput:function(t){document.body.style.setProperty("--tertiary",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--tertiary")||"#000000";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Floating",oninput:function(t){document.body.style.setProperty("--floating",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--floating")||"#0e151c";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Headers",oninput:function(t){document.body.style.setProperty("--headers",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--headers")||"#b2cef0";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Headers Secondary",oninput:function(t){document.body.style.setProperty("--headers-secondary",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--headers-secondary")||"#a9caf2";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Namesusernames",oninput:function(t){document.body.style.setProperty("--namesusernames",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--namesusernames")||"#d1e0f2";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Text",oninput:function(t){document.body.style.setProperty("--text",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--text")||"#d1e0f2";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Muted",oninput:function(t){document.body.style.setProperty("--muted",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--muted")||"#d1e0f2";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Button Interactive",oninput:function(t){document.body.style.setProperty("--button-interactive",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--button-interactive")||"#cbdcf2";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Button Interactive Active",oninput:function(t){document.body.style.setProperty("--button-interactive-active",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--button-interactive-active")||"#b2cef0";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Button Interactive Muted",oninput:function(t){document.body.style.setProperty("--button-interactive-muted",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--button-interactive-muted")||"#b2cef0";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Hsl Server Icon Size",oninput:function(t){document.body.style.setProperty("--HSL-server-icon-size",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--HSL-server-icon-size")||"40px";return console.log(t),t}},{type:"text-input",text:"Hsl Server Spacing",oninput:function(t){document.body.style.setProperty("--HSL-server-spacing",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--HSL-server-spacing")||"10px";return console.log(t),t}},{type:"text-input",text:"Hsl Server Direction",oninput:function(t){document.body.style.setProperty("--HSL-server-direction",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--HSL-server-direction")||"column";return console.log(t),t}},{type:"text-input",text:"Scrollbars",oninput:function(t){document.body.style.setProperty("--scrollbars",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--scrollbars")||"flex";return console.log(t),t}},{type:"text-input",text:"Display Notes In Popout",oninput:function(t){document.body.style.setProperty("--display-notes-in-popout",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--display-notes-in-popout")||"none";return console.log(t),t}},{type:"text-input",text:"Spotify Title In Music Player",oninput:function(t){document.body.style.setProperty("--spotify-title-in-music-player",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--spotify-title-in-music-player")||"block";return console.log(t),t}},{type:"text-input",text:"Topbar Label Buttons",oninput:function(t){document.body.style.setProperty("--topbar-label-buttons",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--topbar-label-buttons")||"flex";return console.log(t),t}},{type:"text-input",text:"Bubble Radius",oninput:function(t){document.body.style.setProperty("--bubble-radius",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--bubble-radius")||"25px";return console.log(t),t}},{type:"text-input",text:"Bubble Padding Small",oninput:function(t){document.body.style.setProperty("--bubble-padding-small",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--bubble-padding-small")||"9px";return console.log(t),t}},{type:"text-input",text:"Bubble Padding Large",oninput:function(t){document.body.style.setProperty("--bubble-padding-large",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--bubble-padding-large")||"12px";return console.log(t),t}},{type:"text-input",text:"Radial Status: Avatar Shape",oninput:function(t){document.body.style.setProperty("--rs-avatar-shape",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-avatar-shape")||"50%";return console.log(t),t}},{type:"text-and-color",text:"Radial Status: Online Color",oninput:function(t){document.body.style.setProperty("--rs-online-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-online-color")||"#43b581";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Radial Status: Idle Color",oninput:function(t){document.body.style.setProperty("--rs-idle-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-idle-color")||"#faa61a";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Radial Status: DND Color",oninput:function(t){document.body.style.setProperty("--rs-dnd-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-dnd-color")||"#f04747";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Radial Status: Offline Color",oninput:function(t){document.body.style.setProperty("--rs-offline-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-offline-color")||"#636b75";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Radial Status: Streaming Color",oninput:function(t){document.body.style.setProperty("--rs-streaming-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-streaming-color")||"#643da7";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Radial Status: Invisible Color",oninput:function(t){document.body.style.setProperty("--rs-invisible-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-invisible-color")||"#747f8d";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Radial Status: Phone Visible",oninput:function(t){document.body.style.setProperty("--rs-phone-visible",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-phone-visible")||"block";return console.log(t),t}},{type:"text-input",text:"Sidebar Fade",oninput:function(t){document.body.style.setProperty("--sidebar-fade",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--sidebar-fade")||"92%";return console.log(t),t}},{type:"text-input",text:"Outdated_materialyou 090",oninput:function(t){document.body.style.setProperty("--outdated_materialyou-090",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--outdated_materialyou-090")||'none; --version: "0.9.0.BD" !important; --build: "090" !important';return console.log(t),t}}]);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),onRemove:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.remove();try{goosemodScope.settings.removeItem("Material You")}catch(e){}case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),getSettings:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",[["--main-colour",document.body.style.getPropertyValue("--main-colour")],["--main-colour2",document.body.style.getPropertyValue("--main-colour2")],["--main-colour3",document.body.style.getPropertyValue("--main-colour3")],["--main-background",document.body.style.getPropertyValue("--main-background")],["--secondary-background",document.body.style.getPropertyValue("--secondary-background")],["--tertiary",document.body.style.getPropertyValue("--tertiary")],["--floating",document.body.style.getPropertyValue("--floating")],["--headers",document.body.style.getPropertyValue("--headers")],["--headers-secondary",document.body.style.getPropertyValue("--headers-secondary")],["--namesusernames",document.body.style.getPropertyValue("--namesusernames")],["--text",document.body.style.getPropertyValue("--text")],["--muted",document.body.style.getPropertyValue("--muted")],["--button-interactive",document.body.style.getPropertyValue("--button-interactive")],["--button-interactive-active",document.body.style.getPropertyValue("--button-interactive-active")],["--button-interactive-muted",document.body.style.getPropertyValue("--button-interactive-muted")],["--HSL-server-icon-size",document.body.style.getPropertyValue("--HSL-server-icon-size")],["--HSL-server-spacing",document.body.style.getPropertyValue("--HSL-server-spacing")],["--HSL-server-direction",document.body.style.getPropertyValue("--HSL-server-direction")],["--scrollbars",document.body.style.getPropertyValue("--scrollbars")],["--display-notes-in-popout",document.body.style.getPropertyValue("--display-notes-in-popout")],["--spotify-title-in-music-player",document.body.style.getPropertyValue("--spotify-title-in-music-player")],["--topbar-label-buttons",document.body.style.getPropertyValue("--topbar-label-buttons")],["--bubble-radius",document.body.style.getPropertyValue("--bubble-radius")],["--bubble-padding-small",document.body.style.getPropertyValue("--bubble-padding-small")],["--bubble-padding-large",document.body.style.getPropertyValue("--bubble-padding-large")],["--rs-avatar-shape",document.body.style.getPropertyValue("--rs-avatar-shape")],["--rs-online-color",document.body.style.getPropertyValue("--rs-online-color")],["--rs-idle-color",document.body.style.getPropertyValue("--rs-idle-color")],["--rs-dnd-color",document.body.style.getPropertyValue("--rs-dnd-color")],["--rs-offline-color",document.body.style.getPropertyValue("--rs-offline-color")],["--rs-streaming-color",document.body.style.getPropertyValue("--rs-streaming-color")],["--rs-invisible-color",document.body.style.getPropertyValue("--rs-invisible-color")],["--rs-phone-visible",document.body.style.getPropertyValue("--rs-phone-visible")],["--sidebar-fade",document.body.style.getPropertyValue("--sidebar-fade")],["--outdated_materialyou-090",document.body.style.getPropertyValue("--outdated_materialyou-090")]]);case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),loadSettings:function(){var t=e(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.forEach(function(t){document.body.style.setProperty(t[0],t[1])});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}};exports.default=o;
},{}]},{},["index.js"], null);parcelRequire('index.js').default