import {Directive, Input, ElementRef, Renderer} from "@angular/core";

@Directive({
	selector: "[high-light]",
	host: {
		"(mouseenter)": "onMouseEnter()",
		"(mouseleave)": "onMouseLeave()"
	}
})
export class HighLight {

	@Input("high-light") color: string;
	
	constructor(private element: ElementRef, private renderer: Renderer) {
		
	}
	
	onMouseEnter() {
		this.renderer.setElementStyle(this.element, "background-color", this.color);		
	}
	
	onMouseLeave() {
		this.renderer.setElementStyle(this.element, "background-color", null);
	}
	
}


