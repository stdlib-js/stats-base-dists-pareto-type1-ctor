<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Pareto (Type I)

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Pareto (Type I)][pareto-distribution] distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
Pareto1 = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-pareto-type1-ctor@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/stats-base-dists-pareto-type1-ctor/tags). For example,

```javascript
Pareto1 = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-pareto-type1-ctor@v0.2.2-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var Pareto1 = require( 'path/to/vendor/umd/stats-base-dists-pareto-type1-ctor/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-pareto-type1-ctor@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.Pareto1;
})();
</script>
```

#### Pareto1( \[alpha, beta] )

Returns a [Pareto (Type I)][pareto-distribution] distribution object.

```javascript
var pareto1 = new Pareto1();

var mu = pareto1.mean;
// returns Infinity
```

By default, `alpha = 1.0` and `beta = 1.0`. To create a distribution having a different `alpha` (shape parameter) and `beta` (scale parameter), provide the corresponding arguments.

```javascript
var pareto1 = new Pareto1( 2.0, 4.0 );

var mu = pareto1.mean;
// returns 8.0
```

* * *

## pareto1

A [Pareto (Type I)][pareto-distribution] distribution object has the following properties and methods...

### Writable Properties

#### pareto1.alpha

Shape parameter of the distribution. `alpha` **must** be a positive number.

```javascript
var pareto1 = new Pareto1();

var alpha = pareto1.alpha;
// returns 1.0

pareto1.alpha = 3.0;

alpha = pareto1.alpha;
// returns 3.0
```

#### pareto1.beta

Scale parameter of the distribution. `beta` **must** be a positive number.

```javascript
var pareto1 = new Pareto1( 2.0, 4.0 );

var beta = pareto1.beta;
// returns 4.0

pareto1.beta = 3.0;

beta = pareto1.beta;
// returns 3.0
```

* * *

### Computed Properties

#### Pareto1.prototype.entropy

Returns the [differential entropy][entropy].

```javascript
var pareto1 = new Pareto1( 4.0, 12.0 );

var entropy = pareto1.entropy;
// returns ~2.349
```

#### Pareto1.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var pareto1 = new Pareto1( 6.0, 12.0 );

var kurtosis = pareto1.kurtosis;
// returns ~35.667
```

#### Pareto1.prototype.mean

Returns the [expected value][expected-value].

```javascript
var pareto1 = new Pareto1( 4.0, 12.0 );

var mu = pareto1.mean;
// returns 16.0
```

#### Pareto1.prototype.median

Returns the [median][median].

```javascript
var pareto1 = new Pareto1( 4.0, 12.0 );

var median = pareto1.median;
// returns ~14.27
```

#### Pareto1.prototype.mode

Returns the [mode][mode].

```javascript
var pareto1 = new Pareto1( 4.0, 12.0 );

var mode = pareto1.mode;
// returns 12.0
```

#### Pareto1.prototype.skewness

Returns the [skewness][skewness].

```javascript
var pareto1 = new Pareto1( 4.0, 12.0 );

var skewness = pareto1.skewness;
// returns ~7.071
```

#### Pareto1.prototype.variance

Returns the [variance][variance].

```javascript
var pareto1 = new Pareto1( 4.0, 12.0 );

var s2 = pareto1.variance;
// returns 32.0
```

* * *

### Methods

#### Pareto1.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var pareto1 = new Pareto1( 2.0, 4.0 );

var y = pareto1.cdf( 3.5 );
// returns 0.0
```

#### Pareto1.prototype.logcdf( x )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF).

```javascript
var pareto1 = new Pareto1( 2.0, 4.0 );

var y = pareto1.logcdf( 3.5 );
// returns -Infinity
```

#### Pareto1.prototype.logpdf( x )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF).

```javascript
var pareto1 = new Pareto1( 2.0, 4.0 );

var y = pareto1.logpdf( 5.0 );
// returns ~-1.363
```

#### Pareto1.prototype.pdf( x )

Evaluates the [probability density function][pdf] (PDF).

```javascript
var pareto1 = new Pareto1( 2.0, 4.0 );

var y = pareto1.pdf( 5.0 );
// returns ~0.256
```

#### Pareto1.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var pareto1 = new Pareto1( 2.0, 4.0 );

var y = pareto1.quantile( 0.5 );
// returns ~5.657

y = pareto1.quantile( 1.9 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-pareto-type1-ctor@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var pareto1 = new Pareto1( 2.0, 4.0 );

var mu = pareto1.mean;
// returns 8.0

var median = pareto1.median;
// returns ~5.657

var s2 = pareto1.variance;
// returns Infinity

var y = pareto1.cdf( 2.0 );
// returns 0.0

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-pareto-type1-ctor.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-pareto-type1-ctor

[test-image]: https://github.com/stdlib-js/stats-base-dists-pareto-type1-ctor/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/stats-base-dists-pareto-type1-ctor/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-pareto-type1-ctor/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-pareto-type1-ctor?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-pareto-type1-ctor.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-pareto-type1-ctor/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-pareto-type1-ctor/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-pareto-type1-ctor/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-pareto-type1-ctor/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-pareto-type1-ctor/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-pareto-type1-ctor/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-pareto-type1-ctor/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-pareto-type1-ctor/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-pareto-type1-ctor/main/LICENSE

[pareto-distribution]: https://en.wikipedia.org/wiki/Pareto_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[expected-value]: https://en.wikipedia.org/wiki/Expected_value

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

[median]: https://en.wikipedia.org/wiki/Median

[mode]: https://en.wikipedia.org/wiki/Mode_%28statistics%29

[skewness]: https://en.wikipedia.org/wiki/Skewness

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->
