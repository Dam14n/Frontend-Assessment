import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'creditCardNumber',
    standalone: true
})
export class CreditCardNumberPipe implements PipeTransform {

    transform(value: number, ...args: unknown[]): string {
        const asString = value.toString();
        return `**** ${asString.substring(asString.length - 4)}`;
    }

}