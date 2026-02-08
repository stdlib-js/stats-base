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



<section class="usage">

## Usage

```javascript
import stats from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/stats-base/tags). For example,

```javascript
import stats from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base@v0.4.1-deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { cumax, cumaxabs, cumin, cuminabs, dists, dmeankbn2, dmeanli, dmeanlipw, dmeanors, dmeanpw, dmeanwd, dmediansorted, dmidrange, dmin, dminabs, dminsorted, dnanmax, dnanmaxabs, ndarray, sdsnanmean, snanstdev, snanstdevch, snanstdevpn, snanstdevtk, snanstdevwd, snanstdevyc, snanvariance, snanvariancech, snanvariancepn, snanvariancetk, snanvariancewd, snanvarianceyc } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base@deno/mod.js';
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
-   <span class="signature">[`ndarray`][@stdlib/stats/base/ndarray]</span><span class="delimiter">: </span><span class="description">base ndarray statistical functions.</span>
-   <span class="signature">[`sdsnanmean( N, x, stride )`][@stdlib/stats/base/sdsnanmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values and using extended accumulation.</span>
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
import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@deno/mod.js';
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base@deno/mod.js';

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

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base

[test-image]: https://github.com/stdlib-js/stats-base/actions/workflows/test.yml/badge.svg?branch=v0.4.1
[test-url]: https://github.com/stdlib-js/stats-base/actions/workflows/test.yml?query=branch:v0.4.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

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

[@stdlib/stats/base/cumax]: https://github.com/stdlib-js/stats-base-cumax/tree/deno

[@stdlib/stats/base/cumaxabs]: https://github.com/stdlib-js/stats-base-cumaxabs/tree/deno

[@stdlib/stats/base/cumin]: https://github.com/stdlib-js/stats-base-cumin/tree/deno

[@stdlib/stats/base/cuminabs]: https://github.com/stdlib-js/stats-base-cuminabs/tree/deno

[@stdlib/stats/base/ndarray]: https://github.com/stdlib-js/stats-base-ndarray/tree/deno

[@stdlib/stats/base/sdsnanmean]: https://github.com/stdlib-js/stats-base-sdsnanmean/tree/deno

[@stdlib/stats/base/snanstdev]: https://github.com/stdlib-js/stats-base-snanstdev/tree/deno

[@stdlib/stats/base/snanstdevch]: https://github.com/stdlib-js/stats-base-snanstdevch/tree/deno

[@stdlib/stats/base/snanstdevpn]: https://github.com/stdlib-js/stats-base-snanstdevpn/tree/deno

[@stdlib/stats/base/snanstdevtk]: https://github.com/stdlib-js/stats-base-snanstdevtk/tree/deno

[@stdlib/stats/base/snanstdevwd]: https://github.com/stdlib-js/stats-base-snanstdevwd/tree/deno

[@stdlib/stats/base/snanstdevyc]: https://github.com/stdlib-js/stats-base-snanstdevyc/tree/deno

[@stdlib/stats/base/snanvariance]: https://github.com/stdlib-js/stats-base-snanvariance/tree/deno

[@stdlib/stats/base/snanvariancech]: https://github.com/stdlib-js/stats-base-snanvariancech/tree/deno

[@stdlib/stats/base/snanvariancepn]: https://github.com/stdlib-js/stats-base-snanvariancepn/tree/deno

[@stdlib/stats/base/snanvariancetk]: https://github.com/stdlib-js/stats-base-snanvariancetk/tree/deno

[@stdlib/stats/base/snanvariancewd]: https://github.com/stdlib-js/stats-base-snanvariancewd/tree/deno

[@stdlib/stats/base/snanvarianceyc]: https://github.com/stdlib-js/stats-base-snanvarianceyc/tree/deno

[@stdlib/stats/base/dists]: https://github.com/stdlib-js/stats-base-dists/tree/deno

<!-- </toc-links> -->

</section>

<!-- /.links -->
