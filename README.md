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
-   <span class="signature">[`nanmskmax( N, x, strideX, mask, strideMask )`][@stdlib/stats/strided/nanmskmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a strided array according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmskmin( N, x, strideX, mask, strideMask )`][@stdlib/stats/strided/nanmskmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a strided array according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmskrange( N, x, strideX, mask, strideMask )`][@stdlib/stats/strided/nanmskrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a strided array according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`nanrangeBy( N, x, stride, clbk[, thisArg] )`][@stdlib/stats/strided/nanrange-by]</span><span class="delimiter">: </span><span class="description">calculate the range of a strided array via a callback function, ignoring `NaN` values.</span>
-   <span class="signature">[`nanrange( N, x, strideX )`][@stdlib/stats/strided/nanrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`nanstdev( N, correction, x, strideX )`][@stdlib/stats/strided/nanstdev]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array ignoring `NaN` values.</span>
-   <span class="signature">[`nanstdevch( N, correction, x, stride )`][@stdlib/stats/strided/nanstdevch]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array ignoring `NaN` values and using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`nanstdevpn( N, correction, x, strideX )`][@stdlib/stats/strided/nanstdevpn]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array ignoring `NaN` values and using a two-pass algorithm.</span>
-   <span class="signature">[`nanstdevtk( N, correction, x, stride )`][@stdlib/stats/strided/nanstdevtk]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array ignoring `NaN` values and using a one-pass textbook algorithm.</span>
-   <span class="signature">[`nanstdevwd( N, correction, x, stride )`][@stdlib/stats/strided/nanstdevwd]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array ignoring `NaN` values and using Welford's algorithm.</span>
-   <span class="signature">[`nanstdevyc( N, correction, x, strideX )`][@stdlib/stats/strided/nanstdevyc]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array ignoring `NaN` values and using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`nanvariance( N, correction, x, strideX )`][@stdlib/stats/strided/nanvariance]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array ignoring `NaN` values.</span>
-   <span class="signature">[`nanvariancech( N, correction, x, strideX )`][@stdlib/stats/strided/nanvariancech]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array ignoring `NaN` values and using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`nanvariancepn( N, correction, x, strideX )`][@stdlib/stats/strided/nanvariancepn]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array ignoring `NaN` values and using a two-pass algorithm.</span>
-   <span class="signature">[`nanvariancetk( N, correction, x, strideX )`][@stdlib/stats/strided/nanvariancetk]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array ignoring `NaN` values and using a one-pass textbook algorithm.</span>
-   <span class="signature">[`nanvariancewd( N, correction, x, strideX )`][@stdlib/stats/strided/nanvariancewd]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array ignoring `NaN` values and using Welford's algorithm.</span>
-   <span class="signature">[`nanvarianceyc( N, correction, x, strideX )`][@stdlib/stats/strided/nanvarianceyc]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array ignoring `NaN` values and using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`ndarray`][@stdlib/stats/base/ndarray]</span><span class="delimiter">: </span><span class="description">base ndarray statistical functions.</span>
-   <span class="signature">[`rangeBy( N, x, stride, clbk[, thisArg] )`][@stdlib/stats/strided/range-by]</span><span class="delimiter">: </span><span class="description">calculate the range of a strided array via a callback function.</span>
-   <span class="signature">[`range( N, x, strideX )`][@stdlib/stats/strided/range]</span><span class="delimiter">: </span><span class="description">calculate the range of a strided array.</span>
-   <span class="signature">[`sdsnanmean( N, x, stride )`][@stdlib/stats/base/sdsnanmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values and using extended accumulation.</span>
-   <span class="signature">[`sdsnanmeanors( N, x, stride )`][@stdlib/stats/base/sdsnanmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values and using ordinary recursive summation with extended accumulation.</span>
-   <span class="signature">[`smeankbn( N, x, stride )`][@stdlib/stats/strided/smeankbn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`smeankbn2( N, x, stride )`][@stdlib/stats/strided/smeankbn2]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`smeanlipw( N, x, stride )`][@stdlib/stats/strided/smeanlipw]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using a one-pass trial mean algorithm with pairwise summation.</span>
-   <span class="signature">[`smeanors( N, x, stride )`][@stdlib/stats/strided/smeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using ordinary recursive summation.</span>
-   <span class="signature">[`snanmean( N, x, stride )`][@stdlib/stats/base/snanmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values.</span>
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
-   <span class="signature">[`sstdevwd( N, correction, x, stride )`][@stdlib/stats/base/sstdevwd]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a single-precision floating-point strided array using Welford's algorithm.</span>
-   <span class="signature">[`stdev( N, correction, x, strideX )`][@stdlib/stats/strided/stdev]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array.</span>
-   <span class="signature">[`stdevch( N, correction, x, strideX )`][@stdlib/stats/strided/stdevch]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`stdevpn( N, correction, x, strideX )`][@stdlib/stats/strided/stdevpn]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array using a two-pass algorithm.</span>
-   <span class="signature">[`stdevtk( N, correction, x, stride )`][@stdlib/stats/strided/stdevtk]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array using a one-pass textbook algorithm.</span>
-   <span class="signature">[`stdevwd( N, correction, x, stride )`][@stdlib/stats/strided/stdevwd]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array using Welford's algorithm.</span>
-   <span class="signature">[`stdevyc( N, correction, x, stride )`][@stdlib/stats/strided/stdevyc]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`variance( N, correction, x, strideX )`][@stdlib/stats/strided/variance]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array.</span>
-   <span class="signature">[`variancech( N, correction, x, strideX )`][@stdlib/stats/strided/variancech]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`variancepn( N, correction, x, strideX )`][@stdlib/stats/strided/variancepn]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array using a two-pass algorithm.</span>
-   <span class="signature">[`variancetk( N, correction, x, strideX )`][@stdlib/stats/strided/variancetk]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array using a one-pass textbook algorithm.</span>
-   <span class="signature">[`variancewd( N, correction, x, stride )`][@stdlib/stats/strided/variancewd]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array using Welford's algorithm.</span>
-   <span class="signature">[`varianceyc( N, correction, x, strideX )`][@stdlib/stats/strided/varianceyc]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array using a one-pass algorithm proposed by Youngs and Cramer.</span>

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

