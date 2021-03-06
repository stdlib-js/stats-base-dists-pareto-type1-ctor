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

/* eslint-disable no-restricted-syntax, no-invalid-this */

'use strict';

// MODULES //

var defineProperty = require( '@stdlib/utils-define-property' );
var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils-define-nonenumerable-read-only-accessor' );
var isPositive = require( '@stdlib/assert-is-positive-number' ).isPrimitive;
var entropy = require( '@stdlib/stats-base-dists-pareto-type1-entropy' );
var kurtosis = require( '@stdlib/stats-base-dists-pareto-type1-kurtosis' );
var mean = require( '@stdlib/stats-base-dists-pareto-type1-mean' );
var median = require( '@stdlib/stats-base-dists-pareto-type1-median' );
var mode = require( '@stdlib/stats-base-dists-pareto-type1-mode' );
var skewness = require( '@stdlib/stats-base-dists-pareto-type1-skewness' );
var variance = require( '@stdlib/stats-base-dists-pareto-type1-variance' );
var cdf = require( '@stdlib/stats-base-dists-pareto-type1-cdf' );
var logcdf = require( '@stdlib/stats-base-dists-pareto-type1-logcdf' );
var logpdf = require( '@stdlib/stats-base-dists-pareto-type1-logpdf' );
var pdf = require( '@stdlib/stats-base-dists-pareto-type1-pdf' );
var quantile = require( '@stdlib/stats-base-dists-pareto-type1-quantile' );
var format = require( '@stdlib/string-format' );


// FUNCTIONS //

/**
* Evaluates the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {Probability} evaluated CDF
*/
function paretoCDF( x ) {
	return cdf( x, this.alpha, this.beta );
}

/**
* Evaluates the natural logarithm of the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {Probability} evaluated logCDF
*/
function paretoLogCDF( x ) {
	return logcdf( x, this.alpha, this.beta );
}

/**
* Evaluates the natural logarithm of the probability density function (PDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logPDF
*/
function paretoLogPDF( x ) {
	return logpdf( x, this.alpha, this.beta );
}

/**
* Evaluates the probability density function (PDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated PDF
*/
function paretoPDF( x ) {
	return pdf( x, this.alpha, this.beta );
}

/**
* Evaluates the quantile function.
*
* @private
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
*/
function paretoQuantile( p ) {
	return quantile( p, this.alpha, this.beta );
}


// MAIN //

/**
* Pareto (Type I) distribution constructor.
*
* @constructor
* @param {PositiveNumber} [alpha=1.0] - shape parameter
* @param {PositiveNumber} [beta=1.0] - scale parameter
* @throws {TypeError} `alpha` must be a positive number
* @throws {TypeError} `beta` must be a positive number
* @returns {Pareto1} distribution instance
*
* @example
* var pareto1 = new Pareto1( 1.0, 1.0 );
*
* var y = pareto1.cdf( 0.8 );
* // returns 0.0
*
* var mu = pareto1.mean;
* // returns Infinity
*/
function Pareto1() {
	var alpha;
	var beta;
	if ( !(this instanceof Pareto1) ) {
		if ( arguments.length === 0 ) {
			return new Pareto1();
		}
		return new Pareto1( arguments[ 0 ], arguments[ 1 ] );
	}
	if ( arguments.length ) {
		alpha = arguments[ 0 ];
		beta = arguments[ 1 ];
		if ( !isPositive( alpha ) ) {
			throw new TypeError( format( 'invalid argument. First shape parameter must be a positive number. Value: `%s`.', alpha ) );
		}
		if ( !isPositive( beta ) ) {
			throw new TypeError( format( 'invalid argument. Second shape parameter must be a positive number. Value: `%s`.', beta ) );
		}
	} else {
		alpha = 1.0;
		beta = 1.0;
	}
	defineProperty( this, 'alpha', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return alpha;
		},
		'set': function set( value ) {
			if ( !isPositive( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a positive number. Value: `%s`.', value ) );
			}
			alpha = value;
		}
	});
	defineProperty( this, 'beta', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return beta;
		},
		'set': function set( value ) {
			if ( !isPositive( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a positive number. Value: `%s`.', value ) );
			}
			beta = value;
		}
	});
	return this;
}

/**
* Pareto (Type I) distribution differential entropy.
*
* @name entropy
* @memberof Pareto1.prototype
* @type {number}
* @see [differential entropy]{@link https://en.wikipedia.org/wiki/Entropy_%28information_theory%29}
*
* @example
* var pareto1 = new Pareto1( 4.0, 12.0 );
*
* var v = pareto1.entropy;
* // returns ~2.349
*/
setReadOnlyAccessor( Pareto1.prototype, 'entropy', function get() {
	return entropy( this.alpha, this.beta );
});

