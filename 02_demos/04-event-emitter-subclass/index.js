const Ticker = require( './ticker' );

const ticker = new Ticker( 10, 20 );

ticker.on( 'data', function( data ) {
    console.log( 'data = ', data );
});