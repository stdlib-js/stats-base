/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import cumax = require( '@stdlib/stats-base-cumax' );
import cumaxabs = require( '@stdlib/stats-base-cumaxabs' );
import cumin = require( '@stdlib/stats-base-cumin' );
import cuminabs = require( '@stdlib/stats-base-cuminabs' );
import dists = require( '@stdlib/stats-base-dists' );
import sdsnanmean = require( '@stdlib/stats-base-sdsnanmean' );
import sdsnanmeanors = require( '@stdlib/stats-base-sdsnanmeanors' );
import snanmean = require( '@stdlib/stats-base-snanmean' );
import snanstdev = require( '@stdlib/stats-base-snanstdev' );
import snanstdevch = require( '@stdlib/stats-base-snanstdevch' );
import snanstdevpn = require( '@stdlib/stats-base-snanstdevpn' );
import snanstdevtk = require( '@stdlib/stats-base-snanstdevtk' );
import snanstdevwd = require( '@stdlib/stats-base-snanstdevwd' );
import snanstdevyc = require( '@stdlib/stats-base-snanstdevyc' );
import snanvariance = require( '@stdlib/stats-base-snanvariance' );
import snanvariancech = require( '@stdlib/stats-base-snanvariancech' );
import snanvariancepn = require( '@stdlib/stats-base-snanvariancepn' );
import snanvariancetk = require( '@stdlib/stats-base-snanvariancetk' );
import snanvariancewd = require( '@stdlib/stats-base-snanvariancewd' );
import snanvarianceyc = require( '@stdlib/stats-base-snanvarianceyc' );
import sstdevwd = require( '@stdlib/stats-base-sstdevwd' );
import dmeankbn2 = require( '@stdlib/stats-strided-dmeankbn2' );
import dmeanli = require( '@stdlib/stats-strided-dmeanli' );
import dmeanlipw = require( '@stdlib/stats-strided-dmeanlipw' );
import dmeanors = require( '@stdlib/stats-strided-dmeanors' );
import dmeanpw = require( '@stdlib/stats-strided-dmeanpw' );
import dmeanwd = require( '@stdlib/stats-strided-dmeanwd' );
import dmediansorted = require( '@stdlib/stats-strided-dmediansorted' );
import dmidrange = require( '@stdlib/stats-strided-dmidrange' );
import dmin = require( '@stdlib/stats-strided-dmin' );
import dminabs = require( '@stdlib/stats-strided-dminabs' );
import dminsorted = require( '@stdlib/stats-strided-dminsorted' );
import dnanmax = require( '@stdlib/stats-strided-dnanmax' );
import dnanmaxabs = require( '@stdlib/stats-strided-dnanmaxabs' );

/**
* Interface describing the `base` namespace.
*/
interface Namespace {
	/**
	* Computes the cumulative maximum of a strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param y - output array
	* @param strideY - stride length for `y`
	* @returns output array
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	* var y = [ 0.0, 0.0, 0.0 ];
	*
	* ns.cumax( x.length, x, 1, y, 1 );
	* // y => [ 1.0, 1.0, 2.0 ]
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ] );
	* var y = [ 0.0, 0.0, 0.0 ];
	*
	* ns.cumax.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => [ 1.0, 1.0, 2.0 ]
	*/
	cumax: typeof cumax;

	/**
	* Computes the cumulative maximum absolute value of a strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param y - output array
	* @param strideY - stride length for `y`
	* @returns output array
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	* var y = [ 0.0, 0.0, 0.0 ];
	*
	* ns.cumaxabs( x.length, x, 1, y, 1 );
	* // y => [ 1.0, 2.0, 2.0 ]
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ] );
	* var y = [ 0.0, 0.0, 0.0 ];
	*
	* ns.cumaxabs.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => [ 1.0, 2.0, 2.0 ]
	*/
	cumaxabs: typeof cumaxabs;

	/**
	* Computes the cumulative minimum of a strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param y - output array
	* @param strideY - stride length for `y`
	* @returns output array
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	* var y = [ 0.0, 0.0, 0.0 ];
	*
	* ns.cumin( x.length, x, 1, y, 1 );
	* // y => [ 1.0, 1.0, 2.0 ]
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ] );
	* var y = [ 0.0, 0.0, 0.0 ];
	*
	* ns.cumin.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => [ 1.0, 1.0, 2.0 ]
	*/
	cumin: typeof cumin;

	/**
	* Computes the cumulative minimum absolute value of a strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - output array
	* @param strideY - `y` stride length
	* @returns output array
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	* var y = [ 0.0, 0.0, 0.0 ];
	*
	* ns.cuminabs( x.length, x, 1, y, 1 );
	* // y => [ 1.0, 1.0, 1.0 ]
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ] );
	* var y = [ 0.0, 0.0, 0.0 ];
	*
	* ns.cuminabs.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => [ 1.0, 1.0, 1.0 ]
	*/
	cuminabs: typeof cuminabs;

	/**
	* Base (i.e., lower-level) probability distributions.
	*/
	dists: typeof dists;

