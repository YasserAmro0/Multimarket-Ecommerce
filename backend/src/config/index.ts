import dotenv from 'dotenv';

dotenv.config();

const { PORT = 8000, SECRET_KEY  } = process.env;

interface ICONFIG {
    PORT: string | number,
    SECRET_KEY:String | undefined,

}

const config: ICONFIG = {
    PORT,
    SECRET_KEY,
}

export default config;
