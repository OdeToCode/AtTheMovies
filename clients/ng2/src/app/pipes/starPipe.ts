import {Pipe, PipeTransform} from "@angular/core";
	
@Pipe({name:"stars"})
export class StarPipe implements PipeTransform
{
	transform(value: number, args: string[]) {
		return "*".repeat(value);
	}
}