	/**
	* Computes the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values and using extended accumulation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.sdsnanmean( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.sdsnanmean.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	sdsnanmean: typeof sdsnanmean;

	/**
	* Computes the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values and using ordinary recursive summation with extended accumulation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.sdsnanmeanors( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.sdsnanmeanors.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	sdsnanmeanors: typeof sdsnanmeanors;

	/**
	* Computes the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanmean( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanmean.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	snanmean: typeof snanmean;

	/**
	* Computes the standard deviation of a single-precision floating-point strided array ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns standard deviation
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanstdev( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanstdev.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	snanstdev: typeof snanstdev;

	/**
	* Computes the standard deviation of a single-precision floating-point strided array ignoring `NaN` values and using a one-pass trial mean algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns standard deviation
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanstdevch( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanstdevch.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	snanstdevch: typeof snanstdevch;

	/**
	* Computes the standard deviation of a single-precision floating-point strided array ignoring `NaN` values and using a two-pass algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns standard deviation
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanstdevpn( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanstdevpn.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	snanstdevpn: typeof snanstdevpn;

	/**
	* Computes the standard deviation of a single-precision floating-point strided array ignoring `NaN` values and using a one-pass textbook algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns standard deviation
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanstdevtk( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanstdevtk.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	snanstdevtk: typeof snanstdevtk;

	/**
	* Computes the standard deviation of a single-precision floating-point strided array ignoring `NaN` values and using Welford's algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns standard deviation
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanstdevwd( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanstdevwd.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	snanstdevwd: typeof snanstdevwd;

	/**
	* Computes the standard deviation of a single-precision floating-point strided array ignoring `NaN` values and using a one-pass algorithm proposed by Youngs and Cramer.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns standard deviation
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanstdevyc( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanstdevyc.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	snanstdevyc: typeof snanstdevyc;

	/**
	* Computes the variance of a single-precision floating-point strided array ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns variance
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanvariance( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanvariance.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	snanvariance: typeof snanvariance;

	/**
	* Computes the variance of a single-precision floating-point strided array ignoring `NaN` values and using a one-pass trial mean algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns variance
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanvariancech( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanvariancech.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	snanvariancech: typeof snanvariancech;

	/**
	* Computes the variance of a single-precision floating-point strided array ignoring `NaN` values and using a two-pass algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns variance
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanvariancepn( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanvariancepn.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	snanvariancepn: typeof snanvariancepn;

	/**
	* Computes the variance of a single-precision floating-point strided array ignoring `NaN` values and using a one-pass textbook algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns variance
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanvariancetk( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanvariancetk.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	snanvariancetk: typeof snanvariancetk;

	/**
	* Computes the variance of a single-precision floating-point strided array ignoring `NaN` values and using Welford's algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns variance
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanvariancewd( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanvariancewd.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	snanvariancewd: typeof snanvariancewd;

	/**
	* Computes the variance of a single-precision floating-point strided array ignoring `NaN` values and using a one-pass algorithm proposed by Youngs and Cramer.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns variance
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanvarianceyc( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanvarianceyc.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	snanvarianceyc: typeof snanvarianceyc;

	/**
	* Computes the standard deviation of a single-precision floating-point strided array using Welford's algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns standard deviation
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sstdevwd( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sstdevwd.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	sstdevwd: typeof sstdevwd;

	/**
	* Computes the arithmetic mean of a double-precision floating-point strided array using a second-order iterative Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmeankbn2( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmeankbn2.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	dmeankbn2: typeof dmeankbn2;

	/**
	* Computes the arithmetic mean of a double-precision floating-point strided array using a one-pass trial mean algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmeanli( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmeanli.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	dmeanli: typeof dmeanli;

	/**
	* Computes the arithmetic mean of a double-precision floating-point strided array using a one-pass trial mean algorithm with pairwise summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmeanlipw( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmeanlipw.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	dmeanlipw: typeof dmeanlipw;

	/**
	* Computes the arithmetic mean of a double-precision floating-point strided array using ordinary recursive summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmeanors( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmeanors.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	dmeanors: typeof dmeanors;

	/**
	* Computes the arithmetic mean of a double-precision floating-point strided array using pairwise summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmeanpw( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmeanpw.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	dmeanpw: typeof dmeanpw;

	/**
	* Computes the arithmetic mean of a double-precision floating-point strided array using Welford's algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmeanwd( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmeanwd.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	dmeanwd: typeof dmeanwd;

	/**
	* Computes the median value of a sorted double-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param x - sorted input array
	* @param strideX - stride length
	* @returns median value
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	*
	* var v = ns.dmediansorted( x.length, x, 1 );
	* // returns 2.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	*
	* var v = ns.dmediansorted.ndarray( x.length, x, 1, 0 );
	* // returns 2.0
	*/
	dmediansorted: typeof dmediansorted;

	/**
	* Computes the mid-range of a double-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns mid-range
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmidrange( x.length, x, 1 );
	* // returns 0.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmidrange.ndarray( x.length, x, 1, 0 );
	* // returns 0.0
	*/
	dmidrange: typeof dmidrange;

	/**
	* Computes the minimum value of a double-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns minimum value
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmin( x.length, x, 1 );
	* // returns -2.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmin.ndarray( x.length, x, 1, 0 );
	* // returns -2.0
	*/
	dmin: typeof dmin;

	/**
	* Computes the minimum absolute value of a double-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns minimum absolute value
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dminabs( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dminabs.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	dminabs: typeof dminabs;

	/**
	* Computes the minimum value of a sorted double-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param x - sorted input array
	* @param strideX - stride length
	* @returns minimum value
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	*
	* var v = ns.dminsorted( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	*
	* var v = ns.dminsorted.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	dminsorted: typeof dminsorted;

	/**
	* Computes the maximum value of a double-precision floating-point strided array, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns maximum value
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanmax( x.length, x, 1 );
	* // returns 2.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanmax.ndarray( x.length, x, 1, 0 );
	* // returns 2.0
	*/
	dnanmax: typeof dnanmax;

	/**
	* Computes the maximum absolute value of a double-precision floating-point strided array, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns maximum absolute value
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanmaxabs( x.length, x, 1 );
	* // returns 2.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanmaxabs.ndarray( x.length, x, 1, 0 );
	* // returns 2.0
	*/
	dnanmaxabs: typeof dnanmaxabs;
}

/**
* Base (i.e., lower-level) statistical functions.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
