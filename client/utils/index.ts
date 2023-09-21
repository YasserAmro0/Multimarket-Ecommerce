import moment from 'moment';
import axiosInstance from './api/axios';

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


export const HeadersforProducts = [
    {
        title: 'Image',
    },
    {
        title: 'Title',
    },
    {
        title: 'Price',
    },
    {
        title: 'Category',
    },
    {
        title: 'Action',
    }
];

export const HeadersforReviewers = [
    {
        title: 'Name',
    },
    {
        title: 'Image Product',
    },
    {
        title: 'Rating',
    },
    {
        title: 'comment',
    },
    {
        title: 'Action',
    }

];
