!function(a){function b(a,b,c){a.addEventListener(b,c,!1)}function c(a){a.preventDefault&&a.preventDefault(),a.returnValue=!1}function d(a,b,c){return Math.min(c,Math.max(a,b))}function e(a,b,c){var e=c-b;return d((a-b)/e,0,1)}function f(a,b,c,d){var f=b.min,g=b.max,h=e(a,f[c],g[c]);return f[d]+(g[d]-f[d])*h}function g(a,b,c){var d=b/360+.5,e=Math.min(1,Math.max(0,.5-Math.log(Math.tan(Math.PI/4+Math.PI/2*a/180))/Math.PI/2));return{x:d*c,y:e*c}}function h(a,b,c){return a/=c,b/=c,{latitude:(2*Math.atan(Math.exp(Math.PI*(1-2*b)))-Math.PI/2)*(180/Math.PI),longitude:360*a-180}}function i(a,b){return a.replace(/\{(\w+)\}/g,function(a,c){return b[c]||a})}function j(a,b,c){var d=a[0]-b[0],e=a[1]-b[1],f=a[2]-b[2],g=b[0]-c[0],h=b[1]-c[1],i=b[2]-c[2],j=e*i-f*h,k=f*g-d*i,l=d*h-e*g,m=p(j,k,l);return 0===Math.round(5e3*m[2])}function k(a,b,c){this.tileX=a,this.tileY=b,this.zoom=c,this._vertexBuffer=M.createBuffer(3,new Float32Array([255,255,0,255,0,0,0,255,0,0,0,0])),this._texCoordBuffer=M.createBuffer(2,new Float32Array([1,1,1,0,0,1,0,0]))}function l(a,b){var c=a[0]-b[0],d=a[1]-b[1];return c*c+d*d}function m(a){var b=a[0],c=b.length;if(16>c)return!1;var d,e=1/0,f=-1/0,g=1/0,h=-1/0;for(d=0;c>d;d++)e=Math.min(e,b[d][0]),f=Math.max(f,b[d][0]),g=Math.min(g,b[d][1]),h=Math.max(h,b[d][1]);var i=f-e,j=h-g,k=i/j;if(.85>k||k>1.15)return!1;var m=[e+i/2,g+j/2],n=(i+j)/4,o=n*n;for(d=0;c>d;d++){var p=l(b[d],m);if(.8>p/o||p/o>1.2)return!1}return!0}function n(a){for(var b=a[0],c=1/0,d=-1/0,e=1/0,f=-1/0,g=0;g<b.length;g++)c=Math.min(c,b[g][0]),d=Math.max(d,b[g][0]),e=Math.min(e,b[g][1]),f=Math.max(f,b[g][1]);return{minX:c,maxX:d,minY:e,maxY:f}}function o(a){return a*y/180}function p(a,b,c){var d=Math.sqrt(a*a+b*b+c*c);return 0===d&&(d=1e-5),[a/d,b/d,c/d]}function q(a,b,c){return{x:Math.cos(c)*a-Math.sin(c)*b,y:Math.sin(c)*a+Math.cos(c)*b}}var r=function(){"use strict";function a(a,e){var f=c(b(a[0],!0)),g=e?{vertices:[],indices:[]}:[];if(!f)return g;var h,j,k,l,m,n,o,p,q,r=80;for(q=0;r>=0&&q<a.length;q++)r-=a[q].length;if(0>r){h=f.next,j=l=h.p[0],k=m=h.p[1];do n=h.p[0],o=h.p[1],j>n&&(j=n),k>o&&(k=o),n>l&&(l=n),o>m&&(m=o),h=h.next;while(h!==f);p=Math.max(l-j,m-k)}return a.length>1&&(f=i(a,f)),d(f,g,j,k,p),g}function b(a,b){var c,d,e,f,g,h=0,i=a.length;for(c=0,d=i-1;i>c;d=c++)e=a[c],f=a[d],h+=(f[0]-e[0])*(e[1]+f[1]);if(b===h>0)for(c=0;i>c;c++)g=y(a[c],g);else for(c=i-1;c>=0;c--)g=y(a[c],g);return g}function c(a,b){b||(b=a);var c,d=a;do if(c=!1,r(d.p,d.next.p)||0===q(d.prev.p,d.p,d.next.p)){if(d.prev.next=d.next,d.next.prev=d.prev,d.prevZ&&(d.prevZ.nextZ=d.nextZ),d.nextZ&&(d.nextZ.prevZ=d.prevZ),d=b=d.prev,d===d.next)return null;c=!0}else d=d.next;while(c||d!==b);return b}function d(a,b,i,j,k,m){if(a){var n=void 0!==b.vertices;m||void 0===i||l(a,i,j,k);for(var o,p,q=a;a.prev!==a.next;)if(o=a.prev,p=a.next,f(a,i,j,k))n?(e(b,o),e(b,a),e(b,p)):(b.push(o.p),b.push(a.p),b.push(p.p)),p.prev=o,o.next=p,a.prevZ&&(a.prevZ.nextZ=a.nextZ),a.nextZ&&(a.nextZ.prevZ=a.prevZ),a=p.next,q=p.next;else if(a=p,a===q){m?1===m?(a=g(a,b),d(a,b,i,j,k,2)):2===m&&h(a,b,i,j,k):d(c(a),b,i,j,k,1);break}}}function e(a,b){b.source&&(b=b.source);var c=b.index;if(null===c){var d=b.p.length,e=a.vertices;b.index=c=e.length/d;for(var f=0;d>f;f++)e.push(b.p[f])}a.indices.push(c)}function f(a,b,c,d){var e=a.prev.p,f=a.p,g=a.next.p,h=e[0],i=f[0],j=g[0],k=e[1],l=f[1],m=g[1],o=h*l-k*i,p=h*m-k*j,q=j*l-m*i,r=o-p-q;if(0>=r)return!1;var s,t,u,v,w,x,y,z=m-k,A=h-j,B=k-l,C=i-h;if(void 0!==b){var D=i>h?j>h?h:j:j>i?i:j,E=l>k?m>k?k:m:m>l?l:m,F=h>i?h>j?h:j:i>j?i:j,G=k>l?k>m?k:m:l>m?l:m,H=n(D,E,b,c,d),I=n(F,G,b,c,d);for(y=a.nextZ;y&&y.z<=I;)if(s=y.p,y=y.nextZ,s!==e&&s!==g&&(t=s[0],u=s[1],v=z*t+A*u-p,v>=0&&(w=B*t+C*u+o,w>=0&&(x=r-v-w,x>=0&&(v&&w||v&&x||w&&x)))))return!1;for(y=a.prevZ;y&&y.z>=H;)if(s=y.p,y=y.prevZ,s!==e&&s!==g&&(t=s[0],u=s[1],v=z*t+A*u-p,v>=0&&(w=B*t+C*u+o,w>=0&&(x=r-v-w,x>=0&&(v&&w||v&&x||w&&x)))))return!1}else for(y=a.next.next;y!==a.prev;)if(s=y.p,y=y.next,t=s[0],u=s[1],v=z*t+A*u-p,v>=0&&(w=B*t+C*u+o,w>=0&&(x=r-v-w,x>=0&&(v&&w||v&&x||w&&x))))return!1;return!0}function g(a,b){var c=!!b.vertices,d=a;do{var f=d.prev,g=d.next.next;if(s(f.p,d.p,d.next.p,g.p)&&u(f,g)&&u(g,f)){c?(e(b,f),e(b,d),e(b,g)):(b.push(f.p),b.push(d.p),b.push(g.p)),f.next=g,g.prev=f;var h=d.prevZ,i=d.nextZ&&d.nextZ.nextZ;h&&(h.nextZ=i),i&&(i.prevZ=h),d=a=g}d=d.next}while(d!==a);return d}function h(a,b,e,f,g){var h=a;do{for(var i=h.next.next;i!==h.prev;){if(p(h,i)){var j=x(h,i);return h=c(h,h.next),j=c(j,j.next),d(h,b,e,f,g),void d(j,b,e,f,g)}i=i.next}h=h.next}while(h!==a)}function i(a,d){for(var e=a.length,f=[],g=1;e>g;g++){var h=c(b(a[g],!1));h&&f.push(o(h))}for(f.sort(w),g=0;g<f.length;g++)j(f[g],d),d=c(d,d.next);return d}function j(a,b){if(b=k(a,b)){var d=x(b,a);c(d,d.next)}}function k(a,b){var c,d,e,f=b,g=a.p,h=g[0],i=g[1],j=-1/0;do{if(d=f.p,e=f.next.p,i<=d[1]&&i>=e[1]){var k=d[0]+(i-d[1])*(e[0]-d[0])/(e[1]-d[1]);h>=k&&k>j&&(j=k,c=d[0]<e[0]?f:f.next)}f=f.next}while(f!==b);if(!c)return null;var l,m,n,o,p,q,r=c.p[0],s=c.p[1],t=h*s-i*r,v=h*i-i*j,w=i-i,x=h-j,y=i-s,z=r-h,A=t-v-(j*s-i*r),B=0>=A?-1:1,C=c,D=1/0;for(f=c.next;f!==C;)l=f.p[0],m=f.p[1],n=h-l,n>=0&&l>=r&&(o=(w*l+x*m-v)*B,o>=0&&(p=(y*l+z*m+t)*B,p>=0&&A*B-o-p>=0&&(q=Math.abs(i-m)/n,D>q&&u(f,a)&&(c=f,D=q)))),f=f.next;return c}function l(a,b,c,d){var e=a;do null===e.z&&(e.z=n(e.p[0],e.p[1],b,c,d)),e.prevZ=e.prev,e.nextZ=e.next,e=e.next;while(e!==a);e.prevZ.nextZ=null,e.prevZ=null,m(e)}function m(a){for(var b,c,d,e,f,g,h,i,j=1;;){for(c=a,a=null,f=null,g=0;c;){for(g++,d=c,h=0,b=0;j>b&&(h++,d=d.nextZ,d);b++);for(i=j;h>0||i>0&&d;)0===h?(e=d,d=d.nextZ,i--):0!==i&&d?c.z<=d.z?(e=c,c=c.nextZ,h--):(e=d,d=d.nextZ,i--):(e=c,c=c.nextZ,h--),f?f.nextZ=e:a=e,e.prevZ=f,f=e;c=d}if(f.nextZ=null,1>=g)return a;j*=2}}function n(a,b,c,d,e){return a=1e3*(a-c)/e,a=16711935&(a|a<<8),a=252645135&(a|a<<4),a=858993459&(a|a<<2),a=1431655765&(a|a<<1),b=1e3*(b-d)/e,b=16711935&(b|b<<8),b=252645135&(b|b<<4),b=858993459&(b|b<<2),b=1431655765&(b|b<<1),a|b<<1}function o(a){var b=a,c=a;do b.p[0]<c.p[0]&&(c=b),b=b.next;while(b!==a);return c}function p(a,b){return!t(a,a.p,b.p)&&u(a,b)&&u(b,a)&&v(a,a.p,b.p)}function q(a,b,c){var d=(b[1]-a[1])*(c[0]-b[0])-(b[0]-a[0])*(c[1]-b[1]);return d>0?1:0>d?-1:0}function r(a,b){return a[0]===b[0]&&a[1]===b[1]}function s(a,b,c,d){return q(a,b,c)!==q(a,b,d)&&q(c,d,a)!==q(c,d,b)}function t(a,b,c){var d=a;do{var e=d.p,f=d.next.p;if(e!==b&&f!==b&&e!==c&&f!==c&&s(e,f,b,c))return!0;d=d.next}while(d!==a);return!1}function u(a,b){return-1===q(a.prev.p,a.p,a.next.p)?-1!==q(a.p,b.p,a.next.p)&&-1!==q(a.p,a.prev.p,b.p):-1===q(a.p,b.p,a.prev.p)||-1===q(a.p,a.next.p,b.p)}function v(a,b,c){var d=a,e=!1,f=(b[0]+c[0])/2,g=(b[1]+c[1])/2;do{var h=d.p,i=d.next.p;h[1]>g!=i[1]>g&&f<(i[0]-h[0])*(g-h[1])/(i[1]-h[1])+h[0]&&(e=!e),d=d.next}while(d!==a);return e}function w(a,b){return a.p[0]-b.p[0]}function x(a,b){var c=new z(a.p),d=new z(b.p),e=a.next,f=b.prev;return c.source=a,d.source=b,a.next=b,b.prev=a,c.next=e,e.prev=c,d.next=c,c.prev=d,f.next=d,d.prev=f,d}function y(a,b){var c=new z(a);return b?(c.next=b.next,c.prev=b,b.next.prev=c,b.next=c):(c.prev=c,c.next=c),c}function z(a){this.p=a,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.source=null,this.index=null}return a}(),s=function(){function a(a,b,c){return 0>c&&(c+=1),c>1&&(c-=1),1/6>c?a+6*(b-a)*c:.5>c?b:2/3>c?a+(b-a)*(2/3-c)*6:a}function b(a,b){return Math.min(b,Math.max(0,a))}var c={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",grey:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",orange:"#ffa500",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00"},d=function(a,b,c,d){this.H=a,this.S=b,this.L=c,this.A=d};return d.parse=function(a){var b,d=0,e=0,f=0,g=1;if(a=(""+a).toLowerCase(),a=c[a]||a,b=a.match(/^#(\w{2})(\w{2})(\w{2})$/))d=parseInt(b[1],16),e=parseInt(b[2],16),f=parseInt(b[3],16);else{if(!(b=a.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/)))return;d=parseInt(b[1],10),e=parseInt(b[2],10),f=parseInt(b[3],10),g=b[4]?parseFloat(b[5]):1}return this.fromRGBA(d,e,f,g)},d.fromRGBA=function(a,b,c,e){"object"==typeof a?(b=a.g/255,c=a.b/255,e=a.a,a=a.r/255):(a/=255,b/=255,c/=255);var f,g,h=Math.max(a,b,c),i=Math.min(a,b,c),j=(h+i)/2,k=h-i;if(k){switch(g=j>.5?k/(2-h-i):k/(h+i),h){case a:f=(b-c)/k+(c>b?6:0);break;case b:f=(c-a)/k+2;break;case c:f=(a-b)/k+4}f*=60}else f=g=0;return new d(f,g,j,e)},d.prototype={toRGBA:function(){var c=b(this.H,360),d=b(this.S,1),e=b(this.L,1),f={a:b(this.A,1)};if(0===d)f.r=e,f.g=e,f.b=e;else{var g=.5>e?e*(1+d):e+d-e*d,h=2*e-g;c/=360,f.r=a(h,g,c+1/3),f.g=a(h,g,c),f.b=a(h,g,c-1/3)}return{r:Math.round(255*f.r),g:Math.round(255*f.g),b:Math.round(255*f.b),a:f.a}},toString:function(){var a=this.toRGBA();return 1===a.a?"#"+((1<<24)+(a.r<<16)+(a.g<<8)+a.b).toString(16).slice(1,7):"rgba("+[a.r,a.g,a.b,a.a.toFixed(2)].join(",")+")"},hue:function(a){return new d(this.H*a,this.S,this.L,this.A)},saturation:function(a){return new d(this.H,this.S*a,this.L,this.A)},lightness:function(a){return new d(this.H,this.S,this.L*a,this.A)},alpha:function(a){return new d(this.H,this.S,this.L,this.A*a)}},d}(this),t=function(a,b){b=b||{};var c=document.getElementById(a);u.setState(b),v.init(c),this._initRenderer(c),this.setDisabled(b.disabled),b.style&&this.setStyle(b.style),L.setSource(b.tileSource),J.setSource(b.dataSource,b.dataKey||B),S.initShader(),T.initShader()};t.VERSION="0.1.5",t.ATTRIBUTION='&copy; <a href="http://osmbuildings.org">OSM Buildings</a>',t.prototype={setStyle:function(a){var b=a.color||a.wallColor;return b&&(E=s.parse(b).toRGBA()),this},addMesh:function(a){var b=new O(a);return"string"==typeof a&&b.load(a),this},on:function(a,b){return v.on(a,b),this},off:function(a,b){return v.off(a,b),this},setDisabled:function(a){return v.setDisabled(a),this},isDisabled:function(){return v.isDisabled()},setZoom:function(a){return u.setZoom(a),this},getZoom:function(){return u.zoom},setCenter:function(a){return u.setCenter(a),this},getCenter:function(){return u.center},getBounds:function(){return u.bounds()},setSize:function(a){return u.setSize(a),this},getSize:function(){return u.size},getOrigin:function(){return u.origin},setRotation:function(a){return u.setRotation(a),this},getRotation:function(){return u.rotation},setTilt:function(a){return u.setTilt(a),this},getTilt:function(){return u.tilt},_initRenderer:function(a){var d=document.createElement("CANVAS");d.style.position="absolute",d.style.pointerEvents="none",a.appendChild(d);try{x=d.getContext("experimental-webgl",{antialias:!0,depth:!0,premultipliedAlpha:!1})}catch(e){throw e}b(d,"webglcontextlost",function(a){c(a),clearInterval(this._loop)}.bind(this)),this.setSize({width:a.offsetWidth,height:a.offsetHeight}),x.enable(x.CULL_FACE),x.enable(x.DEPTH_TEST),this._loop=setInterval(this._render.bind(this),17)},_render:function(){requestAnimationFrame(function(){x.clearColor(.5,.5,.5,1),x.clear(x.COLOR_BUFFER_BIT|x.DEPTH_BUFFER_BIT),S.render(),T.render()}.bind(this))},destroy:function(){var a=x.canvas;a.parentNode.removeChild(a),x=null,L.destroy(),J.destroy()}},"function"==typeof define?define([],t):"object"==typeof exports?module.exports=t:a.OSMBuildings=t;var u={};!function(){function a(a){u.origin=a}function b(){var a=g(u.center.latitude,u.center.longitude,u.worldSize),b=u.size.width/2,c=u.size.height/2,d=h(a.x-b,a.y-c,u.worldSize),e=h(a.x+b,a.y+c,u.worldSize);u.bounds={n:d.latitude,w:d.longitude,s:e.latitude,e:e.longitude}}u.center={},u.size={width:0,height:0},u.setState=function(a){u.minZoom=parseFloat(a.minZoom)||10,u.maxZoom=parseFloat(a.maxZoom)||20,u.maxZoom<u.minZoom&&(u.maxZoom=u.minZoom),a=w.load(a),u.setCenter(a.center||{latitude:52.52,longitude:13.41}),u.setZoom(a.zoom||u.minZoom),u.setRotation(a.rotation||0),u.setTilt(a.tilt||0),v.on("change",function(){w.save(u)}),w.save(u)},u.setZoom=function(c,e){if(c=d(parseFloat(c),u.minZoom,u.maxZoom),u.zoom!==c){if(e){var f=u.size.width/2-e.clientX,i=u.size.height/2-e.clientY,j=h(u.origin.x-f,u.origin.y-i,u.worldSize);u.zoom=c,u.worldSize=A*Math.pow(2,c);var k=g(j.latitude,j.longitude,u.worldSize);a({x:k.x+f,y:k.y+i}),u.center=h(u.origin.x,u.origin.y,u.worldSize)}else u.zoom=c,u.worldSize=A*Math.pow(2,c),a(g(u.center.latitude,u.center.longitude,u.worldSize));b(),v.emit("change")}},u.setCenter=function(c){c.latitude=d(parseFloat(c.latitude),-90,90),c.longitude=d(parseFloat(c.longitude),-180,180),(u.center.latitude!==c.latitude||u.center.longitude!==c.longitude)&&(u.center=c,a(g(c.latitude,c.longitude,u.worldSize)),b(),v.emit("change"))},u.setSize=function(a){var c=x.canvas;(a.width!==u.size.width||a.height!==u.size.height)&&(c.width=u.size.width=a.width,c.height=u.size.height=a.height,x.viewport(0,0,a.width,a.height),b(),v.emit("resize"))},u.setRotation=function(a){a=parseFloat(a)%360,u.rotation!==a&&(u.rotation=a,b(),v.emit("change"))},u.setTilt=function(a){a=d(parseFloat(a),0,70),u.tilt!==a&&(u.tilt=a,b(),v.emit("change"))},u.destroy=function(){}}();var v={};!function(){function d(a){if(!(x||void 0!==a.button&&0!==a.button)){if(c(a),void 0!==a.touches){if(t=u.rotation,w=u.zoom,a.touches.length>1)return;a=a.touches[0]}r=a.clientX,s=a.clientY,y=!0}}function e(a){if(!x&&y){if(void 0!==a.touches){if(a.touches.length>1)return;a=a.touches[0]}var b=a.clientX-r,c=a.clientY-s,d=q(b,c,u.rotation*Math.PI/180);u.setCenter(h(u.origin.x-d.x,u.origin.y-d.y,u.worldSize)),r=a.clientX,s=a.clientY}}function f(a){if(!x&&y){if(void 0!==a.touches){if(a.touches.length>1)return;a=a.touches[0]}y=!1;var b=a.clientX-r,c=a.clientY-s,d=q(b,c,u.rotation*Math.PI/180);u.setCenter(h(u.origin.x-d.x,u.origin.y-d.y,u.worldSize))}}function g(a){x||(c(a),u.setRotation(t-a.rotation),u.setZoom(w+(a.scale-1)))}function i(a){x||(c(a),u.setZoom(u.zoom+1,a))}function j(a){if(!x){c(a);var b=0;a.wheelDeltaY?b=a.wheelDeltaY:a.wheelDelta?b=a.wheelDelta:a.detail&&(b=-a.detail);var d=.2*(b>0?1:0>b?-1:0);u.setZoom(u.zoom+d,a)}}var k,l={},m="ontouchstart"in a,n=m?"touchstart":"mousedown",o=m?"touchmove":"mousemove",p=m?"touchend":"mouseup",r=0,s=0,t=0,w=0,x=!1,y=!1;v.init=function(c){b(c,n,d),b(c,"dblclick",i),b(document,o,e),b(document,p,f),m?b(c,"gesturechange",g):(b(c,"mousewheel",j),b(c,"DOMMouseScroll",j)),b(a,"resize",function(){clearTimeout(k),k=setTimeout(function(){},250)})},v.on=function(a,b){l[a]||(l[a]=[]),l[a].push(b)},v.off=function(){},v.emit=function(a){if(l[a])for(var b=0,c=l[a].length;c>b;b++)l[a][b]()},v.setDisabled=function(a){x=!!a},v.isDisabled=function(){return!!x},v.destroy=function(){l=null}}();var w={};!function(){function a(a){if(history.replaceState){var b=[],c=a.center;b.push("latitude="+c.latitude.toFixed(5)),b.push("longitude="+c.longitude.toFixed(5)),b.push("zoom="+a.zoom.toFixed(1)),b.push("tilt="+a.tilt.toFixed(1)),b.push("rotation="+a.rotation.toFixed(1)),history.replaceState({},"","?"+b.join("&"))}}w.load=function(a){var b=location.search;if(b){var c={};b=b.substring(1).replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(a,b,d){b&&(c[b]=d)}),void 0!==c.latitude&&void 0!==c.longitude&&(a.center={latitude:parseFloat(c.latitude),longitude:parseFloat(c.longitude)}),void 0!==c.zoom&&(a.zoom=parseFloat(c.zoom)),void 0!==c.rotation&&(a.rotation=parseFloat(c.rotation)),void 0!==c.tilt&&(a.tilt=parseFloat(c.tilt))}return a};var b;w.save=function(c){clearTimeout(b),b=setTimeout(function(){a(c)},1e3)}}();var x,y=Math.PI,z=14.5,A=256,B="anonymous",C="http://{s}.data.osmbuildings.org/0.2/{k}/tile/{z}/{x}/{y}.json",D=10,E=s.parse("rgb(220, 210, 200)").toRGBA(),F={zoomAlpha:{min:{zoom:17,alpha:1},max:{zoom:20,alpha:1}}},G={};!function(){var a={};G.loadJSON=function(b,c){if(a[b])return a[b];var d=new XMLHttpRequest;return d.onreadystatechange=function(){if(4===d.readyState&&(delete a[b],!(!d.status||d.status<200||d.status>299)&&d.responseText)){var e;try{e=JSON.parse(d.responseText)}catch(f){console.error("Could not parse JSON from "+b+"\n"+f.message)}c(e)}},a[b]=d,d.open("GET",b),d.send(null),{abort:function(){d.abort(),delete a[b]}}},G.abortAll=function(){for(var b in a)a[b].abort();a={}}}();var H={basemap:{src:{vertex:"\nprecision mediump float;\nattribute vec4 aPosition;\nattribute vec2 aTexCoord;\nuniform mat4 uMatrix;\nvarying vec2 vTexCoord;\nvoid main() {\n  gl_Position = uMatrix * aPosition;\n  vTexCoord = aTexCoord;\n}\n",fragment:"\nprecision mediump float;\nuniform sampler2D uTileImage;\nvarying vec2 vTexCoord;\nvoid main() {\n  gl_FragColor = texture2D(uTileImage, vec2(vTexCoord.x, -vTexCoord.y));\n}\n"},attributes:["aPosition","aTexCoord"],uniforms:["uMatrix","uTileImage"]},buildings:{src:{vertex:"\nprecision mediump float;\nattribute vec4 aPosition;\nattribute vec3 aNormal;\nattribute vec3 aColor;\nuniform mat4 uMatrix;\nuniform mat3 uNormalTransform;\nuniform vec3 uLightDirection;\nuniform vec3 uLightColor;\nvarying vec3 vColor;\nvarying vec4 vPosition;\nvoid main() {\n  gl_Position = uMatrix * aPosition;\n  vPosition = aPosition;\n  vec3 transformedNormal = aNormal * uNormalTransform;\n  float intensity = max( dot(transformedNormal, uLightDirection), 0.0) / 1.5;\n  vColor = aColor + uLightColor * intensity;\n}",fragment:"\nprecision mediump float;\nuniform float uAlpha;\nvarying vec4 vPosition;\nvarying vec3 vColor;\nfloat gradientHeight = 90.0;\nfloat maxGradientStrength = 0.3;\nvoid main() {\n  float shading = clamp((gradientHeight-vPosition.z) / (gradientHeight/maxGradientStrength), 0.0, maxGradientStrength);\n  gl_FragColor = vec4(vColor - shading, uAlpha);\n//  float fog = clamp((10.0-vPosition.y)/20.0, 0.0, 0.5);\n//  gl_FragColor = vec4(vColor - shading, uAlpha-fog);\n}\n"},attributes:["aPosition","aColor","aNormal"],uniforms:["uNormalTransform","uMatrix","uAlpha","uLightColor","uLightDirection"]}},I={LAT_SEGMENTS:32,LON_SEGMENTS:32,quad:function(a,b,c,d,e,f){this.addTriangle(a,b,c,d,f),this.addTriangle(a,c,e,d,f)},circle:function(a,b,c,d,e){for(var f,g,h=this.LON_SEGMENTS,i=0;h>i;i++)f=i/h,g=(i+1)/h,this.addTriangle(a,[b[0]+c*Math.sin(f*Math.PI*2),b[1]+c*Math.cos(f*Math.PI*2),d],[b[0],b[1],d],[b[0]+c*Math.sin(g*Math.PI*2),b[1]+c*Math.cos(g*Math.PI*2),d],e)},polygon:function(a,b,c,d){for(var e=r(b),f=0,g=e.length-2;g>f;f+=3)this.addTriangle(a,[e[f][0],e[f][1],c],[e[f+1][0],e[f+1][1],c],[e[f+2][0],e[f+2][1],c],d)},polygon3d:function(a,b,c){var d,e,f,g=b[0],h=g.length;if(4>=h)return this.addTriangle(a,g[0],g[2],g[1],c),void(4===h&&this.addTriangle(a,g[0],g[3],g[2],c));if(j(g[0],g[1],g[2])){for(var i=0,k=b[0].length;k>i;i++)b[0][i]=[b[0][i][2],b[0][i][1],b[0][i][0]];for(d=r(b),e=0,f=d.length-2;f>e;e+=3)this.addTriangle(a,[d[e][2],d[e][1],d[e][0]],[d[e+1][2],d[e+1][1],d[e+1][0]],[d[e+2][2],d[e+2][1],d[e+2][0]],c)}else for(d=r(b),e=0,f=d.length-2;f>e;e+=3)this.addTriangle(a,[d[e][0],d[e][1],d[e][2]],[d[e+1][0],d[e+1][1],d[e+1][2]],[d[e+2][0],d[e+2][1],d[e+2][2]],c)},cylinder:function(a,b,c,d,e,f,g){for(var h,i,j,k,l,m,n=this.LON_SEGMENTS,o=0;n>o;o++)h=o/n,i=(o+1)/n,j=Math.sin(h*Math.PI*2),k=Math.cos(h*Math.PI*2),l=Math.sin(i*Math.PI*2),m=Math.cos(i*Math.PI*2),this.addTriangle(a,[b[0]+c*j,b[1]+c*k,e],[b[0]+d*l,b[1]+d*m,f],[b[0]+c*l,b[1]+c*m,e],g),0!==d&&this.addTriangle(a,[b[0]+d*j,b[1]+d*k,f],[b[0]+d*l,b[1]+d*m,f],[b[0]+c*j,b[1]+c*k,e],g)},pyramid:function(a,b,c,d,e,f){b=b[0];for(var g=0,h=b.length-1;h>g;g++)this.addTriangle(a,[b[g][0],b[g][1],d],[b[g+1][0],b[g+1][1],d],[c[0],c[1],e],f)},_dome:function(){this.LAT_SEGMENTS/2},_sphere:function(a,b,c,d,e,f){for(var g,h,i,j=this.LAT_SEGMENTS,k=0;j>k;k++)g=k*Math.PI/j,h=Math.sin(g),i=Math.cos(g),I.cylinder(a,b,radiusBottom,radiusTop,d,e,f)},Pyramid:function(){},extrusion:function(a,b,c,d,e){for(var f,g,h,i,j,k,l=0,m=b.length;m>l;l++){f=b[l],g=f.length-1,(f[0][0]!==f[g][0]||f[0][1]!==f[g][1])&&(f.push(f[0]),g++);for(var n=0;g>n;n++)h=f[n],i=f[n+1],j=c,k=d,this.quad(a,[h[0],h[1],j],[i[0],i[1],j],[h[0],h[1],k],[i[0],i[1],k],e)}},addTriangle:function(a,b,c,d,e){a.vertices.push(b[0],b[1],b[2],d[0],d[1],d[2],c[0],c[1],c[2]);var f=this.computeNormal(b[0],b[1],b[2],c[0],c[1],c[2],d[0],d[1],d[2]);a.normals.push(f[0],f[1],f[2],f[0],f[1],f[2],f[0],f[1],f[2]),a.colors.push(e.r,e.g,e.b,e.r,e.g,e.b,e.r,e.g,e.b)},computeNormal:function(a,b,c,d,e,f,g,h,i){var j=a-d,k=b-e,l=c-f,m=d-g,n=e-h,o=f-i,q=k*o-l*n,r=l*m-j*o,s=j*n-k*m;return p(q,r,s)}},J={};!function(){function a(a){return b(),a?void(h||(h=setTimeout(function(){h=null,c()},a))):void c()}function b(){var a=k||Math.round(u.zoom),b=u.bounds,c=A<<a,d=g(b.n,b.w,c),e=g(b.s,b.e,c);J.bounds={zoom:a,minX:d.x/A<<0,minY:d.y/A<<0,maxX:Math.ceil(e.x/A),maxY:Math.ceil(e.y/A)}}function c(){var a,b,c,f,g=J.bounds,h=g.zoom,i=[],k=[g.minX+(g.maxX-g.minX-1)/2,g.maxY];for(b=g.minY;b<=g.maxY;b++)for(a=g.minX;a<=g.maxX;a++)c=[a,b,h].join(","),j[c]||(j[c]=new K(a,b,h),i.push({tile:j[c],dist:l([a,b],k)}));if(f=i.length){i.sort(function(a,b){return a.dist-b.dist});for(var m,n=0;f>n;n++)m=i[n].tile,m.load(e(m.tileX,m.tileY,m.zoom));d()}}function d(){for(var a in j)j[a].isVisible(1)||(N.remove(j[a]),delete j[a])}function e(a,b,c){var d="abcd"[(a+b)%4];return i(f,{s:d,x:a,y:b,z:c})}var f,h,j={},k=16;J.setSource=function(b,c){(void 0===b||b===!1)&&(b=C.replace("{k}",c)),b&&(f=b,v.on("change",function(){a(100)}),v.on("resize",function(){a()}),a())},J.destroy=function(){clearTimeout(h);for(var a in j)j[a].destroy();j=null}}();var K=function(a,b,c){this.tileX=a,this.tileY=b,this.x=a*A,this.y=b*A,this.zoom=c,N.add(this)};!function(){function a(a,b){var c=x.createBuffer();return c.itemSize=a,c.numItems=b.length/a,x.bindBuffer(x.ARRAY_BUFFER,c),x.bufferData(x.ARRAY_BUFFER,b,x.STATIC_DRAW),c}K.prototype.load=function(a){this.request=G.loadJSON(a,this.onLoad.bind(this))},K.prototype.onLoad=function(b){this.request=null;var c=P.read(this.x,this.y,this.zoom,b);this.vertexBuffer=a(3,new Float32Array(c.vertices)),this.normalBuffer=a(3,new Float32Array(c.normals)),this.colorBuffer=a(3,new Uint8Array(c.colors)),c=null,b=null,this.isReady=!0},K.prototype.isVisible=function(a){a=a||0;var b=J.bounds,c=this.tileX,d=this.tileY;return this.zoom===b.zoom&&c>=b.minX-a&&c<=b.maxX+a&&d>=b.minY-a&&d<=b.maxY+a},K.prototype.render=function(a,b){if(this.isReady&&this.isVisible()){var c=1/Math.pow(2,this.zoom-u.zoom),d=u.size,e=u.origin,f=R.create();f=R.scale(f,c,c,.65*c),f=R.translate(f,this.x*c-e.x,this.y*c-e.y,0),f=R.rotateZ(f,u.rotation),f=R.rotateX(f,u.tilt),f=R.translate(f,d.width/2,d.height/2,0),f=R.multiply(f,b),x.uniformMatrix4fv(a.uniforms.uMatrix,!1,new Float32Array(f)),x.bindBuffer(x.ARRAY_BUFFER,this.vertexBuffer),x.vertexAttribPointer(a.attributes.aPosition,this.vertexBuffer.itemSize,x.FLOAT,!1,0,0),x.bindBuffer(x.ARRAY_BUFFER,this.normalBuffer),x.vertexAttribPointer(a.attributes.aNormal,this.normalBuffer.itemSize,x.FLOAT,!1,0,0),x.bindBuffer(x.ARRAY_BUFFER,this.colorBuffer),x.vertexAttribPointer(a.attributes.aColor,this.colorBuffer.itemSize,x.UNSIGNED_BYTE,!0,0,0),x.drawArrays(x.TRIANGLES,0,this.vertexBuffer.numItems)}},K.prototype.destroy=function(){x.deleteBuffer(this.vertexBuffer),x.deleteBuffer(this.normalBuffer),x.deleteBuffer(this.colorBuffer),this.request&&this.request.abort()}}();var L={};!function(){function a(a){return b(),a?void(h||(h=setTimeout(function(){h=null,c()},a))):void c()}function b(){var a=Math.round(u.zoom),b=u.bounds,c=A<<a,d=g(b.n,b.w,c),e=g(b.s,b.e,c);L.bounds={zoom:a,minX:d.x/A<<0,minY:d.y/A<<0,maxX:Math.ceil(e.x/A),maxY:Math.ceil(e.y/A)}}function c(){var a,b,c,f,g=L.bounds,h=g.zoom,i=[],m=[g.minX+(g.maxX-g.minX-1)/2,g.maxY];for(b=g.minY;b<g.maxY;b++)for(a=g.minX;a<g.maxX;a++)c=[a,b,h].join(","),j[c]||(j[c]=new k(a,b,h),i.push({tile:j[c],dist:l([a,b],m)}));if(f=i.length){i.sort(function(a,b){return a.dist-b.dist});for(var n,o=0;f>o;o++)n=i[o].tile,n.load(d(n.tileX,n.tileY,n.zoom));e()}}function d(a,b,c){var d="abcd"[(a+b)%4];return i(f,{s:d,x:a,y:b,z:c})}function e(){for(var a in j)j[a].isVisible(1)||(j[a].destroy(),delete j[a])}var f,h,j={};L.setSource=function(b){b&&(f=b,v.on("change",function(){a(100)}),v.on("resize",function(){a()}),a())},L.getTiles=function(){return j},L.destroy=function(){clearTimeout(h);for(var a in j)j[a].destroy();j=null}}();var M={};M.createTexture=function(a){var b=x.createTexture();return x.bindTexture(x.TEXTURE_2D,b),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,!0),x.texImage2D(x.TEXTURE_2D,0,x.RGBA,x.RGBA,x.UNSIGNED_BYTE,a),x.texParameteri(x.TEXTURE_2D,x.TEXTURE_MAG_FILTER,x.LINEAR),x.texParameteri(x.TEXTURE_2D,x.TEXTURE_MIN_FILTER,x.LINEAR_MIPMAP_LINEAR),x.texParameteri(x.TEXTURE_2D,x.TEXTURE_WRAP_S,x.CLAMP_TO_EDGE),x.generateMipmap(x.TEXTURE_2D),b},M.createBuffer=function(a,b){var c=x.createBuffer();return c.itemSize=a,c.numItems=b.length/a,x.bindBuffer(x.ARRAY_BUFFER,c),x.bufferData(x.ARRAY_BUFFER,b,x.STATIC_DRAW),b=null,c},k.prototype={load:function(a){var b=this._image=new Image;b.crossOrigin="*",b.onload=this.onLoad.bind(this),b.src=a},onLoad:function(){this._texture=M.createTexture(this._image),this.isReady=!0},render:function(a,b){if(this.isReady&&this.isVisible()){var c=1/Math.pow(2,this.zoom-u.zoom),d=A*c,e=u.size,f=u.origin,g=R.create();g=R.scale(g,1.005*c,1.005*c,1),g=R.translate(g,this.tileX*d-f.x,this.tileY*d-f.y,0),g=R.rotateZ(g,u.rotation),g=R.rotateX(g,u.tilt),g=R.translate(g,e.width/2,e.height/2,0),g=R.multiply(g,b),x.uniformMatrix4fv(a.uniforms.uMatrix,!1,new Float32Array(g)),x.bindBuffer(x.ARRAY_BUFFER,this._vertexBuffer),x.vertexAttribPointer(a.attributes.aPosition,this._vertexBuffer.itemSize,x.FLOAT,!1,0,0),x.bindBuffer(x.ARRAY_BUFFER,this._texCoordBuffer),x.vertexAttribPointer(a.attributes.aTexCoord,this._texCoordBuffer.itemSize,x.FLOAT,!1,0,0),x.activeTexture(x.TEXTURE0),x.bindTexture(x.TEXTURE_2D,this._texture),x.uniform1i(a.uniforms.uTileImage,0),x.drawArrays(x.TRIANGLE_STRIP,0,this._vertexBuffer.numItems)}},isVisible:function(a){a=a||0;var b=L.bounds,c=this.tileX,d=this.tileY;return this.zoom===b.zoom&&c>=b.minX-a&&c<=b.maxX+a&&d>=b.minY-a&&d<=b.maxY+a},getMatrix:function(){},destroy:function(){x.deleteBuffer(this._vertexBuffer),x.deleteBuffer(this._texCoordBuffer),this._image.src="",this._texture&&x.deleteTexture(this._texture)}};var N={items:[],add:function(a){this.items.push(a)},remove:function(a){for(var b=this.items,c=0,d=b.length;d>c;c++)if(b[c]===a)return b[c].destroy(),void b.splice(c,1)}},O=function(a){this.zoom=16,"object"==typeof a&&this.onLoad(a),N.add(this)};!function(){function a(a,b){var c=x.createBuffer();return c.itemSize=a,c.numItems=b.length/a,x.bindBuffer(x.ARRAY_BUFFER,c),x.bufferData(x.ARRAY_BUFFER,b,x.STATIC_DRAW),c}O.prototype.load=function(a){this.request=G.loadJSON(a,this.onLoad.bind(this))},O.prototype.onLoad=function(b){this.request=null;var c=A*Math.pow(2,this.zoom),d=g(b.offset.latitude,b.offset.longitude,c);this.x=d.x,this.y=d.y;var e=Q.read(this.x,this.y,this.zoom,b);this.vertexBuffer=a(3,new Float32Array(e.vertices)),this.normalBuffer=a(3,new Float32Array(e.normals)),this.colorBuffer=a(3,new Uint8Array(e.colors)),e=null,b=null,this.isReady=!0},O.prototype.render=function(a,b){if(this.isReady&&this.isVisible()){var c=1/Math.pow(2,this.zoom-u.zoom),d=u.size,e=u.origin,f=R.create();f=R.scale(f,c,c,.65*c),f=R.translate(f,this.x*c-e.x,this.y*c-e.y,0),f=R.rotateZ(f,u.rotation),f=R.rotateX(f,u.tilt),f=R.translate(f,d.width/2,d.height/2,0),f=R.multiply(f,b),x.uniformMatrix4fv(a.uniforms.uMatrix,!1,new Float32Array(f)),x.bindBuffer(x.ARRAY_BUFFER,this.vertexBuffer),x.vertexAttribPointer(a.attributes.aPosition,this.vertexBuffer.itemSize,x.FLOAT,!1,0,0),x.bindBuffer(x.ARRAY_BUFFER,this.normalBuffer),x.vertexAttribPointer(a.attributes.aNormal,this.normalBuffer.itemSize,x.FLOAT,!1,0,0),x.bindBuffer(x.ARRAY_BUFFER,this.colorBuffer),x.vertexAttribPointer(a.attributes.aColor,this.colorBuffer.itemSize,x.UNSIGNED_BYTE,!0,0,0),x.drawArrays(x.TRIANGLES,0,this.vertexBuffer.numItems)}},O.prototype.isVisible=function(a,b){return b=b||0,!0},O.prototype.destroy=function(){x.deleteBuffer(this.vertexBuffer),x.deleteBuffer(this.normalBuffer),x.deleteBuffer(this.colorBuffer),this.request&&this.request.abort()}}();var P={};!function(){function a(a){return a=a.toLowerCase(),"#"===a[0]?a:f[h[a]||a]||null}function b(b){var c,d={};b=b||{},d.height=b.height||(b.levels?b.levels*e:D),d.minHeight=b.minHeight||(b.minLevel?b.minLevel*e:0);var f=b.material?a(b.material):b.wallColor||b.color;d.wallColor=(c=s.parse(f))?c.toRGBA():E;var g=b.roofMaterial?a(b.roofMaterial):b.roofColor;switch(d.roofColor=(c=s.parse(g))?c.toRGBA():E,b.shape){case"cylinder":case"cone":case"dome":case"sphere":d.shape=b.shape,d.isRotational=!0;break;case"pyramid":d.shape=b.shape}switch(b.roofShape){case"cone":case"dome":d.roofShape=b.roofShape,d.isRotational=!0;break;case"pyramid":d.roofShape=b.roofShape}return d.roofShape&&b.roofHeight?(d.roofHeight=b.roofHeight,d.height=Math.max(0,d.height-d.roofHeight)):d.roofHeight=0,d.height+d.roofHeight<=d.minHeight?void 0:(b.relationId&&(d.relationId=b.relationId),d)}function c(a){var b,d,e,f=[];switch(a.type){case"GeometryCollection":for(d=0,e=a.geometries.length;e>d;d++)(b=c(a.geometries[d]))&&f.push.apply(f,b);return f;case"MultiPolygon":for(d=0,e=a.coordinates.length;e>d;d++)(b=c({type:"Polygon",coordinates:a.coordinates[d]}))&&f.push.apply(f,b);return f;case"Polygon":return[a.coordinates];default:return[]}}function d(a,b,c,d){for(var e,f,h,i,j=A*Math.pow(2,c),k=[],l=0,m=d.length;m>l;l++)for(i=d[l],k[l]=[],e=0,f=i.length-1;f>e;e++)h=g(i[e][1],i[e][0],j),k[l][e]=[h.x-a,h.y-b];return k}var e=3,f={brick:"#cc7755",bronze:"#ffeecc",canvas:"#fff8f0",concrete:"#999999",copper:"#a0e0d0",glass:"#e8f8f8",gold:"#ffcc00",plants:"#009933",metal:"#aaaaaa",panel:"#fff8f0",plaster:"#999999",roof_tiles:"#f08060",silver:"#cccccc",slate:"#666666",stone:"#996666",tar_paper:"#333333",wood:"#deb887"},h={asphalt:"tar_paper",bitumen:"tar_paper",block:"stone",bricks:"brick",glas:"glass",glassfront:"glass",grass:"plants",masonry:"stone",granite:"stone",panels:"panel",paving_stones:"stone",plastered:"plaster",rooftiles:"roof_tiles",roofingfelt:"tar_paper",sandstone:"stone",sheet:"canvas",sheets:"canvas",shingle:"tar_paper",shingles:"tar_paper",slates:"slate",steel:"metal",tar:"tar_paper",tent:"canvas",thatch:"plants",tile:"roof_tiles",tiles:"roof_tiles"};P.read=function(a,e,f,g){if(!g||"FeatureCollection"!==g.type)return[];for(var h,i,j,k,l,o,p,q,r,s=g.features,t={vertices:[],normals:[],colors:[]},u=0,v=s.length;v>u;u++)if(h=s[u],l=b(h.properties))for(i=c(h.geometry),j=0,k=i.length;k>j;j++){switch(o=d(a,e,f,i[j]),"cone"!==l.roofShape&&"dome"!==l.roofShape||l.shape||!m(o)||(l.shape="cylinder",l.isRotational=!0),p=n(o),r=[p.minX+(p.maxX-p.minX)/2,p.minY+(p.maxY-p.minY)/2],l.isRotational&&(q=(p.maxX-p.minX)/2),l.shape){case"cylinder":I.cylinder(t,r,q,q,l.minHeight,l.height,l.wallColor),I.circle(t,r,q,l.height,l.roofColor);break;case"cone":I.cylinder(t,r,q,0,l.minHeight,l.height,l.wallColor);break;case"sphere":I.cylinder(t,r,q,q/2,l.minHeight,l.height,l.wallColor),I.circle(t,r,q/2,l.height,l.roofColor);break;case"pyramid":I.pyramid(t,o,r,l.minHeight,l.height,l.wallColor);break;default:I.extrusion(t,o,l.minHeight,l.height,l.wallColor),I.polygon(t,o,l.height,l.roofColor)}switch(l.roofShape){case"cone":I.cylinder(t,r,q,0,l.height,l.height+l.roofHeight,l.roofColor);break;case"dome":I.cylinder(t,r,q,q/2,l.height,l.height+l.roofHeight,l.roofColor),I.circle(t,r,q/2,l.height+l.roofHeight,l.roofColor);break;case"pyramid":I.pyramid(t,o,r,l.height,l.height+l.roofHeight,l.roofColor)}}return t}}();var Q={};!function(){function a(a,b,c,d){for(var e,f=A*Math.pow(2,c),h=[],i=0,j=d.length-2;j>i;i+=3)e=g(d[i+1],d[i],f),h[i/3]=[e.x-a,e.y-b,d[i+2]];return h}Q.read=function(b,c,d,e){for(var f,g,h,i,j,k=e.meshes,l={vertices:[],normals:[],colors:[]},m=0,n=k.length;n>m;m++){for(f=k[m],g={r:f.wallColor[0],g:f.wallColor[1],b:f.wallColor[2]},h=0,i=f.walls.length;i>h;h++)j=a(b,c,d,f.walls[h]),I.polygon3d(l,[j],g);for(g={r:f.roofColor[0],g:f.roofColor[1],b:f.roofColor[2]},h=0,i=f.roofs.length;i>h;h++)j=a(b,c,d,f.roofs[h]),I.polygon3d(l,[j],g)}return l}}();var R={create:function(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]
},multiply:function(a,b){var c=a[0],d=a[1],e=a[2],f=a[3],g=a[4],h=a[5],i=a[6],j=a[7],k=a[8],l=a[9],m=a[10],n=a[11],o=a[12],p=a[13],q=a[14],r=a[15],s=b[0],t=b[1],u=b[2],v=b[3],w=b[4],x=b[5],y=b[6],z=b[7],A=b[8],B=b[9],C=b[10],D=b[11],E=b[12],F=b[13],G=b[14],H=b[15];return[c*s+d*w+e*A+f*E,c*t+d*x+e*B+f*F,c*u+d*y+e*C+f*G,c*v+d*z+e*D+f*H,g*s+h*w+i*A+j*E,g*t+h*x+i*B+j*F,g*u+h*y+i*C+j*G,g*v+h*z+i*D+j*H,k*s+l*w+m*A+n*E,k*t+l*x+m*B+n*F,k*u+l*y+m*C+n*G,k*v+l*z+m*D+n*H,o*s+p*w+q*A+r*E,o*t+p*x+q*B+r*F,o*u+p*y+q*C+r*G,o*v+p*z+q*D+r*H]},perspective:function(a,b,c,d){return[2/b,0,0,0,0,-2/c,0,0,0,40/d,-2/d,a*(-2/d),-1,1,0,1]},ortho:function(a,b,c){return this.perspective(1,a,b,c)},translate:function(a,b,c,d){return this.multiply(a,[1,0,0,0,0,1,0,0,0,0,1,0,b,c,d,1])},rotateX:function(a,b){var c=o(b),d=Math.cos(c),e=Math.sin(c);return this.multiply(a,[1,0,0,0,0,d,e,0,0,-e,d,0,0,0,0,1])},rotateY:function(a,b){var c=o(b),d=Math.cos(c),e=Math.sin(c);return this.multiply(a,[d,0,-e,0,0,1,0,0,e,0,d,0,0,0,0,1])},rotateZ:function(a,b){var c=o(b),d=Math.cos(c),e=Math.sin(c);return this.multiply(a,[d,-e,0,0,e,d,0,0,0,0,1,0,0,0,0,1])},scale:function(a,b,c,d){return this.multiply(a,[b,0,0,0,0,c,0,0,0,0,d,0,0,0,0,1])},invert:function(a){var b=a[0],c=a[1],d=a[2],e=a[3],f=a[4],g=a[5],h=a[6],i=a[7],j=a[8],k=a[9],l=a[10],m=a[11],n=a[12],o=a[13],p=a[14],q=a[15],r=b*g-c*f,s=b*h-d*f,t=b*i-e*f,u=c*h-d*g,v=c*i-e*g,w=d*i-e*h,x=j*o-k*n,y=j*p-l*n,z=j*q-m*n,A=k*p-l*o,B=k*q-m*o,C=l*q-m*p,D=r*C-s*B+t*A+u*z-v*y+w*x;return D?(D=1/D,[(g*C-h*B+i*A)*D,(d*B-c*C-e*A)*D,(o*w-p*v+q*u)*D,(l*v-k*w-m*u)*D,(h*z-f*C-i*y)*D,(b*C-d*z+e*y)*D,(p*t-n*w-q*s)*D,(j*w-l*t+m*s)*D,(f*B-g*z+i*x)*D,(c*z-b*B-e*x)*D,(n*v-o*t+q*r)*D,(k*t-j*v-m*r)*D,(g*y-f*A-h*x)*D,(b*A-c*y+d*x)*D,(o*s-n*u-p*r)*D,(j*u-k*s+l*r)*D]):null},invert3:function(a){var b=a[0],c=a[1],d=a[2],e=a[4],f=a[5],g=a[6],h=a[8],i=a[9],j=a[10],k=j*f-g*i,l=-j*e+g*h,m=i*e-f*h,n=b*k+c*l+d*m;return n?(n=1/n,[k*n,(-j*c+d*i)*n,(g*c-d*f)*n,l*n,(j*b-d*h)*n,(-g*b+d*e)*n,m*n,(-i*b+c*h)*n,(f*b-c*e)*n]):null},transpose:function(a){return[a[0],a[3],a[6],a[1],a[4],a[7],a[2],a[5],a[8]]}},S={};!function(){function a(){var a=u.size;x.viewport(0,0,a.width,a.height),c=R.perspective(20,a.width,a.height,4e4)}var b,c;S.initShader=function(){b=new U("basemap"),v.on("resize",a),a()},S.render=function(){var a=b.use(),d=L.getTiles();for(var e in d)d[e].render(a,c);a.end()}}();var T={};!function(){function a(){var a=u.size;x.viewport(0,0,a.width,a.height),c=R.perspective(20,a.width,a.height,4e4)}var b,c;T.initShader=function(){b=new U("buildings"),v.on("resize",a),a()},T.render=function(){if(!(u.zoom<z)){x.disable(x.CULL_FACE),x.enable(x.DEPTH_TEST),x.cullFace(x.BACK);var a=b.use();x.uniform3fv(a.uniforms.uLightColor,[.5,.5,.5]),x.uniform3fv(a.uniforms.uLightDirection,p(1,1,1)),x.uniform1f(a.uniforms.uAlpha,f(u.zoom,F.zoomAlpha,"zoom","alpha"));var d=R.invert3(R.create());x.uniformMatrix3fv(a.uniforms.uNormalTransform,!1,new Float32Array(R.transpose(d)));for(var e=N.items,g=0,h=e.length;h>g;g++)e[g].render(a,c);a.end()}}}();var U=function(a){var b=H[a];if(this.id=x.createProgram(),this.name=a,!b.src)throw new Error('missing source for shader "'+a+'"');if(this._attach(x.VERTEX_SHADER,b.src.vertex),this._attach(x.FRAGMENT_SHADER,b.src.fragment),x.linkProgram(this.id),!x.getProgramParameter(this.id,x.LINK_STATUS))throw new Error(x.getProgramParameter(this.id,x.VALIDATE_STATUS)+"\n"+x.getError());this.attributeNames=b.attributes,this.uniformNames=b.uniforms};U.prototype={_attach:function(a,b){var c=x.createShader(a);if(x.shaderSource(c,b),x.compileShader(c),!x.getShaderParameter(c,x.COMPILE_STATUS))throw new Error(x.getShaderInfoLog(c));x.attachShader(this.id,c)},use:function(){x.useProgram(this.id);var a,b,c;if(this.attributeNames)for(this.attributes={},a=0;a<this.attributeNames.length;a++)b=this.attributeNames[a],c=x.getAttribLocation(this.id,b),0>c?console.error('could not locate attribute "'+b+'" in shader "'+this.name+'"'):(x.enableVertexAttribArray(c),this.attributes[b]=c);if(this.uniformNames)for(this.uniforms={},a=0;a<this.uniformNames.length;a++)b=this.uniformNames[a],c=x.getUniformLocation(this.id,b),0>c?console.error('could not locate uniform "'+b+'" in shader "'+this.name+'"'):this.uniforms[b]=c;return this},end:function(){if(x.useProgram(null),this.attributes)for(var a in this.attributes)x.disableVertexAttribArray(this.attributes[a]);this.attributes=null,this.uniforms=null}};var V=function(a,b,c){if(c=c||{},this.width=a,this.height=b,this.texture=new W(a,b,c.texture),this.id=x.createFramebuffer(),x.bindFramebuffer(x.FRAMEBUFFER,this.id),x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,this.texture.id,0),this.renderbuffer=x.createRenderbuffer(),x.bindRenderbuffer(x.RENDERBUFFER,this.renderbuffer),this.renderbuffer.width=this.width,this.renderbuffer.height=this.height,x.renderbufferStorage(x.RENDERBUFFER,x.DEPTH_COMPONENT16,this.width,this.height),x.framebufferRenderbuffer(x.FRAMEBUFFER,x.DEPTH_ATTACHMENT,x.RENDERBUFFER,this.renderbuffer),x.checkFramebufferStatus(x.FRAMEBUFFER)!==x.FRAMEBUFFER_COMPLETE)throw new Error("This combination of framebuffer attachments does not work");x.bindRenderbuffer(x.RENDERBUFFER,null),x.bindFramebuffer(x.FRAMEBUFFER,null),this.texture.end()};V.prototype={use:function(){return this.viewport=x.getParameter(x.VIEWPORT),x.bindFramebuffer(x.FRAMEBUFFER,this.id),x.bindRenderbuffer(x.RENDERBUFFER,this.renderbuffer),x.viewport(0,0,this.width,this.height),this},end:function(){x.bindFramebuffer(x.FRAMEBUFFER,null),x.bindRenderbuffer(x.RENDERBUFFER,null),x.viewport(this.viewport[0],this.viewport[1],this.viewport[2],this.viewport[3])}};var W=function(a,b,c){c=c||{},this.id=x.createTexture(),this.width=a,this.height=b,this.format=c.format||x.RGBA,this.type=c.type||x.UNSIGNED_BYTE;var d=c.filter||c.magFilter||x.LINEAR,e=c.filter||c.minFilter||x.LINEAR;x.bindTexture(x.TEXTURE_2D,this.id),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,1),x.texParameteri(x.TEXTURE_2D,x.TEXTURE_MAG_FILTER,d),x.texParameteri(x.TEXTURE_2D,x.TEXTURE_MIN_FILTER,e),x.texParameteri(x.TEXTURE_2D,x.TEXTURE_WRAP_S,c.wrap||c.wrapS||x.CLAMP_TO_EDGE),x.texParameteri(x.TEXTURE_2D,x.TEXTURE_WRAP_T,c.wrap||c.wrapT||x.CLAMP_TO_EDGE),x.texImage2D(x.TEXTURE_2D,0,this.format,a,b,0,this.format,this.type,null)};W.prototype={use:function(a){return x.activeTexture(x.TEXTURE0+(a||0)),x.bindTexture(x.TEXTURE_2D,this.id),this},end:function(a){x.activeTexture(x.TEXTURE0+(a||0)),x.bindTexture(x.TEXTURE_2D,null)}}}(this);