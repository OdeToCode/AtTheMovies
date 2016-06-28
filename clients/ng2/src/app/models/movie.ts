export class Movie {
	constructor(id:number, title: string, length: number, rating: number) {
		this.id = id;
		this.title = title;
		this.length = length;
		this.rating = rating;
	}

	get isGood() {
		return this.rating > 4;
	}

	get isBad() {
		return this.rating < 2;
	}

	increaseRating() {
		if(this.rating < 5) {
			this.rating += 1;
		} else {	
			this.rating = 1;
		}
	}
	
	decreaseRating() {
		if(this.rating > 1) {
			this.rating -=1;
		} else {		
			this.rating = 5;
		}
	}

	id: number;
	title: string;
	length: number;
	rating: number;
}