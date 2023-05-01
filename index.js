// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,e=n.toString,i=n.__defineGetter__,o=n.__defineSetter__,u=n.__lookupGetter__,a=n.__lookupSetter__,f=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,f){var c,l,p,y;if("object"!=typeof t||null===t||"[object Array]"===e.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(u.call(t,r)||a.call(t,r)?(c=t.__proto__,t.__proto__=n,delete t[r],t[r]=f.value,t.__proto__=c):t[r]=f.value),p="get"in f,y="set"in f,l&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,r,f.get),y&&o&&o.call(t,r,f.set),t};function c(t,r,n){f(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}function l(t,r,n){f(t,r,{configurable:!1,enumerable:!1,get:n})}function p(t){return"number"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return y&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString,b=Object.prototype.hasOwnProperty,h="function"==typeof Symbol?Symbol.toStringTag:"",N=s()?function(t){var r,n,e,i,o;if(null==t)return v.call(t);n=t[h],o=h,r=null!=(i=t)&&b.call(i,o);try{t[h]=void 0}catch(r){return v.call(t)}return e=v.call(t),r?t[h]=n:delete t[h],e}:function(t){return v.call(t)},m=Number,d=m.prototype.toString,w=s();function g(t){return"object"==typeof t&&(t instanceof m||(w?function(t){try{return d.call(t),!0}catch(t){return!1}}(t):"[object Number]"===N(t)))}function A(t){return p(t)||g(t)}function _(t){return p(t)&&t>0}function U(t){return g(t)&&t.valueOf()>0}function j(t){return _(t)||U(t)}function O(t){return t!=t}c(A,"isPrimitive",p),c(A,"isObject",g),c(j,"isPrimitive",_),c(j,"isObject",U);var E=Math.floor,I=Math.ceil;function S(t){return t<0?I(t):E(t)}var T=m.NEGATIVE_INFINITY,F=Number.POSITIVE_INFINITY,P=1023;function H(t){return t===F||t===T}var V,G=2147483647,M="function"==typeof Uint32Array,k="function"==typeof Uint32Array?Uint32Array:null,x="function"==typeof Uint32Array?Uint32Array:void 0;V=function(){var t,r,n;if("function"!=typeof k)return!1;try{r=new k(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(M&&n instanceof Uint32Array||"[object Uint32Array]"===N(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?x:function(){throw new Error("not implemented")};var L,W=V,q="function"==typeof Float64Array,C="function"==typeof Float64Array?Float64Array:null,Y="function"==typeof Float64Array?Float64Array:void 0;L=function(){var t,r,n;if("function"!=typeof C)return!1;try{r=new C([1,3.14,-3.14,NaN]),n=r,t=(q&&n instanceof Float64Array||"[object Float64Array]"===N(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?Y:function(){throw new Error("not implemented")};var R,z=L,B="function"==typeof Uint8Array,D="function"==typeof Uint8Array?Uint8Array:null,J="function"==typeof Uint8Array?Uint8Array:void 0;R=function(){var t,r,n;if("function"!=typeof D)return!1;try{r=new D(r=[1,3.14,-3.14,256,257]),n=r,t=(B&&n instanceof Uint8Array||"[object Uint8Array]"===N(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?J:function(){throw new Error("not implemented")};var K,Q=R,X="function"==typeof Uint16Array,Z="function"==typeof Uint16Array?Uint16Array:null,$="function"==typeof Uint16Array?Uint16Array:void 0;K=function(){var t,r,n;if("function"!=typeof Z)return!1;try{r=new Z(r=[1,3.14,-3.14,65536,65537]),n=r,t=(X&&n instanceof Uint16Array||"[object Uint16Array]"===N(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?$:function(){throw new Error("not implemented")};var tt,rt={uint16:K,uint8:Q};(tt=new rt.uint16(1))[0]=4660;var nt,et,it=52===new rt.uint8(tt.buffer)[0];!0===it?(nt=1,et=0):(nt=0,et=1);var ot={HIGH:nt,LOW:et},ut=new z(1),at=new W(ut.buffer),ft=ot.HIGH,ct=ot.LOW;function lt(t,r,n,e){return ut[0]=t,r[e]=at[ft],r[e+n]=at[ct],r}function pt(t){return lt(t,[0,0],1,0)}c(pt,"assign",lt);var yt,st,vt=!0===it?1:0,bt=new z(1),ht=new W(bt.buffer);function Nt(t){return bt[0]=t,ht[vt]}!0===it?(yt=1,st=0):(yt=0,st=1);var mt={HIGH:yt,LOW:st},dt=new z(1),wt=new W(dt.buffer),gt=mt.HIGH,At=mt.LOW;function _t(t,r){return wt[gt]=t,wt[At]=r,dt[0]}var Ut=[0,0];function jt(t,r){var n,e;return pt.assign(t,Ut,1,0),n=Ut[0],n&=G,e=Nt(r),_t(n|=e&=2147483648,Ut[1])}function Ot(t){return Math.abs(t)}function Et(t,r,n,e){return O(t)||H(t)?(r[e]=t,r[e+n]=0,r):0!==t&&Ot(t)<22250738585072014e-324?(r[e]=4503599627370496*t,r[e+n]=-52,r):(r[e]=t,r[e+n]=0,r)}c((function(t){return Et(t,[0,0],1,0)}),"assign",Et);var It=[0,0],St=[0,0];function Tt(t,r){var n,e;return 0===r||0===t||O(t)||H(t)?t:(Et(t,It,1,0),r+=It[1],r+=function(t){var r=Nt(t);return(r=(2146435072&r)>>>20)-P|0}(t=It[0]),r<-1074?jt(0,t):r>1023?t<0?T:F:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,pt.assign(t,St,1,0),n=St[0],n&=2148532223,e*_t(n|=r+P<<20,St[1])))}var Ft=1.4426950408889634,Pt=1/(1<<28);function Ht(t){var r;return O(t)||t===F?t:t===T?0:t>709.782712893384?F:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<Pt?1+t:function(t,r,n){var e,i,o,u;return Tt(1-(r-(e=t-r)*(o=e-(i=e*e)*(0===(u=i)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-o)-t),n)}(t-.6931471803691238*(r=S(t<0?Ft*t-.5:Ft*t+.5)),1.9082149292705877e-10*r,r)}var Vt=!0===it?1:0,Gt=new z(1),Mt=new W(Gt.buffer);function kt(t,r){return Gt[0]=t,Mt[Vt]=r>>>0,Gt[0]}var xt=.6931471803691238,Lt=1.9082149292705877e-10,Wt=1048575;function qt(t){var r,n,e,i,o,u,a,f,c,l,p,y;return 0===t?T:O(t)||t<0?NaN:(o=0,(n=Nt(t))<1048576&&(o-=54,n=Nt(t*=0x40000000000000)),n>=2146435072?t+t:(o+=(n>>20)-P|0,o+=(f=614244+(n&=Wt)&1048576|0)>>20|0,a=(t=kt(t,n|1072693248^f))-1,(Wt&2+n)<3?0===a?0===o?0:o*xt+o*Lt:(u=a*a*(.5-.3333333333333333*a),0===o?a-u:o*xt-(u-o*Lt-a)):(f=n-398458|0,c=440401-n|0,i=(p=(y=(l=a/(2+a))*l)*y)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(p),e=y*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(p),u=e+i,(f|=c)>0?(r=.5*a*a,0===o?a-(r-l*(r+u)):o*xt-(r-(l*(r+u)+o*Lt)-a)):0===o?a-l*(a-u):o*xt-(l*(a-u)-o*Lt-a))))}function Ct(t){return E(t)===t}function Yt(t){return Ct(t/2)}function Rt(t){return Yt(t>0?t-1:t+1)}var zt=Math.sqrt,Bt=!0===it?0:1,Dt=new z(1),Jt=new W(Dt.buffer);function Kt(t,r){return Dt[0]=t,Jt[Bt]=r>>>0,Dt[0]}function Qt(t){return 0|t}var Xt=1048576,Zt=[1,1.5],$t=[0,.5849624872207642],tr=[0,1.350039202129749e-8],rr=1048575,nr=1048576,er=1083179008,ir=1e300,or=1e-300,ur=[0,0],ar=[0,0];function fr(t,r){var n,e,i,o,u,a,f,c,l,p,y,s,v,b;if(O(t)||O(r))return NaN;if(pt.assign(r,ur,1,0),u=ur[0],0===ur[1]){if(0===r)return 1;if(1===r)return t;if(-1===r)return 1/t;if(.5===r)return zt(t);if(-.5===r)return 1/zt(t);if(2===r)return t*t;if(3===r)return t*t*t;if(4===r)return(t*=t)*t;if(H(r))return function(t,r){return-1===t?(t-t)/(t-t):1===t?1:Ot(t)<1==(r===F)?0:F}(t,r)}if(pt.assign(t,ur,1,0),o=ur[0],0===ur[1]){if(0===o)return function(t,r){return r===T?F:r===F?0:r>0?Rt(r)?t:0:Rt(r)?jt(F,t):F}(t,r);if(1===t)return 1;if(-1===t&&Rt(r))return-1;if(H(t))return t===T?fr(-0,-r):r<0?0:F}if(t<0&&!1===Ct(r))return(t-t)/(t-t);if(i=Ot(t),n=o&G|0,e=u&G|0,f=u>>>31|0,a=(a=o>>>31|0)&&Rt(r)?-1:1,e>1105199104){if(e>1139802112)return function(t,r){return(Nt(t)&G)<=1072693247?r<0?1/0:0:r>0?1/0:0}(t,r);if(n<1072693247)return 1===f?a*ir*ir:a*or*or;if(n>1072693248)return 0===f?a*ir*ir:a*or*or;y=function(t,r){var n,e,i,o,u,a;return n=(u=1.9259629911266175e-8*(i=r-1)-i*i*(0===(a=i)?.5:.5+a*(.25*a-.3333333333333333))*1.4426950408889634)-((e=Kt(e=(o=1.4426950216293335*i)+u,0))-o),t[0]=e,t[1]=n,t}(ar,i)}else y=function(t,r,n){var e,i,o,u,a,f,c,l,p,y,s,v,b,h,N,m,d,w,g,A,_;return w=0,n<Xt&&(w-=53,n=Nt(r*=9007199254740992)),w+=(n>>20)-P|0,n=1072693248|(g=1048575&n|0),g<=235662?A=0:g<767610?A=1:(A=0,w+=1,n-=Xt),u=Kt(i=(m=(r=kt(r,n))-(c=Zt[A]))*(d=1/(r+c)),0),e=524288+(n>>1|536870912),f=kt(0,e+=A<<18),N=(o=i*i)*o*(0===(_=o)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=Kt(f=3+(o=u*u)+(N+=(a=d*(m-u*f-u*(r-(f-c))))*(u+i)),0),b=(s=-7.028461650952758e-9*(p=Kt(p=(m=u*f)+(d=a*f+(N-(f-3-o))*i),0))+.9617966939259756*(d-(p-m))+tr[A])-((v=Kt(v=(y=.9617967009544373*p)+s+(l=$t[A])+(h=w),0))-h-l-y),t[0]=v,t[1]=b,t}(ar,i,n);if(s=(p=(r-(c=Kt(r,0)))*y[0]+r*y[1])+(l=c*y[0]),pt.assign(s,ur,1,0),v=Qt(ur[0]),b=Qt(ur[1]),v>=er){if(0!=(v-er|b))return a*ir*ir;if(p+8008566259537294e-32>s-l)return a*ir*ir}else if((v&G)>=1083231232){if(0!=(v-3230714880|b))return a*or*or;if(p<=s-l)return a*or*or}return s=function(t,r,n){var e,i,o,u,a,f,c,l,p,y;return p=((l=t&G|0)>>20)-P|0,c=0,l>1071644672&&(i=kt(0,((c=t+(nr>>p+1)>>>0)&~(rr>>(p=((c&G)>>20)-P|0)))>>>0),c=(c&rr|nr)>>20-p>>>0,t<0&&(c=-c),r-=i),t=Qt(t=Nt(f=1-((f=(o=.6931471824645996*(i=Kt(i=n+r,0)))+(u=.6931471805599453*(n-(i-r))+-1.904654299957768e-9*i))*(e=f-(i=f*f)*(0===(y=i)?.16666666666666602:.16666666666666602+y*(y*(6613756321437934e-20+y*(4.1381367970572385e-8*y-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((a=u-(f-o))+f*a)-f))),(t+=c<<20>>>0)>>20<=0?Tt(f,c):kt(f,t)}(v,l,p),a*s}function cr(t,r,n){return O(t)||O(r)||O(n)||r<=0||n<=0?NaN:t<n?0:1-fr(n/t,r)}function lr(t){return function(){return t}}c(cr,"factory",(function(t,r){return O(t)||O(r)||t<=0||r<=0?lr(NaN):function(n){return O(n)?NaN:n<r?0:1-fr(r/n,t)}}));var pr=.6931471803691238,yr=1.9082149292705877e-10;function sr(t){var r,n,e,i,o,u,a,f,c,l;if(t<-1||O(t))return NaN;if(-1===t)return T;if(t===F)return t;if(0===t)return t;if(l=1,(e=t<0?-t:t)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?t:t-t*t*.5;t>-.2928932188134525&&(l=0,i=t,n=1)}return 0!==l&&(e<9007199254740992?(o=(l=((n=Nt(c=1+t))>>20)-P)>0?1-(c-t):t-(c-1),o/=c):(l=((n=Nt(c=t))>>20)-P,o=0),(n&=1048575)<434334?c=kt(c,1072693248|n):(l+=1,c=kt(c,1071644672|n),n=1048576-n>>2),i=c-1),r=.5*i*i,0===n?0===i?l*pr+(o+=l*yr):l*pr-((f=r*(1-.6666666666666666*i))-(l*yr+o)-i):(f=(a=(u=i/(2+i))*u)*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.3999999999940942+t*(.2857142874366239+t*(.22222198432149784+t*(.1818357216161805+t*(.15313837699209373+.14798198605116586*t)))))}(a),0===l?i-(r-u*(r+f)):l*pr-(r-(u*(r+f)+(l*yr+o))-i))}function vr(t,r,n){return O(t)||O(r)||O(n)||r<=0||n<=0?NaN:t<n?T:sr(-fr(n/t,r))}function br(t,r,n){return O(t)||O(r)||O(n)||r<=0||n<=0?NaN:t>=n?qt(r)+r*qt(n)-(r+1)*qt(t):T}function hr(t,r,n){return O(t)||O(r)||O(n)||r<=0||n<=0?NaN:t>=n?r*fr(n,r)/fr(t,r+1):0}function Nr(t,r,n){return O(r)||O(n)||O(t)||r<=0||n<=0||t<0||t>1?NaN:n/fr(1-t,1/r)}function mr(){var t,r=arguments,n=r[0],e="https://stdlib.io/e/"+n+"?";for(t=1;t<r.length;t++)e+="&arg[]="+encodeURIComponent(r[t]);return e}function dr(){var t,r;if(!(this instanceof dr))return 0===arguments.length?new dr:new dr(arguments[0],arguments[1]);if(arguments.length){if(r=arguments[1],!_(t=arguments[0]))throw new TypeError(mr("invalid argument. First shape parameter must be a positive number. Value: `%s`.",t));if(!_(r))throw new TypeError(mr("invalid argument. Second shape parameter must be a positive number. Value: `%s`.",r))}else t=1,r=1;return f(this,"alpha",{configurable:!1,enumerable:!0,get:function(){return t},set:function(r){if(!_(r))throw new TypeError(mr("invalid assignment. Must be a positive number. Value: `%s`.",r));t=r}}),f(this,"beta",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!_(t))throw new TypeError(mr("invalid assignment. Must be a positive number. Value: `%s`.",t));r=t}}),this}return c(vr,"factory",(function(t,r){return O(t)||O(r)||t<=0||r<=0?lr(NaN):function(n){return O(n)?NaN:n<r?T:sr(-fr(r/n,t))}})),c(br,"factory",(function(t,r){var n;return O(t)||O(r)||t<=0||r<=0?lr(NaN):(n=qt(t)+t*qt(r),function(e){return O(e)?NaN:e>=r?n-(t+1)*qt(e):T})})),c(hr,"factory",(function(t,r){var n;return O(t)||O(r)||t<=0||r<=0?lr(NaN):(n=t*fr(r,t),function(e){var i;return O(e)?NaN:e>=r?(i=fr(e,t+1),n/i):0})})),c(Nr,"factory",(function(t,r){var n;return O(t)||O(r)||t<=0||r<=0?lr(NaN):(n=1/t,function(t){return O(t)||t<0||t>1?NaN:r/fr(1-t,n)})})),l(dr.prototype,"entropy",(function(){return t=this.alpha,r=this.beta,O(t)||t<=0||O(r)||r<=0?NaN:qt(r/t*Ht(1+1/t));var t,r})),l(dr.prototype,"kurtosis",(function(){return t=this.alpha,r=this.beta,O(t)||t<=4||O(r)||r<=0?NaN:(n=6*(fr(t,3)+fr(t,2)-6*t-2),n/=t*(t-3)*(t-4));var t,r,n})),l(dr.prototype,"mean",(function(){return t=this.alpha,r=this.beta,t<=0||r<=0?NaN:t<=1?F:t*r/(t-1);var t,r})),l(dr.prototype,"median",(function(){return t=this.alpha,r=this.beta,t<=0||r<=0?NaN:r*fr(2,1/t);var t,r})),l(dr.prototype,"mode",(function(){return t=this.alpha,r=this.beta,O(t)||t<=0||O(r)||r<=0?NaN:r;var t,r})),l(dr.prototype,"skewness",(function(){return t=this.alpha,r=this.beta,O(t)||t<=3||O(r)||r<=0?NaN:2*(1+t)/(t-3)*zt((t-2)/t);var t,r})),l(dr.prototype,"variance",(function(){return t=this.alpha,r=this.beta,O(t)||t<=0||O(r)||r<=0?NaN:t<2?F:r*r*t/(fr(t-1,2)*(t-2));var t,r})),c(dr.prototype,"cdf",(function(t){return cr(t,this.alpha,this.beta)})),c(dr.prototype,"logcdf",(function(t){return vr(t,this.alpha,this.beta)})),c(dr.prototype,"logpdf",(function(t){return br(t,this.alpha,this.beta)})),c(dr.prototype,"pdf",(function(t){return hr(t,this.alpha,this.beta)})),c(dr.prototype,"quantile",(function(t){return Nr(t,this.alpha,this.beta)})),dr},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).Pareto1=r();
//# sourceMappingURL=index.js.map
