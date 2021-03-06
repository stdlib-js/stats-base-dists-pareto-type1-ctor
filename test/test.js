/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isFunction = require( '@stdlib/assert-is-function' );
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var quantile = require( '@stdlib/stats-base-dists-pareto-type1-quantile' );
var cdf = require( '@stdlib/stats-base-dists-pareto-type1-cdf' );
var logcdf = require( '@stdlib/stats-base-dists-pareto-type1-logcdf' );
var logpdf = require( '@stdlib/stats-base-dists-pareto-type1-logpdf' );
var pdf = require( '@stdlib/stats-base-dists-pareto-type1-pdf' );
var kurtosis = require( '@stdlib/stats-base-dists-pareto-type1-kurtosis' );
var skewness = require( '@stdlib/stats-base-dists-pareto-type1-skewness' );
var variance = require( '@stdlib/stats-base-dists-pareto-type1-variance' );
var entropy = require( '@stdlib/stats-base-dists-pareto-type1-entropy' );
var median = require( '@stdlib/stats-base-dists-pareto-type1-median' );
var mode = require( '@stdlib/stats-base-dists-pareto-type1-mode' );
var mean = require( '@stdlib/stats-base-dists-pareto-type1-mean' );
var Pareto1 = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Pareto1, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an `alpha` argument which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			// eslint-disable-next-line no-new
			new Pareto1( value, 2.0 );
		};
	}
});

tape( 'the function throws an error if provided a `beta` argument which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			// eslint-disable-next-line no-new
			new Pareto1( 2.0, value );
		};
	}
});

tape( 'if provided arguments, the function requires both `alpha` and `beta`', function test( t ) {
	t.throws( foo, TypeError, 'throws an error' );
	t.end();

	function foo() {
		// eslint-disable-next-line no-new
		new Pareto1( 2.0 );
	}
});

tape( 'the function returns a new distribution instance (default parameters)', function test( t ) {
	var pareto1 = new Pareto1();
	t.strictEqual( pareto1 instanceof Pareto1, true, 'returns an instance' );
	t.end();
});

tape( 'the function returns a new distribution instance (custom parameters)', function test( t ) {
	var pareto1 = new Pareto1( 2.0, 4.0 );
	t.strictEqual( pareto1 instanceof Pareto1, true, 'returns an instance' );
	t.end();
});

tape( 'the function can be invoked without the new operator', function test( t ) {
	// eslint-disable-next-line new-cap
	var pareto1 = Pareto1();
	t.strictEqual( pareto1 instanceof Pareto1, true, 'returns an instance' );

	// eslint-disable-next-line new-cap
	pareto1 = Pareto1( 2.0, 4.0 );
	t.strictEqual( pareto1 instanceof Pareto1, true, 'returns an instance' );

	t.end();
});

tape( 'the created distribution has a property for getting and setting `alpha`', function test( t ) {
	var pareto1;

	pareto1 = new Pareto1( 2.0, 4.0 );
	t.strictEqual( hasOwnProp( pareto1, 'alpha' ), true, 'has property' );
	t.strictEqual( pareto1.alpha, 2.0, 'returns expected value' );

	pareto1.alpha = 3.0;
	t.strictEqual( pareto1.alpha, 3.0, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `alpha` to a value which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var pareto1 = new Pareto1();
			pareto1.alpha = value;
		};
	}
});

tape( 'the created distribution has a property for getting and setting `beta`', function test( t ) {
	var pareto1;

	pareto1 = new Pareto1( 2.0, 4.0 );
	t.strictEqual( hasOwnProp( pareto1, 'beta' ), true, 'has property' );
	t.strictEqual( pareto1.beta, 4.0, 'returns expected value' );

	pareto1.beta = 3.0;
	t.strictEqual( pareto1.beta, 3.0, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `beta` to a value which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var pareto1 = new Pareto1();
			pareto1.beta = value;
		};
	}
});

