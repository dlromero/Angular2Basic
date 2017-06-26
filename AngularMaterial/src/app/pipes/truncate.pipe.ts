import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "truncate"
})
export class TruncatePipe implements PipeTransform {
    transform(value: string, limit: string): string {
        let lLimit = parseInt(limit);
        return value.length > lLimit ? value.substring(0, lLimit) + "..." : value;
    }
}