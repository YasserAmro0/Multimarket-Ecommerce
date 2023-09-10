import * as Yup from 'yup';

const productSchema = Yup.object().shape({
    title: Yup.string().required('title is required'),
    price: Yup.number()
        .positive('Price must be a positive number')
        .max(10000, 'Price must not exceed 1000')
        .required('Price is required'),
    description: Yup.string().required('description is required'),
    shortDescription: Yup.string()
        .max(500, 'Short Description must not exceed 500 characters')
        .required('shortDescription is required'),
    category: Yup.string()
        .required('Category is required')
        .oneOf(['chair', 'wireless', 'mobile', 'sofa'], 'Invalid category selection'),
    imageurl: Yup.string().required('image url is required'),

});

export default productSchema;