/**
* Pareto (Type I) distribution excess kurtosis.
*
* @name kurtosis
* @memberof Pareto1.prototype
* @type {number}
* @see [kurtosis]{@link https://en.wikipedia.org/wiki/Kurtosis}
*
* @example
* var pareto1 = new Pareto1( 4.0, 12.0 );
*
* var v = pareto1.kurtosis;
* // returns NaN
*/
setReadOnlyAccessor( Pareto1.prototype, 'kurtosis', function get() {
	return kurtosis( this.alpha, this.beta );
});

/**
* Pareto (Type I) distribution expected value.
*
* @name mean
* @memberof Pareto1.prototype
* @type {number}
* @see [expected value]{@link https://en.wikipedia.org/wiki/Expected_value}
*
* @example
* var pareto1 = new Pareto1( 4.0, 12.0 );
*
* var v = pareto1.mean;
* // returns 16.0
*/
setReadOnlyAccessor( Pareto1.prototype, 'mean', function get() {
	return mean( this.alpha, this.beta );
});

/**
* Pareto (Type I) distribution median.
*
* @name median
* @memberof Pareto1.prototype
* @type {number}
* @see [median]{@link https://en.wikipedia.org/wiki/Median}
*
* @example
* var pareto1 = new Pareto1( 4.0, 12.0 );
*
* var v = pareto1.median;
* // returns ~14.27
*/
setReadOnlyAccessor( Pareto1.prototype, 'median', function get() {
	return median( this.alpha, this.beta );
});

/**
* Pareto (Type I) distribution mode.
*
* @name mode
* @memberof Pareto1.prototype
* @type {number}
* @see [mode]{@link https://en.wikipedia.org/wiki/Mode_%28statistics%29}
*
* @example
* var pareto1 = new Pareto1( 4.0, 12.0 );
*
* var v = pareto1.mode;
* // returns 12.0
*/
setReadOnlyAccessor( Pareto1.prototype, 'mode', function get() {
	return mode( this.alpha, this.beta );
});

/**
* Pareto (Type I) distribution skewness.
*
* @name skewness
* @memberof Pareto1.prototype
* @type {number}
* @see [skewness]{@link https://en.wikipedia.org/wiki/Skewness}
*
* @example
* var pareto1 = new Pareto1( 4.0, 12.0 );
*
* var v = pareto1.skewness;
* // returns ~7.071
*/
setReadOnlyAccessor( Pareto1.prototype, 'skewness', function get() {
	return skewness( this.alpha, this.beta );
});

/**
* Pareto (Type I) distribution variance.
*
* @name variance
* @memberof Pareto1.prototype
* @type {number}
* @see [variance]{@link https://en.wikipedia.org/wiki/Variance}
*
* @example
* var pareto1 = new Pareto1( 4.0, 12.0 );
*
* var v = pareto1.variance;
* // returns 32.0
*/
setReadOnlyAccessor( Pareto1.prototype, 'variance', function get() {
	return variance( this.alpha, this.beta );
});

/**
* Evaluates the cumulative distribution function (CDF).
*
* @name cdf
* @memberof Pareto1.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated CDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var pareto1 = new Pareto1( 2.0, 4.0 );
*
* var v = pareto1.cdf( 4.0 );
* // returns 0.0
*/
setReadOnly( Pareto1.prototype, 'cdf', paretoCDF );

/**
* Evaluates the natural logarithm of the cumulative distribution function (CDF).
*
* @name logcdf
* @memberof Pareto1.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logCDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var pareto1 = new Pareto1( 2.0, 4.0 );
*
* var v = pareto1.logcdf( 4.0 );
* // returns -Infinity
*/
setReadOnly( Pareto1.prototype, 'logcdf', paretoLogCDF );

/**
* Evaluates the natural logarithm of the probability density function (PDF).
*
* @name logpdf
* @memberof Pareto1.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logPDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var pareto1 = new Pareto1( 2.0, 4.0 );
*
* var v = pareto1.logpdf( 5.0 );
* // returns ~-1.363
*/
setReadOnly( Pareto1.prototype, 'logpdf', paretoLogPDF );

/**
* Evaluates the probability density function (PDF).
*
* @name pdf
* @memberof Pareto1.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated PDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var pareto1 = new Pareto1( 2.0, 4.0 );
*
* var v = pareto1.pdf( 5.0 );
* // returns ~0.256
*/
setReadOnly( Pareto1.prototype, 'pdf', paretoPDF );

/**
* Evaluates the quantile function.
*
* @name quantile
* @memberof Pareto1.prototype
* @type {Function}
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
* @see [quantile function]{@link https://en.wikipedia.org/wiki/Quantile_function}
*
* @example
* var pareto1 = new Pareto1( 2.0, 4.0 );
*
* var v = pareto1.quantile( 0.5 );
* // returns ~5.657
*/
setReadOnly( Pareto1.prototype, 'quantile', paretoQuantile );


// EXPORTS //

module.exports = Pareto1;
