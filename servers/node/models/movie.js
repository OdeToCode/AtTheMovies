var Movie = function(id, title, rating, year){
	this.id = id || 0;
	this.title = title || "";
	this.rating = rating || 1;
	this.year = year || 1900;
};

Movie.prototype = {

	validate: function() {
		var errors = [];

		if(parseInt(this.id) < 0){
			result.errors.push({id: "ID must be a positive integer"});
		}
		
		if(!title){
			result.errors.push({title: "Title is required"});
		}
		
		var rating = parseInt(this.rating);
		if(rating < 1 || rating > 5){
			result.errors.push({rating: "Rating must be between 1 and 5"});
		}

		var year = parseInt(this.year);
		if(year < 1800 || year > 2100){
			result.errors.push({year: "Year must be between 1800 and 2100"});
		}		

		return result;
	}
};

module.exports = Movie;