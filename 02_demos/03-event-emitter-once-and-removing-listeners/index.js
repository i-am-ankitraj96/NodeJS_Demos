const ticker = require( './ticker' );

function onData( tickerData ) {
    console.log( tickerData );
}

ticker.on( 'data', onData );

setTimeout( () => ticker.off( 'data', onData ), 5000 );

ticker.once( 'data', data => console.log( 'one time event listener : ' + data ) );