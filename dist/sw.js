var serviceWorkerOption = {
  "assets": [
    "/bd6b63650298f334a08b66446d66c536.jpg",
    "/bundle.js",
    "/favicon.png",
    "/manifest.json",
    "/icons/icon-128x128.png",
    "/icons/icon-144x144.png",
    "/icons/icon-152x152.png",
    "/icons/icon-192x192.png",
    "/icons/icon-384x384.png",
    "/icons/icon-512x512.png",
    "/icons/icon-72x72.png",
    "/icons/icon-96x96.png",
    "/images/logo/logo.png",
    "/images/heros/hero-image_2.jpg",
    "/index.html"
  ]
};
        
        !function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){"use strict";var n={BASE_URL:"https://restaurant-api.dicoding.dev/",BASE_IMAGE_URL:"https://restaurant-api.dicoding.dev/images/medium/",CONTENT_TYPE:"application/x-www-form-urlencoded",CACHE_NAME:(new Date).toISOString(),DATABASE_NAME:"Resto-database",DATABASE_VERSION:1,OBJECT_STORE_NAME:"restaurant"};function o(e,t,r,n,o,a,u){try{var i=e[a](u),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,o)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var u=e.apply(t,r);function i(e){o(u,n,a,i,c,"next",e)}function c(e){o(u,n,a,i,c,"throw",e)}i(void 0)}))}}var u={cachingAppShell:function(e){var t=this;return a(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t._openCache();case 2:r.sent.addAll(e);case 4:case"end":return r.stop()}}),r)})))()},deleteOldCache:function(){return a(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,caches.keys();case 2:e.sent.filter((function(e){return e!==n.CACHE_NAME})).map((function(e){return caches.delete(e)}));case 4:case"end":return e.stop()}}),e)})))()},revalidateCache:function(e){var t=this;return a(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,caches.match(e);case 2:if(!(n=r.sent)){r.next=6;break}return t._fetchRequest(e),r.abrupt("return",n);case 6:return r.abrupt("return",t._fetchRequest(e));case 7:case"end":return r.stop()}}),r)})))()},_openCache:function(){return a(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",caches.open(n.CACHE_NAME));case 1:case"end":return e.stop()}}),e)})))()},_fetchRequest:function(e){var t=this;return a(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch(e);case 2:if((n=r.sent)&&200===n.status){r.next=5;break}return r.abrupt("return",n);case 5:return r.next=7,t._addCache(e);case 7:return r.abrupt("return",n);case 8:case"end":return r.stop()}}),r)})))()},_addCache:function(e){var t=this;return a(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t._openCache();case 2:r.sent.add(e);case 4:case"end":return r.stop()}}),r)})))()}};t.a=u},function(e,t,r){"use strict";r.r(t),function(e){var t=r(0);function n(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var a=e.serviceWorkerOption.assets;self.addEventListener("install",(function(e){e.waitUntil(t.a.cachingAppShell([].concat(n(a),["./"])))})),self.addEventListener("activate",(function(e){e.waitUntil(t.a.deleteOldCache())})),self.addEventListener("fetch",(function(e){e.respondWith(t.a.revalidateCache(e.request))}))}.call(this,r(2))},function(e,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":r(window))&&(n=window)}e.exports=n}]);