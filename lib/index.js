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

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name cumax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/cumax}
*/
setReadOnly( ns, 'cumax', require( '@stdlib/stats-base-cumax' ) );

/**
* @name cumaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/cumaxabs}
*/
setReadOnly( ns, 'cumaxabs', require( '@stdlib/stats-base-cumaxabs' ) );

/**
* @name cumin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/cumin}
*/
setReadOnly( ns, 'cumin', require( '@stdlib/stats-base-cumin' ) );

/**
* @name cuminabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/cuminabs}
*/
setReadOnly( ns, 'cuminabs', require( '@stdlib/stats-base-cuminabs' ) );

/**
* @name dists
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats/base/dists}
*/
setReadOnly( ns, 'dists', require( '@stdlib/stats-base-dists' ) );

/**
* @name ndarray
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats/base/ndarray}
*/
setReadOnly( ns, 'ndarray', require( '@stdlib/stats-base-ndarray' ) );

/**
* @name sdsnanmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/sdsnanmean}
*/
setReadOnly( ns, 'sdsnanmean', require( '@stdlib/stats-base-sdsnanmean' ) );

/**
* @name sdsnanmeanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/sdsnanmeanors}
*/
setReadOnly( ns, 'sdsnanmeanors', require( '@stdlib/stats-base-sdsnanmeanors' ) );

/**
* @name snanmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanmean}
*/
setReadOnly( ns, 'snanmean', require( '@stdlib/stats-base-snanmean' ) );

/**
* @name snanstdev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanstdev}
*/
setReadOnly( ns, 'snanstdev', require( '@stdlib/stats-base-snanstdev' ) );

/**
* @name snanstdevch
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanstdevch}
*/
setReadOnly( ns, 'snanstdevch', require( '@stdlib/stats-base-snanstdevch' ) );

/**
* @name snanstdevpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanstdevpn}
*/
setReadOnly( ns, 'snanstdevpn', require( '@stdlib/stats-base-snanstdevpn' ) );

/**
* @name snanstdevtk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanstdevtk}
*/
setReadOnly( ns, 'snanstdevtk', require( '@stdlib/stats-base-snanstdevtk' ) );

/**
* @name snanstdevwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanstdevwd}
*/
setReadOnly( ns, 'snanstdevwd', require( '@stdlib/stats-base-snanstdevwd' ) );

/**
* @name snanstdevyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanstdevyc}
*/
setReadOnly( ns, 'snanstdevyc', require( '@stdlib/stats-base-snanstdevyc' ) );

/**
* @name snanvariance
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanvariance}
*/
setReadOnly( ns, 'snanvariance', require( '@stdlib/stats-base-snanvariance' ) );

/**
* @name snanvariancech
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanvariancech}
*/
setReadOnly( ns, 'snanvariancech', require( '@stdlib/stats-base-snanvariancech' ) );

/**
* @name snanvariancepn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanvariancepn}
*/
setReadOnly( ns, 'snanvariancepn', require( '@stdlib/stats-base-snanvariancepn' ) );

/**
* @name snanvariancetk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanvariancetk}
*/
setReadOnly( ns, 'snanvariancetk', require( '@stdlib/stats-base-snanvariancetk' ) );

/**
* @name snanvariancewd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanvariancewd}
*/
setReadOnly( ns, 'snanvariancewd', require( '@stdlib/stats-base-snanvariancewd' ) );

/**
* @name snanvarianceyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanvarianceyc}
*/
setReadOnly( ns, 'snanvarianceyc', require( '@stdlib/stats-base-snanvarianceyc' ) );

/**
* @name sstdevwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/sstdevwd}
*/
setReadOnly( ns, 'sstdevwd', require( '@stdlib/stats-base-sstdevwd' ) );

/**
* @name dmeankbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmeankbn2}
*/
setReadOnly( ns, 'dmeankbn2', require( '@stdlib/stats-strided-dmeankbn2' ) );

/**
* @name dmeanli
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmeanli}
*/
setReadOnly( ns, 'dmeanli', require( '@stdlib/stats-strided-dmeanli' ) );

/**
* @name dmeanlipw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmeanlipw}
*/
setReadOnly( ns, 'dmeanlipw', require( '@stdlib/stats-strided-dmeanlipw' ) );

/**
* @name dmeanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmeanors}
*/
setReadOnly( ns, 'dmeanors', require( '@stdlib/stats-strided-dmeanors' ) );

/**
* @name dmeanpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmeanpw}
*/
setReadOnly( ns, 'dmeanpw', require( '@stdlib/stats-strided-dmeanpw' ) );

/**
* @name dmeanwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmeanwd}
*/
setReadOnly( ns, 'dmeanwd', require( '@stdlib/stats-strided-dmeanwd' ) );

/**
* @name dmediansorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmediansorted}
*/
setReadOnly( ns, 'dmediansorted', require( '@stdlib/stats-strided-dmediansorted' ) );

/**
* @name dmidrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmidrange}
*/
setReadOnly( ns, 'dmidrange', require( '@stdlib/stats-strided-dmidrange' ) );

/**
* @name dmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmin}
*/
setReadOnly( ns, 'dmin', require( '@stdlib/stats-strided-dmin' ) );

/**
* @name dminabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dminabs}
*/
setReadOnly( ns, 'dminabs', require( '@stdlib/stats-strided-dminabs' ) );

/**
* @name dminsorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dminsorted}
*/
setReadOnly( ns, 'dminsorted', require( '@stdlib/stats-strided-dminsorted' ) );

/**
* @name dnanmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanmax}
*/
setReadOnly( ns, 'dnanmax', require( '@stdlib/stats-strided-dnanmax' ) );

/**
* @name dnanmaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanmaxabs}
*/
setReadOnly( ns, 'dnanmaxabs', require( '@stdlib/stats-strided-dnanmaxabs' ) );


// EXPORTS //

module.exports = ns;
