/**
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

/* eslint-disable no-empty-function */

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var isBoolean = require( '@stdlib/assert-is-boolean' ).isPrimitive;
var pkg = require( './../package.json' ).name;
var isSameNativeClass = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var bool;
	var x;
	var y;
	var i;

	values = [
		'',
		'5',
		0,
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		new RegExp( '.*' ), // eslint-disable-line prefer-regex-literals
		new Date(),
		function noop() {},
		new Error( 'beep' ),
		new RangeError( 'boop' ),
		new EvalError( 'baz' ),
		new ReferenceError( 'foo' ),
		new SyntaxError( 'bar' )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = values[ i%values.length ];
		y = values[ (i+1)%values.length ];
		bool = isSameNativeClass( x, y );
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
