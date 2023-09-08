import dotenv from 'dotenv';

dotenv.config();

const { PORT = 8000 } = process.env;

interface ICONFIG {
    PORT: string | number,
}

const config: ICONFIG = {
    PORT,
}

export default config;
