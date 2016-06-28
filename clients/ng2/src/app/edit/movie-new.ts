import {Component} from "@angular/core";
import {FORM_DIRECTIVES, ControlGroup, FormBuilder, 
	    NgForm, AbstractControl, Validators} from "@angular/common";


@Component({
	templateUrl: "/app/edit/movie-new.html",
	directives: [FORM_DIRECTIVES]
})
export class MovieNew {
	
	form: ControlGroup;
	title: AbstractControl;
	rating: AbstractControl;
	
	constructor(private formBuilder: FormBuilder) {
		
		let startsWithS = function(control: AbstractControl) {
			if(control.value && !control.value.match(/^S*/)) {
				return { invalidTitle: true}
			}
		}
		
		let movieTitleValidation = Validators.compose([
			Validators.required,
			startsWithS	
		])

		this.form = formBuilder.group({
			"title": ["Initial value", movieTitleValidation],
			"rating": [5]
		});
		this.title = this.form.controls["title"];
		this.rating = this.form.controls["rating"];		
		
		
		this.title.valueChanges.subscribe(value => console.log(value));	
		this.form.valueChanges.subscribe(value => console.log(value));
	}
	
	submit() {
		console.log(this.form);
	}	
}