tape( 'the distribution prototype has a property for retrieving the distribution entropy', function test( t ) {
	var pareto1;

	t.strictEqual( hasOwnProp( Pareto1.prototype, 'entropy' ), true, 'has property' );

	pareto1 = new Pareto1();
	t.strictEqual( pareto1.entropy, entropy( 1.0, 1.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution kurtosis', function test( t ) {
	var pareto1;

	t.strictEqual( hasOwnProp( Pareto1.prototype, 'kurtosis' ), true, 'has property' );

	pareto1 = new Pareto1( 6.0, 4.0 );
	t.strictEqual( pareto1.kurtosis, kurtosis( 6.0, 4.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mean', function test( t ) {
	var pareto1;

	t.strictEqual( hasOwnProp( Pareto1.prototype, 'mean' ), true, 'has property' );

	pareto1 = new Pareto1();
	t.strictEqual( pareto1.mean, mean( 1.0, 1.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution median', function test( t ) {
	var pareto1;

	t.strictEqual( hasOwnProp( Pareto1.prototype, 'median' ), true, 'has property' );

	pareto1 = new Pareto1( 5.0, 2.0 );
	t.strictEqual( pareto1.median, median( 5.0, 2.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mode', function test( t ) {
	var pareto1;

	t.strictEqual( hasOwnProp( Pareto1.prototype, 'mode' ), true, 'has property' );

	pareto1 = new Pareto1( 2.0, 3.0 );
	t.strictEqual( pareto1.mode, mode( 2.0, 3.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution skewness', function test( t ) {
	var pareto1;

	t.strictEqual( hasOwnProp( Pareto1.prototype, 'skewness' ), true, 'has property' );

	pareto1 = new Pareto1( 6.0, 6.0 );
	t.strictEqual( pareto1.skewness, skewness( 6.0, 6.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution variance', function test( t ) {
	var pareto1;

	t.strictEqual( hasOwnProp( Pareto1.prototype, 'variance' ), true, 'has property' );

	pareto1 = new Pareto1( 5.0, 6.0 );
	t.strictEqual( pareto1.variance, variance( 5.0, 6.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a method for evaluating the cumulative distribution function (CDF)', function test( t ) {
	var pareto1;
	var y;

	t.strictEqual( hasOwnProp( Pareto1.prototype, 'cdf' ), true, 'has property' );
	t.strictEqual( isFunction( Pareto1.prototype.cdf ), true, 'has method' );

	pareto1 = new Pareto1();
	y = pareto1.cdf( 0.5 );

	t.strictEqual( y, cdf( 0.5, 1.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the cumulative distribution function (CDF)', function test( t ) {
	var pareto1;
	var y;

	t.strictEqual( hasOwnProp( Pareto1.prototype, 'logcdf' ), true, 'has property' );
	t.strictEqual( isFunction( Pareto1.prototype.logcdf ), true, 'has method' );

	pareto1 = new Pareto1();
	y = pareto1.logcdf( 0.5 );

	t.strictEqual( y, logcdf( 0.5, 1.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the probability density function (PDF)', function test( t ) {
	var pareto1;
	var y;

	t.strictEqual( hasOwnProp( Pareto1.prototype, 'logpdf' ), true, 'has property' );
	t.strictEqual( isFunction( Pareto1.prototype.logpdf ), true, 'has method' );

	pareto1 = new Pareto1();
	y = pareto1.logpdf( 0.2 );

	t.strictEqual( y, logpdf( 0.2, 1.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the probability density function (PDF)', function test( t ) {
	var pareto1;
	var y;

	t.strictEqual( hasOwnProp( Pareto1.prototype, 'pdf' ), true, 'has property' );
	t.strictEqual( isFunction( Pareto1.prototype.pdf ), true, 'has method' );

	pareto1 = new Pareto1();
	y = pareto1.pdf( 0.2 );

	t.strictEqual( y, pdf( 0.2, 1.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the quantile function', function test( t ) {
	var pareto1;
	var y;

	t.strictEqual( hasOwnProp( Pareto1.prototype, 'quantile' ), true, 'has property' );
	t.strictEqual( isFunction( Pareto1.prototype.quantile ), true, 'has method' );

	pareto1 = new Pareto1();
	y = pareto1.quantile( 0.8 );

	t.strictEqual( y, quantile( 0.8, 1.0, 1.0 ), 'returns expected value' );
	t.end();
});
