
	import {Pipe, PipeTransform} from "angular2/core";
	
	@Pipe({name:"stars"})
	export class StarPipe implements PipeTransform
	{
		transform(value: number, args: string[]) {
			return "*".repeat(value);
		}
	}
	
