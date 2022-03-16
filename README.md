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

# Base Statistics

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Base (i.e., lower-level) statistical functions.



<section class="usage">

## Usage

```javascript
import stats from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base@esm/index.mjs';
```

#### stats

Namespace containing "base" (i.e., lower-level) statistical functions.

```javascript
var ns = stats;
// returns {...}
```

The namespace contains the following sub-namespaces:

<!-- <toc pattern="dists"> -->

<div class="namespace-toc">

-   <span class="signature">[`dists`][@stdlib/stats/base/dists]</span><span class="delimiter">: </span><span class="description">base (i.e., lower-level) probability distribution modules.</span>

</div>

<!-- </toc> -->

The namespace contains the following statistical functions:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cumax( N, x, strideX, y, strideY )`][@stdlib/stats/base/cumax]</span><span class="delimiter">: </span><span class="description">calculate the cumulative maximum of a strided array.</span>
-   <span class="signature">[`cumaxabs( N, x, strideX, y, strideY )`][@stdlib/stats/base/cumaxabs]</span><span class="delimiter">: </span><span class="description">calculate the cumulative maximum absolute value of a strided array.</span>
-   <span class="signature">[`cumin( N, x, strideX, y, strideY )`][@stdlib/stats/base/cumin]</span><span class="delimiter">: </span><span class="description">calculate the cumulative minimum of a strided array.</span>
-   <span class="signature">[`cuminabs( N, x, strideX, y, strideY )`][@stdlib/stats/base/cuminabs]</span><span class="delimiter">: </span><span class="description">calculate the cumulative minimum absolute value of a strided array.</span>
-   <span class="signature">[`dcumax( N, x, strideX, y, strideY )`][@stdlib/stats/base/dcumax]</span><span class="delimiter">: </span><span class="description">calculate the cumulative maximum of double-precision floating-point strided array elements.</span>
-   <span class="signature">[`dcumaxabs( N, x, strideX, y, strideY )`][@stdlib/stats/base/dcumaxabs]</span><span class="delimiter">: </span><span class="description">calculate the cumulative maximum absolute value of double-precision floating-point strided array elements.</span>
-   <span class="signature">[`dcumin( N, x, strideX, y, strideY )`][@stdlib/stats/base/dcumin]</span><span class="delimiter">: </span><span class="description">calculate the cumulative minimum of double-precision floating-point strided array elements.</span>
-   <span class="signature">[`dcuminabs( N, x, strideX, y, strideY )`][@stdlib/stats/base/dcuminabs]</span><span class="delimiter">: </span><span class="description">calculate the cumulative minimum absolute value of double-precision floating-point strided array elements.</span>
-   <span class="signature">[`dmax( N, x, stride )`][@stdlib/stats/base/dmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dmaxabs( N, x, stride )`][@stdlib/stats/base/dmaxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dmaxabssorted( N, x, stride )`][@stdlib/stats/base/dmaxabssorted]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a sorted double-precision floating-point strided array.</span>
-   <span class="signature">[`dmaxsorted( N, x, stride )`][@stdlib/stats/base/dmaxsorted]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a sorted double-precision floating-point strided array.</span>
-   <span class="signature">[`dmean( N, x, stride )`][@stdlib/stats/base/dmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dmeankbn( N, x, stride )`][@stdlib/stats/base/dmeankbn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dmeankbn2( N, x, stride )`][@stdlib/stats/base/dmeankbn2]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dmeanli( N, x, stride )`][@stdlib/stats/base/dmeanli]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`dmeanlipw( N, x, stride )`][@stdlib/stats/base/dmeanlipw]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array using a one-pass trial mean algorithm with pairwise summation.</span>
-   <span class="signature">[`dmeanors( N, x, stride )`][@stdlib/stats/base/dmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array using ordinary recursive summation.</span>
-   <span class="signature">[`dmeanpn( N, x, stride )`][@stdlib/stats/base/dmeanpn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array using a two-pass error correction algorithm.</span>
-   <span class="signature">[`dmeanpw( N, x, stride )`][@stdlib/stats/base/dmeanpw]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array using pairwise summation.</span>
-   <span class="signature">[`dmeanstdev( N, correction, x, strideX, out, strideOut )`][@stdlib/stats/base/dmeanstdev]</span><span class="delimiter">: </span><span class="description">calculate the mean and standard deviation of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dmeanstdevpn( N, correction, x, strideX, out, strideOut )`][@stdlib/stats/base/dmeanstdevpn]</span><span class="delimiter">: </span><span class="description">calculate the mean and standard deviation of a double-precision floating-point strided array using a two-pass algorithm.</span>
-   <span class="signature">[`dmeanvar( N, correction, x, strideX, out, strideOut )`][@stdlib/stats/base/dmeanvar]</span><span class="delimiter">: </span><span class="description">calculate the mean and variance of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dmeanvarpn( N, correction, x, strideX, out, strideOut )`][@stdlib/stats/base/dmeanvarpn]</span><span class="delimiter">: </span><span class="description">calculate the mean and variance of a double-precision floating-point strided array using a two-pass algorithm.</span>
-   <span class="signature">[`dmeanwd( N, x, stride )`][@stdlib/stats/base/dmeanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array using Welford's algorithm.</span>
-   <span class="signature">[`dmediansorted( N, x, stride )`][@stdlib/stats/base/dmediansorted]</span><span class="delimiter">: </span><span class="description">calculate the median value of a sorted double-precision floating-point strided array.</span>
-   <span class="signature">[`dmidrange( N, x, stride )`][@stdlib/stats/base/dmidrange]</span><span class="delimiter">: </span><span class="description">calculate the mid-range of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dmin( N, x, stride )`][@stdlib/stats/base/dmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dminabs( N, x, stride )`][@stdlib/stats/base/dminabs]</span><span class="delimiter">: </span><span class="description">calculate the minimum absolute value of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dminsorted( N, x, stride )`][@stdlib/stats/base/dminsorted]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a sorted double-precision floating-point strided array.</span>
-   <span class="signature">[`dmskmax( N, x, strideX, mask, strideMask )`][@stdlib/stats/base/dmskmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a double-precision floating-point strided array according to a mask.</span>
-   <span class="signature">[`dmskmin( N, x, strideX, mask, strideMask )`][@stdlib/stats/base/dmskmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a double-precision floating-point strided array according to a mask.</span>
-   <span class="signature">[`dmskrange( N, x, strideX, mask, strideMask )`][@stdlib/stats/base/dmskrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a double-precision floating-point strided array according to a mask.</span>
-   <span class="signature">[`dnanmax( N, x, stride )`][@stdlib/stats/base/dnanmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a double-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanmaxabs( N, x, stride )`][@stdlib/stats/base/dnanmaxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a double-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanmean( N, x, stride )`][@stdlib/stats/base/dnanmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanmeanors( N, x, stride )`][@stdlib/stats/base/dnanmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array, ignoring `NaN` values and using ordinary recursive summation.</span>
-   <span class="signature">[`dnanmeanpn( N, x, stride )`][@stdlib/stats/base/dnanmeanpn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array, ignoring `NaN` values and using a two-pass error correction algorithm.</span>
-   <span class="signature">[`dnanmeanpw( N, x, stride )`][@stdlib/stats/base/dnanmeanpw]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array, ignoring `NaN` values and using pairwise summation.</span>
-   <span class="signature">[`dnanmeanwd( N, x, stride )`][@stdlib/stats/base/dnanmeanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array, using Welford's algorithm and ignoring `NaN` values.</span>
-   <span class="signature">[`dnanmin( N, x, stride )`][@stdlib/stats/base/dnanmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a double-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanminabs( N, x, stride )`][@stdlib/stats/base/dnanminabs]</span><span class="delimiter">: </span><span class="description">calculate the minimum absolute value of a double-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanmskmax( N, x, strideX, mask, strideMask )`][@stdlib/stats/base/dnanmskmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a double-precision floating-point strided array according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanmskmin( N, x, strideX, mask, strideMask )`][@stdlib/stats/base/dnanmskmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a double-precision floating-point strided array according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanmskrange( N, x, strideX, mask, strideMask )`][@stdlib/stats/base/dnanmskrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a double-precision floating-point strided array according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanrange( N, x, stride )`][@stdlib/stats/base/dnanrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a double-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanstdev( N, correction, x, stride )`][@stdlib/stats/base/dnanstdev]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array ignoring `NaN` values.</span>
-   <span class="signature">[`dnanstdevch( N, correction, x, stride )`][@stdlib/stats/base/dnanstdevch]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array ignoring `NaN` values and using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`dnanstdevpn( N, correction, x, stride )`][@stdlib/stats/base/dnanstdevpn]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array ignoring `NaN` values and using a two-pass algorithm.</span>
-   <span class="signature">[`dnanstdevtk( N, correction, x, stride )`][@stdlib/stats/base/dnanstdevtk]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array ignoring `NaN` values and using a one-pass textbook algorithm.</span>
-   <span class="signature">[`dnanstdevwd( N, correction, x, stride )`][@stdlib/stats/base/dnanstdevwd]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array ignoring `NaN` values and using Welford's algorithm.</span>
-   <span class="signature">[`dnanstdevyc( N, correction, x, stride )`][@stdlib/stats/base/dnanstdevyc]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array ignoring `NaN` values and using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`dnanvariance( N, correction, x, stride )`][@stdlib/stats/base/dnanvariance]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array ignoring `NaN` values.</span>
-   <span class="signature">[`dnanvariancech( N, correction, x, stride )`][@stdlib/stats/base/dnanvariancech]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array ignoring `NaN` values and using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`dnanvariancepn( N, correction, x, stride )`][@stdlib/stats/base/dnanvariancepn]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array ignoring `NaN` values and using a two-pass algorithm.</span>
-   <span class="signature">[`dnanvariancetk( N, correction, x, stride )`][@stdlib/stats/base/dnanvariancetk]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array ignoring `NaN` values and using a one-pass textbook algorithm.</span>
-   <span class="signature">[`dnanvariancewd( N, correction, x, stride )`][@stdlib/stats/base/dnanvariancewd]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array ignoring `NaN` values and using Welford's algorithm.</span>
-   <span class="signature">[`dnanvarianceyc( N, correction, x, stride )`][@stdlib/stats/base/dnanvarianceyc]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array ignoring `NaN` values and using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`drange( N, x, stride )`][@stdlib/stats/base/drange]</span><span class="delimiter">: </span><span class="description">calculate the range of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dsem( N, correction, x, stride )`][@stdlib/stats/base/dsem]</span><span class="delimiter">: </span><span class="description">calculate the standard error of the mean of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dsemch( N, correction, x, stride )`][@stdlib/stats/base/dsemch]</span><span class="delimiter">: </span><span class="description">calculate the standard error of the mean of a double-precision floating-point strided array using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`dsempn( N, correction, x, stride )`][@stdlib/stats/base/dsempn]</span><span class="delimiter">: </span><span class="description">calculate the standard error of the mean of a double-precision floating-point strided array using a two-pass algorithm.</span>
-   <span class="signature">[`dsemtk( N, correction, x, stride )`][@stdlib/stats/base/dsemtk]</span><span class="delimiter">: </span><span class="description">calculate the standard error of the mean of a double-precision floating-point strided array using a one-pass textbook algorithm.</span>
-   <span class="signature">[`dsemwd( N, correction, x, stride )`][@stdlib/stats/base/dsemwd]</span><span class="delimiter">: </span><span class="description">calculate the standard error of the mean of a double-precision floating-point strided array using Welford's algorithm.</span>
-   <span class="signature">[`dsemyc( N, correction, x, stride )`][@stdlib/stats/base/dsemyc]</span><span class="delimiter">: </span><span class="description">calculate the standard error of the mean of a double-precision floating-point strided array using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`dsmean( N, x, stride )`][@stdlib/stats/base/dsmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dsmeanors( N, x, stride )`][@stdlib/stats/base/dsmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using ordinary recursive summation with extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dsmeanpn( N, x, stride )`][@stdlib/stats/base/dsmeanpn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using a two-pass error correction algorithm with extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dsmeanpw( N, x, stride )`][@stdlib/stats/base/dsmeanpw]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using pairwise summation with extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dsmeanwd( N, x, stride )`][@stdlib/stats/base/dsmeanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using Welford's algorithm with extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dsnanmean( N, x, stride )`][@stdlib/stats/base/dsnanmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values, using extended accumulation, and returning an extended precision result.</span>
-   <span class="signature">[`dsnanmeanors( N, x, stride )`][@stdlib/stats/base/dsnanmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values, using ordinary recursive summation with extended accumulation, and returning an extended precision result.</span>
-   <span class="signature">[`dsnanmeanpn( N, x, stride )`][@stdlib/stats/base/dsnanmeanpn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values, using a two-pass error correction algorithm with extended accumulation, and returning an extended precision result.</span>
-   <span class="signature">[`dsnanmeanwd( N, x, stride )`][@stdlib/stats/base/dsnanmeanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values, using Welford's algorithm with extended accumulation, and returning an extended precision result.</span>
-   <span class="signature">[`dstdev( N, correction, x, stride )`][@stdlib/stats/base/dstdev]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dstdevch( N, correction, x, stride )`][@stdlib/stats/base/dstdevch]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`dstdevpn( N, correction, x, stride )`][@stdlib/stats/base/dstdevpn]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array using a two-pass algorithm.</span>
-   <span class="signature">[`dstdevtk( N, correction, x, stride )`][@stdlib/stats/base/dstdevtk]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array using a one-pass textbook algorithm.</span>
-   <span class="signature">[`dstdevwd( N, correction, x, stride )`][@stdlib/stats/base/dstdevwd]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array using Welford's algorithm.</span>
-   <span class="signature">[`dstdevyc( N, correction, x, stride )`][@stdlib/stats/base/dstdevyc]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`dsvariance( N, correction, x, stride )`][@stdlib/stats/base/dsvariance]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array using extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dsvariancepn( N, correction, x, stride )`][@stdlib/stats/base/dsvariancepn]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array using a two-pass algorithm with extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dvariance( N, correction, x, stride )`][@stdlib/stats/base/dvariance]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dvariancech( N, correction, x, stride )`][@stdlib/stats/base/dvariancech]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`dvariancepn( N, correction, x, stride )`][@stdlib/stats/base/dvariancepn]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array using a two-pass algorithm.</span>
-   <span class="signature">[`dvariancetk( N, correction, x, stride )`][@stdlib/stats/base/dvariancetk]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array using a one-pass textbook algorithm.</span>
-   <span class="signature">[`dvariancewd( N, correction, x, stride )`][@stdlib/stats/base/dvariancewd]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array using Welford's algorithm.</span>
-   <span class="signature">[`dvarianceyc( N, correction, x, stride )`][@stdlib/stats/base/dvarianceyc]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`dvarm( N, mean, correction, x, stride )`][@stdlib/stats/base/dvarm]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array provided a known mean.</span>
-   <span class="signature">[`dvarmpn( N, mean, correction, x, stride )`][@stdlib/stats/base/dvarmpn]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array provided a known mean and using Neely's correction algorithm.</span>
-   <span class="signature">[`dvarmtk( N, mean, correction, x, stride )`][@stdlib/stats/base/dvarmtk]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array provided a known mean and using a one-pass textbook algorithm.</span>
-   <span class="signature">[`maxBy( N, x, stride, clbk[, thisArg] )`][@stdlib/stats/base/max-by]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a strided array via a callback function.</span>
-   <span class="signature">[`max( N, x, stride )`][@stdlib/stats/base/max]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a strided array.</span>
-   <span class="signature">[`maxabs( N, x, stride )`][@stdlib/stats/base/maxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a strided array.</span>
-   <span class="signature">[`maxsorted( N, x, stride )`][@stdlib/stats/base/maxsorted]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a sorted strided array.</span>
-   <span class="signature">[`mean( N, x, stride )`][@stdlib/stats/base/mean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array.</span>
-   <span class="signature">[`meankbn( N, x, stride )`][@stdlib/stats/base/meankbn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`meankbn2( N, x, stride )`][@stdlib/stats/base/meankbn2]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`meanors( N, x, stride )`][@stdlib/stats/base/meanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array using ordinary recursive summation.</span>
-   <span class="signature">[`meanpn( N, x, stride )`][@stdlib/stats/base/meanpn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array using a two-pass error correction algorithm.</span>
-   <span class="signature">[`meanpw( N, x, stride )`][@stdlib/stats/base/meanpw]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array using pairwise summation.</span>
-   <span class="signature">[`meanwd( N, x, stride )`][@stdlib/stats/base/meanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array using Welford's algorithm.</span>
-   <span class="signature">[`mediansorted( N, x, stride )`][@stdlib/stats/base/mediansorted]</span><span class="delimiter">: </span><span class="description">calculate the median value of a sorted strided array.</span>
-   <span class="signature">[`minBy( N, x, stride, clbk[, thisArg] )`][@stdlib/stats/base/min-by]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a strided array via a callback function.</span>
-   <span class="signature">[`min( N, x, stride )`][@stdlib/stats/base/min]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a strided array.</span>
-   <span class="signature">[`minabs( N, x, stride )`][@stdlib/stats/base/minabs]</span><span class="delimiter">: </span><span class="description">calculate the minimum absolute value of a strided array.</span>
-   <span class="signature">[`minsorted( N, x, stride )`][@stdlib/stats/base/minsorted]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a sorted strided array.</span>
-   <span class="signature">[`mskmax( N, x, strideX, mask, strideMask )`][@stdlib/stats/base/mskmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a strided array according to a mask.</span>
-   <span class="signature">[`mskmin( N, x, strideX, mask, strideMask )`][@stdlib/stats/base/mskmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a strided array according to a mask.</span>
-   <span class="signature">[`mskrange( N, x, strideX, mask, strideMask )`][@stdlib/stats/base/mskrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a strided array according to a mask.</span>
-   <span class="signature">[`nanmaxBy( N, x, stride, clbk[, thisArg] )`][@stdlib/stats/base/nanmax-by]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a strided array via a callback function, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmax( N, x, stride )`][@stdlib/stats/base/nanmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmaxabs( N, x, stride )`][@stdlib/stats/base/nanmaxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmean( N, x, stride )`][@stdlib/stats/base/nanmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmeanors( N, x, stride )`][@stdlib/stats/base/nanmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array, ignoring `NaN` values and using ordinary recursive summation.</span>
-   <span class="signature">[`nanmeanpn( N, x, stride )`][@stdlib/stats/base/nanmeanpn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array, ignoring `NaN` values and using a two-pass error correction algorithm.</span>
-   <span class="signature">[`nanmeanwd( N, x, stride )`][@stdlib/stats/base/nanmeanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array, ignoring `NaN` values and using Welford's algorithm.</span>
-   <span class="signature">[`nanminBy( N, x, stride, clbk[, thisArg] )`][@stdlib/stats/base/nanmin-by]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a strided array via a callback function, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmin( N, x, stride )`][@stdlib/stats/base/nanmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`nanminabs( N, x, stride )`][@stdlib/stats/base/nanminabs]</span><span class="delimiter">: </span><span class="description">calculate the minimum absolute value of a strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmskmax( N, x, strideX, mask, strideMask )`][@stdlib/stats/base/nanmskmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a strided array according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmskmin( N, x, strideX, mask, strideMask )`][@stdlib/stats/base/nanmskmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a strided array according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmskrange( N, x, strideX, mask, strideMask )`][@stdlib/stats/base/nanmskrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a strided array according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`nanrangeBy( N, x, stride, clbk[, thisArg] )`][@stdlib/stats/base/nanrange-by]</span><span class="delimiter">: </span><span class="description">calculate the range of a strided array via a callback function, ignoring `NaN` values.</span>
-   <span class="signature">[`nanrange( N, x, stride )`][@stdlib/stats/base/nanrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`nanstdev( N, correction, x, stride )`][@stdlib/stats/base/nanstdev]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array ignoring `NaN` values.</span>
-   <span class="signature">[`nanstdevch( N, correction, x, stride )`][@stdlib/stats/base/nanstdevch]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array ignoring `NaN` values and using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`nanstdevpn( N, correction, x, stride )`][@stdlib/stats/base/nanstdevpn]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array ignoring `NaN` values and using a two-pass algorithm.</span>
-   <span class="signature">[`nanstdevtk( N, correction, x, stride )`][@stdlib/stats/base/nanstdevtk]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array ignoring `NaN` values and using a one-pass textbook algorithm.</span>
-   <span class="signature">[`nanstdevwd( N, correction, x, stride )`][@stdlib/stats/base/nanstdevwd]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array ignoring `NaN` values and using Welford's algorithm.</span>
-   <span class="signature">[`nanstdevyc( N, correction, x, stride )`][@stdlib/stats/base/nanstdevyc]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array ignoring `NaN` values and using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`nanvariance( N, correction, x, stride )`][@stdlib/stats/base/nanvariance]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array ignoring `NaN` values.</span>
-   <span class="signature">[`nanvariancech( N, correction, x, stride )`][@stdlib/stats/base/nanvariancech]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array ignoring `NaN` values and using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`nanvariancepn( N, correction, x, stride )`][@stdlib/stats/base/nanvariancepn]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array ignoring `NaN` values and using a two-pass algorithm.</span>
-   <span class="signature">[`nanvariancetk( N, correction, x, stride )`][@stdlib/stats/base/nanvariancetk]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array ignoring `NaN` values and using a one-pass textbook algorithm.</span>
-   <span class="signature">[`nanvariancewd( N, correction, x, stride )`][@stdlib/stats/base/nanvariancewd]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array ignoring `NaN` values and using Welford's algorithm.</span>
-   <span class="signature">[`nanvarianceyc( N, correction, x, stride )`][@stdlib/stats/base/nanvarianceyc]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array ignoring `NaN` values and using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`rangeBy( N, x, stride, clbk[, thisArg] )`][@stdlib/stats/base/range-by]</span><span class="delimiter">: </span><span class="description">calculate the range of a strided array via a callback function.</span>
-   <span class="signature">[`range( N, x, stride )`][@stdlib/stats/base/range]</span><span class="delimiter">: </span><span class="description">calculate the range of a strided array.</span>
-   <span class="signature">[`scumax( N, x, strideX, y, strideY )`][@stdlib/stats/base/scumax]</span><span class="delimiter">: </span><span class="description">calculate the cumulative maximum of single-precision floating-point strided array elements.</span>
-   <span class="signature">[`scumaxabs( N, x, strideX, y, strideY )`][@stdlib/stats/base/scumaxabs]</span><span class="delimiter">: </span><span class="description">calculate the cumulative maximum absolute value of single-precision floating-point strided array elements.</span>
-   <span class="signature">[`scumin( N, x, strideX, y, strideY )`][@stdlib/stats/base/scumin]</span><span class="delimiter">: </span><span class="description">calculate the cumulative minimum of single-precision floating-point strided array elements.</span>
-   <span class="signature">[`scuminabs( N, x, strideX, y, strideY )`][@stdlib/stats/base/scuminabs]</span><span class="delimiter">: </span><span class="description">calculate the cumulative minimum absolute value of single-precision floating-point strided array elements.</span>
-   <span class="signature">[`sdsmean( N, x, stride )`][@stdlib/stats/base/sdsmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using extended accumulation.</span>
-   <span class="signature">[`sdsmeanors( N, x, stride )`][@stdlib/stats/base/sdsmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using ordinary recursive summation with extended accumulation.</span>
-   <span class="signature">[`sdsnanmean( N, x, stride )`][@stdlib/stats/base/sdsnanmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values and using extended accumulation.</span>
-   <span class="signature">[`sdsnanmeanors( N, x, stride )`][@stdlib/stats/base/sdsnanmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values and using ordinary recursive summation with extended accumulation.</span>
-   <span class="signature">[`smax( N, x, stride )`][@stdlib/stats/base/smax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a single-precision floating-point strided array.</span>
-   <span class="signature">[`smaxabs( N, x, stride )`][@stdlib/stats/base/smaxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a single-precision floating-point strided array.</span>
-   <span class="signature">[`smaxabssorted( N, x, stride )`][@stdlib/stats/base/smaxabssorted]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a sorted single-precision floating-point strided array.</span>
-   <span class="signature">[`smaxsorted( N, x, stride )`][@stdlib/stats/base/smaxsorted]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a sorted single-precision floating-point strided array.</span>
-   <span class="signature">[`smean( N, x, stride )`][@stdlib/stats/base/smean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array.</span>
-   <span class="signature">[`smeankbn( N, x, stride )`][@stdlib/stats/base/smeankbn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`smeankbn2( N, x, stride )`][@stdlib/stats/base/smeankbn2]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`smeanli( N, x, stride )`][@stdlib/stats/base/smeanli]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`smeanlipw( N, x, stride )`][@stdlib/stats/base/smeanlipw]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using a one-pass trial mean algorithm with pairwise summation.</span>
-   <span class="signature">[`smeanors( N, x, stride )`][@stdlib/stats/base/smeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using ordinary recursive summation.</span>
-   <span class="signature">[`smeanpn( N, x, stride )`][@stdlib/stats/base/smeanpn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using a two-pass error correction algorithm.</span>
-   <span class="signature">[`smeanpw( N, x, stride )`][@stdlib/stats/base/smeanpw]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using pairwise summation.</span>
-   <span class="signature">[`smeanwd( N, x, stride )`][@stdlib/stats/base/smeanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using Welford's algorithm.</span>
-   <span class="signature">[`smediansorted( N, x, stride )`][@stdlib/stats/base/smediansorted]</span><span class="delimiter">: </span><span class="description">calculate the median value of a sorted single-precision floating-point strided array.</span>
-   <span class="signature">[`smidrange( N, x, stride )`][@stdlib/stats/base/smidrange]</span><span class="delimiter">: </span><span class="description">calculate the mid-range of a single-precision floating-point strided array.</span>
-   <span class="signature">[`smin( N, x, stride )`][@stdlib/stats/base/smin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a single-precision floating-point strided array.</span>
-   <span class="signature">[`sminabs( N, x, stride )`][@stdlib/stats/base/sminabs]</span><span class="delimiter">: </span><span class="description">calculate the minimum absolute value of a single-precision floating-point strided array.</span>
-   <span class="signature">[`sminsorted( N, x, stride )`][@stdlib/stats/base/sminsorted]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a sorted single-precision floating-point strided array.</span>
-   <span class="signature">[`smskmax( N, x, strideX, mask, strideMask )`][@stdlib/stats/base/smskmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a single-precision floating-point strided array according to a mask.</span>
-   <span class="signature">[`smskmin( N, x, strideX, mask, strideMask )`][@stdlib/stats/base/smskmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a single-precision floating-point strided array according to a mask.</span>
-   <span class="signature">[`smskrange( N, x, strideX, mask, strideMask )`][@stdlib/stats/base/smskrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a single-precision floating-point strided array according to a mask.</span>
-   <span class="signature">[`snanmax( N, x, stride )`][@stdlib/stats/base/snanmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a single-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`snanmaxabs( N, x, stride )`][@stdlib/stats/base/snanmaxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a single-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`snanmean( N, x, stride )`][@stdlib/stats/base/snanmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`snanmeanors( N, x, stride )`][@stdlib/stats/base/snanmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values and using ordinary recursive summation.</span>
-   <span class="signature">[`snanmeanpn( N, x, stride )`][@stdlib/stats/base/snanmeanpn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values and using a two-pass error correction algorithm.</span>
-   <span class="signature">[`snanmeanwd( N, x, stride )`][@stdlib/stats/base/snanmeanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values and using Welford's algorithm.</span>
-   <span class="signature">[`snanmin( N, x, stride )`][@stdlib/stats/base/snanmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a single-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`snanminabs( N, x, stride )`][@stdlib/stats/base/snanminabs]</span><span class="delimiter">: </span><span class="description">calculate the minimum absolute value of a single-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`snanmskmax( N, x, strideX, mask, strideMask )`][@stdlib/stats/base/snanmskmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a single-precision floating-point strided array according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`snanmskmin( N, x, strideX, mask, strideMask )`][@stdlib/stats/base/snanmskmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a single-precision floating-point strided array according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`snanmskrange( N, x, strideX, mask, strideMask )`][@stdlib/stats/base/snanmskrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a single-precision floating-point strided array according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`snanrange( N, x, stride )`][@stdlib/stats/base/snanrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a single-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`snanstdev( N, correction, x, stride )`][@stdlib/stats/base/snanstdev]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a single-precision floating-point strided array ignoring `NaN` values.</span>
-   <span class="signature">[`snanstdevch( N, correction, x, stride )`][@stdlib/stats/base/snanstdevch]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a single-precision floating-point strided array ignoring `NaN` values and using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`snanstdevpn( N, correction, x, stride )`][@stdlib/stats/base/snanstdevpn]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a single-precision floating-point strided array ignoring `NaN` values and using a two-pass algorithm.</span>
-   <span class="signature">[`snanstdevtk( N, correction, x, stride )`][@stdlib/stats/base/snanstdevtk]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a single-precision floating-point strided array ignoring `NaN` values and using a one-pass textbook algorithm.</span>
-   <span class="signature">[`snanstdevwd( N, correction, x, stride )`][@stdlib/stats/base/snanstdevwd]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a single-precision floating-point strided array ignoring `NaN` values and using Welford's algorithm.</span>
-   <span class="signature">[`snanstdevyc( N, correction, x, stride )`][@stdlib/stats/base/snanstdevyc]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a single-precision floating-point strided array ignoring `NaN` values and using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`snanvariance( N, correction, x, stride )`][@stdlib/stats/base/snanvariance]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array ignoring `NaN` values.</span>
-   <span class="signature">[`snanvariancech( N, correction, x, stride )`][@stdlib/stats/base/snanvariancech]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array ignoring `NaN` values and using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`snanvariancepn( N, correction, x, stride )`][@stdlib/stats/base/snanvariancepn]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array ignoring `NaN` values and using a two-pass algorithm.</span>
-   <span class="signature">[`snanvariancetk( N, correction, x, stride )`][@stdlib/stats/base/snanvariancetk]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array ignoring `NaN` values and using a one-pass textbook algorithm.</span>
-   <span class="signature">[`snanvariancewd( N, correction, x, stride )`][@stdlib/stats/base/snanvariancewd]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array ignoring `NaN` values and using Welford's algorithm.</span>
-   <span class="signature">[`snanvarianceyc( N, correction, x, stride )`][@stdlib/stats/base/snanvarianceyc]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array ignoring `NaN` values and using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`srange( N, x, stride )`][@stdlib/stats/base/srange]</span><span class="delimiter">: </span><span class="description">calculate the range of a single-precision floating-point strided array.</span>
-   <span class="signature">[`sstdev( N, correction, x, stride )`][@stdlib/stats/base/sstdev]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a single-precision floating-point strided array.</span>
-   <span class="signature">[`sstdevch( N, correction, x, stride )`][@stdlib/stats/base/sstdevch]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a single-precision floating-point strided array using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`sstdevpn( N, correction, x, stride )`][@stdlib/stats/base/sstdevpn]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a single-precision floating-point strided array using a two-pass algorithm.</span>
-   <span class="signature">[`sstdevtk( N, correction, x, stride )`][@stdlib/stats/base/sstdevtk]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a single-precision floating-point strided array using a one-pass textbook algorithm.</span>
-   <span class="signature">[`sstdevwd( N, correction, x, stride )`][@stdlib/stats/base/sstdevwd]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a single-precision floating-point strided array using Welford's algorithm.</span>
-   <span class="signature">[`sstdevyc( N, correction, x, stride )`][@stdlib/stats/base/sstdevyc]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a single-precision floating-point strided array using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`stdev( N, correction, x, stride )`][@stdlib/stats/base/stdev]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array.</span>
-   <span class="signature">[`stdevch( N, correction, x, stride )`][@stdlib/stats/base/stdevch]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`stdevpn( N, correction, x, stride )`][@stdlib/stats/base/stdevpn]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array using a two-pass algorithm.</span>
-   <span class="signature">[`stdevtk( N, correction, x, stride )`][@stdlib/stats/base/stdevtk]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array using a one-pass textbook algorithm.</span>
-   <span class="signature">[`stdevwd( N, correction, x, stride )`][@stdlib/stats/base/stdevwd]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array using Welford's algorithm.</span>
-   <span class="signature">[`stdevyc( N, correction, x, stride )`][@stdlib/stats/base/stdevyc]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`svariance( N, correction, x, stride )`][@stdlib/stats/base/svariance]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array.</span>
-   <span class="signature">[`svariancech( N, correction, x, stride )`][@stdlib/stats/base/svariancech]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`svariancepn( N, correction, x, stride )`][@stdlib/stats/base/svariancepn]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array using a two-pass algorithm.</span>
-   <span class="signature">[`svariancetk( N, correction, x, stride )`][@stdlib/stats/base/svariancetk]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array using a one-pass textbook algorithm.</span>
-   <span class="signature">[`svariancewd( N, correction, x, stride )`][@stdlib/stats/base/svariancewd]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array using Welford's algorithm.</span>
-   <span class="signature">[`svarianceyc( N, correction, x, stride )`][@stdlib/stats/base/svarianceyc]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`variance( N, correction, x, stride )`][@stdlib/stats/base/variance]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array.</span>
-   <span class="signature">[`variancech( N, correction, x, stride )`][@stdlib/stats/base/variancech]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`variancepn( N, correction, x, stride )`][@stdlib/stats/base/variancepn]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array using a two-pass algorithm.</span>
-   <span class="signature">[`variancetk( N, correction, x, stride )`][@stdlib/stats/base/variancetk]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array using a one-pass textbook algorithm.</span>
-   <span class="signature">[`variancewd( N, correction, x, stride )`][@stdlib/stats/base/variancewd]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array using Welford's algorithm.</span>
-   <span class="signature">[`varianceyc( N, correction, x, stride )`][@stdlib/stats/base/varianceyc]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array using a one-pass algorithm proposed by Youngs and Cramer.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<!-- Package notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@esm/index.mjs';
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base@esm/index.mjs';

console.log( objectKeys( ns ) );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base

[test-image]: https://github.com/stdlib-js/stats-base/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base/main/LICENSE

<!-- <toc-links> -->

[@stdlib/stats/base/cumax]: https://github.com/stdlib-js/stats-base-cumax/tree/esm

[@stdlib/stats/base/cumaxabs]: https://github.com/stdlib-js/stats-base-cumaxabs/tree/esm

[@stdlib/stats/base/cumin]: https://github.com/stdlib-js/stats-base-cumin/tree/esm

[@stdlib/stats/base/cuminabs]: https://github.com/stdlib-js/stats-base-cuminabs/tree/esm

[@stdlib/stats/base/dcumax]: https://github.com/stdlib-js/stats-base-dcumax/tree/esm

[@stdlib/stats/base/dcumaxabs]: https://github.com/stdlib-js/stats-base-dcumaxabs/tree/esm

[@stdlib/stats/base/dcumin]: https://github.com/stdlib-js/stats-base-dcumin/tree/esm

[@stdlib/stats/base/dcuminabs]: https://github.com/stdlib-js/stats-base-dcuminabs/tree/esm

[@stdlib/stats/base/dmax]: https://github.com/stdlib-js/stats-base-dmax/tree/esm

[@stdlib/stats/base/dmaxabs]: https://github.com/stdlib-js/stats-base-dmaxabs/tree/esm

[@stdlib/stats/base/dmaxabssorted]: https://github.com/stdlib-js/stats-base-dmaxabssorted/tree/esm

[@stdlib/stats/base/dmaxsorted]: https://github.com/stdlib-js/stats-base-dmaxsorted/tree/esm

[@stdlib/stats/base/dmean]: https://github.com/stdlib-js/stats-base-dmean/tree/esm

[@stdlib/stats/base/dmeankbn]: https://github.com/stdlib-js/stats-base-dmeankbn/tree/esm

[@stdlib/stats/base/dmeankbn2]: https://github.com/stdlib-js/stats-base-dmeankbn2/tree/esm

[@stdlib/stats/base/dmeanli]: https://github.com/stdlib-js/stats-base-dmeanli/tree/esm

[@stdlib/stats/base/dmeanlipw]: https://github.com/stdlib-js/stats-base-dmeanlipw/tree/esm

[@stdlib/stats/base/dmeanors]: https://github.com/stdlib-js/stats-base-dmeanors/tree/esm

[@stdlib/stats/base/dmeanpn]: https://github.com/stdlib-js/stats-base-dmeanpn/tree/esm

[@stdlib/stats/base/dmeanpw]: https://github.com/stdlib-js/stats-base-dmeanpw/tree/esm

[@stdlib/stats/base/dmeanstdev]: https://github.com/stdlib-js/stats-base-dmeanstdev/tree/esm

[@stdlib/stats/base/dmeanstdevpn]: https://github.com/stdlib-js/stats-base-dmeanstdevpn/tree/esm

[@stdlib/stats/base/dmeanvar]: https://github.com/stdlib-js/stats-base-dmeanvar/tree/esm

[@stdlib/stats/base/dmeanvarpn]: https://github.com/stdlib-js/stats-base-dmeanvarpn/tree/esm

[@stdlib/stats/base/dmeanwd]: https://github.com/stdlib-js/stats-base-dmeanwd/tree/esm

[@stdlib/stats/base/dmediansorted]: https://github.com/stdlib-js/stats-base-dmediansorted/tree/esm

[@stdlib/stats/base/dmidrange]: https://github.com/stdlib-js/stats-base-dmidrange/tree/esm

[@stdlib/stats/base/dmin]: https://github.com/stdlib-js/stats-base-dmin/tree/esm

[@stdlib/stats/base/dminabs]: https://github.com/stdlib-js/stats-base-dminabs/tree/esm

[@stdlib/stats/base/dminsorted]: https://github.com/stdlib-js/stats-base-dminsorted/tree/esm

[@stdlib/stats/base/dmskmax]: https://github.com/stdlib-js/stats-base-dmskmax/tree/esm

[@stdlib/stats/base/dmskmin]: https://github.com/stdlib-js/stats-base-dmskmin/tree/esm

[@stdlib/stats/base/dmskrange]: https://github.com/stdlib-js/stats-base-dmskrange/tree/esm

[@stdlib/stats/base/dnanmax]: https://github.com/stdlib-js/stats-base-dnanmax/tree/esm

[@stdlib/stats/base/dnanmaxabs]: https://github.com/stdlib-js/stats-base-dnanmaxabs/tree/esm

[@stdlib/stats/base/dnanmean]: https://github.com/stdlib-js/stats-base-dnanmean/tree/esm

[@stdlib/stats/base/dnanmeanors]: https://github.com/stdlib-js/stats-base-dnanmeanors/tree/esm

[@stdlib/stats/base/dnanmeanpn]: https://github.com/stdlib-js/stats-base-dnanmeanpn/tree/esm

[@stdlib/stats/base/dnanmeanpw]: https://github.com/stdlib-js/stats-base-dnanmeanpw/tree/esm

[@stdlib/stats/base/dnanmeanwd]: https://github.com/stdlib-js/stats-base-dnanmeanwd/tree/esm

[@stdlib/stats/base/dnanmin]: https://github.com/stdlib-js/stats-base-dnanmin/tree/esm

[@stdlib/stats/base/dnanminabs]: https://github.com/stdlib-js/stats-base-dnanminabs/tree/esm

[@stdlib/stats/base/dnanmskmax]: https://github.com/stdlib-js/stats-base-dnanmskmax/tree/esm

[@stdlib/stats/base/dnanmskmin]: https://github.com/stdlib-js/stats-base-dnanmskmin/tree/esm

[@stdlib/stats/base/dnanmskrange]: https://github.com/stdlib-js/stats-base-dnanmskrange/tree/esm

[@stdlib/stats/base/dnanrange]: https://github.com/stdlib-js/stats-base-dnanrange/tree/esm

[@stdlib/stats/base/dnanstdev]: https://github.com/stdlib-js/stats-base-dnanstdev/tree/esm

[@stdlib/stats/base/dnanstdevch]: https://github.com/stdlib-js/stats-base-dnanstdevch/tree/esm

[@stdlib/stats/base/dnanstdevpn]: https://github.com/stdlib-js/stats-base-dnanstdevpn/tree/esm

[@stdlib/stats/base/dnanstdevtk]: https://github.com/stdlib-js/stats-base-dnanstdevtk/tree/esm

[@stdlib/stats/base/dnanstdevwd]: https://github.com/stdlib-js/stats-base-dnanstdevwd/tree/esm

[@stdlib/stats/base/dnanstdevyc]: https://github.com/stdlib-js/stats-base-dnanstdevyc/tree/esm

[@stdlib/stats/base/dnanvariance]: https://github.com/stdlib-js/stats-base-dnanvariance/tree/esm

[@stdlib/stats/base/dnanvariancech]: https://github.com/stdlib-js/stats-base-dnanvariancech/tree/esm

[@stdlib/stats/base/dnanvariancepn]: https://github.com/stdlib-js/stats-base-dnanvariancepn/tree/esm

[@stdlib/stats/base/dnanvariancetk]: https://github.com/stdlib-js/stats-base-dnanvariancetk/tree/esm

[@stdlib/stats/base/dnanvariancewd]: https://github.com/stdlib-js/stats-base-dnanvariancewd/tree/esm

[@stdlib/stats/base/dnanvarianceyc]: https://github.com/stdlib-js/stats-base-dnanvarianceyc/tree/esm

[@stdlib/stats/base/drange]: https://github.com/stdlib-js/stats-base-drange/tree/esm

[@stdlib/stats/base/dsem]: https://github.com/stdlib-js/stats-base-dsem/tree/esm

[@stdlib/stats/base/dsemch]: https://github.com/stdlib-js/stats-base-dsemch/tree/esm

[@stdlib/stats/base/dsempn]: https://github.com/stdlib-js/stats-base-dsempn/tree/esm

[@stdlib/stats/base/dsemtk]: https://github.com/stdlib-js/stats-base-dsemtk/tree/esm

[@stdlib/stats/base/dsemwd]: https://github.com/stdlib-js/stats-base-dsemwd/tree/esm

[@stdlib/stats/base/dsemyc]: https://github.com/stdlib-js/stats-base-dsemyc/tree/esm

[@stdlib/stats/base/dsmean]: https://github.com/stdlib-js/stats-base-dsmean/tree/esm

[@stdlib/stats/base/dsmeanors]: https://github.com/stdlib-js/stats-base-dsmeanors/tree/esm

[@stdlib/stats/base/dsmeanpn]: https://github.com/stdlib-js/stats-base-dsmeanpn/tree/esm

[@stdlib/stats/base/dsmeanpw]: https://github.com/stdlib-js/stats-base-dsmeanpw/tree/esm

[@stdlib/stats/base/dsmeanwd]: https://github.com/stdlib-js/stats-base-dsmeanwd/tree/esm

[@stdlib/stats/base/dsnanmean]: https://github.com/stdlib-js/stats-base-dsnanmean/tree/esm

[@stdlib/stats/base/dsnanmeanors]: https://github.com/stdlib-js/stats-base-dsnanmeanors/tree/esm

[@stdlib/stats/base/dsnanmeanpn]: https://github.com/stdlib-js/stats-base-dsnanmeanpn/tree/esm

[@stdlib/stats/base/dsnanmeanwd]: https://github.com/stdlib-js/stats-base-dsnanmeanwd/tree/esm

[@stdlib/stats/base/dstdev]: https://github.com/stdlib-js/stats-base-dstdev/tree/esm

[@stdlib/stats/base/dstdevch]: https://github.com/stdlib-js/stats-base-dstdevch/tree/esm

[@stdlib/stats/base/dstdevpn]: https://github.com/stdlib-js/stats-base-dstdevpn/tree/esm

[@stdlib/stats/base/dstdevtk]: https://github.com/stdlib-js/stats-base-dstdevtk/tree/esm

[@stdlib/stats/base/dstdevwd]: https://github.com/stdlib-js/stats-base-dstdevwd/tree/esm

[@stdlib/stats/base/dstdevyc]: https://github.com/stdlib-js/stats-base-dstdevyc/tree/esm

[@stdlib/stats/base/dsvariance]: https://github.com/stdlib-js/stats-base-dsvariance/tree/esm

[@stdlib/stats/base/dsvariancepn]: https://github.com/stdlib-js/stats-base-dsvariancepn/tree/esm

[@stdlib/stats/base/dvariance]: https://github.com/stdlib-js/stats-base-dvariance/tree/esm

[@stdlib/stats/base/dvariancech]: https://github.com/stdlib-js/stats-base-dvariancech/tree/esm

[@stdlib/stats/base/dvariancepn]: https://github.com/stdlib-js/stats-base-dvariancepn/tree/esm

[@stdlib/stats/base/dvariancetk]: https://github.com/stdlib-js/stats-base-dvariancetk/tree/esm

[@stdlib/stats/base/dvariancewd]: https://github.com/stdlib-js/stats-base-dvariancewd/tree/esm

[@stdlib/stats/base/dvarianceyc]: https://github.com/stdlib-js/stats-base-dvarianceyc/tree/esm

[@stdlib/stats/base/dvarm]: https://github.com/stdlib-js/stats-base-dvarm/tree/esm

[@stdlib/stats/base/dvarmpn]: https://github.com/stdlib-js/stats-base-dvarmpn/tree/esm

[@stdlib/stats/base/dvarmtk]: https://github.com/stdlib-js/stats-base-dvarmtk/tree/esm

[@stdlib/stats/base/max-by]: https://github.com/stdlib-js/stats-base-max-by/tree/esm

[@stdlib/stats/base/max]: https://github.com/stdlib-js/stats-base-max/tree/esm

[@stdlib/stats/base/maxabs]: https://github.com/stdlib-js/stats-base-maxabs/tree/esm

[@stdlib/stats/base/maxsorted]: https://github.com/stdlib-js/stats-base-maxsorted/tree/esm

[@stdlib/stats/base/mean]: https://github.com/stdlib-js/stats-base-mean/tree/esm

[@stdlib/stats/base/meankbn]: https://github.com/stdlib-js/stats-base-meankbn/tree/esm

[@stdlib/stats/base/meankbn2]: https://github.com/stdlib-js/stats-base-meankbn2/tree/esm

[@stdlib/stats/base/meanors]: https://github.com/stdlib-js/stats-base-meanors/tree/esm

[@stdlib/stats/base/meanpn]: https://github.com/stdlib-js/stats-base-meanpn/tree/esm

[@stdlib/stats/base/meanpw]: https://github.com/stdlib-js/stats-base-meanpw/tree/esm

[@stdlib/stats/base/meanwd]: https://github.com/stdlib-js/stats-base-meanwd/tree/esm

[@stdlib/stats/base/mediansorted]: https://github.com/stdlib-js/stats-base-mediansorted/tree/esm

[@stdlib/stats/base/min-by]: https://github.com/stdlib-js/stats-base-min-by/tree/esm

[@stdlib/stats/base/min]: https://github.com/stdlib-js/stats-base-min/tree/esm

[@stdlib/stats/base/minabs]: https://github.com/stdlib-js/stats-base-minabs/tree/esm

[@stdlib/stats/base/minsorted]: https://github.com/stdlib-js/stats-base-minsorted/tree/esm

[@stdlib/stats/base/mskmax]: https://github.com/stdlib-js/stats-base-mskmax/tree/esm

[@stdlib/stats/base/mskmin]: https://github.com/stdlib-js/stats-base-mskmin/tree/esm

[@stdlib/stats/base/mskrange]: https://github.com/stdlib-js/stats-base-mskrange/tree/esm

[@stdlib/stats/base/nanmax-by]: https://github.com/stdlib-js/stats-base-nanmax-by/tree/esm

[@stdlib/stats/base/nanmax]: https://github.com/stdlib-js/stats-base-nanmax/tree/esm

[@stdlib/stats/base/nanmaxabs]: https://github.com/stdlib-js/stats-base-nanmaxabs/tree/esm

[@stdlib/stats/base/nanmean]: https://github.com/stdlib-js/stats-base-nanmean/tree/esm

[@stdlib/stats/base/nanmeanors]: https://github.com/stdlib-js/stats-base-nanmeanors/tree/esm

[@stdlib/stats/base/nanmeanpn]: https://github.com/stdlib-js/stats-base-nanmeanpn/tree/esm

[@stdlib/stats/base/nanmeanwd]: https://github.com/stdlib-js/stats-base-nanmeanwd/tree/esm

[@stdlib/stats/base/nanmin-by]: https://github.com/stdlib-js/stats-base-nanmin-by/tree/esm

[@stdlib/stats/base/nanmin]: https://github.com/stdlib-js/stats-base-nanmin/tree/esm

[@stdlib/stats/base/nanminabs]: https://github.com/stdlib-js/stats-base-nanminabs/tree/esm

[@stdlib/stats/base/nanmskmax]: https://github.com/stdlib-js/stats-base-nanmskmax/tree/esm

[@stdlib/stats/base/nanmskmin]: https://github.com/stdlib-js/stats-base-nanmskmin/tree/esm

[@stdlib/stats/base/nanmskrange]: https://github.com/stdlib-js/stats-base-nanmskrange/tree/esm

[@stdlib/stats/base/nanrange-by]: https://github.com/stdlib-js/stats-base-nanrange-by/tree/esm

[@stdlib/stats/base/nanrange]: https://github.com/stdlib-js/stats-base-nanrange/tree/esm

[@stdlib/stats/base/nanstdev]: https://github.com/stdlib-js/stats-base-nanstdev/tree/esm

[@stdlib/stats/base/nanstdevch]: https://github.com/stdlib-js/stats-base-nanstdevch/tree/esm

[@stdlib/stats/base/nanstdevpn]: https://github.com/stdlib-js/stats-base-nanstdevpn/tree/esm

[@stdlib/stats/base/nanstdevtk]: https://github.com/stdlib-js/stats-base-nanstdevtk/tree/esm

[@stdlib/stats/base/nanstdevwd]: https://github.com/stdlib-js/stats-base-nanstdevwd/tree/esm

[@stdlib/stats/base/nanstdevyc]: https://github.com/stdlib-js/stats-base-nanstdevyc/tree/esm

[@stdlib/stats/base/nanvariance]: https://github.com/stdlib-js/stats-base-nanvariance/tree/esm

[@stdlib/stats/base/nanvariancech]: https://github.com/stdlib-js/stats-base-nanvariancech/tree/esm

[@stdlib/stats/base/nanvariancepn]: https://github.com/stdlib-js/stats-base-nanvariancepn/tree/esm

[@stdlib/stats/base/nanvariancetk]: https://github.com/stdlib-js/stats-base-nanvariancetk/tree/esm

[@stdlib/stats/base/nanvariancewd]: https://github.com/stdlib-js/stats-base-nanvariancewd/tree/esm

[@stdlib/stats/base/nanvarianceyc]: https://github.com/stdlib-js/stats-base-nanvarianceyc/tree/esm

[@stdlib/stats/base/range-by]: https://github.com/stdlib-js/stats-base-range-by/tree/esm

[@stdlib/stats/base/range]: https://github.com/stdlib-js/stats-base-range/tree/esm

[@stdlib/stats/base/scumax]: https://github.com/stdlib-js/stats-base-scumax/tree/esm

[@stdlib/stats/base/scumaxabs]: https://github.com/stdlib-js/stats-base-scumaxabs/tree/esm

[@stdlib/stats/base/scumin]: https://github.com/stdlib-js/stats-base-scumin/tree/esm

[@stdlib/stats/base/scuminabs]: https://github.com/stdlib-js/stats-base-scuminabs/tree/esm

[@stdlib/stats/base/sdsmean]: https://github.com/stdlib-js/stats-base-sdsmean/tree/esm

[@stdlib/stats/base/sdsmeanors]: https://github.com/stdlib-js/stats-base-sdsmeanors/tree/esm

[@stdlib/stats/base/sdsnanmean]: https://github.com/stdlib-js/stats-base-sdsnanmean/tree/esm

[@stdlib/stats/base/sdsnanmeanors]: https://github.com/stdlib-js/stats-base-sdsnanmeanors/tree/esm

[@stdlib/stats/base/smax]: https://github.com/stdlib-js/stats-base-smax/tree/esm

[@stdlib/stats/base/smaxabs]: https://github.com/stdlib-js/stats-base-smaxabs/tree/esm

[@stdlib/stats/base/smaxabssorted]: https://github.com/stdlib-js/stats-base-smaxabssorted/tree/esm

[@stdlib/stats/base/smaxsorted]: https://github.com/stdlib-js/stats-base-smaxsorted/tree/esm

[@stdlib/stats/base/smean]: https://github.com/stdlib-js/stats-base-smean/tree/esm

[@stdlib/stats/base/smeankbn]: https://github.com/stdlib-js/stats-base-smeankbn/tree/esm

[@stdlib/stats/base/smeankbn2]: https://github.com/stdlib-js/stats-base-smeankbn2/tree/esm

[@stdlib/stats/base/smeanli]: https://github.com/stdlib-js/stats-base-smeanli/tree/esm

[@stdlib/stats/base/smeanlipw]: https://github.com/stdlib-js/stats-base-smeanlipw/tree/esm

[@stdlib/stats/base/smeanors]: https://github.com/stdlib-js/stats-base-smeanors/tree/esm

[@stdlib/stats/base/smeanpn]: https://github.com/stdlib-js/stats-base-smeanpn/tree/esm

[@stdlib/stats/base/smeanpw]: https://github.com/stdlib-js/stats-base-smeanpw/tree/esm

[@stdlib/stats/base/smeanwd]: https://github.com/stdlib-js/stats-base-smeanwd/tree/esm

[@stdlib/stats/base/smediansorted]: https://github.com/stdlib-js/stats-base-smediansorted/tree/esm

[@stdlib/stats/base/smidrange]: https://github.com/stdlib-js/stats-base-smidrange/tree/esm

[@stdlib/stats/base/smin]: https://github.com/stdlib-js/stats-base-smin/tree/esm

[@stdlib/stats/base/sminabs]: https://github.com/stdlib-js/stats-base-sminabs/tree/esm

[@stdlib/stats/base/sminsorted]: https://github.com/stdlib-js/stats-base-sminsorted/tree/esm

[@stdlib/stats/base/smskmax]: https://github.com/stdlib-js/stats-base-smskmax/tree/esm

[@stdlib/stats/base/smskmin]: https://github.com/stdlib-js/stats-base-smskmin/tree/esm

[@stdlib/stats/base/smskrange]: https://github.com/stdlib-js/stats-base-smskrange/tree/esm

[@stdlib/stats/base/snanmax]: https://github.com/stdlib-js/stats-base-snanmax/tree/esm

[@stdlib/stats/base/snanmaxabs]: https://github.com/stdlib-js/stats-base-snanmaxabs/tree/esm

[@stdlib/stats/base/snanmean]: https://github.com/stdlib-js/stats-base-snanmean/tree/esm

[@stdlib/stats/base/snanmeanors]: https://github.com/stdlib-js/stats-base-snanmeanors/tree/esm

[@stdlib/stats/base/snanmeanpn]: https://github.com/stdlib-js/stats-base-snanmeanpn/tree/esm

[@stdlib/stats/base/snanmeanwd]: https://github.com/stdlib-js/stats-base-snanmeanwd/tree/esm

[@stdlib/stats/base/snanmin]: https://github.com/stdlib-js/stats-base-snanmin/tree/esm

[@stdlib/stats/base/snanminabs]: https://github.com/stdlib-js/stats-base-snanminabs/tree/esm

[@stdlib/stats/base/snanmskmax]: https://github.com/stdlib-js/stats-base-snanmskmax/tree/esm

[@stdlib/stats/base/snanmskmin]: https://github.com/stdlib-js/stats-base-snanmskmin/tree/esm

[@stdlib/stats/base/snanmskrange]: https://github.com/stdlib-js/stats-base-snanmskrange/tree/esm

[@stdlib/stats/base/snanrange]: https://github.com/stdlib-js/stats-base-snanrange/tree/esm

[@stdlib/stats/base/snanstdev]: https://github.com/stdlib-js/stats-base-snanstdev/tree/esm

[@stdlib/stats/base/snanstdevch]: https://github.com/stdlib-js/stats-base-snanstdevch/tree/esm

[@stdlib/stats/base/snanstdevpn]: https://github.com/stdlib-js/stats-base-snanstdevpn/tree/esm

[@stdlib/stats/base/snanstdevtk]: https://github.com/stdlib-js/stats-base-snanstdevtk/tree/esm

[@stdlib/stats/base/snanstdevwd]: https://github.com/stdlib-js/stats-base-snanstdevwd/tree/esm

[@stdlib/stats/base/snanstdevyc]: https://github.com/stdlib-js/stats-base-snanstdevyc/tree/esm

[@stdlib/stats/base/snanvariance]: https://github.com/stdlib-js/stats-base-snanvariance/tree/esm

[@stdlib/stats/base/snanvariancech]: https://github.com/stdlib-js/stats-base-snanvariancech/tree/esm

[@stdlib/stats/base/snanvariancepn]: https://github.com/stdlib-js/stats-base-snanvariancepn/tree/esm

[@stdlib/stats/base/snanvariancetk]: https://github.com/stdlib-js/stats-base-snanvariancetk/tree/esm

[@stdlib/stats/base/snanvariancewd]: https://github.com/stdlib-js/stats-base-snanvariancewd/tree/esm

[@stdlib/stats/base/snanvarianceyc]: https://github.com/stdlib-js/stats-base-snanvarianceyc/tree/esm

[@stdlib/stats/base/srange]: https://github.com/stdlib-js/stats-base-srange/tree/esm

[@stdlib/stats/base/sstdev]: https://github.com/stdlib-js/stats-base-sstdev/tree/esm

[@stdlib/stats/base/sstdevch]: https://github.com/stdlib-js/stats-base-sstdevch/tree/esm

[@stdlib/stats/base/sstdevpn]: https://github.com/stdlib-js/stats-base-sstdevpn/tree/esm

[@stdlib/stats/base/sstdevtk]: https://github.com/stdlib-js/stats-base-sstdevtk/tree/esm

[@stdlib/stats/base/sstdevwd]: https://github.com/stdlib-js/stats-base-sstdevwd/tree/esm

[@stdlib/stats/base/sstdevyc]: https://github.com/stdlib-js/stats-base-sstdevyc/tree/esm

[@stdlib/stats/base/stdev]: https://github.com/stdlib-js/stats-base-stdev/tree/esm

[@stdlib/stats/base/stdevch]: https://github.com/stdlib-js/stats-base-stdevch/tree/esm

[@stdlib/stats/base/stdevpn]: https://github.com/stdlib-js/stats-base-stdevpn/tree/esm

[@stdlib/stats/base/stdevtk]: https://github.com/stdlib-js/stats-base-stdevtk/tree/esm

[@stdlib/stats/base/stdevwd]: https://github.com/stdlib-js/stats-base-stdevwd/tree/esm

[@stdlib/stats/base/stdevyc]: https://github.com/stdlib-js/stats-base-stdevyc/tree/esm

[@stdlib/stats/base/svariance]: https://github.com/stdlib-js/stats-base-svariance/tree/esm

[@stdlib/stats/base/svariancech]: https://github.com/stdlib-js/stats-base-svariancech/tree/esm

[@stdlib/stats/base/svariancepn]: https://github.com/stdlib-js/stats-base-svariancepn/tree/esm

[@stdlib/stats/base/svariancetk]: https://github.com/stdlib-js/stats-base-svariancetk/tree/esm

[@stdlib/stats/base/svariancewd]: https://github.com/stdlib-js/stats-base-svariancewd/tree/esm

[@stdlib/stats/base/svarianceyc]: https://github.com/stdlib-js/stats-base-svarianceyc/tree/esm

[@stdlib/stats/base/variance]: https://github.com/stdlib-js/stats-base-variance/tree/esm

[@stdlib/stats/base/variancech]: https://github.com/stdlib-js/stats-base-variancech/tree/esm

[@stdlib/stats/base/variancepn]: https://github.com/stdlib-js/stats-base-variancepn/tree/esm

[@stdlib/stats/base/variancetk]: https://github.com/stdlib-js/stats-base-variancetk/tree/esm

[@stdlib/stats/base/variancewd]: https://github.com/stdlib-js/stats-base-variancewd/tree/esm

[@stdlib/stats/base/varianceyc]: https://github.com/stdlib-js/stats-base-varianceyc/tree/esm

[@stdlib/stats/base/dists]: https://github.com/stdlib-js/stats-base-dists/tree/esm

<!-- </toc-links> -->

</section>

<!-- /.links -->
