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

// export const fetchProduct = ({ search, minPrice, maxPrice, selectedCategory }: FilterShop) => {
//     const res = await Axios.get(`
//     http://localhost:8001/api/v1/product?q=${search}&filterCategory=${selectedCategory}&minPrice=${minPrice}&maxPrice=${maxPrice}
//     `);
//     console.log(res.data);
//     return res.data;
// }
