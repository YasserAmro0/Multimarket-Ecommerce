import dotenv from 'dotenv';

dotenv.config();

const {
    PORT = 8000,
    SECRET_KEY, CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET
} = process.env;

interface ICONFIG {
    PORT: string | number,
    SECRET_KEY: String | undefined,
    CLOUDINARY_CLOUD_NAME: string |undefined,
    CLOUDINARY_API_KEY: string | undefined,
    CLOUDINARY_API_SECRET: string | undefined,

}

const config: ICONFIG = {
    PORT,
    SECRET_KEY,
    CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET,
}

export default config;