[@stdlib/stats/strided/nanmskmax]: https://github.com/stdlib-js/stats-strided-nanmskmax

[@stdlib/stats/strided/nanmskmin]: https://github.com/stdlib-js/stats-strided-nanmskmin

[@stdlib/stats/strided/nanmskrange]: https://github.com/stdlib-js/stats-strided-nanmskrange

[@stdlib/stats/strided/nanrange-by]: https://github.com/stdlib-js/stats-strided-nanrange-by

[@stdlib/stats/strided/nanrange]: https://github.com/stdlib-js/stats-strided-nanrange

[@stdlib/stats/strided/nanstdev]: https://github.com/stdlib-js/stats-strided-nanstdev

[@stdlib/stats/strided/nanstdevch]: https://github.com/stdlib-js/stats-strided-nanstdevch

[@stdlib/stats/strided/nanstdevpn]: https://github.com/stdlib-js/stats-strided-nanstdevpn

[@stdlib/stats/strided/nanstdevtk]: https://github.com/stdlib-js/stats-strided-nanstdevtk

[@stdlib/stats/strided/nanstdevwd]: https://github.com/stdlib-js/stats-strided-nanstdevwd

[@stdlib/stats/strided/nanstdevyc]: https://github.com/stdlib-js/stats-strided-nanstdevyc

[@stdlib/stats/strided/nanvariance]: https://github.com/stdlib-js/stats-strided-nanvariance

[@stdlib/stats/strided/nanvariancech]: https://github.com/stdlib-js/stats-strided-nanvariancech

[@stdlib/stats/strided/nanvariancepn]: https://github.com/stdlib-js/stats-strided-nanvariancepn

[@stdlib/stats/strided/nanvariancetk]: https://github.com/stdlib-js/stats-strided-nanvariancetk

[@stdlib/stats/strided/nanvariancewd]: https://github.com/stdlib-js/stats-strided-nanvariancewd

[@stdlib/stats/strided/nanvarianceyc]: https://github.com/stdlib-js/stats-strided-nanvarianceyc

[@stdlib/stats/base/ndarray]: https://github.com/stdlib-js/stats-base-ndarray

[@stdlib/stats/strided/range-by]: https://github.com/stdlib-js/stats-strided-range-by

[@stdlib/stats/strided/range]: https://github.com/stdlib-js/stats-strided-range

[@stdlib/stats/base/sdsnanmean]: https://github.com/stdlib-js/stats-base-sdsnanmean

[@stdlib/stats/base/sdsnanmeanors]: https://github.com/stdlib-js/stats-base-sdsnanmeanors

[@stdlib/stats/strided/smeankbn]: https://github.com/stdlib-js/stats-strided-smeankbn

[@stdlib/stats/strided/smeankbn2]: https://github.com/stdlib-js/stats-strided-smeankbn2

[@stdlib/stats/strided/smeanlipw]: https://github.com/stdlib-js/stats-strided-smeanlipw

[@stdlib/stats/strided/smeanors]: https://github.com/stdlib-js/stats-strided-smeanors

[@stdlib/stats/base/snanmean]: https://github.com/stdlib-js/stats-base-snanmean

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

[@stdlib/stats/base/sstdevwd]: https://github.com/stdlib-js/stats-base-sstdevwd

[@stdlib/stats/strided/stdev]: https://github.com/stdlib-js/stats-strided-stdev

[@stdlib/stats/strided/stdevch]: https://github.com/stdlib-js/stats-strided-stdevch

[@stdlib/stats/strided/stdevpn]: https://github.com/stdlib-js/stats-strided-stdevpn

[@stdlib/stats/strided/stdevtk]: https://github.com/stdlib-js/stats-strided-stdevtk

[@stdlib/stats/strided/stdevwd]: https://github.com/stdlib-js/stats-strided-stdevwd

[@stdlib/stats/strided/stdevyc]: https://github.com/stdlib-js/stats-strided-stdevyc

[@stdlib/stats/strided/variance]: https://github.com/stdlib-js/stats-strided-variance

[@stdlib/stats/strided/variancech]: https://github.com/stdlib-js/stats-strided-variancech

[@stdlib/stats/strided/variancepn]: https://github.com/stdlib-js/stats-strided-variancepn

[@stdlib/stats/strided/variancetk]: https://github.com/stdlib-js/stats-strided-variancetk

[@stdlib/stats/strided/variancewd]: https://github.com/stdlib-js/stats-strided-variancewd

[@stdlib/stats/strided/varianceyc]: https://github.com/stdlib-js/stats-strided-varianceyc

[@stdlib/stats/base/dists]: https://github.com/stdlib-js/stats-base-dists

<!-- </toc-links> -->

</section>

<!-- /.links -->
