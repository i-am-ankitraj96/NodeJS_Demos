const EventEmitter = require( 'events' );

class Ticker extends EventEmitter {
    constructor( min, max  ) {
        super();
        
        this.min = min;
        this.max = max;

        setInterval(() => {
            this.emit( 'data', min + Math.random() * ( max - min ) );
        }, 1000);
    }
}

module.exports = Ticker;