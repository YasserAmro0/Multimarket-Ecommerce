import * as Yup from 'yup';

const reviewsSchema = Yup.object().shape({
    comment: Yup.string().required('required comment ')
        .max(400, 'Comment must not exceed 400 characters'),
    rating: Yup.number()
        .min(0, 'Rating must be at least 0')
        .max(5, 'Rating must be at most 5')

});
export default reviewsSchema;