<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# isSameNativeClass

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if two arguments have the same native class.

<section class="installation">

## Installation

```bash
npm install @stdlib/assert-is-same-native-class
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
var isSameNativeClass = require( '@stdlib/assert-is-same-native-class' );
```

#### isSameNativeClass( a, b )

Tests if two arguments `a` and `b` have the same [native class][@stdlib/utils/native-class].

```javascript
var bool = isSameNativeClass( 'beep', 'boop' );
// returns true

bool = isSameNativeClass( [], {} );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable no-new-wrappers -->

<!-- eslint no-undef: "error" -->

```javascript
var Number = require( '@stdlib/number-ctor' );
var isSameNativeClass = require( '@stdlib/assert-is-same-native-class' );

var bool = isSameNativeClass( 3.14, new Number( 3.14 ) );
// returns true

bool = isSameNativeClass( 'beep', 'boop' );
// returns true

bool = isSameNativeClass( new TypeError( 'beep' ), new RangeError( 'boop' ) );
// returns true

bool = isSameNativeClass( [], {} );
// returns false

bool = isSameNativeClass( null, void 0 );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert-is-same-type`][@stdlib/assert/is-same-type]</span><span class="delimiter">: </span><span class="description">test if two arguments have the same type.</span>
-   <span class="package-name">[`@stdlib/assert-is-same-value`][@stdlib/assert/is-same-value]</span><span class="delimiter">: </span><span class="description">test if two arguments are the same value.</span>
-   <span class="package-name">[`@stdlib/assert-is-strict-equal`][@stdlib/assert/is-strict-equal]</span><span class="delimiter">: </span><span class="description">test if two arguments are strictly equal.</span>

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

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-same-native-class.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-same-native-class

[test-image]: https://github.com/stdlib-js/assert-is-same-native-class/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-is-same-native-class/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-same-native-class/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-same-native-class?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-same-native-class.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-same-native-class/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-same-native-class/tree/deno
[deno-readme]: https://github.com/stdlib-js/assert-is-same-native-class/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/assert-is-same-native-class/tree/umd
[umd-readme]: https://github.com/stdlib-js/assert-is-same-native-class/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/assert-is-same-native-class/tree/esm
[esm-readme]: https://github.com/stdlib-js/assert-is-same-native-class/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/assert-is-same-native-class/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-same-native-class/main/LICENSE

[@stdlib/utils/native-class]: https://github.com/stdlib-js/utils-native-class

<!-- <related-links> -->

[@stdlib/assert/is-same-type]: https://github.com/stdlib-js/assert-is-same-type

[@stdlib/assert/is-same-value]: https://github.com/stdlib-js/assert-is-same-value

[@stdlib/assert/is-strict-equal]: https://github.com/stdlib-js/assert-is-strict-equal

<!-- </related-links> -->

</section>

<!-- /.links -->
