(function(app){

	class Ticker
	{
		constructor(Physics, world) {
			this.Physics = Physics;
			this.world = world;
		}

        start() {
            this.Physics.util.ticker.on(function(time) {
    			this.world.step(time);
            });
            this.Physics.util.ticker.start();
        }
	}

	app.service("ticker", Ticker);

}(angular.module("pong")));