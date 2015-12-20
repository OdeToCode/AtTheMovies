let instanceCount = 0;
let generateId = () => instanceCount += 1;

export class Movie {
	constructor(title: string, length: number, year: number, rating: number) {
		this.id = generateId();
		this.title = title;
		this.length = length;
		this.year = year;
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
	year: number;
	rating: number;

}