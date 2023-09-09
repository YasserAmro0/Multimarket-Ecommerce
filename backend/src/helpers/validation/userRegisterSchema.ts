import * as Yup from 'yup';

const userSignupSchema = Yup.object().shape({
    username: Yup.string().required('username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters long'),
});

const userLoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters long'),
})
export { userSignupSchema, userLoginSchema };

