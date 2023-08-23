import moment from 'moment';

export const getTimeLeft = (targetDate: moment.Moment) => {
    const now = moment();
    const duration = moment.duration(targetDate.diff(now));

    return {
        days: duration.days(),
        hours: duration.hours(),
        minutes: duration.minutes(),
        seconds: duration.seconds()
    };
};