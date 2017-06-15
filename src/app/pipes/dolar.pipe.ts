import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'dolar'
})
export class DolarPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if (args === 'EURO') {
            return 'EU ' + value;
        } else {
            return '$ ' + value;
        }

    }

}
