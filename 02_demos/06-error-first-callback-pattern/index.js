const sum = ( x, y, callback ) => {
    if( typeof x !== 'number' || typeof y !== 'number' ) {
        callback( new Error( 'arguments to be added are not numbers' ) );
        return;
    }
    
    callback( null, x + y );
}

sum( 10, 20, ( error, result ) => {
    if( error ) {
        console.log( error.message );
        return;
    }

    console.log( 'result is ', result );
});

sum( 10, 'hello', ( error, result ) => {
    if( error ) {
        console.log( error.message );
        return;
    }

    console.log( 'result is ', result );
});