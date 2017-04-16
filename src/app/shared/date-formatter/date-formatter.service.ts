import {Injectable} from "@angular/core";
import * as moment from 'moment';
import {IDepartureDate} from "../../models/departure-date";

@Injectable()
export class DateFormatterService {

    private TIME_FORMAT = 'HH:mm';
    private DATE_FORMAT = 'DD.MM.YY';

    public formatForApi(date: Date): IDepartureDate {
        const rawDate = moment(date);
        const formattedDate = rawDate.format(this.DATE_FORMAT);
        const formattedTime = rawDate.format(this.TIME_FORMAT);

        return {
            date: formattedDate,
            time: formattedTime
        };
    }

}
