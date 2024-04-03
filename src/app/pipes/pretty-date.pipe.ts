import { Pipe, PipeTransform } from '@angular/core';
import moment from "moment";

@Pipe({
    name: 'prettyDate',
    standalone: true
})
export class PrettyDatePipe implements PipeTransform {

    transform(value: Date, ...args: unknown[]): null | string {
        const dateToFormat = moment(value);
        const today = moment().startOf('day');
        if (dateToFormat.isAfter(today)) {
            return "Today"
        }
        if (dateToFormat.isAfter(today.subtract(1, 'days'))) {
            return "Yesterday"
        }
        return dateToFormat.format('MMMM DD');
    }

}