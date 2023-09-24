import dotenv from 'dotenv';

dotenv.config();

const {
    PORT = 8000,
    SECRET_KEY, CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET,
    AdminEmail,AdminPassword
} = process.env;

interface ICONFIG {
    PORT: string | number,
    SECRET_KEY: String | undefined,
    CLOUDINARY_CLOUD_NAME: string |undefined,
    CLOUDINARY_API_KEY: string | undefined,
    CLOUDINARY_API_SECRET: string | undefined,
    AdminEmail: string | undefined,
    AdminPassword:string | undefined,


}

const config: ICONFIG = {
    PORT,
    SECRET_KEY,
    CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET,
    AdminPassword,
    AdminEmail,
}

export default config;
