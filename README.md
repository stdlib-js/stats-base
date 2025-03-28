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

# Base Statistics

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Base (i.e., lower-level) statistical functions.

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var stats = require( '@stdlib/stats-base' );
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
-   <span class="signature">[`dcumin( N, x, strideX, y, strideY )`][@stdlib/stats/base/dcumin]</span><span class="delimiter">: </span><span class="description">calculate the cumulative minimum of double-precision floating-point strided array elements.</span>
-   <span class="signature">[`dmean( N, x, stride )`][@stdlib/stats/base/dmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dmeanpn( N, x, stride )`][@stdlib/stats/base/dmeanpn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array using a two-pass error correction algorithm.</span>
-   <span class="signature">[`dmeanstdev( N, correction, x, strideX, out, strideOut )`][@stdlib/stats/base/dmeanstdev]</span><span class="delimiter">: </span><span class="description">calculate the mean and standard deviation of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dmeanstdevpn( N, correction, x, strideX, out, strideOut )`][@stdlib/stats/base/dmeanstdevpn]</span><span class="delimiter">: </span><span class="description">calculate the mean and standard deviation of a double-precision floating-point strided array using a two-pass algorithm.</span>
-   <span class="signature">[`dmeanvar( N, correction, x, strideX, out, strideOut )`][@stdlib/stats/base/dmeanvar]</span><span class="delimiter">: </span><span class="description">calculate the mean and variance of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dmeanvarpn( N, correction, x, strideX, out, strideOut )`][@stdlib/stats/base/dmeanvarpn]</span><span class="delimiter">: </span><span class="description">calculate the mean and variance of a double-precision floating-point strided array using a two-pass algorithm.</span>
-   <span class="signature">[`dmskmax( N, x, strideX, mask, strideMask )`][@stdlib/stats/base/dmskmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a double-precision floating-point strided array according to a mask.</span>
-   <span class="signature">[`dmskmin( N, x, strideX, mask, strideMask )`][@stdlib/stats/base/dmskmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a double-precision floating-point strided array according to a mask.</span>
-   <span class="signature">[`dmskrange( N, x, strideX, mask, strideMask )`][@stdlib/stats/base/dmskrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a double-precision floating-point strided array according to a mask.</span>
-   <span class="signature">[`dnanmeanpw( N, x, strideX )`][@stdlib/stats/strided/dnanmeanpw]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array, ignoring `NaN` values and using pairwise summation.</span>
-   <span class="signature">[`dnanmeanwd( N, x, strideX )`][@stdlib/stats/strided/dnanmeanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array, using Welford's algorithm and ignoring `NaN` values.</span>
-   <span class="signature">[`dnanminabs( N, x, strideX )`][@stdlib/stats/strided/dnanminabs]</span><span class="delimiter">: </span><span class="description">calculate the minimum absolute value of a double-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanmskmax( N, x, strideX, mask, strideMask )`][@stdlib/stats/base/dnanmskmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a double-precision floating-point strided array according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanmskmin( N, x, strideX, mask, strideMask )`][@stdlib/stats/base/dnanmskmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a double-precision floating-point strided array according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanmskrange( N, x, strideX, mask, strideMask )`][@stdlib/stats/base/dnanmskrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a double-precision floating-point strided array according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanrange( N, x, strideX )`][@stdlib/stats/strided/dnanrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a double-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanstdev( N, correction, x, stride )`][@stdlib/stats/base/dnanstdev]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array ignoring `NaN` values.</span>
-   <span class="signature">[`dnanstdevch( N, correction, x, strideX )`][@stdlib/stats/strided/dnanstdevch]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array ignoring `NaN` values and using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`dnanstdevpn( N, correction, x, strideX )`][@stdlib/stats/strided/dnanstdevpn]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array, ignoring `NaN` values and using a two-pass algorithm.</span>
-   <span class="signature">[`dnanstdevtk( N, correction, x, strideX )`][@stdlib/stats/strided/dnanstdevtk]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array ignoring `NaN` values and using a one-pass textbook algorithm.</span>
-   <span class="signature">[`dnanstdevwd( N, correction, x, strideX )`][@stdlib/stats/strided/dnanstdevwd]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array ignoring `NaN` values and using Welford's algorithm.</span>
-   <span class="signature">[`dnanstdevyc( N, correction, x, strideX )`][@stdlib/stats/strided/dnanstdevyc]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array ignoring `NaN` values and using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`dnanvariance( N, correction, x, strideX )`][@stdlib/stats/strided/dnanvariance]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array ignoring `NaN` values.</span>
-   <span class="signature">[`dnanvariancech( N, correction, x, strideX )`][@stdlib/stats/strided/dnanvariancech]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array ignoring `NaN` values and using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`dnanvariancepn( N, correction, x, strideX )`][@stdlib/stats/strided/dnanvariancepn]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array ignoring `NaN` values and using a two-pass algorithm.</span>
-   <span class="signature">[`dnanvariancetk( N, correction, x, strideX )`][@stdlib/stats/strided/dnanvariancetk]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array ignoring `NaN` values and using a one-pass textbook algorithm.</span>
-   <span class="signature">[`dnanvariancewd( N, correction, x, strideX )`][@stdlib/stats/strided/dnanvariancewd]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array ignoring `NaN` values and using Welford's algorithm.</span>
-   <span class="signature">[`dnanvarianceyc( N, correction, x, strideX )`][@stdlib/stats/strided/dnanvarianceyc]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array ignoring `NaN` values and using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`drange( N, x, strideX )`][@stdlib/stats/strided/drange]</span><span class="delimiter">: </span><span class="description">calculate the range of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dsem( N, correction, x, stride )`][@stdlib/stats/base/dsem]</span><span class="delimiter">: </span><span class="description">calculate the standard error of the mean of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dsemch( N, correction, x, strideX )`][@stdlib/stats/strided/dsemch]</span><span class="delimiter">: </span><span class="description">calculate the standard error of the mean of a double-precision floating-point strided array using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`dsempn( N, correction, x, stride )`][@stdlib/stats/base/dsempn]</span><span class="delimiter">: </span><span class="description">calculate the standard error of the mean of a double-precision floating-point strided array using a two-pass algorithm.</span>
-   <span class="signature">[`dsemtk( N, correction, x, strideX )`][@stdlib/stats/strided/dsemtk]</span><span class="delimiter">: </span><span class="description">calculate the standard error of the mean of a double-precision floating-point strided array using a one-pass textbook algorithm.</span>
-   <span class="signature">[`dsemwd( N, correction, x, strideX )`][@stdlib/stats/strided/dsemwd]</span><span class="delimiter">: </span><span class="description">calculate the standard error of the mean of a double-precision floating-point strided array using Welford's algorithm.</span>
-   <span class="signature">[`dsemyc( N, correction, x, strideX )`][@stdlib/stats/strided/dsemyc]</span><span class="delimiter">: </span><span class="description">calculate the standard error of the mean of a double-precision floating-point strided array using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`dsmean( N, x, strideX )`][@stdlib/stats/strided/dsmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dsmeanors( N, x, strideX )`][@stdlib/stats/base/dsmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using ordinary recursive summation with extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dsmeanpn( N, x, strideX )`][@stdlib/stats/strided/dsmeanpn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using a two-pass error correction algorithm with extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dsmeanpw( N, x, strideX )`][@stdlib/stats/strided/dsmeanpw]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using pairwise summation with extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dsmeanwd( N, x, strideX )`][@stdlib/stats/base/dsmeanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using Welford's algorithm with extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dsnanmean( N, x, strideX )`][@stdlib/stats/base/dsnanmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values, using extended accumulation, and returning an extended precision result.</span>
-   <span class="signature">[`dsnanmeanors( N, x, strideX )`][@stdlib/stats/base/dsnanmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values, using ordinary recursive summation with extended accumulation, and returning an extended precision result.</span>
-   <span class="signature">[`dsnanmeanpn( N, x, strideX )`][@stdlib/stats/base/dsnanmeanpn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values, using a two-pass error correction algorithm with extended accumulation, and returning an extended precision result.</span>
-   <span class="signature">[`dsnanmeanwd( N, x, strideX )`][@stdlib/stats/base/dsnanmeanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values, using Welford's algorithm with extended accumulation, and returning an extended precision result.</span>
-   <span class="signature">[`dstdev( N, correction, x, stride )`][@stdlib/stats/base/dstdev]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dstdevch( N, correction, x, strideX )`][@stdlib/stats/base/dstdevch]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`dstdevpn( N, correction, x, strideX )`][@stdlib/stats/base/dstdevpn]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array using a two-pass algorithm.</span>
-   <span class="signature">[`dstdevtk( N, correction, x, strideX )`][@stdlib/stats/base/dstdevtk]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array using a one-pass textbook algorithm.</span>
-   <span class="signature">[`dstdevwd( N, correction, x, strideX )`][@stdlib/stats/base/dstdevwd]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array using Welford's algorithm.</span>
-   <span class="signature">[`dstdevyc( N, correction, x, strideX )`][@stdlib/stats/base/dstdevyc]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`dsvariance( N, correction, x, strideX )`][@stdlib/stats/base/dsvariance]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array using extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dsvariancepn( N, correction, x, strideX )`][@stdlib/stats/base/dsvariancepn]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array using a two-pass algorithm with extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dvariance( N, correction, x, strideX )`][@stdlib/stats/base/dvariance]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dvariancech( N, correction, x, strideX )`][@stdlib/stats/base/dvariancech]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`dvariancepn( N, correction, x, strideX )`][@stdlib/stats/base/dvariancepn]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array using a two-pass algorithm.</span>
-   <span class="signature">[`dvariancetk( N, correction, x, strideX )`][@stdlib/stats/base/dvariancetk]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array using a one-pass textbook algorithm.</span>
-   <span class="signature">[`dvariancewd( N, correction, x, strideX )`][@stdlib/stats/base/dvariancewd]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array using Welford's algorithm.</span>
-   <span class="signature">[`dvarianceyc( N, correction, x, strideX )`][@stdlib/stats/base/dvarianceyc]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`dvarm( N, mean, correction, x, stride )`][@stdlib/stats/base/dvarm]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array provided a known mean.</span>
-   <span class="signature">[`dvarmpn( N, mean, correction, x, stride )`][@stdlib/stats/base/dvarmpn]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array provided a known mean and using Neely's correction algorithm.</span>
-   <span class="signature">[`dvarmtk( N, mean, correction, x, strideX )`][@stdlib/stats/base/dvarmtk]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array provided a known mean and using a one-pass textbook algorithm.</span>
-   <span class="signature">[`maxBy( N, x, stride, clbk[, thisArg] )`][@stdlib/stats/base/max-by]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a strided array via a callback function.</span>
-   <span class="signature">[`max( N, x, strideX )`][@stdlib/stats/base/max]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a strided array.</span>
-   <span class="signature">[`maxabs( N, x, strideX )`][@stdlib/stats/base/maxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a strided array.</span>
-   <span class="signature">[`maxsorted( N, x, strideX )`][@stdlib/stats/base/maxsorted]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a sorted strided array.</span>
-   <span class="signature">[`mean( N, x, stride )`][@stdlib/stats/base/mean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array.</span>
-   <span class="signature">[`meankbn( N, x, stride )`][@stdlib/stats/base/meankbn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`meankbn2( N, x, stride )`][@stdlib/stats/base/meankbn2]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`meanors( N, x, stride )`][@stdlib/stats/base/meanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array using ordinary recursive summation.</span>
-   <span class="signature">[`meanpn( N, x, stride )`][@stdlib/stats/base/meanpn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array using a two-pass error correction algorithm.</span>
-   <span class="signature">[`meanpw( N, x, stride )`][@stdlib/stats/base/meanpw]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array using pairwise summation.</span>
-   <span class="signature">[`meanwd( N, x, strideX )`][@stdlib/stats/base/meanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array using Welford's algorithm.</span>
-   <span class="signature">[`mediansorted( N, x, strideX )`][@stdlib/stats/base/mediansorted]</span><span class="delimiter">: </span><span class="description">calculate the median value of a sorted strided array.</span>
-   <span class="signature">[`minBy( N, x, stride, clbk[, thisArg] )`][@stdlib/stats/base/min-by]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a strided array via a callback function.</span>
-   <span class="signature">[`min( N, x, strideX )`][@stdlib/stats/base/min]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a strided array.</span>
-   <span class="signature">[`minabs( N, x, strideX )`][@stdlib/stats/base/minabs]</span><span class="delimiter">: </span><span class="description">calculate the minimum absolute value of a strided array.</span>
-   <span class="signature">[`minsorted( N, x, strideX )`][@stdlib/stats/base/minsorted]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a sorted strided array.</span>
-   <span class="signature">[`mskmax( N, x, strideX, mask, strideMask )`][@stdlib/stats/base/mskmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a strided array according to a mask.</span>
-   <span class="signature">[`mskmin( N, x, strideX, mask, strideMask )`][@stdlib/stats/base/mskmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a strided array according to a mask.</span>
-   <span class="signature">[`mskrange( N, x, strideX, mask, strideMask )`][@stdlib/stats/base/mskrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a strided array according to a mask.</span>
-   <span class="signature">[`nanmaxBy( N, x, stride, clbk[, thisArg] )`][@stdlib/stats/base/nanmax-by]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a strided array via a callback function, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmax( N, x, strideX )`][@stdlib/stats/base/nanmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a strided array, ignoring `NaN` values.</span>
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
-   <span class="signature">[`nanrange( N, x, strideX )`][@stdlib/stats/base/nanrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a strided array, ignoring `NaN` values.</span>
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
-   <span class="signature">[`nanvarianceyc( N, correction, x, strideX )`][@stdlib/stats/base/nanvarianceyc]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array ignoring `NaN` values and using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`rangeBy( N, x, stride, clbk[, thisArg] )`][@stdlib/stats/base/range-by]</span><span class="delimiter">: </span><span class="description">calculate the range of a strided array via a callback function.</span>
-   <span class="signature">[`range( N, x, stride )`][@stdlib/stats/base/range]</span><span class="delimiter">: </span><span class="description">calculate the range of a strided array.</span>
-   <span class="signature">[`scumax( N, x, strideX, y, strideY )`][@stdlib/stats/base/scumax]</span><span class="delimiter">: </span><span class="description">calculate the cumulative maximum of single-precision floating-point strided array elements.</span>
-   <span class="signature">[`scumaxabs( N, x, strideX, y, strideY )`][@stdlib/stats/base/scumaxabs]</span><span class="delimiter">: </span><span class="description">calculate the cumulative maximum absolute value of single-precision floating-point strided array elements.</span>
-   <span class="signature">[`scumin( N, x, strideX, y, strideY )`][@stdlib/stats/base/scumin]</span><span class="delimiter">: </span><span class="description">calculate the cumulative minimum of single-precision floating-point strided array elements.</span>
-   <span class="signature">[`scuminabs( N, x, strideX, y, strideY )`][@stdlib/stats/base/scuminabs]</span><span class="delimiter">: </span><span class="description">calculate the cumulative minimum absolute value of single-precision floating-point strided array elements.</span>
-   <span class="signature">[`sdsmean( N, x, strideX )`][@stdlib/stats/base/sdsmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using extended accumulation.</span>
-   <span class="signature">[`sdsmeanors( N, x, strideX )`][@stdlib/stats/base/sdsmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using ordinary recursive summation with extended accumulation.</span>
-   <span class="signature">[`sdsnanmean( N, x, stride )`][@stdlib/stats/base/sdsnanmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values and using extended accumulation.</span>
-   <span class="signature">[`sdsnanmeanors( N, x, stride )`][@stdlib/stats/base/sdsnanmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values and using ordinary recursive summation with extended accumulation.</span>
-   <span class="signature">[`smax( N, x, strideX )`][@stdlib/stats/base/smax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a single-precision floating-point strided array.</span>
-   <span class="signature">[`smaxabs( N, x, strideX )`][@stdlib/stats/base/smaxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a single-precision floating-point strided array.</span>
-   <span class="signature">[`smaxabssorted( N, x, strideX )`][@stdlib/stats/base/smaxabssorted]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a sorted single-precision floating-point strided array.</span>
-   <span class="signature">[`smaxsorted( N, x, stride )`][@stdlib/stats/base/smaxsorted]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a sorted single-precision floating-point strided array.</span>
-   <span class="signature">[`smean( N, x, stride )`][@stdlib/stats/base/smean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array.</span>
-   <span class="signature">[`smeankbn( N, x, stride )`][@stdlib/stats/base/smeankbn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`smeankbn2( N, x, stride )`][@stdlib/stats/base/smeankbn2]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`smeanli( N, x, strideX )`][@stdlib/stats/base/smeanli]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`smeanlipw( N, x, stride )`][@stdlib/stats/base/smeanlipw]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using a one-pass trial mean algorithm with pairwise summation.</span>
-   <span class="signature">[`smeanors( N, x, stride )`][@stdlib/stats/base/smeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using ordinary recursive summation.</span>
-   <span class="signature">[`smeanpn( N, x, stride )`][@stdlib/stats/base/smeanpn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using a two-pass error correction algorithm.</span>
-   <span class="signature">[`smeanpw( N, x, strideX )`][@stdlib/stats/base/smeanpw]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using pairwise summation.</span>
-   <span class="signature">[`smeanwd( N, x, strideX )`][@stdlib/stats/base/smeanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using Welford's algorithm.</span>
-   <span class="signature">[`smediansorted( N, x, strideX )`][@stdlib/stats/base/smediansorted]</span><span class="delimiter">: </span><span class="description">calculate the median value of a sorted single-precision floating-point strided array.</span>
-   <span class="signature">[`smidrange( N, x, strideX )`][@stdlib/stats/base/smidrange]</span><span class="delimiter">: </span><span class="description">calculate the mid-range of a single-precision floating-point strided array.</span>
-   <span class="signature">[`smin( N, x, strideX )`][@stdlib/stats/base/smin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a single-precision floating-point strided array.</span>
-   <span class="signature">[`sminabs( N, x, strideX )`][@stdlib/stats/base/sminabs]</span><span class="delimiter">: </span><span class="description">calculate the minimum absolute value of a single-precision floating-point strided array.</span>
-   <span class="signature">[`sminsorted( N, x, strideX )`][@stdlib/stats/base/sminsorted]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a sorted single-precision floating-point strided array.</span>
-   <span class="signature">[`smskmax( N, x, strideX, mask, strideMask )`][@stdlib/stats/base/smskmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a single-precision floating-point strided array according to a mask.</span>
-   <span class="signature">[`smskmin( N, x, strideX, mask, strideMask )`][@stdlib/stats/base/smskmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a single-precision floating-point strided array according to a mask.</span>
-   <span class="signature">[`smskrange( N, x, strideX, mask, strideMask )`][@stdlib/stats/base/smskrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a single-precision floating-point strided array according to a mask.</span>
-   <span class="signature">[`snanmax( N, x, strideX )`][@stdlib/stats/base/snanmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a single-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`snanmaxabs( N, x, strideX )`][@stdlib/stats/base/snanmaxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a single-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`snanmean( N, x, stride )`][@stdlib/stats/base/snanmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`snanmeanors( N, x, strideX )`][@stdlib/stats/base/snanmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values and using ordinary recursive summation.</span>
-   <span class="signature">[`snanmeanpn( N, x, strideX )`][@stdlib/stats/base/snanmeanpn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values and using a two-pass error correction algorithm.</span>
-   <span class="signature">[`snanmeanwd( N, x, strideX )`][@stdlib/stats/base/snanmeanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values and using Welford's algorithm.</span>
-   <span class="signature">[`snanmin( N, x, strideX )`][@stdlib/stats/base/snanmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a single-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`snanminabs( N, x, strideX )`][@stdlib/stats/base/snanminabs]</span><span class="delimiter">: </span><span class="description">calculate the minimum absolute value of a single-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`snanmskmax( N, x, strideX, mask, strideMask )`][@stdlib/stats/base/snanmskmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a single-precision floating-point strided array according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`snanmskmin( N, x, strideX, mask, strideMask )`][@stdlib/stats/base/snanmskmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a single-precision floating-point strided array according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`snanmskrange( N, x, strideX, mask, strideMask )`][@stdlib/stats/base/snanmskrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a single-precision floating-point strided array according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`snanrange( N, x, strideX )`][@stdlib/stats/base/snanrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a single-precision floating-point strided array, ignoring `NaN` values.</span>
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
-   <span class="signature">[`srange( N, x, strideX )`][@stdlib/stats/base/srange]</span><span class="delimiter">: </span><span class="description">calculate the range of a single-precision floating-point strided array.</span>
-   <span class="signature">[`sstdev( N, correction, x, stride )`][@stdlib/stats/base/sstdev]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a single-precision floating-point strided array.</span>
-   <span class="signature">[`sstdevch( N, correction, x, strideX )`][@stdlib/stats/base/sstdevch]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a single-precision floating-point strided array using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`sstdevpn( N, correction, x, strideX )`][@stdlib/stats/base/sstdevpn]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a single-precision floating-point strided array using a two-pass algorithm.</span>
-   <span class="signature">[`sstdevtk( N, correction, x, strideX )`][@stdlib/stats/base/sstdevtk]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a single-precision floating-point strided array using a one-pass textbook algorithm.</span>
-   <span class="signature">[`sstdevwd( N, correction, x, stride )`][@stdlib/stats/base/sstdevwd]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a single-precision floating-point strided array using Welford's algorithm.</span>
-   <span class="signature">[`sstdevyc( N, correction, x, strideX )`][@stdlib/stats/base/sstdevyc]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a single-precision floating-point strided array using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`stdev( N, correction, x, stride )`][@stdlib/stats/base/stdev]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array.</span>
-   <span class="signature">[`stdevch( N, correction, x, stride )`][@stdlib/stats/base/stdevch]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`stdevpn( N, correction, x, stride )`][@stdlib/stats/base/stdevpn]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array using a two-pass algorithm.</span>
-   <span class="signature">[`stdevtk( N, correction, x, stride )`][@stdlib/stats/base/stdevtk]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array using a one-pass textbook algorithm.</span>
-   <span class="signature">[`stdevwd( N, correction, x, stride )`][@stdlib/stats/base/stdevwd]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array using Welford's algorithm.</span>
-   <span class="signature">[`stdevyc( N, correction, x, stride )`][@stdlib/stats/base/stdevyc]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`svariance( N, correction, x, stride )`][@stdlib/stats/base/svariance]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array.</span>
-   <span class="signature">[`svariancech( N, correction, x, strideX )`][@stdlib/stats/base/svariancech]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`svariancepn( N, correction, x, strideX )`][@stdlib/stats/base/svariancepn]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array using a two-pass algorithm.</span>
-   <span class="signature">[`svariancetk( N, correction, x, strideX )`][@stdlib/stats/base/svariancetk]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array using a one-pass textbook algorithm.</span>
-   <span class="signature">[`svariancewd( N, correction, x, stride )`][@stdlib/stats/base/svariancewd]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array using Welford's algorithm.</span>
-   <span class="signature">[`svarianceyc( N, correction, x, strideX )`][@stdlib/stats/base/svarianceyc]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array using a one-pass algorithm proposed by Youngs and Cramer.</span>
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

```javascript
var objectKeys = require( '@stdlib/utils-keys' );
var ns = require( '@stdlib/stats-base' );

console.log( objectKeys( ns ) );
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

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

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
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base/main/LICENSE

<!-- <toc-links> -->

[@stdlib/stats/base/cumax]: https://github.com/stdlib-js/stats-base-cumax

[@stdlib/stats/base/cumaxabs]: https://github.com/stdlib-js/stats-base-cumaxabs

[@stdlib/stats/base/cumin]: https://github.com/stdlib-js/stats-base-cumin

[@stdlib/stats/base/cuminabs]: https://github.com/stdlib-js/stats-base-cuminabs

[@stdlib/stats/base/dcumin]: https://github.com/stdlib-js/stats-base-dcumin

[@stdlib/stats/base/dmean]: https://github.com/stdlib-js/stats-base-dmean

[@stdlib/stats/base/dmeanpn]: https://github.com/stdlib-js/stats-base-dmeanpn

[@stdlib/stats/base/dmeanstdev]: https://github.com/stdlib-js/stats-base-dmeanstdev

[@stdlib/stats/base/dmeanstdevpn]: https://github.com/stdlib-js/stats-base-dmeanstdevpn

[@stdlib/stats/base/dmeanvar]: https://github.com/stdlib-js/stats-base-dmeanvar

[@stdlib/stats/base/dmeanvarpn]: https://github.com/stdlib-js/stats-base-dmeanvarpn

[@stdlib/stats/base/dmskmax]: https://github.com/stdlib-js/stats-base-dmskmax

[@stdlib/stats/base/dmskmin]: https://github.com/stdlib-js/stats-base-dmskmin

[@stdlib/stats/base/dmskrange]: https://github.com/stdlib-js/stats-base-dmskrange

[@stdlib/stats/strided/dnanmeanpw]: https://github.com/stdlib-js/stats-strided-dnanmeanpw

[@stdlib/stats/strided/dnanmeanwd]: https://github.com/stdlib-js/stats-strided-dnanmeanwd

[@stdlib/stats/strided/dnanminabs]: https://github.com/stdlib-js/stats-strided-dnanminabs

[@stdlib/stats/base/dnanmskmax]: https://github.com/stdlib-js/stats-base-dnanmskmax

[@stdlib/stats/base/dnanmskmin]: https://github.com/stdlib-js/stats-base-dnanmskmin

[@stdlib/stats/base/dnanmskrange]: https://github.com/stdlib-js/stats-base-dnanmskrange

[@stdlib/stats/strided/dnanrange]: https://github.com/stdlib-js/stats-strided-dnanrange

[@stdlib/stats/base/dnanstdev]: https://github.com/stdlib-js/stats-base-dnanstdev

[@stdlib/stats/strided/dnanstdevch]: https://github.com/stdlib-js/stats-strided-dnanstdevch

[@stdlib/stats/strided/dnanstdevpn]: https://github.com/stdlib-js/stats-strided-dnanstdevpn

[@stdlib/stats/strided/dnanstdevtk]: https://github.com/stdlib-js/stats-strided-dnanstdevtk

[@stdlib/stats/strided/dnanstdevwd]: https://github.com/stdlib-js/stats-strided-dnanstdevwd

[@stdlib/stats/strided/dnanstdevyc]: https://github.com/stdlib-js/stats-strided-dnanstdevyc

[@stdlib/stats/strided/dnanvariance]: https://github.com/stdlib-js/stats-strided-dnanvariance

[@stdlib/stats/strided/dnanvariancech]: https://github.com/stdlib-js/stats-strided-dnanvariancech

[@stdlib/stats/strided/dnanvariancepn]: https://github.com/stdlib-js/stats-strided-dnanvariancepn

[@stdlib/stats/strided/dnanvariancetk]: https://github.com/stdlib-js/stats-strided-dnanvariancetk

[@stdlib/stats/strided/dnanvariancewd]: https://github.com/stdlib-js/stats-strided-dnanvariancewd

[@stdlib/stats/strided/dnanvarianceyc]: https://github.com/stdlib-js/stats-strided-dnanvarianceyc

[@stdlib/stats/strided/drange]: https://github.com/stdlib-js/stats-strided-drange

[@stdlib/stats/base/dsem]: https://github.com/stdlib-js/stats-base-dsem

[@stdlib/stats/strided/dsemch]: https://github.com/stdlib-js/stats-strided-dsemch

[@stdlib/stats/base/dsempn]: https://github.com/stdlib-js/stats-base-dsempn

[@stdlib/stats/strided/dsemtk]: https://github.com/stdlib-js/stats-strided-dsemtk

[@stdlib/stats/strided/dsemwd]: https://github.com/stdlib-js/stats-strided-dsemwd

[@stdlib/stats/strided/dsemyc]: https://github.com/stdlib-js/stats-strided-dsemyc

[@stdlib/stats/strided/dsmean]: https://github.com/stdlib-js/stats-strided-dsmean

[@stdlib/stats/base/dsmeanors]: https://github.com/stdlib-js/stats-base-dsmeanors

[@stdlib/stats/strided/dsmeanpn]: https://github.com/stdlib-js/stats-strided-dsmeanpn

[@stdlib/stats/strided/dsmeanpw]: https://github.com/stdlib-js/stats-strided-dsmeanpw

[@stdlib/stats/base/dsmeanwd]: https://github.com/stdlib-js/stats-base-dsmeanwd

[@stdlib/stats/base/dsnanmean]: https://github.com/stdlib-js/stats-base-dsnanmean

[@stdlib/stats/base/dsnanmeanors]: https://github.com/stdlib-js/stats-base-dsnanmeanors

[@stdlib/stats/base/dsnanmeanpn]: https://github.com/stdlib-js/stats-base-dsnanmeanpn

[@stdlib/stats/base/dsnanmeanwd]: https://github.com/stdlib-js/stats-base-dsnanmeanwd

[@stdlib/stats/base/dstdev]: https://github.com/stdlib-js/stats-base-dstdev

[@stdlib/stats/base/dstdevch]: https://github.com/stdlib-js/stats-base-dstdevch

[@stdlib/stats/base/dstdevpn]: https://github.com/stdlib-js/stats-base-dstdevpn

[@stdlib/stats/base/dstdevtk]: https://github.com/stdlib-js/stats-base-dstdevtk

[@stdlib/stats/base/dstdevwd]: https://github.com/stdlib-js/stats-base-dstdevwd

[@stdlib/stats/base/dstdevyc]: https://github.com/stdlib-js/stats-base-dstdevyc

[@stdlib/stats/base/dsvariance]: https://github.com/stdlib-js/stats-base-dsvariance

[@stdlib/stats/base/dsvariancepn]: https://github.com/stdlib-js/stats-base-dsvariancepn

[@stdlib/stats/base/dvariance]: https://github.com/stdlib-js/stats-base-dvariance

[@stdlib/stats/base/dvariancech]: https://github.com/stdlib-js/stats-base-dvariancech

[@stdlib/stats/base/dvariancepn]: https://github.com/stdlib-js/stats-base-dvariancepn

[@stdlib/stats/base/dvariancetk]: https://github.com/stdlib-js/stats-base-dvariancetk

[@stdlib/stats/base/dvariancewd]: https://github.com/stdlib-js/stats-base-dvariancewd

[@stdlib/stats/base/dvarianceyc]: https://github.com/stdlib-js/stats-base-dvarianceyc

[@stdlib/stats/base/dvarm]: https://github.com/stdlib-js/stats-base-dvarm

[@stdlib/stats/base/dvarmpn]: https://github.com/stdlib-js/stats-base-dvarmpn

[@stdlib/stats/base/dvarmtk]: https://github.com/stdlib-js/stats-base-dvarmtk

[@stdlib/stats/base/max-by]: https://github.com/stdlib-js/stats-base-max-by

[@stdlib/stats/base/max]: https://github.com/stdlib-js/stats-base-max

[@stdlib/stats/base/maxabs]: https://github.com/stdlib-js/stats-base-maxabs

[@stdlib/stats/base/maxsorted]: https://github.com/stdlib-js/stats-base-maxsorted

[@stdlib/stats/base/mean]: https://github.com/stdlib-js/stats-base-mean

[@stdlib/stats/base/meankbn]: https://github.com/stdlib-js/stats-base-meankbn

[@stdlib/stats/base/meankbn2]: https://github.com/stdlib-js/stats-base-meankbn2

[@stdlib/stats/base/meanors]: https://github.com/stdlib-js/stats-base-meanors

[@stdlib/stats/base/meanpn]: https://github.com/stdlib-js/stats-base-meanpn

[@stdlib/stats/base/meanpw]: https://github.com/stdlib-js/stats-base-meanpw

[@stdlib/stats/base/meanwd]: https://github.com/stdlib-js/stats-base-meanwd

[@stdlib/stats/base/mediansorted]: https://github.com/stdlib-js/stats-base-mediansorted

[@stdlib/stats/base/min-by]: https://github.com/stdlib-js/stats-base-min-by

[@stdlib/stats/base/min]: https://github.com/stdlib-js/stats-base-min

[@stdlib/stats/base/minabs]: https://github.com/stdlib-js/stats-base-minabs

[@stdlib/stats/base/minsorted]: https://github.com/stdlib-js/stats-base-minsorted

[@stdlib/stats/base/mskmax]: https://github.com/stdlib-js/stats-base-mskmax

[@stdlib/stats/base/mskmin]: https://github.com/stdlib-js/stats-base-mskmin

[@stdlib/stats/base/mskrange]: https://github.com/stdlib-js/stats-base-mskrange

[@stdlib/stats/base/nanmax-by]: https://github.com/stdlib-js/stats-base-nanmax-by

[@stdlib/stats/base/nanmax]: https://github.com/stdlib-js/stats-base-nanmax

[@stdlib/stats/base/nanmaxabs]: https://github.com/stdlib-js/stats-base-nanmaxabs

[@stdlib/stats/base/nanmean]: https://github.com/stdlib-js/stats-base-nanmean

[@stdlib/stats/base/nanmeanors]: https://github.com/stdlib-js/stats-base-nanmeanors

[@stdlib/stats/base/nanmeanpn]: https://github.com/stdlib-js/stats-base-nanmeanpn

[@stdlib/stats/base/nanmeanwd]: https://github.com/stdlib-js/stats-base-nanmeanwd

[@stdlib/stats/base/nanmin-by]: https://github.com/stdlib-js/stats-base-nanmin-by

[@stdlib/stats/base/nanmin]: https://github.com/stdlib-js/stats-base-nanmin

[@stdlib/stats/base/nanminabs]: https://github.com/stdlib-js/stats-base-nanminabs

[@stdlib/stats/base/nanmskmax]: https://github.com/stdlib-js/stats-base-nanmskmax

[@stdlib/stats/base/nanmskmin]: https://github.com/stdlib-js/stats-base-nanmskmin

[@stdlib/stats/base/nanmskrange]: https://github.com/stdlib-js/stats-base-nanmskrange

[@stdlib/stats/base/nanrange-by]: https://github.com/stdlib-js/stats-base-nanrange-by

[@stdlib/stats/base/nanrange]: https://github.com/stdlib-js/stats-base-nanrange

[@stdlib/stats/base/nanstdev]: https://github.com/stdlib-js/stats-base-nanstdev

[@stdlib/stats/base/nanstdevch]: https://github.com/stdlib-js/stats-base-nanstdevch

[@stdlib/stats/base/nanstdevpn]: https://github.com/stdlib-js/stats-base-nanstdevpn

[@stdlib/stats/base/nanstdevtk]: https://github.com/stdlib-js/stats-base-nanstdevtk

[@stdlib/stats/base/nanstdevwd]: https://github.com/stdlib-js/stats-base-nanstdevwd

[@stdlib/stats/base/nanstdevyc]: https://github.com/stdlib-js/stats-base-nanstdevyc

[@stdlib/stats/base/nanvariance]: https://github.com/stdlib-js/stats-base-nanvariance

[@stdlib/stats/base/nanvariancech]: https://github.com/stdlib-js/stats-base-nanvariancech

[@stdlib/stats/base/nanvariancepn]: https://github.com/stdlib-js/stats-base-nanvariancepn

[@stdlib/stats/base/nanvariancetk]: https://github.com/stdlib-js/stats-base-nanvariancetk

[@stdlib/stats/base/nanvariancewd]: https://github.com/stdlib-js/stats-base-nanvariancewd

[@stdlib/stats/base/nanvarianceyc]: https://github.com/stdlib-js/stats-base-nanvarianceyc

[@stdlib/stats/base/range-by]: https://github.com/stdlib-js/stats-base-range-by

[@stdlib/stats/base/range]: https://github.com/stdlib-js/stats-base-range

[@stdlib/stats/base/scumax]: https://github.com/stdlib-js/stats-base-scumax

[@stdlib/stats/base/scumaxabs]: https://github.com/stdlib-js/stats-base-scumaxabs

[@stdlib/stats/base/scumin]: https://github.com/stdlib-js/stats-base-scumin

[@stdlib/stats/base/scuminabs]: https://github.com/stdlib-js/stats-base-scuminabs

[@stdlib/stats/base/sdsmean]: https://github.com/stdlib-js/stats-base-sdsmean

[@stdlib/stats/base/sdsmeanors]: https://github.com/stdlib-js/stats-base-sdsmeanors

[@stdlib/stats/base/sdsnanmean]: https://github.com/stdlib-js/stats-base-sdsnanmean

[@stdlib/stats/base/sdsnanmeanors]: https://github.com/stdlib-js/stats-base-sdsnanmeanors

[@stdlib/stats/base/smax]: https://github.com/stdlib-js/stats-base-smax

[@stdlib/stats/base/smaxabs]: https://github.com/stdlib-js/stats-base-smaxabs

[@stdlib/stats/base/smaxabssorted]: https://github.com/stdlib-js/stats-base-smaxabssorted

[@stdlib/stats/base/smaxsorted]: https://github.com/stdlib-js/stats-base-smaxsorted

[@stdlib/stats/base/smean]: https://github.com/stdlib-js/stats-base-smean

[@stdlib/stats/base/smeankbn]: https://github.com/stdlib-js/stats-base-smeankbn

[@stdlib/stats/base/smeankbn2]: https://github.com/stdlib-js/stats-base-smeankbn2

[@stdlib/stats/base/smeanli]: https://github.com/stdlib-js/stats-base-smeanli

[@stdlib/stats/base/smeanlipw]: https://github.com/stdlib-js/stats-base-smeanlipw

[@stdlib/stats/base/smeanors]: https://github.com/stdlib-js/stats-base-smeanors

[@stdlib/stats/base/smeanpn]: https://github.com/stdlib-js/stats-base-smeanpn

[@stdlib/stats/base/smeanpw]: https://github.com/stdlib-js/stats-base-smeanpw

[@stdlib/stats/base/smeanwd]: https://github.com/stdlib-js/stats-base-smeanwd

[@stdlib/stats/base/smediansorted]: https://github.com/stdlib-js/stats-base-smediansorted

[@stdlib/stats/base/smidrange]: https://github.com/stdlib-js/stats-base-smidrange

[@stdlib/stats/base/smin]: https://github.com/stdlib-js/stats-base-smin

[@stdlib/stats/base/sminabs]: https://github.com/stdlib-js/stats-base-sminabs

[@stdlib/stats/base/sminsorted]: https://github.com/stdlib-js/stats-base-sminsorted

[@stdlib/stats/base/smskmax]: https://github.com/stdlib-js/stats-base-smskmax

[@stdlib/stats/base/smskmin]: https://github.com/stdlib-js/stats-base-smskmin

[@stdlib/stats/base/smskrange]: https://github.com/stdlib-js/stats-base-smskrange

[@stdlib/stats/base/snanmax]: https://github.com/stdlib-js/stats-base-snanmax

[@stdlib/stats/base/snanmaxabs]: https://github.com/stdlib-js/stats-base-snanmaxabs

[@stdlib/stats/base/snanmean]: https://github.com/stdlib-js/stats-base-snanmean

[@stdlib/stats/base/snanmeanors]: https://github.com/stdlib-js/stats-base-snanmeanors

[@stdlib/stats/base/snanmeanpn]: https://github.com/stdlib-js/stats-base-snanmeanpn

[@stdlib/stats/base/snanmeanwd]: https://github.com/stdlib-js/stats-base-snanmeanwd

[@stdlib/stats/base/snanmin]: https://github.com/stdlib-js/stats-base-snanmin

[@stdlib/stats/base/snanminabs]: https://github.com/stdlib-js/stats-base-snanminabs

[@stdlib/stats/base/snanmskmax]: https://github.com/stdlib-js/stats-base-snanmskmax

[@stdlib/stats/base/snanmskmin]: https://github.com/stdlib-js/stats-base-snanmskmin

[@stdlib/stats/base/snanmskrange]: https://github.com/stdlib-js/stats-base-snanmskrange

[@stdlib/stats/base/snanrange]: https://github.com/stdlib-js/stats-base-snanrange

[@stdlib/stats/base/snanstdev]: https://github.com/stdlib-js/stats-base-snanstdev

[@stdlib/stats/base/snanstdevch]: https://github.com/stdlib-js/stats-base-snanstdevch

[@stdlib/stats/base/snanstdevpn]: https://github.com/stdlib-js/stats-base-snanstdevpn

[@stdlib/stats/base/snanstdevtk]: https://github.com/stdlib-js/stats-base-snanstdevtk

[@stdlib/stats/base/snanstdevwd]: https://github.com/stdlib-js/stats-base-snanstdevwd

[@stdlib/stats/base/snanstdevyc]: https://github.com/stdlib-js/stats-base-snanstdevyc

[@stdlib/stats/base/snanvariance]: https://github.com/stdlib-js/stats-base-snanvariance

[@stdlib/stats/base/snanvariancech]: https://github.com/stdlib-js/stats-base-snanvariancech

[@stdlib/stats/base/snanvariancepn]: https://github.com/stdlib-js/stats-base-snanvariancepn

[@stdlib/stats/base/snanvariancetk]: https://github.com/stdlib-js/stats-base-snanvariancetk

[@stdlib/stats/base/snanvariancewd]: https://github.com/stdlib-js/stats-base-snanvariancewd

[@stdlib/stats/base/snanvarianceyc]: https://github.com/stdlib-js/stats-base-snanvarianceyc

[@stdlib/stats/base/srange]: https://github.com/stdlib-js/stats-base-srange

[@stdlib/stats/base/sstdev]: https://github.com/stdlib-js/stats-base-sstdev

[@stdlib/stats/base/sstdevch]: https://github.com/stdlib-js/stats-base-sstdevch

[@stdlib/stats/base/sstdevpn]: https://github.com/stdlib-js/stats-base-sstdevpn

[@stdlib/stats/base/sstdevtk]: https://github.com/stdlib-js/stats-base-sstdevtk

[@stdlib/stats/base/sstdevwd]: https://github.com/stdlib-js/stats-base-sstdevwd

[@stdlib/stats/base/sstdevyc]: https://github.com/stdlib-js/stats-base-sstdevyc

[@stdlib/stats/base/stdev]: https://github.com/stdlib-js/stats-base-stdev

[@stdlib/stats/base/stdevch]: https://github.com/stdlib-js/stats-base-stdevch

[@stdlib/stats/base/stdevpn]: https://github.com/stdlib-js/stats-base-stdevpn

[@stdlib/stats/base/stdevtk]: https://github.com/stdlib-js/stats-base-stdevtk

[@stdlib/stats/base/stdevwd]: https://github.com/stdlib-js/stats-base-stdevwd

[@stdlib/stats/base/stdevyc]: https://github.com/stdlib-js/stats-base-stdevyc

[@stdlib/stats/base/svariance]: https://github.com/stdlib-js/stats-base-svariance

[@stdlib/stats/base/svariancech]: https://github.com/stdlib-js/stats-base-svariancech

[@stdlib/stats/base/svariancepn]: https://github.com/stdlib-js/stats-base-svariancepn

[@stdlib/stats/base/svariancetk]: https://github.com/stdlib-js/stats-base-svariancetk

[@stdlib/stats/base/svariancewd]: https://github.com/stdlib-js/stats-base-svariancewd

[@stdlib/stats/base/svarianceyc]: https://github.com/stdlib-js/stats-base-svarianceyc

[@stdlib/stats/base/variance]: https://github.com/stdlib-js/stats-base-variance

[@stdlib/stats/base/variancech]: https://github.com/stdlib-js/stats-base-variancech

[@stdlib/stats/base/variancepn]: https://github.com/stdlib-js/stats-base-variancepn

[@stdlib/stats/base/variancetk]: https://github.com/stdlib-js/stats-base-variancetk

[@stdlib/stats/base/variancewd]: https://github.com/stdlib-js/stats-base-variancewd

[@stdlib/stats/base/varianceyc]: https://github.com/stdlib-js/stats-base-varianceyc

[@stdlib/stats/base/dists]: https://github.com/stdlib-js/stats-base-dists

<!-- </toc-links> -->

</section>

<!-- /.links -->
