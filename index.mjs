// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@v0.2.4-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.2.2-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-pareto-type1-entropy@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-pareto-type1-kurtosis@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-pareto-type1-mean@v0.2.2-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-pareto-type1-median@v0.1.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-pareto-type1-mode@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-pareto-type1-skewness@v0.2.2-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-pareto-type1-variance@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-pareto-type1-cdf@v0.2.2-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-pareto-type1-logcdf@v0.1.2-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-pareto-type1-logpdf@v0.2.2-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-pareto-type1-pdf@v0.2.2-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-pareto-type1-quantile@v0.2.2-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function c(){var s,e;if(!(this instanceof c))return 0===arguments.length?new c:new c(arguments[0],arguments[1]);if(arguments.length){if(e=arguments[1],!i(s=arguments[0]))throw new TypeError(u("16X8i",s));if(!i(e))throw new TypeError(u("16X8j",e))}else s=1,e=1;return t(this,"alpha",{configurable:!1,enumerable:!0,get:function(){return s},set:function(t){if(!i(t))throw new TypeError(u("16X8k",t));s=t}}),t(this,"beta",{configurable:!1,enumerable:!0,get:function(){return e},set:function(t){if(!i(t))throw new TypeError(u("16X8k",t));e=t}}),this}e(c.prototype,"entropy",(function(){return r(this.alpha,this.beta)})),e(c.prototype,"kurtosis",(function(){return n(this.alpha,this.beta)})),e(c.prototype,"mean",(function(){return o(this.alpha,this.beta)})),e(c.prototype,"median",(function(){return p(this.alpha,this.beta)})),e(c.prototype,"mode",(function(){return a(this.alpha,this.beta)})),e(c.prototype,"skewness",(function(){return d(this.alpha,this.beta)})),e(c.prototype,"variance",(function(){return h(this.alpha,this.beta)})),s(c.prototype,"cdf",(function(t){return m(t,this.alpha,this.beta)})),s(c.prototype,"logcdf",(function(t){return l(t,this.alpha,this.beta)})),s(c.prototype,"logpdf",(function(t){return f(t,this.alpha,this.beta)})),s(c.prototype,"pdf",(function(t){return j(t,this.alpha,this.beta)})),s(c.prototype,"quantile",(function(t){return b(t,this.alpha,this.beta)}));export{c as default};
//# sourceMappingURL=index.mjs.map
