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
import dcumin = require( '@stdlib/stats-base-dcumin' );
import dists = require( '@stdlib/stats-base-dists' );
import dmean = require( '@stdlib/stats-base-dmean' );
import dmeanpn = require( '@stdlib/stats-base-dmeanpn' );
import dmeanstdev = require( '@stdlib/stats-base-dmeanstdev' );
import dmeanstdevpn = require( '@stdlib/stats-base-dmeanstdevpn' );
import dmeanvar = require( '@stdlib/stats-base-dmeanvar' );
import dmeanvarpn = require( '@stdlib/stats-base-dmeanvarpn' );
import dmskmax = require( '@stdlib/stats-base-dmskmax' );
import dmskmin = require( '@stdlib/stats-base-dmskmin' );
import dmskrange = require( '@stdlib/stats-base-dmskrange' );
import dnanmskmax = require( '@stdlib/stats-base-dnanmskmax' );
import dnanmskmin = require( '@stdlib/stats-base-dnanmskmin' );
import dnanmskrange = require( '@stdlib/stats-base-dnanmskrange' );
import dnanstdev = require( '@stdlib/stats-base-dnanstdev' );
import dsem = require( '@stdlib/stats-base-dsem' );
import dsempn = require( '@stdlib/stats-base-dsempn' );
import dsmeanors = require( '@stdlib/stats-base-dsmeanors' );
import dstdev = require( '@stdlib/stats-base-dstdev' );
import dvarm = require( '@stdlib/stats-base-dvarm' );
import dvarmpn = require( '@stdlib/stats-base-dvarmpn' );
import max = require( '@stdlib/stats-base-max' );
import maxBy = require( '@stdlib/stats-base-max-by' );
import maxabs = require( '@stdlib/stats-base-maxabs' );
import maxsorted = require( '@stdlib/stats-base-maxsorted' );
import mean = require( '@stdlib/stats-base-mean' );
import meankbn = require( '@stdlib/stats-base-meankbn' );
import meankbn2 = require( '@stdlib/stats-base-meankbn2' );
import meanors = require( '@stdlib/stats-base-meanors' );
import meanpn = require( '@stdlib/stats-base-meanpn' );
import meanpw = require( '@stdlib/stats-base-meanpw' );
import meanwd = require( '@stdlib/stats-base-meanwd' );
import mediansorted = require( '@stdlib/stats-base-mediansorted' );
import min = require( '@stdlib/stats-base-min' );
import minBy = require( '@stdlib/stats-base-min-by' );
import minabs = require( '@stdlib/stats-base-minabs' );
import minsorted = require( '@stdlib/stats-base-minsorted' );
import mskmax = require( '@stdlib/stats-base-mskmax' );
import mskmin = require( '@stdlib/stats-base-mskmin' );
import mskrange = require( '@stdlib/stats-base-mskrange' );
import nanmax = require( '@stdlib/stats-base-nanmax' );
import nanmaxBy = require( '@stdlib/stats-base-nanmax-by' );
import nanmaxabs = require( '@stdlib/stats-base-nanmaxabs' );
import nanmean = require( '@stdlib/stats-base-nanmean' );
import nanmeanors = require( '@stdlib/stats-base-nanmeanors' );
import nanmeanpn = require( '@stdlib/stats-base-nanmeanpn' );
import nanmeanwd = require( '@stdlib/stats-base-nanmeanwd' );
import nanmin = require( '@stdlib/stats-base-nanmin' );
import nanminBy = require( '@stdlib/stats-base-nanmin-by' );
import nanminabs = require( '@stdlib/stats-base-nanminabs' );
import nanmskmax = require( '@stdlib/stats-base-nanmskmax' );
import nanmskmin = require( '@stdlib/stats-base-nanmskmin' );
import nanmskrange = require( '@stdlib/stats-base-nanmskrange' );
import nanrange = require( '@stdlib/stats-base-nanrange' );
import nanrangeBy = require( '@stdlib/stats-base-nanrange-by' );
import nanstdev = require( '@stdlib/stats-base-nanstdev' );
import nanstdevch = require( '@stdlib/stats-base-nanstdevch' );
import nanstdevpn = require( '@stdlib/stats-base-nanstdevpn' );
import nanstdevtk = require( '@stdlib/stats-base-nanstdevtk' );
import nanstdevwd = require( '@stdlib/stats-base-nanstdevwd' );
import nanstdevyc = require( '@stdlib/stats-base-nanstdevyc' );
import nanvariance = require( '@stdlib/stats-base-nanvariance' );
import nanvariancech = require( '@stdlib/stats-base-nanvariancech' );
import nanvariancepn = require( '@stdlib/stats-base-nanvariancepn' );
import nanvariancetk = require( '@stdlib/stats-base-nanvariancetk' );
import nanvariancewd = require( '@stdlib/stats-base-nanvariancewd' );
import nanvarianceyc = require( '@stdlib/stats-base-nanvarianceyc' );
import range = require( '@stdlib/stats-base-range' );
import rangeBy = require( '@stdlib/stats-base-range-by' );
import sdsnanmean = require( '@stdlib/stats-base-sdsnanmean' );
import sdsnanmeanors = require( '@stdlib/stats-base-sdsnanmeanors' );
import smean = require( '@stdlib/stats-base-smean' );
import smeankbn = require( '@stdlib/stats-base-smeankbn' );
import smeankbn2 = require( '@stdlib/stats-base-smeankbn2' );
import smeanlipw = require( '@stdlib/stats-base-smeanlipw' );
import smeanors = require( '@stdlib/stats-base-smeanors' );
import smeanpn = require( '@stdlib/stats-base-smeanpn' );
import smidrange = require( '@stdlib/stats-base-smidrange' );
import snanmax = require( '@stdlib/stats-base-snanmax' );
import snanmaxabs = require( '@stdlib/stats-base-snanmaxabs' );
import snanmean = require( '@stdlib/stats-base-snanmean' );
import snanmeanors = require( '@stdlib/stats-base-snanmeanors' );
import snanmeanpn = require( '@stdlib/stats-base-snanmeanpn' );
import snanmeanwd = require( '@stdlib/stats-base-snanmeanwd' );
import snanmin = require( '@stdlib/stats-base-snanmin' );
import snanminabs = require( '@stdlib/stats-base-snanminabs' );
import snanmskmax = require( '@stdlib/stats-base-snanmskmax' );
import snanmskmin = require( '@stdlib/stats-base-snanmskmin' );
import snanmskrange = require( '@stdlib/stats-base-snanmskrange' );
import snanrange = require( '@stdlib/stats-base-snanrange' );
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
import srange = require( '@stdlib/stats-base-srange' );
import sstdev = require( '@stdlib/stats-base-sstdev' );
import sstdevch = require( '@stdlib/stats-base-sstdevch' );
import sstdevpn = require( '@stdlib/stats-base-sstdevpn' );
import sstdevtk = require( '@stdlib/stats-base-sstdevtk' );
import sstdevwd = require( '@stdlib/stats-base-sstdevwd' );
import sstdevyc = require( '@stdlib/stats-base-sstdevyc' );
import stdev = require( '@stdlib/stats-base-stdev' );
import stdevch = require( '@stdlib/stats-base-stdevch' );
import stdevpn = require( '@stdlib/stats-base-stdevpn' );
import stdevtk = require( '@stdlib/stats-base-stdevtk' );
import stdevwd = require( '@stdlib/stats-base-stdevwd' );
import stdevyc = require( '@stdlib/stats-base-stdevyc' );
import svariance = require( '@stdlib/stats-base-svariance' );
import svariancech = require( '@stdlib/stats-base-svariancech' );
import svariancepn = require( '@stdlib/stats-base-svariancepn' );
import svariancetk = require( '@stdlib/stats-base-svariancetk' );
import svariancewd = require( '@stdlib/stats-base-svariancewd' );
import svarianceyc = require( '@stdlib/stats-base-svarianceyc' );
import variance = require( '@stdlib/stats-base-variance' );
import variancech = require( '@stdlib/stats-base-variancech' );
import variancepn = require( '@stdlib/stats-base-variancepn' );
import variancetk = require( '@stdlib/stats-base-variancetk' );
import variancewd = require( '@stdlib/stats-base-variancewd' );
import varianceyc = require( '@stdlib/stats-base-varianceyc' );
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
	* Computes the cumulative minimum of double-precision floating-point strided array elements.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - output array
	* @param strideY - `y` stride length
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float64Array( x.length );
	*
	* ns.dcumin( x.length, x, 1, y, 1 );
	* // y => <Float64Array>[ 1.0, -2.0, -2.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float64Array( x.length );
	*
	* ns.dcumin.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => <Float64Array>[ 1.0, -2.0, -2.0 ]
	*/
	dcumin: typeof dcumin;

	/**
	* Base (i.e., lower-level) probability distributions.
	*/
	dists: typeof dists;

	/**
	* Computes the arithmetic mean of a double-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmean( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmean.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	dmean: typeof dmean;

	/**
	* Computes the arithmetic mean of a double-precision floating-point strided array using a two-pass error correction algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmeanpn( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmeanpn.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	dmeanpn: typeof dmeanpn;

	/**
	* Computes the mean and standard deviation of a double-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - `x` stride length
	* @param out - output array
	* @param strideOut - `out` stride length
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var out = new Float64Array( 2 );
	*
	* var v = ns.dmeanstdev( x.length, 1, x, 1, out, 1 );
	* // returns <Float64Array>[ ~0.3333, ~2.0817 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var out = new Float64Array( 2 );
	*
	* var v = ns.dmeanstdev.ndarray( x.length, 1, x, 1, 0, out, 1, 0 );
	* // returns <Float64Array>[ ~0.3333, ~2.0817 ]
	*/
	dmeanstdev: typeof dmeanstdev;

	/**
	* Computes the mean and standard deviation of a double-precision floating-point strided array using a two-pass algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - `x` stride length
	* @param out - output array
	* @param strideOut - `out` stride length
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var out = new Float64Array( 2 );
	*
	* var v = ns.dmeanstdevpn( x.length, 1, x, 1, out, 1 );
	* // returns <Float64Array>[ ~0.3333, ~2.0817 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var out = new Float64Array( 2 );
	*
	* var v = ns.dmeanstdevpn.ndarray( x.length, 1, x, 1, 0, out, 1, 0 );
	* // returns <Float64Array>[ ~0.3333, ~2.0817 ]
	*/
	dmeanstdevpn: typeof dmeanstdevpn;

	/**
	* Computes the mean and variance of a double-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - `x` stride length
	* @param out - output array
	* @param strideOut - `out` stride length
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var out = new Float64Array( 2 );
	*
	* var v = ns.dmeanvar( x.length, 1, x, 1, out, 1 );
	* // returns <Float64Array>[ ~0.3333, ~4.3333 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var out = new Float64Array( 2 );
	*
	* var v = ns.dmeanvar.ndarray( x.length, 1, x, 1, 0, out, 1, 0 );
	* // returns <Float64Array>[ ~0.3333, ~4.3333 ]
	*/
	dmeanvar: typeof dmeanvar;

	/**
	* Computes the mean and variance of a double-precision floating-point strided array using a two-pass algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - `x` stride length
	* @param out - output array
	* @param strideOut - `out` stride length
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var out = new Float64Array( 2 );
	*
	* var v = ns.dmeanvarpn( x.length, 1, x, 1, out, 1 );
	* // returns <Float64Array>[ ~0.3333, ~4.3333 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var out = new Float64Array( 2 );
	*
	* var v = ns.dmeanvarpn.ndarray( x.length, 1, x, 1, 0, out, 1, 0 );
	* // returns <Float64Array>[ ~0.3333, ~4.3333 ]
	*/
	dmeanvarpn: typeof dmeanvarpn;

	/**
	* Computes the maximum value of a double-precision floating-point strided array according to a mask.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @returns maximum value
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	* var Uint8Array = require( '@stdlib/array-uint8' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 4.0, 2.0 ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0 ] );
	*
	* var v = ns.dmskmax( x.length, x, 1, mask, 1 );
	* // returns 2.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	* var Uint8Array = require( '@stdlib/array-uint8' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 4.0, 2.0 ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0 ] );
	*
	* var v = ns.dmskmax.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns 2.0
	*/
	dmskmax: typeof dmskmax;

	/**
	* Computes the minimum value of a double-precision floating-point strided array according to a mask.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @returns minimum value
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	* var Uint8Array = require( '@stdlib/array-uint8' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, -4.0, 2.0 ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0 ] );
	*
	* var v = ns.dmskmin( x.length, x, 1, mask, 1 );
	* // returns -2.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	* var Uint8Array = require( '@stdlib/array-uint8' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, -4.0, 2.0 ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0 ] );
	*
	* var v = ns.dmskmin.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns -2.0
	*/
	dmskmin: typeof dmskmin;

	/**
	* Computes the range of a double-precision floating-point strided array according to a mask.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @returns range
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	* var Uint8Array = require( '@stdlib/array-uint8' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 4.0, 2.0 ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0 ] );
	*
	* var v = ns.dmskrange( x.length, x, 1, mask, 1 );
	* // returns 4.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	* var Uint8Array = require( '@stdlib/array-uint8' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 4.0, 2.0 ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0 ] );
	*
	* var v = ns.dmskrange.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns 4.0
	*/
	dmskrange: typeof dmskrange;

	/**
	* Computes the maximum value of a double-precision floating-point strided array according to a mask, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @returns maximum value
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	* var Uint8Array = require( '@stdlib/array-uint8' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 4.0, 2.0, NaN ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	*
	* var v = ns.dnanmskmax( x.length, x, 1, mask, 1 );
	* // returns 2.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	* var Uint8Array = require( '@stdlib/array-uint8' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 4.0, 2.0, NaN ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	*
	* var v = ns.dnanmskmax.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns 2.0
	*/
	dnanmskmax: typeof dnanmskmax;

	/**
	* Computes the minimum value of a double-precision floating-point strided array according to a mask, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @returns minimum value
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	* var Uint8Array = require( '@stdlib/array-uint8' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, -4.0, 2.0, NaN ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	*
	* var v = ns.dnanmskmin( x.length, x, 1, mask, 1 );
	* // returns -2.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	* var Uint8Array = require( '@stdlib/array-uint8' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, -4.0, 2.0, NaN ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	*
	* var v = ns.dnanmskmin.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns -2.0
	*/
	dnanmskmin: typeof dnanmskmin;

	/**
	* Computes the range of a double-precision floating-point strided array according to a mask, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @returns range
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	* var Uint8Array = require( '@stdlib/array-uint8' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 4.0, 2.0, NaN ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	*
	* var v = ns.dnanmskrange( x.length, x, 1, mask, 1 );
	* // returns 4.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	* var Uint8Array = require( '@stdlib/array-uint8' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 4.0, 2.0, NaN ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	*
	* var v = ns.dnanmskrange.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns 4.0
	*/
	dnanmskrange: typeof dnanmskrange;

	/**
	* Computes the standard deviation of a double-precision floating-point strided array ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns standard deviation
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanstdev( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanstdev.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	dnanstdev: typeof dnanstdev;

	/**
	* Computes the standard error of the mean for a double-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns standard error of the mean
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsem( x.length, 1, x, 1 );
	* // returns ~1.20185
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsem.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~1.20185
	*/
	dsem: typeof dsem;

	/**
	* Computes the standard error of the mean for a double-precision floating-point strided array using a two-pass algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns standard error of the mean
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsempn( x.length, 1, x, 1 );
	* // returns ~1.20185
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsempn.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~1.20185
	*/
	dsempn: typeof dsempn;

	/**
	* Computes the arithmetic mean of a single-precision floating-point strided array using ordinary recursive summation with extended accumulation and returning an extended precision result.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsmeanors( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsmeanors.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	dsmeanors: typeof dsmeanors;

	/**
	* Computes the standard deviation of a double-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns standard deviation
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dstdev( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dstdev.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	dstdev: typeof dstdev;

	/**
	* Computes the variance of a double-precision floating-point strided array provided a known mean.
	*
	* @param N - number of indexed elements
	* @param mean - mean
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns variance
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dvarm( x.length, 1.0/3.0, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dvarm.ndarray( x.length, 1.0/3.0, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	dvarm: typeof dvarm;

	/**
	* Computes the variance of a double-precision floating-point strided array provided a known mean and using Neely's correction algorithm.
	*
	* @param N - number of indexed elements
	* @param mean - mean
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns variance
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dvarmpn( x.length, 1.0/3.0, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dvarmpn.ndarray( x.length, 1.0/3.0, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	dvarmpn: typeof dvarmpn;

	/**
	* Computes the maximum value of a strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns maximum value
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.max( x.length, x, 1 );
	* // returns 2.0
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.max.ndarray( x.length, x, 1, 0 );
	* // returns 2.0
	*/
	max: typeof max;

	/**
	* Calculates the maximum value of a strided array via a callback function.
	*
	* ## Notes
	*
	* -   The callback function is provided four arguments:
	*
	*     -   `value`: array element
	*     -   `aidx`: array index
	*     -   `sidx`: strided index (offset + aidx*stride)
	*     -   `array`: input array
	*
	* -   The callback function should return a numeric value. If the callback function does not return any value (or equivalently, explicitly returns `undefined`), the value is ignored.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @param clbk - callback
	* @param thisArg - execution context
	* @returns maximum value
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
	*
	* function accessor( v ) {
	*     return v * 2.0;
	* }
	*
	* var v = ns.maxBy( x.length, x, 1, accessor );
	* // returns 8.0
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
	*
	* function accessor( v ) {
	*     return v * 2.0;
	* }
	*
	* var v = ns.maxBy.ndarray( x.length, x, 1, 0, accessor );
	* // returns 8.0
	*/
	maxBy: typeof maxBy;

	/**
	* Computes the maximum absolute value of a strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns maximum absolute value
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.maxabs( x.length, x, 1 );
	* // returns 2.0
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.maxabs.ndarray( x.length, x, 1, 0 );
	* // returns 2.0
	*/
	maxabs: typeof maxabs;

	/**
	* Computes the maximum value of a sorted strided array.
	*
	* @param N - number of indexed elements
	* @param x - sorted input array
	* @param strideX - stride length
	* @returns maximum value
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0 ];
	*
	* var v = ns.maxsorted( x.length, x, 1 );
	* // returns 3.0
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0 ];
	*
	* var v = ns.maxsorted.ndarray( x.length, x, 1, 0 );
	* // returns 3.0
	*/
	maxsorted: typeof maxsorted;

	/**
	* Computes the arithmetic mean of a strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns arithmetic mean
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.mean( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.mean.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	mean: typeof mean;

	/**
	* Computes the arithmetic mean of a strided array using an improved Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns arithmetic mean
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.meankbn( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.meankbn.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	meankbn: typeof meankbn;

	/**
	* Computes the arithmetic mean of a strided array using a second-order iterative Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns arithmetic mean
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.meankbn2( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.meankbn2.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	meankbn2: typeof meankbn2;

	/**
	* Computes the arithmetic mean of a strided array using ordinary recursive summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns arithmetic mean
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.meanors( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.meanors.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	meanors: typeof meanors;

	/**
	* Computes the arithmetic mean of a strided array using a two-pass error correction algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns arithmetic mean
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.meanpn( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.meanpn.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	meanpn: typeof meanpn;

	/**
	* Computes the arithmetic mean of a strided array using pairwise summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns arithmetic mean
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.meanpw( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.meanpw.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	meanpw: typeof meanpw;

	/**
	* Computes the arithmetic mean of a strided array using Welford's algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.meanwd( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.meanwd.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	meanwd: typeof meanwd;

	/**
	* Computes the median value of a sorted strided array.
	*
	* @param N - number of indexed elements
	* @param x - sorted input array
	* @param strideX - stride length
	* @returns median value
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0 ];
	*
	* var v = ns.mediansorted( x.length, x, 1 );
	* // returns 2.0
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0 ];
	*
	* var v = ns.mediansorted.ndarray( x.length, x, 1, 0 );
	* // returns 2.0
	*/
	mediansorted: typeof mediansorted;

	/**
	* Computes the minimum value of a strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns minimum value
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.min( x.length, x, 1 );
	* // returns -2.0
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.min.ndarray( x.length, x, 1, 0 );
	* // returns -2.0
	*/
	min: typeof min;

	/**
	* Calculates the minimum value of a strided array via a callback function.
	*
	* ## Notes
	*
	* -   The callback function is provided four arguments:
	*
	*     -   `value`: array element
	*     -   `aidx`: array index
	*     -   `sidx`: strided index (offset + aidx*stride)
	*     -   `array`: input array
	*
	* -   The callback function should return a numeric value. If the callback function does not return any value (or equivalently, explicitly returns `undefined`), the value is ignored.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @param clbk - callback
	* @param thisArg - execution context
	* @returns minimum value
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
	*
	* function accessor( v ) {
	*     return v * 2.0;
	* }
	*
	* var v = ns.minBy( x.length, x, 1, accessor );
	* // returns -10.0
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
	*
	* function accessor( v ) {
	*     return v * 2.0;
	* }
	*
	* var v = ns.minBy.ndarray( x.length, x, 1, 0, accessor );
	* // returns -10.0
	*/
	minBy: typeof minBy;

	/**
	* Computes the minimum absolute value of a strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns minimum absolute value
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.minabs( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.minabs.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	minabs: typeof minabs;

	/**
	* Computes the minimum value of a sorted strided array.
	*
	* @param N - number of indexed elements
	* @param x - sorted input array
	* @param strideX - stride length
	* @returns minimum value
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0 ];
	*
	* var v = ns.minsorted( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0 ];
	*
	* var v = ns.minsorted.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	minsorted: typeof minsorted;

	/**
	* Computes the maximum value of a strided array according to a mask.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param mask - mask array
	* @param strideMask - stride length for `mask`
	* @returns maximum value
	*
	* @example
	* var x = [ 1.0, -2.0, 4.0, 2.0 ];
	* var mask = [ 0, 0, 1, 0 ];
	*
	* var v = ns.mskmax( x.length, x, 1, mask, 1 );
	* // returns 2.0
	*
	* @example
	* var x = [ 1.0, -2.0, 4.0, 2.0 ];
	* var mask = [ 0, 0, 1, 0 ];
	*
	* var v = ns.mskmax.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns 2.0
	*/
	mskmax: typeof mskmax;

	/**
	* Computes the minimum value of a strided array according to a mask.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param mask - mask array
	* @param strideMask - stride length for `mask`
	* @returns minimum value
	*
	* @example
	* var x = [ 1.0, -2.0, -4.0, 2.0 ];
	* var mask = [ 0, 0, 1, 0 ];
	*
	* var v = ns.mskmin( x.length, x, 1, mask, 1 );
	* // returns -2.0
	*
	* @example
	* var x = [ 1.0, -2.0, -4.0, 2.0 ];
	* var mask = [ 0, 0, 1, 0 ];
	*
	* var v = ns.mskmin.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns -2.0
	*/
	mskmin: typeof mskmin;

	/**
	* Computes the range of a strided array according to a mask.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param mask - mask array
	* @param strideMask - stride length for `mask`
	* @returns range
	*
	* @example
	* var x = [ 1.0, -2.0, 4.0, 2.0 ];
	* var mask = [ 0, 0, 1, 0 ];
	*
	* var v = ns.mskrange( x.length, x, 1, mask, 1 );
	* // returns 4.0
	*
	* @example
	* var x = [ 1.0, -2.0, 4.0, 2.0 ];
	* var mask = [ 0, 0, 1, 0 ];
	*
	* var v = ns.mskrange.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns 4.0
	*/
	mskrange: typeof mskrange;

	/**
	* Computes the maximum value of a strided array, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns maximum value
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanmax( x.length, x, 1 );
	* // returns 2.0
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanmax.ndarray( x.length, x, 1, 0 );
	* // returns 2.0
	*/
	nanmax: typeof nanmax;

	/**
	* Calculates the maximum value of a strided array via a callback function, ignoring `NaN` values.
	*
	* ## Notes
	*
	* -   The callback function is provided four arguments:
	*
	*     -   `value`: array element
	*     -   `aidx`: array index
	*     -   `sidx`: strided index (offset + aidx*stride)
	*     -   `array`: input array
	*
	* -   The callback function should return a numeric value.
	*
	* -   If the callback function does not return any value (or equivalently, explicitly returns `undefined`), the value is ignored.
	*
	* -   If the callback function returns `NaN`, the value is ignored.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @param clbk - callback
	* @param thisArg - execution context
	* @returns maximum value
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, NaN, 0.0, -1.0, -3.0 ];
	*
	* function accessor( v ) {
	*     return v * 2.0;
	* }
	*
	* var v = ns.nanmaxBy( x.length, x, 1, accessor );
	* // returns 8.0
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, NaN, 0.0, -1.0, -3.0 ];
	*
	* function accessor( v ) {
	*     return v * 2.0;
	* }
	*
	* var v = ns.nanmaxBy.ndarray( x.length, x, 1, 0, accessor );
	* // returns 8.0
	*/
	nanmaxBy: typeof nanmaxBy;

	/**
	* Computes the maximum absolute value of a strided array, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns maximum absolute value
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanmaxabs( x.length, x, 1 );
	* // returns 2.0
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanmaxabs.ndarray( x.length, x, 1, 0 );
	* // returns 2.0
	*/
	nanmaxabs: typeof nanmaxabs;

	/**
	* Computes the arithmetic mean of a strided array, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns arithmetic mean
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanmean( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanmean.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	nanmean: typeof nanmean;

	/**
	* Computes the arithmetic mean of a strided array, ignoring `NaN` values and using ordinary recursive summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns arithmetic mean
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanmeanors( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanmeanors.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	nanmeanors: typeof nanmeanors;

	/**
	* Computes the arithmetic mean of a strided array, ignoring `NaN` values and using a two-pass error correction algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns arithmetic mean
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanmeanpn( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanmeanpn.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	nanmeanpn: typeof nanmeanpn;

	/**
	* Computes the arithmetic mean of a strided array, ignoring `NaN` values and using Welford's algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns arithmetic mean
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanmeanwd( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanmeanwd.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	nanmeanwd: typeof nanmeanwd;

	/**
	* Computes the minimum value of a strided array, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns minimum value
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanmin( x.length, x, 1 );
	* // returns -2.0
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanmin.ndarray( x.length, x, 1, 0 );
	* // returns -2.0
	*/
	nanmin: typeof nanmin;

	/**
	* Calculates the minimum value of a strided array via a callback function, ignoring `NaN` values.
	*
	* ## Notes
	*
	* -   The callback function is provided four arguments:
	*
	*     -   `value`: array element
	*     -   `aidx`: array index
	*     -   `sidx`: strided index (offset + aidx*stride)
	*     -   `array`: input array
	*
	* -   The callback function should return a numeric value.
	*
	* -   If the callback function does not return any value (or equivalently, explicitly returns `undefined`), the value is ignored.
	*
	* -   If the callback function returns `NaN`, the value is ignored.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @param clbk - callback
	* @param thisArg - execution context
	* @returns minimum value
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, NaN, 0.0, -1.0, -3.0 ];
	*
	* function accessor( v ) {
	*     return v * 2.0;
	* }
	*
	* var v = ns.nanminBy( x.length, x, 1, accessor );
	* // returns -10.0
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, NaN, 0.0, -1.0, -3.0 ];
	*
	* function accessor( v ) {
	*     return v * 2.0;
	* }
	*
	* var v = ns.nanminBy.ndarray( x.length, x, 1, 0, accessor );
	* // returns -10.0
	*/
	nanminBy: typeof nanminBy;

	/**
	* Computes the minimum absolute value of a strided array, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns minimum absolute value
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanminabs( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanminabs.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	nanminabs: typeof nanminabs;

	/**
	* Computes the maximum value of a strided array according to a mask, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @returns maximum value
	*
	* @example
	* var x = [ 1.0, -2.0, 4.0, 2.0, NaN ];
	* var mask = [ 0, 0, 1, 0, 0 ];
	*
	* var v = ns.nanmskmax( x.length, x, 1, mask, 1 );
	* // returns 2.0
	*
	* @example
	* var x = [ 1.0, -2.0, 4.0, 2.0, NaN ];
	* var mask = [ 0, 0, 1, 0, 0 ];
	*
	* var v = ns.nanmskmax.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns 2.0
	*/
	nanmskmax: typeof nanmskmax;

	/**
	* Computes the minimum value of a strided array according to a mask, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @returns minimum value
	*
	* @example
	* var x = [ 1.0, -2.0, -4.0, 2.0, NaN ];
	* var mask = [ 0, 0, 1, 0, 0 ];
	*
	* var v = ns.nanmskmin( x.length, x, 1, mask, 1 );
	* // returns -2.0
	*
	* @example
	* var x = [ 1.0, -2.0, -4.0, 2.0, NaN ];
	* var mask = [ 0, 0, 1, 0, 0 ];
	*
	* var v = ns.nanmskmin.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns -2.0
	*/
	nanmskmin: typeof nanmskmin;

	/**
	* Computes the range of a strided array according to a mask, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param mask - mask array
	* @param strideMask - stride length for `x`
	* @returns range
	*
	* @example
	* var x = [ 1.0, -2.0, 4.0, 2.0, NaN ];
	* var mask = [ 0, 0, 1, 0, 0 ];
	*
	* var v = ns.nanmskrange( x.length, x, 1, mask, 1 );
	* // returns 4.0
	*
	* @example
	* var x = [ 1.0, -2.0, 4.0, 2.0, NaN ];
	* var mask = [ 0, 0, 1, 0, 0 ];
	*
	* var v = ns.nanmskrange.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns 4.0
	*/
	nanmskrange: typeof nanmskrange;

	/**
	* Computes the range of a strided array, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns range
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanrange( x.length, x, 1 );
	* // returns 4.0
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanrange.ndarray( x.length, x, 1, 0 );
	* // returns 4.0
	*/
	nanrange: typeof nanrange;

	/**
	* Calculates the range of a strided array via a callback function, ignoring `NaN` values.
	*
	* ## Notes
	*
	* -   The callback function is provided four arguments:
	*
	*     -   `value`: array element
	*     -   `aidx`: array index
	*     -   `sidx`: strided index (offset + aidx*stride)
	*     -   `array`: input array
	*
	* -   The callback function should return a numeric value.
	*
	* -   If the callback function does not return any value (or equivalently, explicitly returns `undefined`), the value is ignored.
	*
	* -   If the callback function returns `NaN`, the value is ignored.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @param clbk - callback
	* @param thisArg - execution context
	* @returns range
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, NaN, 0.0, -1.0, -3.0 ];
	*
	* function accessor( v ) {
	*     return v * 2.0;
	* }
	*
	* var v = ns.nanrangeBy( x.length, x, 1, accessor );
	* // returns 18.0
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, NaN, 0.0, -1.0, -3.0 ];
	*
	* function accessor( v ) {
	*     return v * 2.0;
	* }
	*
	* var v = ns.nanrangeBy.ndarray( x.length, x, 1, 0, accessor );
	* // returns 18.0
	*/
	nanrangeBy: typeof nanrangeBy;

	/**
	* Computes the standard deviation of a strided array ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns standard deviation
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanstdev( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanstdev.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	nanstdev: typeof nanstdev;

	/**
	* Computes the standard deviation of a strided array ignoring `NaN` values and using a one-pass trial mean algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns standard deviation
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanstdevch( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanstdevch.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	nanstdevch: typeof nanstdevch;

	/**
	* Computes the standard deviation of a strided array ignoring `NaN` values and using a two-pass algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns standard deviation
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanstdevpn( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanstdevpn.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	nanstdevpn: typeof nanstdevpn;

	/**
	* Computes the standard deviation of a strided array ignoring `NaN` values and using a one-pass textbook algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns standard deviation
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanstdevtk( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanstdevtk.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	nanstdevtk: typeof nanstdevtk;

	/**
	* Computes the standard deviation of a strided array ignoring `NaN` values and using Welford's algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns standard deviation
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanstdevwd( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanstdevwd.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	nanstdevwd: typeof nanstdevwd;

	/**
	* Computes the standard deviation of a strided array ignoring `NaN` values and using a one-pass algorithm proposed by Youngs and Cramer.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns standard deviation
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanstdevyc( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanstdevyc.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	nanstdevyc: typeof nanstdevyc;

	/**
	* Computes the variance of a strided array ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns variance
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanvariance( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanvariance.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	nanvariance: typeof nanvariance;

	/**
	* Computes the variance of a strided array ignoring `NaN` values and using a one-pass trial mean algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns variance
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanvariancech( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanvariancech.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	nanvariancech: typeof nanvariancech;

	/**
	* Computes the variance of a strided array ignoring `NaN` values and using a two-pass algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns variance
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanvariancepn( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanvariancepn.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	nanvariancepn: typeof nanvariancepn;

	/**
	* Computes the variance of a strided array ignoring `NaN` values and using a one-pass textbook algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns variance
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanvariancetk( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanvariancetk.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	nanvariancetk: typeof nanvariancetk;

	/**
	* Computes the variance of a strided array ignoring `NaN` values and using Welford's algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns variance
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanvariancewd( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanvariancewd.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	nanvariancewd: typeof nanvariancewd;

	/**
	* Computes the variance of a strided array ignoring `NaN` values and using a one-pass algorithm proposed by Youngs and Cramer.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns variance
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanvarianceyc( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanvarianceyc.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	nanvarianceyc: typeof nanvarianceyc;

	/**
	* Computes the range of a strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns range
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.range( x.length, x, 1 );
	* // returns 4.0
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.range.ndarray( x.length, x, 1, 0 );
	* // returns 4.0
	*/
	range: typeof range;

	/**
	* Calculates the range of a strided array via a callback function.
	*
	* ## Notes
	*
	* -   The callback function is provided four arguments:
	*
	*     -   `value`: array element
	*     -   `aidx`: array index
	*     -   `sidx`: strided index (offset + aidx*stride)
	*     -   `array`: input array
	*
	* -   The callback function should return a numeric value. If the callback function does not return any value (or equivalently, explicitly returns `undefined`), the value is ignored.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @param clbk - callback
	* @param thisArg - execution context
	* @returns range
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
	*
	* function accessor( v ) {
	*     return v * 2.0;
	* }
	*
	* var v = ns.rangeBy( x.length, x, 1, accessor );
	* // returns 18.0
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
	*
	* function accessor( v ) {
	*     return v * 2.0;
	* }
	*
	* var v = ns.rangeBy.ndarray( x.length, x, 1, 0, accessor );
	* // returns 18.0
	*/
	rangeBy: typeof rangeBy;

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
	* Computes the arithmetic mean of a single-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.smean( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.smean.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	smean: typeof smean;

	/**
	* Computes the arithmetic mean of a single-precision floating-point strided array using an improved Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.smeankbn( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.smeankbn.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	smeankbn: typeof smeankbn;

	/**
	* Computes the arithmetic mean of a single-precision floating-point strided array using a second-order iterative Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.smeankbn2( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.smeankbn2.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	smeankbn2: typeof smeankbn2;

	/**
	* Computes the arithmetic mean of a single-precision floating-point strided array using a one-pass trial mean algorithm with pairwise summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.smeanlipw( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.smeanlipw.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	smeanlipw: typeof smeanlipw;

	/**
	* Computes the arithmetic mean of a single-precision floating-point strided array using ordinary recursive summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.smeanors( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.smeanors.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	smeanors: typeof smeanors;

	/**
	* Computes the arithmetic mean of a single-precision floating-point strided array using a two-pass error correction algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.smeanpn( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.smeanpn.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	smeanpn: typeof smeanpn;

	/**
	* Computes the mid-range of a single-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns mid-range
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.smidrange( x.length, x, 1 );
	* // returns 0.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.smidrange.ndarray( x.length, x, 1, 0 );
	* // returns 0.0
	*/
	smidrange: typeof smidrange;

	/**
	* Computes the maximum value of a single-precision floating-point strided array, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns maximum value
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanmax( x.length, x, 1 );
	* // returns 2.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanmax.ndarray( x.length, x, 1, 0 );
	* // returns 2.0
	*/
	snanmax: typeof snanmax;

	/**
	* Computes the maximum absolute value of a single-precision floating-point strided array, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns maximum absolute value
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanmaxabs( x.length, x, 1 );
	* // returns 2.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanmaxabs.ndarray( x.length, x, 1, 0 );
	* // returns 2.0
	*/
	snanmaxabs: typeof snanmaxabs;

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
	* Computes the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values and using ordinary recursive summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanmeanors( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanmeanors.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	snanmeanors: typeof snanmeanors;

	/**
	* Computes the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values and using a two-pass error correction algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanmeanpn( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanmeanpn.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	snanmeanpn: typeof snanmeanpn;

	/**
	* Computes the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values and using Welford's algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanmeanwd( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanmeanwd.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	snanmeanwd: typeof snanmeanwd;

	/**
	* Computes the minimum value of a single-precision floating-point strided array, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns minimum value
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanmin( x.length, x, 1 );
	* // returns -2.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanmin.ndarray( x.length, x, 1, 0 );
	* // returns -2.0
	*/
	snanmin: typeof snanmin;

	/**
	* Computes the minimum absolute value of a single-precision floating-point strided array, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns minimum absolute value
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanminabs( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanminabs.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	snanminabs: typeof snanminabs;

	/**
	* Computes the maximum value of a single-precision floating-point strided array according to a mask, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @returns maximum value
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	* var Uint8Array = require( '@stdlib/array-uint8' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 4.0, 2.0, NaN ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	*
	* var v = ns.snanmskmax( x.length, x, 1, mask, 1 );
	* // returns 2.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	* var Uint8Array = require( '@stdlib/array-uint8' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 4.0, 2.0, NaN ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	*
	* var v = ns.snanmskmax.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns 2.0
	*/
	snanmskmax: typeof snanmskmax;

	/**
	* Computes the minimum value of a single-precision floating-point strided array according to a mask, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @returns minimum value
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	* var Uint8Array = require( '@stdlib/array-uint8' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, -4.0, 2.0, NaN ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	*
	* var v = ns.snanmskmin( x.length, x, 1, mask, 1 );
	* // returns -2.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	* var Uint8Array = require( '@stdlib/array-uint8' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, -4.0, 2.0, NaN ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	*
	* var v = ns.snanmskmin.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns -2.0
	*/
	snanmskmin: typeof snanmskmin;

	/**
	* Computes the range of a single-precision floating-point strided array according to a mask, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @returns range
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	* var Uint8Array = require( '@stdlib/array-uint8' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 4.0, 2.0, NaN ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	*
	* var v = ns.snanmskrange( x.length, x, 1, mask, 1 );
	* // returns 4.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	* var Uint8Array = require( '@stdlib/array-uint8' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 4.0, 2.0, NaN ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	*
	* var v = ns.snanmskrange.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns 4.0
	*/
	snanmskrange: typeof snanmskrange;

	/**
	* Computes the range of a single-precision floating-point strided array, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns range
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanrange( x.length, x, 1 );
	* // returns 4.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanrange.ndarray( x.length, x, 1, 0 );
	* // returns 4.0
	*/
	snanrange: typeof snanrange;

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
	* Computes the range of a single-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns range
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.srange( x.length, x, 1 );
	* // returns 4.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.srange.ndarray( x.length, x, 1, 0 );
	* // returns 4.0
	*/
	srange: typeof srange;

	/**
	* Computes the standard deviation of a single-precision floating-point strided array.
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
	* var v = ns.sstdev( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sstdev.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	sstdev: typeof sstdev;

	/**
	* Computes the standard deviation of a single-precision floating-point strided array using a one-pass trial mean algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns standard deviation
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sstdevch( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sstdevch.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	sstdevch: typeof sstdevch;

	/**
	* Computes the standard deviation of a single-precision floating-point strided array using a two-pass algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns standard deviation
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sstdevpn( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sstdevpn.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	sstdevpn: typeof sstdevpn;

	/**
	* Computes the standard deviation of a single-precision floating-point strided array using a one-pass textbook algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns standard deviation
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sstdevtk( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sstdevtk.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	sstdevtk: typeof sstdevtk;

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
	* Computes the standard deviation of a single-precision floating-point strided array using a one-pass algorithm proposed by Youngs and Cramer.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns standard deviation
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sstdevyc( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sstdevyc.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	sstdevyc: typeof sstdevyc;

	/**
	* Computes the standard deviation of a strided array.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns standard deviation
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.stdev( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.stdev.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	stdev: typeof stdev;

	/**
	* Computes the standard deviation of a strided array using a one-pass trial mean algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns standard deviation
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.stdevch( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.stdevch.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	stdevch: typeof stdevch;

	/**
	* Computes the standard deviation of a strided array using a two-pass algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns standard deviation
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.stdevpn( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.stdevpn.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	stdevpn: typeof stdevpn;

	/**
	* Computes the standard deviation of a strided array using a one-pass textbook algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns standard deviation
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.stdevtk( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.stdevtk.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	stdevtk: typeof stdevtk;

	/**
	* Computes the standard deviation of a strided array using Welford's algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns standard deviation
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.stdevwd( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.stdevwd.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	stdevwd: typeof stdevwd;

	/**
	* Computes the standard deviation of a strided array using a one-pass algorithm proposed by Youngs and Cramer.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns standard deviation
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.stdevyc( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.stdevyc.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	stdevyc: typeof stdevyc;

	/**
	* Computes the variance of a single-precision floating-point strided array.
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
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.svariance( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.svariance.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	svariance: typeof svariance;

	/**
	* Computes the variance of a single-precision floating-point strided array using a one-pass trial mean algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns variance
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.svariancech( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.svariancech.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	svariancech: typeof svariancech;

	/**
	* Computes the variance of a single-precision floating-point strided array using a two-pass algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns variance
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.svariancepn( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.svariancepn.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	svariancepn: typeof svariancepn;

	/**
	* Computes the variance of a single-precision floating-point strided array using a one-pass textbook algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns variance
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.svariancetk( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.svariancetk.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	svariancetk: typeof svariancetk;

	/**
	* Computes the variance of a single-precision floating-point strided array using Welford's algorithm.
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
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.svariancewd( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.svariancewd.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	svariancewd: typeof svariancewd;

	/**
	* Computes the variance of a single-precision floating-point strided array using a one-pass algorithm proposed by Youngs and Cramer.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns variance
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.svarianceyc( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.svarianceyc.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	svarianceyc: typeof svarianceyc;

	/**
	* Computes the variance of a strided array.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns variance
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.variance( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.variance.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	variance: typeof variance;

	/**
	* Computes the variance of a strided array using a one-pass trial mean algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns variance
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.variancech( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.variancech.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	variancech: typeof variancech;

	/**
	* Computes the variance of a strided array using a two-pass algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns variance
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.variancepn( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.variancepn.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	variancepn: typeof variancepn;

	/**
	* Computes the variance of a strided array using a one-pass textbook algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns variance
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.variancetk( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.variancetk.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	variancetk: typeof variancetk;

	/**
	* Computes the variance of a strided array using Welford's algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns variance
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.variancewd( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.variancewd.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	variancewd: typeof variancewd;

	/**
	* Computes the variance of a strided array using a one-pass algorithm proposed by Youngs and Cramer.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns variance
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.varianceyc( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.varianceyc.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	varianceyc: typeof varianceyc;

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
